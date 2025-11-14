Scenes in Viro are full 3D environments that can be viewed from any angle.
The ViroCamera element defines the position from which the
scene is viewed. By default, the camera is positioned at the origin [0, 0, 0].
The camera always points in the negative Z direction [0, 0, -1]. In the
example below, we set the camera to position [-1, 0, 0], so that when the user
enters the scene she is staring directly at the text. JavaScript&lt;ViroScene&gt; &lt;ViroCamera
position={[-1, 0, 0]} active={true} /&gt; &lt;ViroText style={styles.baseText}
text=&quot;Hello!&quot; position={[-1, 0, -1]} /&gt; &lt;/ViroScene&gt;
 If no &lt;ViroCamera&gt; is specified, then the default
camera (position at origin) is used. Rotation may also be set for &lt;ViroCamera&gt;, which sets the base orientation of the
camera; that is, the orientation of the camera when the user is staring
straight ahead. For example, in the camera below the user enters the scene
looking up 45 degrees. JavaScript&lt;ViroScene&gt; &lt;ViroCamera
position={[0, 0, 0]} rotation={[45, 0, 0]) active={true} /&gt; &lt;ViroText
style={styles.baseText} text=&quot;Hello!&quot; position={[-1, 0, -1]} /&gt;
&lt;/ViroScene&gt;  If no &lt;ViroCamera&gt; is
specified, then the default camera (position at origin) is used. Rotation may
also be set for &lt;ViroCamera&gt;, which sets the base orientation of the
camera; that is, the orientation of the camera when the user is staring
straight ahead. For example, in the camera below the user enters the scene
looking up 45 degrees. JavaScript&lt;ViroScene&gt; &lt;ViroCamera
position={[0, 0, 0]} rotation={[45, 0, 0]) active={true} /&gt; &lt;ViroText
style={styles.baseText} text=&quot;Hello!&quot; position={[-1, 0, -1]} /&gt;
&lt;/ViroScene&gt;  Orbit Camera The &lt;ViroOrbitCamera&gt; is an
alternative camera that enables the user to orbit about a focal point. This is
useful for exploring a single point in a 3D scene from all angles: as the user
tilts her head, the camera orbits about that single point. The example
below utilizes an orbit camera. The focalPoint is set to [0, 0, -1]. Since
the &lt;Viro3DObject&gt; is also positioned at [0, 0, -1], this
means the user will stay focused on that 3D model as he tilts his head,
revealing it from all angles. JavaScript&lt;ViroScene&gt; &lt;ViroOrbitCamera
position={[0, 0, 0]} focalPoint={[0, 0, -1]} active={true} /&gt;
&lt;Viro3DObject source={require(&#x27;./res/heart.obj&#x27;) position={[0, 0,
-1]} /&gt; &lt;/ViroScene&gt;  Node-Attached Cameras You can also define a
cameras within &lt;ViroNode&gt; objects. By doing so, you
&#x27;attach&#x27; the camera to the node: it is transformed within the node
like any other element in the scene graph. JavaScript&lt;ViroNode position={[0, 0, -3]}
/**sun-earth system**/&gt; &lt;ViroSphere materials={[&quot;sun&quot;]} /&gt;
&lt;ViroNode position={[0, 0, -5]} /**earth-moon system**/&gt; &lt;ViroCamera
position={[0, 0, 0]} active={true} /&gt; &lt;ViroSphere position={[0, 0, 0]}
materials={[&quot;earth&quot;]} /&gt; &lt;ViroSphere position={[0, 1, -2]}
scale={[.2, .2, .2]} materials={[&quot;moon&quot;]}/&gt; &lt;/ViroNode&gt;
&lt;/ViroNode&gt;  In the example above, the
camera is placed at Earth. If we were to animate the Earth-Moon system in the
example above -- for example to orbit around the Sun -- the camera would
animate as well. Multiple Cameras Viro allows developers to specify
multiple cameras. The camera the user sees through is that which has its
active property set to true. If no camera is active, the
default camera (positioned at 0, 0, 0, looking toward negative Z), will be
used. Camera UI Constraint Viro also enables developers
to add &quot;Hud&quot; like components to their scene. Like a
ViroNode, 3D elements that are parented under a
ViroCamera are effectively &quot;locked&quot; and always
positioned in reference to the camera&#x27;s position. As such, they will
always move with the camera, irregardless of wherever the user may be looking
at.  The code sample below demonstrates a ViroBox that will always be
placed 5 meters in front of the camera, irregardless of wherever the user may
be looking at. JavaScript&lt;ViroCamera
position={[0,0,0]} active={true} &gt; &lt;ViroBox position={[0, 0, -5]} /&gt;
&lt;/ViroCamera&gt; " style="margin-left:31px"
class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable"
data-
testid="RDMD">![607](https://files.readme.io/8da487f-viro_camera_diagram.png)
Scenes in Viro are full 3D environments that can be viewed from any angle. The
`ViroCamera` element defines the position from which the scene is viewed. By
default, the camera is positioned at the origin `[0, 0, 0]`. The camera always
points in the negative Z direction `[0, 0, -1]`.
In the example below, we set the camera to position `[-1, 0, 0]`, so that when
the user enters the scene she is staring directly at the text.
JavaScript
If no `` is specified, then the default camera (position at
origin) is used. Rotation may also be set for ``, which sets the
base orientation of the camera; that is, the orientation of the camera when
the user is staring straight ahead. For example, in the camera below the user
enters the scene looking up 45 degrees.
JavaScript
If no `` is specified, then the default camera (position at
origin) is used. Rotation may also be set for ``, which sets the
base orientation of the camera; that is, the orientation of the camera when
the user is staring straight ahead. For example, in the camera below the user
enters the scene looking up 45 degrees.
JavaScript
##
Orbit CameraThe `` is an alternative camera that enables the user to
orbit about a focal point. This is useful for exploring a single point in a 3D
scene from all angles: as the user tilts her head, the camera orbits about
that single point.
The example below utilizes an orbit camera. The focalPoint is set to `[0, 0,
-1]`. Since the `` is also positioned at `[0, 0, -1]`, this
means the user will stay focused on that 3D model as he tilts his head,
revealing it from all angles.
JavaScript
##
Node-Attached CamerasYou can also define a cameras within `` objects. By doing so, you
'attach' the camera to the node: it is transformed within the node like any
other element in the scene graph.
JavaScript
In the example above, the camera is placed at Earth. If we were to animate the
Earth-Moon system in the example above -- for example to orbit around the Sun
-- the camera would animate as well.
##
Multiple CamerasViro allows developers to specify multiple cameras. The camera the user sees
through is that which has its `active` property set to true. If no camera is
active, the default camera (positioned at 0, 0, 0, looking toward negative Z),
will be used.
##
Camera UI ConstraintViro also enables developers to add "Hud" like components to their scene. Like
a **ViroNode** , 3D elements that are parented under a **ViroCamera** are
effectively "locked" and always positioned in reference to the camera's
position. As such, they will always move with the camera, irregardless of
wherever the user may be looking at.
The code sample below demonstrates a ViroBox that will always be placed 5
meters in front of the camera, irregardless of wherever the user may be
looking at.
JavaScript
  * [__Table of Contents](camera.html#)
  *     * [Orbit Camera](camera.html#orbit-camera)
    * [Node-Attached Cameras](camera.html#node-attached-cameras)
    * [Multiple Cameras](camera.html#multiple-cameras)
    * [Camera UI Constraint](camera.html#camera-ui-constraint)