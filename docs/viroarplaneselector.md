Example use: JavaScript&lt;ViroARPlaneSelector minHeight={.5} minWidth={.5} onPlaneSelected={...} &gt; &lt;ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} /&gt; ... &lt;/ViroARPlaneSelector&gt;  Props alignment TypeDescription&quot;Horizontal&quot; |&quot;HorizontalUpward&quot; | &quot;HorizontalDownward&quot; | &quot;Vertical&quot;Don&#x27;t forget to set the anchorDetectionTypes prop of ViroARScene to tell the AR Session what type of planes to discover.Note: &quot;HorizontalUpward&quot; and &quot;HorizontalDownward&quot; are only supported in Android. Specifies the desired alignment of a plane that this component will &quot;anchor&quot; to. The default value is &quot;Horizontal&quot;. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified. The default value is &quot;FixedDistance&quot;.FixedDistance: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable nodeFixedDistanceOrigin: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.FixedToWorld: Dragging is based on intersection with real world objects. Available only in ARFixedToPlane: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks. The default value is false. maxPlanes TypeDescriptionnumberThe number of planes to present to the end user for them to select. If the AR system discovers more planes than this number, then it will only display the first maxPlanes number of planes to the end user.The default value is 15. minHeight TypeDescriptionnumberSpecifies the minimum height, in meters, of a plane that this component will &quot;anchor&quot; to. The default value is 0. minWidth TypeDescriptionnumberSpecifies the minimum width, in meters, of a plane that this component will &quot;anchor&quot; to. The default value is 0. onAnchorFound TypeDescription(anchor) =&gt; voidDeveloper should instead listen to onPlaneSelected Called when this component is anchored to a plane that is at least minHeight by minWidth large. This is when the component is made visible. See Anchor for more. onAnchorRemoved TypeDescription() =&gt; voidCalled when this component is detached from a plane and is no longer visible. onAnchorUpdated TypeDescription(anchor) =&gt; voidCalled when the plane to which this component is anchored is updated. See Anchor for more. onClick See ViroNode onClick. onClickState See ViroNode onClickState. onCollision See ViroNode onCollision. onDrag See ViroNode onDrag. onFuse See ViroNode onFuse. onHover See ViroNode onHover. onPinch See ViroNode onPinch. onPlaneSelected TypeDescription() =&gt; voidThis function is called when the end user has selected a plane to use. onRotate See ViroNode onRotate. onScroll See ViroNode onScroll. onSwipe See ViroNode onSwipe. onTouch See ViroNode onTouch. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the container. A value of 1 translates into a fully opaque node while 0 represents full transparency. viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the container should be hidden. By default the container is visible and this value is true. renderingOrder TypeDescriptionnumberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. rotation TypeDescription[number, number, number]The rotation of the component around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. scale TypeDescription[number, number, number]The scale of the component in 3D space, specified as [x,y,z]. A scale of 1 represents the current size of the component. A scale value of &lt; 1 will make the component proportionally smaller while a value &gt;1 will make the component proportionally bigger along the specified axis. transformBehaviors TypeDescriptionstring[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the box is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the box to always face the user at a particular rotation. Allowed values(values are case sensitive):&quot;billboard&quot;: Billboard object on x,y,z axis &quot;billboardX&quot;: Billboard object on the x axis&quot;billboardY&quot;: Billboard object on the y axis&quot;billboardZ&quot;: Billboard object on the z axis Anchor This is the object given to the developer through the onAnchorFound and onAnchorUpdated callback functions. KeyTypeValueposition[number, number, number]Position of the attached plane in world coordinates.rotation[number, number, number]Rotation of the attached plane in world coordinates.center[number, number, number]Center of the underlying plane relative to the plane&#x27;s position.widthnumberCurrent width of the attached planeheightnumberCurrent height of the attached plane Methods reset() This function resets the ARPlaneSelector back to the &quot;selection&quot; state which presents the end user with all planes that have been found by the AR system (up to maxPlanes number of planes)." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
The `ViroARPlaneSelector` is a composite component written entirely in React
Native leveraging [ViroARPlane](viroarplane.html) that provides developers
with an easy way to have the end user select a plane they want to use. This
component surfaces all the same properties as [ViroARPlane](viroarplane.html)
but rather than attaching the developer's components to the first surface
found, it presents end users with white, transparent surfaces which they can
select to indicate where they want to have their AR experience.
######
Example use:JavaScript
        ...
##
Props###
alignmentType| Description  
---|---  
"Horizontal" |"HorizontalUpward" | "HorizontalDownward" | "Vertical"| Don't forget to set the `anchorDetectionTypes` prop of [ViroARScene](viroarscene.html) to tell the AR Session what type of planes to discover.  
**Note: "HorizontalUpward" and "HorizontalDownward" are only supported in
Android.**  
Specifies the desired alignment of a plane that this component will "anchor"
to.  
The default value is "Horizontal".  
###
dragPlaneType| Description  
---|---  
[ViroDragPlane](virodragplane.html)| When a drag type of "FixedToPlane" is
given, dragging is limited to a user defined plane. The dragging behavior is
then configured by this property (specified by a point on the plane and its
normal vector). You can also limit the maximum distance the dragged object is
allowed to travel away from the camera/controller (useful for situations where
the user can drag an object towards infinity).  
###
dragTypeType| Description  
---|---  
"FixedDistance" | "FixedToWorld" | "FixedDistanceOrigin" | "FixedToPlane"| Determines the behavior of drag if **onDrag** is specified. The default value is "FixedDistance".  
**FixedDistance:** Dragging is limited to a fixed radius around the user,
dragged from the point at which the user has grabbed the geometry containing
this draggable node  
**FixedDistanceOrigin:** Dragging is limited to a fixed radius around the
user, dragged from the point of this node's position in world space.  
**FixedToWorld:** Dragging is based on intersection with real world objects.
**Available only in AR**  
**FixedToPlane:** Dragging is limited to a fixed plane around the user. The
configuration of this plane is defined by the **dragPlane** property.  
###
ignoreEventHandlingType| Description  
---|---  
boolean| When set to true, this control will ignore events and not prevent
controls behind it from receiving event callbacks.  
The default value is false.  
###
maxPlanesType| Description  
---|---  
number| The number of planes to present to the end user for them to select. If
the AR system discovers more planes than this number, then it will only
display the first `maxPlanes` number of planes to the end user.The default
value is 15.  
###
minHeightType| Description  
---|---  
number| Specifies the minimum height, in meters, of a plane that this
component will "anchor" to.  
The default value is 0.  
###
minWidthType| Description  
---|---  
number| Specifies the minimum width, in meters, of a plane that this component
will "anchor" to.  
The default value is 0.  
###
onAnchorFoundType| Description  
---|---  
(anchor) => void| **Developer should instead listen to`onPlaneSelected`**  
Called when this component is anchored to a plane that is at least `minHeight`
by `minWidth` large. This is when the component is made visible.  
See [Anchor](viroarplaneselector.html#anchor) for more.  
###
onAnchorRemovedType| Description  
---|---  
() => void| Called when this component is detached from a plane and is no
longer visible.  
###
onAnchorUpdatedType| Description  
---|---  
(anchor) => void| Called when the plane to which this component is anchored is
updated.  
See [Anchor](viroarplaneselector.html#anchor) for more.  
###
onClickSee [ViroNode onClick](vironode.html#onclick).
###
onClickStateSee [ViroNode onClickState](vironode.html#onclickstate).
###
onCollisionSee [ViroNode onCollision](vironode.html#oncollision).
###
onDragSee [ViroNode onDrag](vironode.html#ondrag).
###
onFuseSee [ViroNode onFuse](vironode.html#onfuse).
###
onHoverSee [ViroNode onHover](vironode.html#onhover).
###
onPinchSee [ViroNode onPinch](vironode.html#onpinch).
###
onPlaneSelectedType| Description  
---|---  
() => void| This function is called when the end user has selected a plane to
use.  
###
onRotateSee [ViroNode onRotate](vironode.html#onrotate).
###
onScrollSee [ViroNode onScroll](vironode.html#onscroll).
###
onSwipeSee [ViroNode onSwipe](vironode.html#onswipe).
###
onTouchSee [ViroNode onTouch](vironode.html#ontouch).
###
opacityType| Description  
---|---  
number| A number from 0 to 1 that specifies the opacity of the container. A
value of 1 translates into a fully opaque node while 0 represents full
transparency.  
###
viroTagType| Description  
---|---  
string| A tag given to other components when their physics body collides with
this component's physics body. Refer to [physics](physics.html) for more
information.  
###
visibleType| Description  
---|---  
boolean| False if the container should be hidden. By default the container is
visible and this value is true.  
###
renderingOrderType| Description  
---|---  
number| This determines the order in which this Node is rendered relative to
other Nodes. Nodes with greater rendering orders are rendered last. The
default rendering order is zero. For example, setting a Node's rendering order
to -1 will cause the Node to be rendered before all Nodes with rendering
orders greater than or equal to 0.  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the component around it's local axis
specified as Euler angles [x, y, z]. Units for each angle are specified in
degrees.  
###
scaleType| Description  
---|---  
[number, number, number]| The scale of the component in 3D space, specified as
[x,y,z]. A scale of 1 represents the current size of the component. A scale
value of 1
will make the component proportionally bigger along the specified axis.  
###
transformBehaviorsType| Description  
---|---  
string[]| An array of transform constraints that affect the transform of the
object. For example, putting the value "billboard" will ensure the box is
facing the user as the user rotates their head on any axis. This is useful for
icons or text where you'd like the box to always face the user at a particular
rotation. Allowed values(values are case sensitive):  
**" billboard":** Billboard object on x,y,z axis **" billboardX":** Billboard
object on the x axis  
**" billboardY":** Billboard object on the y axis  
**" billboardZ":** Billboard object on the z axis  
##
AnchorThis is the object given to the developer through the `onAnchorFound` and
`onAnchorUpdated` callback functions.
Key| Type| Value  
---|---|---  
position| [number, number, number]| Position of the attached plane in world
coordinates.  
rotation| [number, number, number]| Rotation of the attached plane in world
coordinates.  
center| [number, number, number]| Center of the underlying plane relative to
the plane's position.  
width| number| Current width of the attached plane  
height| number| Current height of the attached plane  
##
Methods###
reset()This function resets the `ARPlaneSelector` back to the "selection" state which
presents the end user with all planes that have been found by the AR system
(up to `maxPlanes` number of planes).
__Updated over 3 years ago