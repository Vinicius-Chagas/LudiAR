import { ExpoWebGLRenderingContext } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';

export default class ARScene {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: Renderer;
    private objects: Map<string, THREE.Mesh> = new Map();
    private animationId: number | null = null;
    private gl: ExpoWebGLRenderingContext;
    private qrCooldowns: Map<string, number> = new Map();
    private viewWidth: number;
    private viewHeight: number;
    private readonly MARKER_SIZE_M = 0.12;

    constructor(gl: ExpoWebGLRenderingContext) {
        this.gl = gl;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            60,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            0.01,
            100
        );

        this.renderer = new Renderer({ gl });
        this.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(1);

        this.viewWidth = gl.drawingBufferWidth;
        this.viewHeight = gl.drawingBufferHeight;

        this.setupLighting();
        this.camera.position.set(0, 0, 0);
        this.camera.lookAt(0, 0, -1);
        this.animate();
    }

    public updateViewportSize(width: number, height: number): void {
        if (!width || !height) {
            return;
        }
        this.viewWidth = width;
        this.viewHeight = height;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    private setupLighting(): void {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        this.scene.add(directionalLight);
    }

    private createCube(position: THREE.Vector3, qrId: string): THREE.Mesh {
        const geometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
        const material = new THREE.MeshLambertMaterial({
            color: this.getColorFromString(qrId),
            transparent: true,
            opacity: 0.9
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.copy(position);

        const existing = this.objects.get(qrId);
        if (existing) {
            this.scene.remove(existing);
            existing.geometry.dispose();
            if (existing.material instanceof THREE.Material) {
                existing.material.dispose();
            }
        }
        this.scene.add(cube);
        this.objects.set(qrId, cube);

        return cube;
    }

    private getColorFromString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash) % 360;
        return new THREE.Color().setHSL(hue / 360, 0.7, 0.6).getHex();
    }

    public placeObjectAtQR(qrData: string, bounds?: any): void {
        const key = this.normalizeKey(qrData);
        const now = Date.now();
        const last = this.qrCooldowns.get(key) || 0;
        if (now - last < 16) return;

        const corners = (bounds && (bounds.corners || bounds.cornerPoints)) ? (bounds.corners || bounds.cornerPoints) : null;
        if (corners && Array.isArray(corners) && corners.length >= 4) {
            const pose = this.computePoseFromCorners(corners);
            if (pose) {
                let mesh = this.objects.get(key);
                if (!mesh) {
                    mesh = this.createCube(new THREE.Vector3(), key);
                }
                const position = new THREE.Vector3();
                const quaternion = new THREE.Quaternion();
                const scale = new THREE.Vector3();
                pose.decompose(position, quaternion, scale);
                mesh.position.lerp(position, 0.5);
                mesh.quaternion.slerp(quaternion, 0.5);
                this.qrCooldowns.set(key, now);
                return;
            }
        }

        let mesh = this.objects.get(key);
        if (!mesh) {
            mesh = this.createCube(new THREE.Vector3(), key);
        }
        const targetPos = this.calculatePosition(key, bounds);
        mesh.position.lerp(targetPos, 0.5);
        this.qrCooldowns.set(key, now);
    }

    private calculatePosition(qrData: string, bounds?: any): THREE.Vector3 {
        if (bounds && bounds.origin && bounds.size) {
            const mappedCenter = this.mapPointToScreen({ x: bounds.origin.x + bounds.size.width / 2, y: bounds.origin.y + bounds.size.height / 2 });
            const screenX = mappedCenter.x;
            const screenY = mappedCenter.y;

            const ndcX = (screenX / this.viewWidth) * 2 - 1;
            const ndcY = -((screenY / this.viewHeight) * 2 - 1);

            const avgQRSize = (bounds.size.width + bounds.size.height) / 2;
            const screenSize = (this.viewWidth + this.viewHeight) / 2;
            const sizeRatio = Math.max(0.001, avgQRSize / Math.max(1, screenSize));
            const distance = Math.max(0.4, Math.min(3.0, 0.9 / sizeRatio));

            const ndc = new THREE.Vector3(ndcX, ndcY, 0.5);
            const worldPoint = ndc.clone().unproject(this.camera);
            const dir = worldPoint.sub(this.camera.position).normalize();
            return this.camera.position.clone().add(dir.multiplyScalar(distance));
        } else {
            const hash = this.hashCode(qrData);
            const x = ((hash % 200 - 100) / 200) * 1.2;
            const y = ((Math.floor(hash / 200) % 200 - 100) / 200) * 1.2;
            const z = -1.2;
            return new THREE.Vector3(x, y, z);
        }
    }

    private mapPointToScreen(p: { x: number; y: number; }): { x: number; y: number; } {
        return p;
    }

    private computePoseFromCorners(rawCorners: any[]): THREE.Matrix4 | null {
        const mapped = rawCorners.map((p: any) => this.mapPointToScreen({ x: (p.x ?? p.X ?? 0), y: (p.y ?? p.Y ?? 0) }));
        const corners = this.orderCorners(mapped);
        if (corners.length < 4) return null;


        const width = this.viewWidth;
        const height = this.viewHeight;
        const fovy = THREE.MathUtils.degToRad(this.camera.fov);
        const fy = (height / 2) / Math.tan(fovy / 2);
        const fx = fy * this.camera.aspect;
        const cx = width / 2;
        const cy = height / 2;


        const S = this.MARKER_SIZE_M;
        const objPts = [
            { x: 0, y: 0 },
            { x: S, y: 0 },
            { x: S, y: S },
            { x: 0, y: S }
        ];
        const imgPts = corners.map(p => ({ x: p.x, y: p.y }));
        const H = this.computeHomography(objPts, imgPts);
        if (!H) return null;


        const K = new THREE.Matrix3().set(
            fx, 0, cx,
            0, fy, cy,
            0, 0, 1
        );
        const Kinv = new THREE.Matrix3().copy(K).invert();
        const h1 = new THREE.Vector3(H.elements[0], H.elements[3], H.elements[6]);
        const h2 = new THREE.Vector3(H.elements[1], H.elements[4], H.elements[7]);
        const h3 = new THREE.Vector3(H.elements[2], H.elements[5], H.elements[8]);

        const Kinv_h1 = h1.clone().applyMatrix3(Kinv);
        const Kinv_h2 = h2.clone().applyMatrix3(Kinv);
        const Kinv_h3 = h3.clone().applyMatrix3(Kinv);

        const lambda = 1 / Kinv_h1.length();
        let r1 = Kinv_h1.clone().multiplyScalar(lambda);
        let r2 = Kinv_h2.clone().multiplyScalar(lambda);
        let r3 = new THREE.Vector3().crossVectors(r1, r2).normalize();

        r2 = new THREE.Vector3().crossVectors(r3, r1).normalize();
        const t = Kinv_h3.clone().multiplyScalar(lambda);


        const Rm = new THREE.Matrix4();
        Rm.makeBasis(r1, r2, r3);
        Rm.setPosition(new THREE.Vector3(t.x, t.y, t.z));


        const cvToThree = new THREE.Matrix4().makeScale(1, -1, -1);
        const M = new THREE.Matrix4().multiplyMatrices(cvToThree, Rm);
        return M;
    }

    private computeHomography(objPts: { x: number; y: number; }[], imgPts: { x: number; y: number; }[]): THREE.Matrix3 | null {
        if (objPts.length < 4 || imgPts.length < 4) return null;

        const A: number[][] = [];
        const b: number[] = [];
        for (let i = 0; i < 4; i++) {
            const X = objPts[i].x;
            const Y = objPts[i].y;
            const u = imgPts[i].x;
            const v = imgPts[i].y;
            A.push([X, Y, 1, 0, 0, 0, -u * X, -u * Y]);
            b.push(u);
            A.push([0, 0, 0, X, Y, 1, -v * X, -v * Y]);
            b.push(v);
        }
        const x = this.solveLinearSystem(A, b);
        if (!x) return null;
        const H = new THREE.Matrix3().set(
            x[0], x[1], x[2],
            x[3], x[4], x[5],
            x[6], x[7], 1
        );
        return H;
    }

    private solveLinearSystem(A: number[][], b: number[]): number[] | null {

        const n = b.length;

        const M = A.map((row, i) => [...row, b[i]]);
        const mRows = M.length;
        const mCols = M[0].length;
        let r = 0;
        for (let c = 0; c < mCols - 1 && r < mRows; c++) {

            let pivot = r;
            for (let i = r + 1; i < mRows; i++) {
                if (Math.abs(M[i][c]) > Math.abs(M[pivot][c])) pivot = i;
            }
            if (Math.abs(M[pivot][c]) < 1e-8) continue;

            if (pivot !== r) {
                const tmp = M[r];
                M[r] = M[pivot];
                M[pivot] = tmp;
            }

            const val = M[r][c];
            for (let j = c; j < mCols; j++) M[r][j] /= val;

            for (let i = 0; i < mRows; i++) {
                if (i === r) continue;
                const f = M[i][c];
                if (Math.abs(f) < 1e-10) continue;
                for (let j = c; j < mCols; j++) M[i][j] -= f * M[r][j];
            }
            r++;
        }

        const x = new Array(mCols - 1).fill(0);
        for (let i = 0; i < mRows; i++) {
            let lead = -1;
            for (let j = 0; j < mCols - 1; j++) {
                if (Math.abs(M[i][j] - 1) < 1e-6) { lead = j; break; }
                if (Math.abs(M[i][j]) > 1e-6) { lead = j; break; }
            }
            if (lead >= 0 && lead < mCols - 1) x[lead] = M[i][mCols - 1];
        }
        return x;
    }

    private orderCorners(raw: any[]): { x: number; y: number; }[] {
        const pts = raw.map(p => ({ x: (p.x ?? 0), y: (p.y ?? 0) }));

        const cx = pts.reduce((s, p) => s + p.x, 0) / pts.length;
        const cy = pts.reduce((s, p) => s + p.y, 0) / pts.length;

        pts.sort((a, b) => Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx));

        let minIdx = 0;
        let minSum = Infinity;
        for (let i = 0; i < pts.length; i++) {
            const s = pts[i].x + pts[i].y;
            if (s < minSum) { minSum = s; minIdx = i; }
        }
        const ordered = [...pts.slice(minIdx), ...pts.slice(0, minIdx)];

        const cross = (ordered[1].x - ordered[0].x) * (ordered[3].y - ordered[0].y) - (ordered[1].y - ordered[0].y) * (ordered[3].x - ordered[0].x);
        if (cross < 0) ordered.reverse();
        return ordered.slice(0, 4);
    }

    private normalizeKey(data: string): string {
        return (data || '').trim();
    }

    private hashCode(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    public clearObjects(): void {
        this.objects.forEach(obj => {
            this.scene.remove(obj);
            obj.geometry.dispose();
            if (obj.material instanceof THREE.Material) {
                obj.material.dispose();
            }
        });
        this.objects.clear();
        this.qrCooldowns.clear();
    }

    private animate = (): void => {
        this.animationId = requestAnimationFrame(this.animate);

        this.objects.forEach(obj => {
            obj.rotation.y += 0.01;
            obj.rotation.x += 0.005;
        });

        this.renderer.render(this.scene, this.camera);
        this.gl.endFrameEXP();
    };

    public dispose(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.clearObjects();
        this.scene.clear();
    }
}