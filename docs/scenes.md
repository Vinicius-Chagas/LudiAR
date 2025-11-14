An application in ViroReact typically contains one or more of these Scene
components contained in a ViroSceneNavigator or ViroARSceneNavigator. Basic Scene A simple &lt;ViroScene&gt; is provided below. The scene
contains a single &lt;ViroText&gt; object, which displays the text
&quot;Hello World&quot;. JavaScript&lt;ViroScene&gt; &lt;ViroText
text=&quot;Hello World&quot; position={[0, -.1, -1]} /&gt; &lt;/ViroScene&gt;
 Positioning Objects in a Scene
Viro uses a right-handed coordinate system, where the direction of view is
along the negative z-axis. The point of view can be modified by changing the
Camera. By default, the camera is positioned at [0, 0, 0] and
looks in the direction [0, 0, -1]. In frameworks with only 3DOF (3 degrees of
freedom) support (like mobile VR), the camera stays at [0,0,0] until
moved by the developer with the end user only able to control the rotation of
the camera. On the other hand, 6DOF (6 degrees of freedom) supported
frameworks allow the end user to move about their world and move the camera in
the Viro Scene in response (like in AR).  Objects in the scene
are positioned in this 3D coordinate system via the position attribute. As scenes
grow in complexity, it is best to take advantage of Viro&#x27;s underlying Scene Graph when placing objects.
 Scene Backgrounds The background of a scene is
