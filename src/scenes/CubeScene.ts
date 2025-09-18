import { ExpoWebGLRenderingContext } from 'expo-gl';
import { Renderer } from 'expo-three';
import * as THREE from 'three';

export default class CubeScene {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: Renderer;
    private cube: THREE.Mesh | undefined;
    private animationId: number | null = null;

    constructor(gl: ExpoWebGLRenderingContext) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            0.1,
            1000
        );

        this.renderer = new Renderer({ gl });
        this.renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        this.setupLighting();
        this.createCube();
        this.camera.position.z = 2;

        this.animate();
    }

    private setupLighting(): void {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 0, 1);
        this.scene.add(light);
    }

    private createCube(): void {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshLambertMaterial({ color: 0xff0000 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    private animate = (): void => {
        this.animationId = requestAnimationFrame(this.animate);

        if (!this.cube) return;

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;

        this.renderer.render(this.scene, this.camera);
        (this.renderer.getContext() as ExpoWebGLRenderingContext).endFrameEXP();
    };

    public dispose(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.scene.clear();
    }
}
