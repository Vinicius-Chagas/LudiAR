AR Hit Testing &lt;ViroARScene&gt; has a variety of methods used to
&quot;hit-test&quot; against the real-world. These hit tests can be used to
determine, to the best of Viro&#x27;s ability, what real-world features exist
at a given point on the 2D screen. Note that since a single 2D point on the
view corresponds to a 3D ray in the scene, multiple results may be returned
(each at a different depth). The results may be anchors -- like planes -- or
they may be feature points that have not yet been fully identified. In
the example below we perform an AR hit test using a ray. For more detail on AR
hit tests, see the ViroARScene and ARHitTestResult references.
JavaScriptthis.refs[&quot;arscene&quot;].performARHitTestWithRay(orientation.forward).then((results)=&gt;
{ for (let i = 0; i &lt; results.length; i++) { let result = results[i]; if
(result.type == &quot;ExistingPlaneUsingExtent&quot;) { // We hit a plane, do
something! } } })  Fixed to
World Dragging Normally when dragging a &lt;ViroNode&gt; (by setting its
onDrag property) the Node, when dragged, stays at a fixed
distance from from the user, as though the user is dragging the Node across
the inner surface of a sphere. This is called FixedDistance dragging.  Viro
also supports FixedToWorld dragging in AR, where instead of keeping a
dragged Node&#x27;s distance from the user fixed, the dragged Node&#x27;s
distance is instead determined by its intersection with the nearest real-world
object. This is useful for dragging a virtual object across a real-world
surface, for example. To enable this, set the node&#x27;s dragType property
to FixedToWorld. Fixed to
Plane Dragging Fixed to Plane dragging enables you to specify a plane
atop which a &lt;ViroNode&gt; can be dragged. The node will not be able
to leave this plane. You can also specify a maximum distance away from the
camera that the node can travel, to prevent users from dragging the node out
to infinity. To do this, set the node&#x27;s dragType property to FixedToPlane. Then
to define the plane, set the dragPlane property. You define the plane along
which the Node can be dragged by specifying any point on the plane, and the
normal vector of the plane. TypeScripttype dragPlane = { planePoint:
number[], planeNormal : number[], maxDistance : number }
 In the example below we allow a Box to only be
dragged about a horizontal plane one meter below us, and we stop it from
traveling more than five meters away from us. JavaScript&lt;ViroNode position={[0, -1, -1]}
dragType=&quot;FixedToPlane&quot; dragPlane={{ planePoint: [0, -1, 0],
planeNormal: [0, 1, 0], maxDistance: 5 }} /&gt; "
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
Viro supports numerous mechanisms through which users can interact with both
the real world and the virtual UI. These are detailed below.
##
AR Hit Testing`` has a variety of methods used to "hit-test" against the real-
world. These hit tests can be used to determine, to the best of Viro's
ability, what real-world features exist at a given point on the 2D screen.
Note that since a single 2D point on the view corresponds to a 3D ray in the
scene, multiple results may be returned (each at a different depth). The
results may be anchors -- like planes -- or they may be feature points that
have not yet been fully identified.
In the example below we perform an AR hit test using a ray. For more detail on
AR hit tests, see the [ViroARScene](viroarscene.html) and
[ARHitTestResult](viroarscene.html#ARHitTestResult) references.
JavaScript
    this.refs["arscene"].performARHitTestWithRay(orientation.forward).then((results)=> {
      for (let i = 0; i ` (by setting its `onDrag` property) the
Node, when dragged, stays at a fixed distance from from the user, as though
the user is dragging the Node across the inner surface of a sphere. This is
called `FixedDistance` dragging.
Viro also supports `FixedToWorld` dragging in AR, where instead of keeping a
dragged Node's distance from the user fixed, the dragged Node's distance is
instead determined by its intersection with the nearest real-world object.
This is useful for dragging a virtual object across a real-world surface, for
example. To enable this, set the node's `dragType` property to `FixedToWorld`.
##
Fixed to Plane DraggingFixed to Plane dragging enables you to specify a plane atop which a
`` can be dragged. The node will not be able to leave this plane.
You can also specify a maximum distance away from the camera that the node can
travel, to prevent users from dragging the node out to infinity. To do this,
set the node's `dragType` property to `FixedToPlane`. Then to define the
plane, set the `dragPlane` property. You define the plane along which the Node
can be dragged by specifying any point on the plane, and the normal vector of
the plane.
TypeScript
    type dragPlane = {  
      planePoint: number[],
      planeNormal : number[],
      maxDistance : number
    }
In the example below we allow a Box to only be dragged about a horizontal
plane one meter below us, and we stop it from traveling more than five meters
away from us.
JavaScript
__Updated over 3 years ago