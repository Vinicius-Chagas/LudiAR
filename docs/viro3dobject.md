Example use: JavaScript{/* Objects need lights to be visible! */ } &lt;ViroAmbientLight color=&quot;#ffffff&quot; /&gt; &lt;Viro3DObject source={require(&quot;./res/spaceship.obj&quot;)} resources={[ require(&#x27;./res/spaceship.mtl&#x27;), require(&#x27;res/texture1.html&#x27;), require(&#x27;res/texture2.html&#x27;), require(&#x27;res/texture3.html&#x27;) ]} highAccuracyEvents={true} position={[1, 3, -5]} scale={[2, 2, 2]} rotation={[45, 0, 0]} type=&quot;OBJ&quot; transformBehaviors={[&quot;billboard&quot;]} /&gt;  🚧Model Not Appearing? Try adding a light&lt;ViroAmbientLight color=&quot;#FFFFFF&quot; /&gt;2\. Are your materials/textures in the right place? Most OBJ/FBX models expect their materials/textures in the same directory.3. Is your model scaled/positioned properly? Viro displays the object in a 1 to 1 mapping of vertex coordinates to world space, so if your object coordinates specify a 100x100x100 model, then it&#x27;ll appear 100x100x100 in Viro.4. If you are running into file path issues, make sure your rn-cli.config file has been updated with the correct extensions -&gt; Adding Asset Types  Props source (* required) TypeDescriptionImageSourcePropTypeThe object source, a remote URL or a local file resource. OBJ files accepted.To invoke with remote OBJ file:{ uri: &quot;http://example.org/myobject.obj&quot; } To invoke with local source:require(&#x27;./myobject.obj&#x27;) type (* required) TypeDescription&#x27;OBJ&#x27; | &#x27;VRX&#x27;Specify the 3d model file type being loaded, which can be OBJ or VRX. VRX is a custom model format for Viro. Currently, FBX files can be converted to VRX. For more information please see our Assets ssets] Guide. animation TypeDescriptionViroAnimationPropsA collection of parameters that determine if this component should animate. For more information on animated components please see our Animation Guide. Viro3DObject&#x27;s animation also contains a duration property, which allows you to override the default duration of the named skeletal or keyframe animation. This enables you to speed up or slow down baked animations. The duration is specified in milliseconds. dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedToPlane&quot; | &quot;FixedDistanceOrigin&quot;Determines the behavior of drag if onDrag is specified.&quot;FixedDistance&quot;: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable node&quot;FixedDistanceOrigin&quot;: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.&quot;FixedToWorld&quot;: Dragging is based on intersection with real world objects. Available only in AR&quot;FixedToPlane&quot;: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. The default value is &quot;FixedDistance&quot;. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). highAccuracyEvents TypeDescriptionbooleanTrue if events should use the geometry of the object to determine if the user is interacting with this object. If false, the object&#x27;s axis-aligned bounding box will be used instead. Enabling this is more accurate but takes more processing power, so it is set to false by default. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks.The default value is false. lightReceivingBitMask TypeDescriptionnumberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then the light will illuminate this object. For more information please see the Lighting and Materials Guide. materials TypeDescriptionstring[] | stringAn array of strings that each represent a material that was created via ViroMaterials.createMaterials(). If materials are set on a Viro3DObject, then any materials in the OBJ file (e.g. materials loaded from the MTL) will be discarded and replaced with these materials.Swapping textures is not supported for VRX files morphTargets TypeDescription{ target: string, weight: number }[]An array of dictionaries representing morph targets and its corresponding weight. Example usage:morphTargets={[{ target: &quot;thin&quot;, weight: 1.0 }]} onClick TypeDescriptionFunctionCalled when an object has been clicked. Example code:_onClick(position, source) { // user has clicked the object } The position parameter represents the position in world coordinates on the object where the click occurred. For the mapping of sources to controller inputs, see the Events section. onClickState TypeDescriptionFunctionCalled for each click state an object goes through as it is clicked. Supported click states and their values are the following:Click Down (1): Triggered when the user has performed a click down action while hovering on this control.Click Up (2): Triggered when the user has performed a click up action while hovering on this control.Clicked (3): Triggered when the user has performed both a click down and click up action on this control sequentially, thereby having &quot;Clicked&quot; the object. For the mapping of sources to controller inputs, see the Events section. onCollision TypeDescriptionFunctionCalled when this component&#x27;s physics body collides with another component&#x27;s physics body. Also invoked by ViroScene/ViroARScene&#x27;s findCollisions... functions.viroTag: the given viroTag (string) of the collided componentcollidedPoint: an array of numbers representing the position, in world coordinates, of the point of collisioncollidedNormal: an array representing the normal of the collision in world coordinates. onDrag TypeDescriptionFunctionCalled when the view is currently being dragged. The dragToPos parameter provides the current 3D location of the dragged object. Example code:_onDrag(dragToPos, source) { // dragtoPos[0]: x position // dragtoPos[1]: y position // dragtoPos[2]: z position } For the mapping of sources to controller inputs, see the Events section. Unsupported VR Platforms: Cardboard iOS onError TypeDescriptionCallback invoked when the OBJ model fails to load. The error message is contained in event.nativeEvent.error onFuse TypeDescription{ callback: Function, timeToFuse: number } | Function As shown above, onFuse takes one of the types - either a callback, or a dictionary with a callback and duration. It is called after the user hovers onto and remains hovered on the control for a certain duration of time, as indicated in timeToFuse that represents the duration of time in milliseconds. While hovering, the reticle will display a count down animation while fusing towards timeToFuse.Note that timeToFuse defaults to 2000ms.For example: _onFuse(source){ // User has hovered over object for timeToFuse milliseconds}For the mapping of sources to controller inputs, see the Events section. onHover TypeDescriptionFunctionCalled when the user hovers on or off the control.For example:_onHover(isHovering, position, source) { if(isHovering) { // user is hovering over the box } else { // user is no longer hovering over the box } } For the mapping of sources to controller inputs, see the Events section. onLoadEnd TypeDescriptionFunctionCallback invoked when the OBJ finishes loading, whether successful or in error. onLoadStart TypeDescriptionFunctionCallback invoked when the OBJ file starts loading. onPinch TypeDescriptionFunctionCalled when the user performs a pinch gesture on the control. When the pinch starts, the scale factor is set to 1 is relative to the points of the two touch points. For example:_onPinch(pinchState, scaleFactor, source) { if(pinchState == 3) { // update scale of obj by multiplying by scaleFactor when pinch ends. return; } //set scale using native props to reflect pinch. } pinchState can be the following values:Pinch Start (1): Triggered when the user has started a pinch gesture.Pinch Move (2): Triggered when the user has adjusted the pinch, moving both fingers.Pinch End (3): When the user has finishes the pinch gesture and released both touch points.This event is only available in AR. onRotate TypeDescriptionFunctionCalled when the user performs a rotation touch gesture on the control. Rotation factor is returned in degrees. When setting rotation, the rotation should be relative to it&#x27;s current rotation, not set to the absolute value of the given rotationFactor. For example:_onRotate(rotateState, rotationFactor, source) { if (rotateState == 3) { //set to current rotation - rotationFactor. return; } //update rotation using setNativeProps }, rotationState can be the following values:Rotation Start (1): Triggered when the user has started a rotation gesture.Rotation Move (2): Triggered when the user has adjusted the rotation, moving both fingers.Rotation End (3): When the user has finishes the rotation gesture and released both touch points.This event is only available in AR. onScroll TypeDescriptionFunctionCalled when the user performs a scroll action, while hovering on the control. For example:_onScroll(scrollPos, source) { // scrollPos[0]: x scroll position from 0.0 to 1.0. // scrollPos[1]: y scroll position from 0.0 to 1.0. } For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS)  onSwipe TypeDescriptionFunctionCalled when the user performs a swipe gesture on the physical controller, while hovering on this control. For example:_onSwipe(state, source) { if(state == 1) { // Swiped up } else if(state == 2) { // Swiped down } else if(state == 3) { // Swiped left } else if(state == 4) { // Swiped right } } For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS)  onTouch TypeDescriptionFunctionCalled when the user performs a touch action, while hovering on the control. Provides the touch state type, and the x/y coordinate at which this touch event has occurred.Touch Down (1): Triggered when the user makes physical contact with the touch pad on the controller.Touch Down Move (2): Called when the user moves around the touch pad immediately after having performed a Touch Down action.Touch Up (3): Triggered after the user is no longer in physical contact with the touch pad after a Touch Down action. For example:_onTouch(state, touchPos, source) { var touchX = touchPos[0]; var touchY = touchPos[1]; if(state == 1) { // Touch Down } else if(state == 2) { // Touch Down Move } else if(state == 3) { // Touch Up } } For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS). onTransformUpdate TypeDescriptionFunctionA function that is invoked when the component moves and provides an array of numbers representing the component&#x27;s position in world coordinates. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the object. A value of 1 translates into a fully opaque object while 0 represents full transparency. physicsBody TypeDescriptionPhysicsCreates and binds a physics body that is configured with the provided collection of physics properties associated with this control. For more information on physics components, please see the Physics Body API. position TypeDescription[number, number, number]Cartesian position of the object in 3d world space, specified as [x, y, z]. resources TypeDescriptionImageSourcePropType[]Array of resources that are required by the OBJ file. OBJ files may references MTL files for materials, and various images for textures. In order for the packager to find these resources, they must also be listed here as an array, each with the require() function. rotation TypeDescription[number, number, number]The rotation of the object around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. rotationPivot TypeDescription[number, number, number]Cartesian position in [x,y,z] about which rotation is applied relative to the component&#x27;s position. scale TypeDescription[number, number, number]The scale of the object in 3d space, specified as [x,y,z]. A scale of 1 represents the object&#x27;s current size. A scale value of &lt; 1 will make the object proportionally smaller while a value &gt;1 will make the object proportionally bigger along the specified axis. scalePivot TypeDescription[number, number, number]Cartesian position in [x,y,z] from which scale is applied relative to the component&#x27;s position. shadowCastingBitMask TypeDescriptionnumberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then this object will cast shadows from the light. For more information please see the Lighting and Materials Guide. transformBehaviors TypeDescriptionstring | string[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the object is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the object to always face the user. Allowed values (values are case sensitive):&#x27;billboard&#x27;: Billboard object on x,y,z axis&#x27;billboardX&#x27;: Billboard object on the x axis&#x27;billboardY&#x27;: Billboard object on the y axis&#x27;billboardZ&#x27;: Billboard object on the z axis viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the object should be hidden. By default the object is visible and this value is true. renderingOrder TypeDescriptionnumberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. Methods async getBoundingBoxAsync() Async function that returns the component&#x27;s bounding box in world coordinates. ArgumentsReturnsNoneReturns a Promise that will be completed with the following object:{ &quot;boundingBox&quot;: { &quot;minX&quot;: number, &quot;maxX&quot;: number, &quot;minY&quot;: number, &quot;maxY&quot;: number, &quot;minZ&quot;: number, &quot;maxZ&quot;: number } } async getTransformAsync() Async function that returns the component&#x27;s transform (position, scale and rotation). DescriptionReturnsNonetransform: an object that contains &quot;position&quot;, &quot;scale&quot; and &quot;rotation&quot; keys which point to number arrays applyImpulse(force: arrayOf(number), position: arrayOf(number)) A function used with physics to apply an impulse (instantaneous) force to an object with a physics body. ArgumentsReturnsNoneforce: an array of magnitudes to be applied as force (N) to the object in the positive x, y and z directions applyTorqueImpulse(torque: number[], position: number[]) A function used with physics to apply an impulse (instantaneous) torque to an object with a physics body. ArgumentsReturnstorque: an array of magnitudes to be applied as a torque (N * m) to the object in the positive x, y and z directions at the given positionposition: a position relative to the object from which to apply the given torque|None setVelocity(velocity: number[]) A function used with physics to set the velocity of an object with a physics body. ArgumentsReturnsvelocity: an array of numbers corresponding to x, y, and z velocityNone setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that displays a 3D Object that is positioned in world space.
######
Example use:JavaScript
    {/* Objects need lights to be visible! */ }