the content rendered in the distance, behind all the objects. This background
can either be a 360 degree image, or a skybox. To render a 360 image as the background
add a &lt;Viro360Image&gt; component to the scene, as shown
below. JavaScript&lt;ViroScene
style={styles.container} &gt; &lt;Viro360Image
source={require(&#x27;./res/360_diving.jpg&#x27;)} /&gt; &lt;/ViroScene&gt;
 To render a skybox, use the &lt;ViroSkybox&gt;
component. A skybox is a cube with 6 sides that encloses the user. The six
sides can either be given a solid color, by setting the color attribute of
the skybox, or they can each be assigned a texture, by setting the source
attribute. In the example below, each side of the skybox is assigned the same
image. JavaScript&lt;ViroScene
style={styles.container}&gt; &lt;ViroSkybox source={{ nx:
require(&#x27;./res/grid_bg.jpg&#x27;), px:
require(&#x27;res/grid_bg.html&#x27;), ny:
require(&#x27;res/grid_bg.html&#x27;), py:
require(&#x27;res/grid_bg.html&#x27;), nz:
require(&#x27;res/grid_bg.html&#x27;), pz:
require(&#x27;res/grid_bg.html&#x27;) }} /&gt; &lt;/ViroScene&gt;
 The parameters in source, nx, px, ny, py, nz, and pz,
specify the texture to use for each cube face (where nx is the face in the
negative-x direction, px is the face in the positive-x direction, and so
on). Scene Graph Underlying the &lt;ViroScene&gt; is a full-featured 3D scene
graph engine. A scene graph is a hierarchical tree structure of nodes that
allows developers to intuitively construct a 3D environment. The root node is
the &lt;ViroScene&gt; itself. Sub-nodes are represented by
child &lt;ViroNode&gt; objects. Each &lt;ViroNode&gt; represents a
position and transform in 3D space, to which you can attach 3D objects, lights, or other content. A &lt;ViroNode&gt; by itself has
no visible content when it is rendered; it represents only a coordinate space
transform (position, rotation, and scale) relative to its parent &lt;ViroNode&gt;.
You use a hierarchy of &lt;ViroNode&gt; objects to model your scene in a way that
makes sense for your app. For example, in the scene below Text A&#x27;s
final position will be [0, 0.9, -2], and Text B&#x27;s final position will be
[1, 1,
-1]. Similarly, Text A&#x27;s final scale will be [2, 2, 2], while
Text B&#x27;s final scale will be [4, 4, 4], since it picks up the scale from both
its parent nodes. JavaScript&lt;ViroScene&gt;
&lt;ViroNode position={[0, 1, -1]} scale={[2, 2, 2]}&gt; &lt;ViroText
text=&quot;Text A&quot; position={[0, -.1, -1]} /&gt; &lt;ViroNode
position={[1, 0, 0 ]} scale={[4, 4, 4]}&gt; &lt;ViroText text=&quot;Text
B&quot; /&gt; &lt;/ViroNode&gt; &lt;/ViroNode&gt; &lt;/ViroScene&gt;
 To take a more concrete example, suppose your app
presents an animated view of a solar system. You can construct a &lt;ViroNode&gt;
hierarchy that models celestial bodies relative to one another. Each body can
be a &lt;ViroNode&gt;, with its position in its orbit defined
in the coordinate system of its parent. The sun would define its own
coordinate space, and the Earth would position itself in that space. At the
same time, the Earth would define its own coordinate space in which the moon
would position itself. The snippet below shows a simple solar system. JavaScript&lt;ViroNode position={[0,0,-3]}
/**sun-earth system**/&gt; &lt;ViroSphere materials={[&quot;sunClipart&quot;]}
/&gt; &lt;ViroNode position={[0, 0, -5]} /**moon-earth system**/&gt;
&lt;ViroSphere position={[0,0,0]} materials={[&quot;earth&quot;]} /&gt;
&lt;ViroSphere position={[0,1,-2]} scale={[.2, .2, .2]}
materials={[&quot;moon&quot;]}/&gt; &lt;/ViroNode&gt; &lt;/ViroNode&gt;
 This scene hierarchy makes it intuitive to
animate the celestial bodies: the revolution of the moon around the Earth and
the Earth around the sun combine such that the moon follows the planet around
the sun." style="margin-left:31px" class="rm-Markdown markdown-body rm-
Markdown markdown-body ng-non-bindable" data-testid="RDMD">
Applications in ViroReact consist of Scenes, represented either by `ViroScene`
or `ViroARScene` components. Scenes are the 3D equivalent of the Views found
in most 2D application frameworks. They contain all the content that ViroReact
renders in AR/VR: UI controls, 3D objects, lights, and more.
An application in ViroReact typically contains one or more of these Scene
components contained in a `ViroSceneNavigator` or `ViroARSceneNavigator`.
##
Basic SceneA simple `` is provided below. The scene contains a single
`` object, which displays the text "Hello World".
JavaScript
##
Positioning Objects in a SceneViro uses a right-handed coordinate system, where the direction of view is
along the negative z-axis. The point of view can be modified by changing the
[Camera](camera.html). By default, the camera is positioned at `[0, 0, 0]` and
looks in the direction `[0, 0, -1]`. In frameworks with only 3DOF (3 degrees
of freedom) support (like mobile VR), the camera stays at `[0,0,0]` until
moved by the developer with the end user only able to control the rotation of
the camera. On the other hand, 6DOF (6 degrees of freedom) supported
frameworks allow the end user to move about their world and move the camera in
the Viro Scene in response (like in AR).
![607](https://files.readme.io/54ce6ff-viro_camera_diagram.png)
Objects in the scene are positioned in this 3D coordinate system via the
`position` attribute. As scenes grow in complexity, it is best to take
advantage of Viro's underlying [Scene Graph](scenes.html#scene-graph) when
placing objects.
##
Scene BackgroundsThe background of a scene is the content rendered in the distance, behind all
the objects. This background can either be a [360 degree
image](viro360image.html), or a [skybox](https://viro-
community.readme.io/docs/skybox).
To render a 360 image as the background add a `` component to
the scene, as shown below.
JavaScript
To render a skybox, use the `` component. A skybox is a cube with
6 sides that encloses the user. The six sides can either be given a solid
color, by setting the `color` attribute of the skybox, or they can each be
assigned a texture, by setting the `source` attribute. In the example below,
each side of the skybox is assigned the same image.
JavaScript
The parameters in `source`, nx, px, ny, py, nz, and pz, specify the texture to
use for each cube face (where nx is the face in the negative-x direction, px
is the face in the positive-x direction, and so on).
##
Scene GraphUnderlying the `` is a full-featured 3D scene graph engine. A scene
graph is a hierarchical tree structure of nodes that allows developers to
intuitively construct a 3D environment. The root node is the ``
itself. Sub-nodes are represented by child `` objects. Each
`` represents a position and transform in 3D space, to which you can
attach [3D objects](3d-objects.html), [lights](https://viro-
community.readme.io/docs/3d-scene-lighting), or other content.
A `` by itself has no visible content when it is rendered; it
represents only a coordinate space transform (position, rotation, and scale)
relative to its parent ``. You use a hierarchy of ``
objects to model your scene in a way that makes sense for your app.
For example, in the scene below Text A's final position will be `[0, 0.9,
-2]`, and Text B's final position will be `[1, 1, -1]`. Similarly, Text A's
final scale will be `[2, 2, 2]`, while Text B's final scale will be `[4, 4,
4]`, since it picks up the scale from both its parent nodes.
JavaScript
To take a more concrete example, suppose your app presents an animated view of
a solar system. You can construct a `` hierarchy that models
celestial bodies relative to one another. Each body can be a ``,
with its position in its orbit defined in the coordinate system of its parent.
The sun would define its own coordinate space, and the Earth would position
itself in that space. At the same time, the Earth would define its own
coordinate space in which the moon would position itself. The snippet below
shows a simple solar system.
JavaScript
This scene hierarchy makes it intuitive to animate the celestial bodies: the
revolution of the moon around the Earth and the Earth around the sun combine
such that the moon follows the planet around the sun.
__Updated over 1 year ago