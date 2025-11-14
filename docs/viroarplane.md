Anchoring Anchoring is our term for attaching virtual content to detected real-world points/features (anchors). For ViroARPlanes, we support two types: manual and automatic anchoring. Automatic Anchoring To enable automatic anchoring, the developer provides a minHeight and minWidth to the ViroARPlane and adds the content they desire within the ViroARPlane component. When the AR system finds a plane that matches the given dimensions, the ViroARPlane will be anchored to the real world plane and the child components will be made visible. Any updates to the real-world plane will be given to the developer through the onAnchorFound, onAnchorUpdated, and onAnchorRemoved callback functions.  Example use: JavaScript&lt;ViroARScene onAnchorFound={() =&gt; console.log(&#x27;onAnchorFound&#x27;)} onAnchorUpdated={() =&gt; console.log(&#x27;onAnchorUpdated&#x27;)} onAnchorRemoved={() =&gt; console.log(&#x27;onAnchorRemoved&#x27;)}&gt; &lt;ViroARPlane minHeight={0.1} minWidth={0.1} alignment={&#x27;Horizontal&#x27;}&gt; &lt;ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} /&gt; &lt;/ViroARPlane&gt; &lt;/ViroARScene&gt;  Manual Anchoring In manual anchoring, rather than having the platform determine which real-world feature/anchor the ViroARPlane is attached to, the developer is required to listen for all the anchors and &quot;choose&quot; the anchor they want the ViroARPlane to attach to via the anchorId property. To listen for all the anchors, the user should add onAnchorFound, onAnchorUpdated and onAnchorRemoved listeners to their ViroARScene component which will receive all anchors that the AR platform discovers. Example use: JavaScript&lt;ViroARScene onAnchorFound={(foundAnchor) =&gt; console.log(&#x27;onAnchorFound&#x27;, foundAnchor)} onAnchorUpdated={() =&gt; console.log(&#x27;onAnchorUpdated&#x27;)} onAnchorRemoved={() =&gt; console.log(&#x27;onAnchorRemoved&#x27;)}&gt; &lt;ViroARPlane anchorId={foundAnchor.anchorId}&gt; &lt;ViroBox position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} /&gt; &lt;/ViroARPlane&gt; &lt;/ViroARScene&gt;  Props alignment TypeDescription&quot;Horizontal&quot; | &quot;HorizontalUpward&quot; | &quot;HorizontalDownward&quot; | &quot;Vertical&quot;Specifies the desired alignment of a plane that this component will &quot;anchor&quot; to.The default value is &quot;Horizontal&quot;. Don&#x27;t forget to set the anchorDetectionTypes prop of ViroARScene to tell the AR Session what type of planes to discover.Note: &quot;HorizontalUpward&quot; and &quot;HorizontalDownward&quot; are only supported in Android.For Automatic Anchoring, see Anchoring anchorId TypeDescriptionstringFor Manual Anchoring, see Anchoring The ID of the anchor that the platform should anchor this ViroARPlane to. If no Anchor has the specified anchorId, then plane will not be visible until an Anchor appears with the same ID. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified.&quot;FixedDistance&quot;: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable node&quot;FixedDistanceOrigin&quot;: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.&quot;FixedToWorld&quot;: Dragging is based on intersection with real world objects. Available only in AR&quot;FixedToPlane&quot;: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. The default value is &quot;FixedDistance&quot;. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks.The default value is false. minHeight TypeDescriptionnumberFor Automatic Anchoring, see Anchoring Specifies the minimum height, in meters, of a plane that this component will &quot;anchor&quot; to. The default value is 0. minWidth TypeDescriptionnumberFor Automatic Anchoring, see Anchoring Specifies the minimum width, in meters, of a plane that this component will &quot;anchor&quot; to. The default value is 0. onAnchorFound TypeDescription(anchor) =&gt; voidCalled when this component is anchored to a plane that is at least minHeight by minWidth large. This is when the component is made visible. anchor: see Anchor onAnchorRemoved TypeDescriptionFunctionCalled when this component is detached from a plane and is no longer visible. onAnchorUpdated TypeDescription(anchor) =&gt; voidCalled when the plane to which this component is anchored is updated. anchor: see Anchor onClick See ViroNode onClick. onClickState See ViroNode onClickState. onCollision See ViroNode onCollision. onDrag See ViroNode onDrag. onFuse See ViroNode onFuse. onHover See ViroNode onHover. onPinch See ViroNode onPinch. onRotate See ViroNode onRotate. onScroll See ViroNode onScroll. onSwipe See ViroNode onSwipe. onTouch See ViroNode onTouch. onTransformUpdate See ViroNode onTransformUpdate. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the container. A value of 1 translates into a fully opaque node while 0 represents full transparency. pauseUpdates TypeDescriptionbooleanTrue/False to stop the automatic positioning/rotation of children components of a ViroARPlane. This does not stop onAnchorUpdated from being called. viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the container should be hidden. By default the container is visible and this value is true. renderingOrder TypeDescriptionnumberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. rotation TypeDescription[number, number, number]The rotation of the component around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. scale TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description here. transformBehaviors TypeDescriptionstring[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the box is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the box to always face the user at a particular rotation. Allowed values(values are case sensitive):&quot;billboard&quot;: Billboard object on x,y,z axis &quot;billboardX&quot;: Billboard object on the x axis&quot;billboardY&quot;: Billboard object on the y axis&quot;billboardZ&quot;: Billboard object on the z axis Methods setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A `ViroARPlane` is a component that allows developers to place components
relative to a plane discovered by the AR system. The process of attaching a
`ViroARPlane` to a plane discovered by the AR system is discussed in the next
section.
##
AnchoringAnchoring is our term for attaching virtual content to detected real-world
points/features (anchors). For `ViroARPlanes`, we support two types: manual
and automatic anchoring.
###
Automatic AnchoringTo enable automatic anchoring, the developer provides a `minHeight` and
`minWidth` to the `ViroARPlane` and adds the content they desire within the
`ViroARPlane` component. When the AR system finds a plane that matches the
given dimensions, the `ViroARPlane` will be anchored to the real world plane
and the child components will be made visible. Any updates to the real-world
plane will be given to the developer through the `onAnchorFound`,
`onAnchorUpdated`, and `onAnchorRemoved` callback functions.
######
Example use:JavaScript
     console.log('onAnchorFound')}
      onAnchorUpdated={() => console.log('onAnchorUpdated')}
      onAnchorRemoved={() => console.log('onAnchorRemoved')}>
###
Manual AnchoringIn manual anchoring, rather than having the platform determine which real-
world feature/anchor the `ViroARPlane` is attached to, the developer is
required to listen for all the anchors and "choose" the anchor they want the
`ViroARPlane` to attach to via the `anchorId` property. To listen for all the
anchors, the user should add `onAnchorFound`, `onAnchorUpdated` and
`onAnchorRemoved` listeners to their [ViroARScene](viroarscene.html) component
which will receive all anchors that the AR platform discovers.
######
Example use:JavaScript
     console.log('onAnchorFound', foundAnchor)}
      onAnchorUpdated={() => console.log('onAnchorUpdated')}
      onAnchorRemoved={() => console.log('onAnchorRemoved')}>
##
Props###
alignmentType| Description  
---|---  
"Horizontal" | "HorizontalUpward" | "HorizontalDownward" | "Vertical"| Specifies the desired alignment of a plane that this component will "anchor" to.The default value is "Horizontal".  
Don't forget to set the `anchorDetectionTypes` prop of
[ViroARScene](viroarscene.html) to tell the AR Session what type of planes to
discover.  
**Note: "HorizontalUpward" and "HorizontalDownward" are only supported in
Android.**  
**For Automatic Anchoring** , see [Anchoring](viroarplane.html#anchoring)  
###
anchorIdType| Description  
---|---  
string| **For Manual Anchoring** , see [Anchoring](viroarplane.html#anchoring)  
The ID of the anchor that the platform should anchor this `ViroARPlane` to. If
no [Anchor](viroarscene.html#anchor) has the specified anchorId, then plane
will not be visible until an `Anchor` appears with the same ID.  
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
"FixedDistance" | "FixedToWorld" | "FixedDistanceOrigin" | "FixedToPlane"| Determines the behavior of drag if **onDrag** is specified.  
**" FixedDistance":** Dragging is limited to a fixed radius around the user,
dragged from the point at which the user has grabbed the geometry containing
this draggable node  
**" FixedDistanceOrigin":** Dragging is limited to a fixed radius around the
user, dragged from the point of this node's position in world space.  
**" FixedToWorld":** Dragging is based on intersection with real world
objects. **Available only in AR**  
**" FixedToPlane":** Dragging is limited to a fixed plane around the user. The
configuration of this plane is defined by the **dragPlane** property.  
The default value is "FixedDistance".  
###
ignoreEventHandlingType| Description  
---|---  
boolean| When set to true, this control will ignore events and not prevent
controls behind it from receiving event callbacks.The default value is false.  
###
minHeightType| Description  
---|---  
number| **For Automatic Anchoring** , see
[Anchoring](viroarplane.html#anchoring) Specifies the minimum height, in
meters, of a plane that this component will "anchor" to.  
The default value is 0.  
###
minWidthType| Description  
---|---  
number| **For Automatic Anchoring** , see
[Anchoring](viroarplane.html#anchoring) Specifies the minimum width, in
meters, of a plane that this component will "anchor" to.  
The default value is 0.  
###
onAnchorFoundType| Description  
---|---  
(anchor) => void| Called when this component is anchored to a plane that is at
least `minHeight` by `minWidth` large. This is when the component is made
visible.  
anchor: see [Anchor](viroarscene.html#anchor)  
###
onAnchorRemovedType| Description  
---|---  
Function| Called when this component is detached from a plane and is no longer
visible.  
###
onAnchorUpdatedType| Description  
---|---  
(anchor) => void| Called when the plane to which this component is anchored is
updated.  
anchor: see [Anchor](viroarscene.html#anchor)  
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
onTransformUpdateSee [ViroNode onTransformUpdate](vironode.html#ontransformupdate).
###
opacityType| Description  
---|---  
number| A number from 0 to 1 that specifies the opacity of the container. A
value of 1 translates into a fully opaque node while 0 represents full
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
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
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