> ## 🚧
>
> Model Not Appearing?
>
>   1. Try adding a light``2\. Are your
> materials/textures in the right place? Most OBJ/FBX models expect their
> materials/textures in the same directory.3. Is your model scaled/positioned
> properly? Viro displays the object in a 1 to 1 mapping of vertex coordinates
> to world space, so if your object coordinates specify a 100x100x100 model,
> then it'll appear 100x100x100 in Viro.4. If you are running into file path
> issues, make sure your rn-cli.config file has been updated with the correct
> extensions -> [Adding Asset
> Types](https://docs.viromedia.com/docs/importing-assets#adding-asset-types)
>
##
Props###
source (* required)Type| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| The object
source, a remote URL or a local file resource. OBJ files accepted.To invoke
with remote OBJ file:  
`{ uri: "http://example.org/myobject.obj" }`  
To invoke with local source:  
`require('./myobject.obj')`  
###
type (* required)Type| Description  
---|---  
'OBJ' | 'VRX'| Specify the 3d model file type being loaded, which can be OBJ or VRX. VRX is a custom model format for Viro. Currently, FBX files can be converted to VRX. For more information please see our [Assets](assets.html) ssets] Guide.  
###
animationType| Description  
---|---  
[ViroAnimationProps](viroanimations.html#viroanimationprops)| A collection of
parameters that determine if this component should animate. For more
information on animated components please see our [Animation](animation.html)
Guide.  
Viro3DObject's animation also contains a `duration` property, which allows you
to override the default duration of the named skeletal or keyframe animation.
This enables you to speed up or slow down baked animations. The duration is
specified in milliseconds.  
###
dragTypeType| Description  
---|---  
"FixedDistance" | "FixedToWorld" | "FixedToPlane" | "FixedDistanceOrigin"| Determines the behavior of drag if **onDrag** is specified.  
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
dragPlaneType| Description  
---|---  
[ViroDragPlane](virodragplane.html)| When a drag type of "FixedToPlane" is
given, dragging is limited to a user defined plane. The dragging behavior is
then configured by this property (specified by a point on the plane and its
normal vector). You can also limit the maximum distance the dragged object is
allowed to travel away from the camera/controller (useful for situations where
the user can drag an object towards infinity).  
###
highAccuracyEventsType| Description  
---|---  
boolean| True if events should use the geometry of the object to determine if
the user is interacting with this object. If false, the object's axis-aligned
bounding box will be used instead. Enabling this is more accurate but takes
more processing power, so it is set to false by default.  
###
ignoreEventHandlingType| Description  
---|---  
boolean| When set to true, this control will ignore events and not prevent
controls behind it from receiving event callbacks.The default value is false.  
###
lightReceivingBitMaskType| Description  
---|---  
number| A bit mask that is bitwise and-ed (&) with each light's
influenceBitMask. If the result is > 0, then the light will illuminate this
object. For more information please see the [Lighting and Materials](lighting-
and-materials.html) Guide.  
###
materialsType| Description  
---|---  
string[] | string| An array of strings that each represent a material that was created via ViroMaterials.createMaterials(). If materials are set on a Viro3DObject, then any materials in the OBJ file (e.g. materials loaded from the MTL) will be discarded and replaced with these materials.  
**Swapping textures is not supported for VRX files**  
###
morphTargetsType| Description  
---|---  
`{ target: string, weight: number }[]`| An array of dictionaries representing
morph targets and its corresponding weight. Example usage:  
`morphTargets={[{ target: "thin", weight: 1.0 }]}`  
###
onClickType| Description  
---|---  
Function| Called when an object has been clicked.  
Example code:  
`_onClick(position, source) { // user has clicked the object }`  
The position parameter represents the position in world coordinates on the
object where the click occurred. For the mapping of sources to controller
inputs, see the [Events](https://viro-community.readme.io/docs/events)
section.  
###
onClickStateType| Description  
---|---  
Function| Called for each click state an object goes through as it is clicked.
Supported click states and their values are the following:  
**Click Down (1):** Triggered when the user has performed a click down action
while hovering on this control.  
**Click Up (2):** Triggered when the user has performed a click up action
while hovering on this control.  
**Clicked (3):** Triggered when the user has performed both a click down and
click up action on this control sequentially, thereby having "Clicked" the
object.  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section.  
###
onCollisionType| Description  
---|---  
Function| Called when this component's physics body collides with another
component's physics body. Also invoked by
[ViroScene](viroscene.html)/[ViroARScene](viroarscene.html)'s
`findCollisions...` functions.  
**viroTag:** the given viroTag (string) of the collided component  
**collidedPoint:** an array of numbers representing the position, in world
coordinates, of the point of collision  
**collidedNormal:** an array representing the normal of the collision in world
coordinates.  
###
onDragType| Description  
---|---  
Function| Called when the view is currently being dragged. The dragToPos
parameter provides the current 3D location of the dragged object.  
Example code:  
`_onDrag(dragToPos, source) { // dragtoPos[0]: x position // dragtoPos[1]: y
position // dragtoPos[2]: z position }`  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section. **Unsupported
VR Platforms: Cardboard iOS**  
###
onErrorType| Description  
---|---  
| Callback invoked when the OBJ model fails to load. The error message is
contained in event.nativeEvent.error  
###
onFuseType| Description  
---|---  
`{ callback: Function, timeToFuse: number } | Function `| As shown above, onFuse takes one of the types - either a callback, or a dictionary with a callback and duration. It is called after the user hovers onto and remains hovered on the control for a certain duration of time, as indicated in timeToFuse that represents the duration of time in milliseconds. While hovering, the reticle will display a count down animation while fusing towards timeToFuse.Note that timeToFuse defaults to 2000ms.For example:` _onFuse(source){ // User has hovered over object for timeToFuse milliseconds}`For the mapping of sources to controller inputs, see the [Events](https://viro-community.readme.io/docs/events) section.  
###
onHoverType| Description  
---|---  
Function| Called when the user hovers on or off the control.For example:  
`_onHover(isHovering, position, source) { if(isHovering) { // user is hovering
over the box } else { // user is no longer hovering over the box } }`  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section.  
###
onLoadEndType| Description  
---|---  
Function| Callback invoked when the OBJ finishes loading, whether successful
or in error.  
###
onLoadStartType| Description  
---|---  
Function| Callback invoked when the OBJ file starts loading.  
###
onPinchType| Description  
---|---  
Function| Called when the user performs a pinch gesture on the control. When
the pinch starts, the scale factor is set to 1 is relative to the points of
the two touch points.  
For example:  
`_onPinch(pinchState, scaleFactor, source) { if(pinchState == 3) { // update
scale of obj by multiplying by scaleFactor when pinch ends. return; } //set
scale using native props to reflect pinch. }`  
pinchState can be the following values:  
**Pinch Start (1):** Triggered when the user has started a pinch gesture.  
**Pinch Move (2):** Triggered when the user has adjusted the pinch, moving
both fingers.  
**Pinch End (3):** When the user has finishes the pinch gesture and released
both touch points.  
**This event is only available in AR**.  
###
onRotateType| Description  
---|---  
Function| Called when the user performs a rotation touch gesture on the
control. Rotation factor is returned in degrees.  
When setting rotation, the rotation should be relative to it's current
rotation, _not_ set to the absolute value of the given rotationFactor.  
For example:  
`_onRotate(rotateState, rotationFactor, source) { if (rotateState == 3) {
//set to current rotation - rotationFactor. return; } //update rotation using
setNativeProps },`  
rotationState can be the following values:  
**Rotation Start (1):** Triggered when the user has started a rotation
gesture.  
**Rotation Move (2):** Triggered when the user has adjusted the rotation,
moving both fingers.  
**Rotation End (3):** When the user has finishes the rotation gesture and
released both touch points.  
**This event is only available in AR**.  
###
onScrollType| Description  
---|---  
Function| Called when the user performs a scroll action, while hovering on the
control.  
For example:  
`_onScroll(scrollPos, source) { // scrollPos[0]: x scroll position from 0.0 to
1.0. // scrollPos[1]: y scroll position from 0.0 to 1.0. }`  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section.  
**Unsupported VR Platforms: Cardboard(Android and iOS)**  
###
onSwipeType| Description  
---|---  
Function| Called when the user performs a swipe gesture on the physical
controller, while hovering on this control.  
For example:  
`_onSwipe(state, source) { if(state == 1) { // Swiped up } else if(state == 2)
{ // Swiped down } else if(state == 3) { // Swiped left } else if(state == 4)
{ // Swiped right } }`  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section.  
**Unsupported VR Platforms: Cardboard(Android and iOS)**  
###
onTouchType| Description  
---|---  
Function| Called when the user performs a touch action, while hovering on the
control. Provides the touch state type, and the x/y coordinate at which this
touch event has occurred.  
**Touch Down (1):** Triggered when the user makes physical contact with the
touch pad on the controller.  
**Touch Down Move (2):** Called when the user moves around the touch pad
immediately after having performed a Touch Down action.  
**Touch Up (3):** Triggered after the user is no longer in physical contact
with the touch pad after a Touch Down action.  
For example:  
`_onTouch(state, touchPos, source) { var touchX = touchPos[0]; var touchY =
touchPos[1]; if(state == 1) { // Touch Down } else if(state == 2) { // Touch
Down Move } else if(state == 3) { // Touch Up } }`  
For the mapping of sources to controller inputs, see the
[Events](https://viro-community.readme.io/docs/events) section.  
**Unsupported VR Platforms: Cardboard(Android and iOS).**  
###
onTransformUpdateType| Description  
---|---  
Function| A function that is invoked when the component moves and provides an
array of numbers representing the component's position in world coordinates.  
###
opacityType| Description  
---|---  
number| A number from 0 to 1 that specifies the opacity of the object. A value
of 1 translates into a fully opaque object while 0 represents full
transparency.  
###
physicsBodyType| Description  
---|---  
[Physics](physics.html#physicsbody-api)| Creates and binds a physics body that
is configured with the provided collection of physics properties associated
with this control. For more information on physics components, please see the
[Physics Body API](physics.html#physicsbody-api).  
###
positionType| Description  
---|---  
[number, number, number]| Cartesian position of the object in 3d world space,
specified as [x, y, z].  
###
resourcesType| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)[]| Array of
resources that are required by the OBJ file. OBJ files may references MTL
files for materials, and various images for textures. In order for the
packager to find these resources, they must also be listed here as an array,
each with the require() function.  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the object around it's local axis
specified as Euler angles [x, y, z]. Units for each angle are specified in
degrees.  
###
rotationPivotType| Description  
---|---  
[number, number, number]| Cartesian position in [x,y,z] about which rotation
is applied relative to the component's position.  
###
scaleType| Description  
---|---  
[number, number, number]| The scale of the object in 3d space, specified as
[x,y,z]. A scale of 1 represents the object's current size. A scale value of 1 will make the
object proportionally bigger along the specified axis.  
###
scalePivotType| Description  
---|---  
[number, number, number]| Cartesian position in [x,y,z] from which scale is
applied relative to the component's position.  
###
shadowCastingBitMaskType| Description  
---|---  
number| A bit mask that is bitwise and-ed (&) with each light's
influenceBitMask. If the result is > 0, then this object will cast shadows
from the light. For more information please see the [Lighting and
Materials](https://viro-community.readme.io/docs/3d-scene-lighting) Guide.  
###
transformBehaviorsType| Description  
---|---  
string | string[]| An array of transform constraints that affect the transform of the object. For example, putting the value "billboard" will ensure the object is facing the user as the user rotates their head on any axis. This is useful for icons or text where you'd like the object to always face the user.  
Allowed values (values are case sensitive):  
**' billboard':** Billboard object on x,y,z axis  
**' billboardX':** Billboard object on the x axis  
**' billboardY':** Billboard object on the y axis  
**' billboardZ':** Billboard object on the z axis  
###
viroTagType| Description  
---|---  
string| A tag given to other components when their physics body collides with
this component's physics body. Refer to [physics](physics.html) for more
information.  
###
visibleType| Description  
---|---  
boolean| False if the object should be hidden. By default the object is
visible and this value is true.  
###
renderingOrderType| Description  
---|---  
number| This determines the order in which this Node is rendered relative to
other Nodes. Nodes with greater rendering orders are rendered last. The
default rendering order is zero. For example, setting a Node's rendering order
to -1 will cause the Node to be rendered before all Nodes with rendering
orders greater than or equal to 0.  
##
Methods###
async getBoundingBoxAsync()[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's bounding box in world coordinates.
Arguments| Returns  
---|---  
None| Returns a [Promise](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be
completed with the following object:  
`{ "boundingBox": { "minX": number, "maxX": number, "minY": number, "maxY":
number, "minZ": number, "maxZ": number } }`  
###
async getTransformAsync()[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's transform (position, scale and rotation).
Description| Returns  
---|---  
None| **transform:** an object that contains "position", "scale" and
"rotation" keys which point to number arrays  
###
applyImpulse(force: arrayOf(number), position: arrayOf(number))A function used with [physics](physics.html) to apply an impulse
(instantaneous) force to an object with a physics body.
Arguments| Returns  
---|---  
None| **force:** an array of magnitudes to be applied as force (N) to the
object in the positive x, y and z directions  
###
applyTorqueImpulse(torque: number[], position: number[])A function used with [physics](physics.html) to apply an impulse
(instantaneous) torque to an object with a physics body.
Arguments| Returns  
---|---  
**torque:** an array of magnitudes to be applied as a torque (N * m) to the
object in the positive x, y and z directions at the given position  
**position:** a position relative to the object from which to apply the given
torque|| None  
###
setVelocity(velocity: number[])A function used with [physics](physics.html) to set the velocity of an object
with a physics body.
Arguments| Returns  
---|---  
**velocity:** an array of numbers corresponding to x, y, and z velocity| None  
###
setNativeProps(nativeProps)A wrapper function around the native component's setNativeProps which allow
users to set values on the native component without changing state/setting
props and re-rendering. Refer to the React Native documentation on [Direct
Manipulation](https://facebook.github.io/react-native/docs/direct-
manipulation.html) for more information.
Parameter| Type| Description  
---|---|---  
nativeProps| object| an object where the keys are the properties to set and
the values are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago