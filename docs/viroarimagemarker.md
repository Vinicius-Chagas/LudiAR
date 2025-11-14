Example use: JavaScript// Register the target ViroARTrackingTargets.createTargets({ &quot;targetOne&quot;: { source: require(&#x27;res/targetOne.html&#x27;), orientation: &quot;Up&quot;, physicalWidth: 0.1 // real world width in meters }, }); &lt;ViroARImageMarker target={&quot;targetOne&quot;}&gt; &lt;ViroBox position={[0, .25, 0]} scale={[.5, .5, .5]} /&gt; &lt;/ViroARImageMarker&gt;  Props target (* required) TypeDescriptionstringName of the image target created with ViroARTrackingTargets. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified. The default value is &quot;FixedDistance&quot;.FixedDistance: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable nodeFixedDistanceOrigin: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.FixedToWorld: Dragging is based on intersection with real world objects. Available only in ARFixedToPlane: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks. The default value is false. onAnchorFound TypeDescription(anchor) =&gt; voidCalled when this component is anchored to a plane that is at least minHeight by minWidth large. This is when the component is made visible. see Anchor for more. onAnchorRemoved TypeDescription() =&gt; voidCalled when this component is detached from a plane and is no longer visible. onAnchorUpdated TypeDescription(anchor) =&gt; voidCalled when the anchor is update. For image markers, there&#x27;s additional information provided in the returned anchor. See Anchor for more. onClick See ViroNode onClick. onClickState See ViroNode onClickState. onCollision See ViroNode onCollision. onDrag See ViroNode onDrag. onFuse See ViroNode onFuse. onHover See ViroNode onHover. onPinch See ViroNode onPinch. onRotate See ViroNode onRotate. onScroll See ViroNode onScroll. onSwipe See ViroNode onSwipe. onTouch See ViroNode onTouch. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the object. A value of 1 translates into a fully opaque object while 0 represents full transparency. pauseUpdates TypeDescriptionbooleanTrue/False to stop the automatic positioning/rotation of children components of a ViroARPlane. This does not stop onAnchorUpdated from being called. viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the container should be hidden. By default the container is visible and this value is true. renderingOrder TypeDescriptionnumberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. rotation TypeDescription[number, number, number]The rotation of the component around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. scale TypeDescription[number, number, number]The scale of the box in 3D space, specified as [x,y,z]. A scale of 1 represents the current size of the box. A scale value of &lt; 1 will make the box proportionally smaller while a value &gt;1 will make the box proportionally bigger along the specified axis. transformBehaviors TypeDescriptionstring[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the box is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the box to always face the user at a particular rotation. Allowed values(values are case sensitive):&quot;billboard&quot;: Billboard object on x,y,z axis &quot;billboardX&quot;: Billboard object on the x axis&quot;billboardY&quot;: Billboard object on the y axis&quot;billboardZ&quot;: Billboard object on the z axis Methods setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
ViroARImageMarker is a component that attempts to find the given target in the
user's view allowing the developer to place objects with respect to the image
or to determine their location relative to the image target.
######
Example use:JavaScript
    // Register the target
    ViroARTrackingTargets.createTargets({
        "targetOne": {
            source: require('res/targetOne.html'),
            orientation: "Up",
            physicalWidth: 0.1 // real world width in meters  
        },
    });
##
Props###
target (* required)Type| Description  
---|---  
string| Name of the image target created with ViroARTrackingTargets.  
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
onAnchorFoundType| Description  
---|---  
(anchor) => void| Called when this component is anchored to a plane that is at
least `minHeight` by `minWidth` large. This is when the component is made
visible.  
see [Anchor](viroarscene.html#anchor) for more.  
###
onAnchorRemovedType| Description  
---|---  
() => void| Called when this component is detached from a plane and is no
longer visible.  
###
onAnchorUpdatedType| Description  
---|---  
(anchor) => void| Called when the anchor is update. For image markers, there's
additional information provided in the returned anchor.  
See [Anchor](viroarscene.html#anchor) for more.  
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
number| A number from 0 to 1 that specifies the opacity of the object. A value
of 1 translates into a fully opaque object while 0 represents full
transparency.  
###
pauseUpdatesType| Description  
---|---  
boolean| True/False to stop the automatic positioning/rotation of children
components of a `ViroARPlane`. This does not stop `onAnchorUpdated` from being
called.  
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
[number, number, number]| The scale of the box in 3D space, specified as
[x,y,z]. A scale of 1 represents the current size of the box. A scale value of
1 will make the
box proportionally bigger along the specified axis.  
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
Methods###
setNativeProps(nativeProps)A wrapper function around the native component's setNativeProps which allow
users to set values on the native component without changing state/setting
props and re-rendering. Refer to the React Native documentation on [Direct
Manipulation](https://facebook.github.io/react-native/docs/direct-
manipulation) for more information.
Parameter| Type| Description  
---|---|---  
nativeProps| object| an object where the keys are the properties to set and
the values are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago