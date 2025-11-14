Example use: JavaScript&lt;ViroImage height={2} width={2} placeholderSource={require(&quot;./res/local_spinner.jpg&quot;)} source={{ uri: &quot;https://my_s3_image.jpg&quot; }} /&gt;  Props Required Props sourcePropTypes.oneOfType( [PropTypes.shape( {uri: PropTypes.string} ), PropTypes.number] )The image source, a remote URL or a local file resource. PNG and JPG images accepted.To invoke with remote url: {uri:&quot;http://example.org/myimage.png&quot;}To invoke with local source:require(&#x27;image.html&#x27;); animation TypeDescriptionPropTypes.shape({ name: PropTypes.string, delay: PropTypes.number, loop: PropTypes.bool, onStart: PropTypes.func, onFinish: PropTypes.func, run: PropTypes.bool, })A collection of parameters that determine if this component should animate. For more information on animated components please see our Animation Guide. dragPlane TypeDescriptionPropTypes.shape({ planePoint:PropTypes.arrayOf(PropTypes.number), planeNormal:PropTypes.arrayOf(PropTypes.number), maxDistance:PropTypes.number})When a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescriptionPropTypes.oneOf([&quot;FixedDistance&quot;, &quot;FixedToWorld&quot;])Determines the behavior of drag if onDrag is specified.|Value|Description||:------|:----------:||FixedDistance| Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable node||FixedDistanceOrigin| Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.||FixedToWorld| Dragging is based on intersection with real world objects. Available only in AR ||FixedToPlane| Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property.|The default value is &quot;FixedDistance&quot;. format TypeDescriptionPropTypes.oneOf([&#x27;RGBA8&#x27;, &#x27;RGBA4&#x27;, &#x27;RGB565&#x27;])Image texture formats for storage on the GPU.|Format|Description||:------|:----------:||RGBA8| Each pixel is described with 32-bits, using eight bits per channel||RGBA4| Each pixel is described with 16 bits, using four bits per channel||RGB565| Formats the picture into 16 bit color values without alpha| height TypeDescriptionPropTypes.numberThe height of the image in 3D space. Default value is 1. highAccuracyEvents TypeDescriptionPropTypes.boolTrue if events should use the geometry of the object to determine if the user is interacting with this object. If false, the object&#x27;s axis-aligned bounding box will be used instead. Enabling this is more accurate but takes more processing power, so it is set to false by default. ignoreEventHandling TypeDescriptionPropTypes.boolWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks.The default value is false. imageClipMode TypeDescriptionPropTypes.oneOf([&#x27;None&#x27;, &#x27;ClipToBounds&#x27;])Defaults to clipToBounds. If ClipToBounds is set, image is cropped if it overshoots with ScaleToFill. Setting to None does not crop image if it overshoots bounds. lightReceivingBitMask TypeDescriptionPropTypes.numberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then the light will illuminate this object. For more information please see the Lighting and Materials Guide. materials TypeDescriptionPropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string),PropTypes.string])An array of strings that each represent a material that was created via ViroMaterials.createMaterials(). ViroImage takes 1 material. The diffuseTexture of the material will be the image shown unless a source prop is specified. The other material properties will preserve as the source prop changes. mipmap TypeDescriptionPropTypes.boolIf true, we dynamically generate mipmaps for the source of this given image. onClick TypeDescriptionReact.PropTypes.funcCalled when an object has been clicked.Example code: _onClick(position, source) { // user has clicked the object}The position parameter represents the position in world coordinates on the object where the click occurred. For the mapping of sources to controller inputs, see the Events section. onClickState TypeDescriptionReact.PropTypes.funcCalled for each click state an object goes through as it is clicked. Supported click states and their values are the following:|State Value|Description||:------|:----------:||1| Click Down: Triggered when the user has performed a click down action while hovering on this control.||2| Click Up: Triggered when the user has performed a click up action while hovering on this control.||3| Clicked: Triggered when the user has performed both a click down and click up action on this control sequentially, thereby having &quot;Clicked&quot; the object.|Example code: _onClickState(stateValue, position, source) { if(stateValue == 1) { // Click Down } else if(stateValue == 2) { // Click Up } else if(stateValue == 3) { // Clicked }}For the mapping of sources to controller inputs, see the Events section. onCollision TypeDescriptionReact.PropTypes.funcCalled when this component&#x27;s physics body collides with another component&#x27;s physics body. Also invoked by ViroScene/ViroARScene&#x27;s findCollisions... functions.|Return Value | Description ||---|---||viroTag | the given viroTag (string) of the collided component ||collidedPoint | an array of numbers representing the position, in world coordinates, of the point of collision||collidedNormal | an array representing the normal of the collision in world coordinates. | onDrag TypeDescriptionReact.PropTypes.funcCalled when the view is currently being dragged. The dragToPos parameter provides the current 3D location of the dragged object. Example code: _onDrag(dragToPos, source) { // dragtoPos[0]: x position // dragtoPos[1]: y position // dragtoPos[2]: z position} For the mapping of sources to controller inputs, see the Events section. Unsupported VR Platforms: Cardboard iOS onFuse TypeDescriptionPropTypes.oneOfType PropTypes.oneOfType([ React.PropTypes.shape({ callback: React.PropTypes.func.isRequired, timeToFuse: PropTypes.number }), React.PropTypes.func,]) As shown above, onFuse takes one of the types - either a callback, or a dictionary with a callback and duration. It is called after the user hovers onto and remains hovered on the control for a certain duration of time, as indicated in timeToFuse that represents the duration of time in milliseconds. While hovering, the reticle will display a count down animation while fusing towards timeToFuse.Note that timeToFuse defaults to 2000ms.For example: _onFuse(source){ // User has hovered over object for timeToFuse milliseconds}For the mapping of sources to controller inputs, see the Events section. onHover TypeDescriptionReact.PropTypes.funcCalled when the user hovers on or off the control.For example: _onHover(isHovering, position, source) { if(isHovering) { // user is hovering over the box } else { // user is no longer hovering over the box }}The position parameter represents the position in world coordinates on the object where the click occurred. For the mapping of sources to controller inputs, see the Events section. onError TypeDescriptionReact.PropTypes.funcCallback invoked when the Image fails to load. The error message is contained in event.nativeEvent.error onLoadStart TypeDescriptionReact.PropTypes.funcCallback triggered when we are processing the image to be displayed as specified by the source prop. onLoadEnd TypeDescriptionReact.PropTypes.funcCallback triggered when we have finished loading the image to be displayed. Whether or not the image was loaded and displayed properly will be indicated by the parameter &quot;success&quot;. For example: _onLoadEnd(event:Event) { // Indication of asset loading success if(event.nativeEvent.success) { //our image successfully loaded! } } onPinch TypeDescriptionReact.PropTypes.funcCalled when the user performs a pinch gesture on the control. When the pinch starts, the scale factor is set to 1 is relative to the points of the two touch points. For example: _onPinch(pinchState, scaleFactor, source) { if(pinchState == 3) { // update scale of obj by multiplying by scaleFactor when pinch ends. return; } //set scale using native props to reflect pinch. }pinchState can be the following values:|State Value|Description||:------|:----------:||1| Pinch Start: Triggered when the user has started a pinch gesture.||2| Pinch Move: Triggered when the user has adjusted the pinch, moving both fingers. ||3| Pinch End: When the user has finishes the pinch gesture and released both touch points. |This event is only available in AR. onRotate TypeDescriptionReact.PropTypes.funcCalled when the user performs a rotation touch gesture on the control. Rotation factor is returned in degrees.When setting rotation, the rotation should be relative to it&#x27;s current rotation, not set to the absolute value of the given rotationFactor.For example: _onRotate(rotateState, rotationFactor, source) { if (rotateState == 3) { //set to current rotation - rotationFactor. return; } //update rotation using setNativeProps },rotateState can be the following values:|State Value|Description||:------|:----------:||1| Rotation Start: Triggered when the user has started a rotation gesture.||2| Rotation Move: Triggered when the user has adjusted the rotation, moving both fingers. ||3| Rotation End: When the user has finishes the rotation gesture and released both touch points. |This event is only available in AR. onScroll TypeDescriptionReact.PropTypes.funcCalled when the user performs a scroll action, while hovering on the control.For example: _onScroll(scrollPos, source) { // scrollPos[0]: x scroll position from 0.0 to 1.0. // scrollPos[1]: y scroll position from 0.0 to 1.0.}For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS) onSwipe TypeDescriptionReact.PropTypes.funcCalled when the user performs a swipe gesture on the physical controller, while hovering on this control. For example: _onSwipe(state, source) { if(state == 1) { // Swiped up } else if(state == 2) { // Swiped down } else if(state == 3) { // Swiped left } else if(state == 4) { // Swiped right }}For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS) onTouch TypeDescriptionReact.PropTypes.funcCalled when the user performs a touch action, while hovering on the control. Provides the touch state type, and the x/y coordinate at which this touch event has occurred.|State Value|Description||:------|:----------:||1| Touch Down: Triggered when the user makes physical contact with the touch pad on the controller. ||2| Touch Down Move: Called when the user moves around the touch pad immediately after having performed a Touch Down action. ||3| Touch Up: Triggered after the user is no longer in physical contact with the touch pad after a Touch Down action. |For example: _onTouch(state, touchPos, source) { var touchX = touchPos[0]; var touchY = touchPos[1]; if(state == 1) { // Touch Down } else if(state == 2) { // Touch Down Move } else if(state == 3) { // Touch Up }}For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard(Android and iOS). onTransformUpdate TypeDescriptionPropTypes.funcA function that is invoked when the component moves and provides an array of numbers representing the component&#x27;s position in world coordinates. opacity TypeDescriptionPropTypes.numberA number from 0 to 1 that specifies the opacity of the object. A value of 1 translates into a fully opaque object while 0 represents full transparency. placeholderSource TypeDescriptionPropTypes.oneOfType([ PropTypes.shape({ uri: PropTypes.string }), PropTypes.number ])A static placeholder image that is shown until the source image is loaded it. It not specified, nothing will show until the source image is finished loading. PNG and JPG images accepted.Example:To invoke with local source:require(&#x27;image_placeholder.html&#x27;); position TypeDescriptionPropTypes.arrayOf(PropTypes.number)Cartesian position in 3D space, stored as [x, y, z]. physicsBody TypeDescriptionPropTypes.shape({..physics.api..}),Creates and binds a physics body that is configured with the provided collection of physics properties associated with this control.For more information on physics components, please see the physics.api. resizeMode TypeDescriptionPropTypes.oneOf([&#x27;ScaleToFill&#x27;,&#x27;ScaleToFit&#x27;,&#x27;StretchToFill&#x27;]),If not specified, the default value is stretchToFill.|Value|Description||:------|:----------:||scaleToFill | Scale the image up to fit the component width or height. Aspect ratio is preserved. ||scaleToFit | Scale the image down to fit the component width or height. Aspect ratio is preserved. ||stretchToFill | Stretch the image to fit on the entire surface of the ViroImage component. Aspect ratio is not preserved.| rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)The rotation of the transform in world space stored as Euler angles [x, y, z]. Units for each angle are specified in degrees. rotationPivot TypeDescriptionPropTypes.arrayOf(PropTypes.number) Cartesian position in [x,y,z] about which rotation is applied relative to the component&#x27;s position. scale TypeDescriptionPropTypes.arrayOf(PropTypes.number)The scale of the image in 3D space, specified as [x,y,z]. A scale of 1 represents the current size of the image. A scale value of &lt; 1 will make the image proportionally smaller while a value &gt;1 will make the image proportionally bigger along the specified axis. scalePivot TypeDescriptionPropTypes.arrayOf(PropTypes.number) Cartesian position in [x,y,z] from which scale is applied relative to the component&#x27;s position. shadowCastingBitMask TypeDescriptionPropTypes.numberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then this object will cast shadows from the light. For more information please see the Lighting and Materials Guide. stereoMode TypeDescriptionPropTypes.oneOf([&#x27;leftRight&#x27;, &#x27;rightLeft&#x27;, &#x27;topBottom&#x27;, &#x27;bottomTop&#x27;, &#x27;none&#x27;])Specifies the alignment mode of the provided stereo image in source. The image will be rendered in the given order, the first being the left eye, the next the right eye.For example, leftRight will render the left half of the image to the left eye, and the right half of the image to the right eye. Similarly, topBottom will render the top half of the image to the left eye, and the bottom half of the image to the right eye. Defaults to none.Note: There&#x27;s a known issue with stereoscopic images of the format RGB565 (the fix is on the roadmap). style TypeDescriptionstylePropTypeStyle properties determine the position and scale of the component within a ViroFlexView. Please see the UI Controls &amp; Flexbox guide and Styles reference for more information. transformBehaviors TypeDescriptionPropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string),PropTypes.string])An array of transform constraints that affect the transform of the image. For example, putting the value &quot;billboard&quot; will ensure the image is facing the user as the user rotates their head on any axis. This is useful for having the image always face the user on a particular axis, which especially useful for tappable icons.Allowed values(values are case sensitive):|Value|Description||:------|:----------:||billboard| Billboard object on x,y,z axis ||billboardX| Billboard object on the x axis||billboardY| Billboard object on the y axis| viroTag TypeDescriptionPropTypes.stringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionPropTypes.boolFalse if the image should be hidden. By default the button is visible and this value is true. width TypeDescriptionPropTypes.numberThe width of the image in 3D space. Default value is 1. renderingOrder TypeDescriptionPropTypes.numberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. Methods async getBoundingBoxAsync()Async function that returns the component&#x27;s bounding box in world coordinates.Returns a Promise that will be completed with the following object:{ `boundingBox` : { `minX` : number, `maxX` : number, `minY` : number, `maxY` : number, `minZ` : number, `maxZ` : number }} async getTransformAsync()Async function that returns the component&#x27;s transform (position, scale and rotation).|Return value | Description||---|---|| transform | an object that contains &quot;position&quot;, &quot;scale&quot; and &quot;rotation&quot; keys which point to number arrays | applyImpulse(force: arrayOf(number), position: arrayOf(number))A function used with physics to apply an impulse (instantaneous) force to an object with a physics body.|Parameter|Description||---|---||force |an array of magnitudes to be applied as force (N) to the object in the positive x, y and z directions| applyTorqueImpulse(torque: arrayOf(number), position: arrayOf(number))A function used with physics to apply an impulse (instantaneous) torque to an object with a physics body.|Parameter|Description||---|---||torque |an array of magnitudes to be applied as a torque (N * m) to the object in the positive x, y and z directions at the given position||position | a position relative to the object from which to apply the given torque| setVelocity(velocity: arrayOf(number))A function used with physics to set the velocity of an object with a physics body.|Parameter|Description||---|---||velocity | an array of numbers corresponding to x, y, and z velocity | setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] });  Static Methods evictFromCache(source)source \- PropTypes.oneOfType( [PropTypes.shape( {uri: PropTypes.string} ), PropTypes.number] )The given source will be purged from the memory and local storage cache of the device. On Android, Viro, like React-Native, uses the Fresco image library to load and cache images and this is required if the given source reference (uri, etc) is the same, but the image data changes. Android Only " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component used to display 2D images.
######
Example use:JavaScript
##
Props##
Required Props|  
---|---  
**source**| **PropTypes.oneOfType( [PropTypes.shape( {uri: PropTypes.string}
), PropTypes.number] )** The image source, a remote URL or a local file
resource. PNG and JPG images accepted.To invoke with remote url:
`{uri:"http://example.org/myimage.png"}`To invoke with local
source:`require('image.html');`  
###
animationType| Description  
---|---  
| **PropTypes.shape({ name: PropTypes.string, delay: PropTypes.number, loop:
PropTypes.bool, onStart: PropTypes.func, onFinish: PropTypes.func, run:
PropTypes.bool, })** A collection of parameters that determine if this
component should animate. For more information on animated components please
see our [Animation](animation.html) Guide.  
###
dragPlaneType| Description  
---|---  
| **PropTypes.shape({ planePoint:PropTypes.arrayOf(PropTypes.number),
planeNormal:PropTypes.arrayOf(PropTypes.number),
maxDistance:PropTypes.number})** When a drag type of "FixedToPlane" is given,
dragging is limited to a user defined plane. The dragging behavior is then
configured by this property (specified by a point on the plane and its normal
vector). You can also limit the maximum distance the dragged object is allowed
to travel away from the camera/controller (useful for situations where the
user can drag an object towards infinity).  
###
dragTypeType| Description  
---|---  
| **PropTypes.oneOf([ "FixedDistance", "FixedToWorld"])**Determines the
behavior of drag if **onDrag** is
specified.|Value|Description||:------|:----------:||FixedDistance| Dragging is
limited to a fixed radius around the user, dragged from the point at which the
user has grabbed the geometry containing this draggable
node||FixedDistanceOrigin| Dragging is limited to a fixed radius around the
user, dragged from the point of this node's position in world
space.||FixedToWorld| Dragging is based on intersection with real world
objects. **Available only in AR** ||FixedToPlane| Dragging is limited to a
fixed plane around the user. The configuration of this plane is defined by the
**dragPlane** property.|The default value is "FixedDistance".  
###
formatType| Description  
---|---  
| **PropTypes.oneOf([ 'RGBA8', 'RGBA4', 'RGB565'])**Image texture formats for
storage on the GPU.|Format|Description||:------|:----------:||RGBA8| Each
pixel is described with 32-bits, using eight bits per channel||RGBA4| Each
pixel is described with 16 bits, using four bits per channel||RGB565| Formats
the picture into 16 bit color values without alpha|  
###
heightType| Description  
---|---  
| **PropTypes.number** The height of the image in 3D space. Default value is
1.  
###
highAccuracyEventsType| Description  
---|---  
| **PropTypes.bool** True if events should use the geometry of the object to
determine if the user is interacting with this object. If false, the object's
axis-aligned bounding box will be used instead. Enabling this is more accurate
but takes more processing power, so it is set to false by default.  
###
ignoreEventHandlingType| Description  
---|---  
| **PropTypes.bool** When set to true, this control will ignore events and not
prevent controls behind it from receiving event callbacks.The default value is
false.  
###
imageClipModeType| Description  
---|---  
| **PropTypes.oneOf([ 'None', 'ClipToBounds'])**Defaults to clipToBounds. If
`ClipToBounds` is set, image is cropped if it overshoots with `ScaleToFill`.
Setting to `None` does not crop image if it overshoots bounds.  
###
lightReceivingBitMaskType| Description  
---|---  
| **PropTypes.number** A bit mask that is bitwise and-ed (&) with each light's
influenceBitMask. If the result is > 0, then the light will illuminate this
object. For more information please see the [Lighting and Materials](lighting-
and-materials.html) Guide.  
###
materialsType| Description  
---|---  
|
**PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string),PropTypes.string])**
An array of strings that each represent a material that was created via
ViroMaterials.createMaterials(). ViroImage takes 1 material. The
diffuseTexture of the material will be the image shown unless a source prop is
specified. The other material properties will preserve as the source prop
changes.  
###
mipmapType| Description  
---|---  
| **PropTypes.bool** If true, we dynamically generate mipmaps for the source
of this given image.  
###
onClickType| Description  
---|---  
| **React.PropTypes.func** Called when an object has been clicked.Example
code:` _onClick(position, source) { // user has clicked the object}`The
position parameter represents the position in world coordinates on the object
where the click occurred. For the mapping of sources to controller inputs, see
the [Events](input-events.html) section.  
###
onClickStateType| Description  
---|---  
| **React.PropTypes.func** Called for each click state an object goes through
as it is clicked. Supported click states and their values are the
following:|State Value|Description||:------|:----------:||1| Click Down:
Triggered when the user has performed a click down action while hovering on
this control.||2| Click Up: Triggered when the user has performed a click up
action while hovering on this control.||3| Clicked: Triggered when the user
has performed both a click down and click up action on this control
sequentially, thereby having "Clicked" the object.|Example code:`
_onClickState(stateValue, position, source) { if(stateValue == 1) { // Click
Down } else if(stateValue == 2) { // Click Up } else if(stateValue == 3) { //
Clicked }}`For the mapping of sources to controller inputs, see the
[Events](input-events.html) section.  
###
onCollisionType| Description  
---|---  
| **React.PropTypes.func** Called when this component's physics body collides with another component's physics body. Also invoked by [ViroScene](viroscene.html)/[ViroARScene](viroarscene.html)'s `findCollisions...` functions.|Return Value | Description ||---|---||viroTag | the given viroTag (string) of the collided component ||collidedPoint | an array of numbers representing the position, in world coordinates, of the point of collision||collidedNormal | an array representing the normal of the collision in world coordinates. |  
###
onDragType| Description  
---|---  
| **React.PropTypes.func** Called when the view is currently being dragged.
The dragToPos parameter provides the current 3D location of the dragged
object. Example code:` _onDrag(dragToPos, source) { // dragtoPos[0]: x
position // dragtoPos[1]: y position // dragtoPos[2]: z position}` For the
mapping of sources to controller inputs, see the [Events](input-events.html)
section. Unsupported VR Platforms: Cardboard iOS  
###
onFuseType| Description  
---|---  
| **PropTypes.oneOfType**` PropTypes.oneOfType([ React.PropTypes.shape({
callback: React.PropTypes.func.isRequired, timeToFuse: PropTypes.number }),
React.PropTypes.func,])` As shown above, onFuse takes one of the types -
either a callback, or a dictionary with a callback and duration. It is called
after the user hovers onto and remains hovered on the control for a certain
duration of time, as indicated in timeToFuse that represents the duration of
time in milliseconds. While hovering, the reticle will display a count down
animation while fusing towards timeToFuse.Note that timeToFuse defaults to
2000ms.For example:` _onFuse(source){ // User has hovered over object for
timeToFuse milliseconds}`For the mapping of sources to controller inputs, see
the [Events](input-events.html) section.  
###
onHoverType| Description  
---|---  
| **React.PropTypes.func** Called when the user hovers on or off the
control.For example:` _onHover(isHovering, position, source) { if(isHovering)
{ // user is hovering over the box } else { // user is no longer hovering over
the box }}`The position parameter represents the position in world coordinates
on the object where the click occurred. For the mapping of sources to
controller inputs, see the [Events](input-events.html) section.  
###
onErrorType| Description  
---|---  
| **React.PropTypes.func** Callback invoked when the Image fails to load. The
error message is contained in event.nativeEvent.error  
###
onLoadStartType| Description  
---|---  
| **React.PropTypes.func** Callback triggered when we are processing the image
to be displayed as specified by the source prop.  
###
onLoadEndType| Description  
---|---  
| **React.PropTypes.func** Callback triggered when we have finished loading
the image to be displayed. Whether or not the image was loaded and displayed
properly will be indicated by the parameter "success". For example:
_onLoadEnd(event:Event) { // Indication of asset loading success
if(event.nativeEvent.success) { //our image successfully loaded! } }  
###
onPinchType| Description  
---|---  
| **React.PropTypes.func** Called when the user performs a pinch gesture on
the control. When the pinch starts, the scale factor is set to 1 is relative
to the points of the two touch points. For example:` _onPinch(pinchState,
scaleFactor, source) { if(pinchState == 3) { // update scale of obj by
multiplying by scaleFactor when pinch ends. return; } //set scale using native
props to reflect pinch. }`pinchState can be the following values:|State
Value|Description||:------|:----------:||1| Pinch Start: Triggered when the
user has started a pinch gesture.||2| Pinch Move: Triggered when the user has
adjusted the pinch, moving both fingers. ||3| Pinch End: When the user has
finishes the pinch gesture and released both touch points. |**This event is
only available in AR**.  
###
onRotateType| Description  
---|---  
| **React.PropTypes.func** Called when the user performs a rotation touch
gesture on the control. Rotation factor is returned in degrees.When setting
rotation, the rotation should be relative to it's current rotation, _not_ set
to the absolute value of the given rotationFactor.For example:`
_onRotate(rotateState, rotationFactor, source) { if (rotateState == 3) { //set
to current rotation - rotationFactor. return; } //update rotation using
setNativeProps },`rotateState can be the following values:|State
Value|Description||:------|:----------:||1| Rotation Start: Triggered when the
user has started a rotation gesture.||2| Rotation Move: Triggered when the
user has adjusted the rotation, moving both fingers. ||3| Rotation End: When
the user has finishes the rotation gesture and released both touch points.
|**This event is only available in AR**.  
###
onScrollType| Description  
---|---  
| **React.PropTypes.func** Called when the user performs a scroll action,
while hovering on the control.For example:` _onScroll(scrollPos, source) { //
scrollPos[0]: x scroll position from 0.0 to 1.0. // scrollPos[1]: y scroll
position from 0.0 to 1.0.}`For the mapping of sources to controller inputs,
see the [Events](input-events.html) section.Unsupported VR Platforms:
Cardboard(Android and iOS)  
###
onSwipeType| Description  
---|---  
| **React.PropTypes.func** Called when the user performs a swipe gesture on
the physical controller, while hovering on this control. For example:`
_onSwipe(state, source) { if(state == 1) { // Swiped up } else if(state == 2)
{ // Swiped down } else if(state == 3) { // Swiped left } else if(state == 4)
{ // Swiped right }}`For the mapping of sources to controller inputs, see the
[Events](input-events.html) section.Unsupported VR Platforms:
Cardboard(Android and iOS)  
###
onTouchType| Description  
---|---  
| **React.PropTypes.func** Called when the user performs a touch action, while
hovering on the control. Provides the touch state type, and the x/y coordinate
at which this touch event has occurred.|State
Value|Description||:------|:----------:||1| Touch Down: Triggered when the
user makes physical contact with the touch pad on the controller. ||2| Touch
Down Move: Called when the user moves around the touch pad immediately after
having performed a Touch Down action. ||3| Touch Up: Triggered after the user
is no longer in physical contact with the touch pad after a Touch Down action.
|For example:` _onTouch(state, touchPos, source) { var touchX = touchPos[0];
var touchY = touchPos[1]; if(state == 1) { // Touch Down } else if(state == 2)
{ // Touch Down Move } else if(state == 3) { // Touch Up }}`For the mapping of
sources to controller inputs, see the [Events](input-events.html)
section.Unsupported VR Platforms: Cardboard(Android and iOS).  
###
onTransformUpdateType| Description  
---|---  
| **PropTypes.func** A function that is invoked when the component moves and
provides an array of numbers representing the component's position in world
coordinates.  
###
opacityType| Description  
---|---  
| **PropTypes.number** A number from 0 to 1 that specifies the opacity of the
object. A value of 1 translates into a fully opaque object while 0 represents
full transparency.  
###
placeholderSourceType| Description  
---|---  
| **PropTypes.oneOfType([ PropTypes.shape({ uri: PropTypes.string }),
PropTypes.number ])** A static placeholder image that is shown until the
source image is loaded it. It not specified, nothing will show until the
source image is finished loading. PNG and JPG images accepted.Example:To
invoke with local source:`require('image_placeholder.html');`  
###
positionType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position in 3D space,
stored as [x, y, z].  
###
physicsBodyType| Description  
---|---  
|
**PropTypes.shape({..[physics.api](http://docs.viromedia.com/docs/physics#physicsbody-
api)..}),**Creates and binds a physics body that is configured with the
provided collection of physics properties associated with this control.For
more information on physics components, please see the
[physics.api](http://docs.viromedia.com/docs/physics#physicsbody-api).  
###
resizeModeType| Description  
---|---  
| **PropTypes.oneOf([ 'ScaleToFill','ScaleToFit','StretchToFill']),**If not specified, the default value is stretchToFill.|Value|Description||:------|:----------:||scaleToFill | Scale the image up to fit the component width or height. Aspect ratio is preserved. ||scaleToFit | Scale the image down to fit the component width or height. Aspect ratio is preserved. ||stretchToFill | Stretch the image to fit on the entire surface of the ViroImage component. Aspect ratio is **not** preserved.|  
###
rotationType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** The rotation of the transform in
world space stored as Euler angles [x, y, z]. Units for each angle are
specified in degrees.  
###
rotationPivotType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position in [x,y,z] about
which rotation is applied relative to the component's position.  
###
scaleType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** The scale of the image in 3D space,
specified as [x,y,z]. A scale of 1 represents the current size of the image. A
scale value of 1
will make the image proportionally bigger along the specified axis.  
###
scalePivotType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position in [x,y,z] from
which scale is applied relative to the component's position.  
###
shadowCastingBitMaskType| Description  
---|---  
| **PropTypes.number** A bit mask that is bitwise and-ed (&) with each light's
influenceBitMask. If the result is > 0, then this object will cast shadows
from the light. For more information please see the [Lighting and
Materials](lighting-and-materials.html) Guide.  
###
stereoModeType| Description  
---|---  
| **PropTypes.oneOf([ 'leftRight', 'rightLeft', 'topBottom', 'bottomTop',
'none'])**Specifies the alignment mode of the provided stereo image in source.
The image will be rendered in the given order, the first being the left eye,
the next the right eye.For example, leftRight will render the left half of the
image to the left eye, and the right half of the image to the right eye.
Similarly, topBottom will render the top half of the image to the left eye,
and the bottom half of the image to the right eye. Defaults to none.Note:
There's a known issue with stereoscopic images of the format RGB565 (the fix
is on the roadmap).  
###
styleType| Description  
---|---  
| **stylePropType** Style properties determine the position and scale of the
component within a ViroFlexView. Please see the [UI Controls &
Flexbox](https://viro-community.readme.io/docs/flexbox-ui-layouts) guide and
[Styles](styles.html) reference for more information.  
###
transformBehaviorsType| Description  
---|---  
|
**PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string),PropTypes.string])**
An array of transform constraints that affect the transform of the image. For
example, putting the value "billboard" will ensure the image is facing the
user as the user rotates their head on any axis. This is useful for having the
image always face the user on a particular axis, which especially useful for
tappable icons.Allowed values(values are case
sensitive):|Value|Description||:------|:----------:||billboard| Billboard
object on x,y,z axis ||billboardX| Billboard object on the x axis||billboardY|
Billboard object on the y axis|  
###
viroTagType| Description  
---|---  
| **PropTypes.string** A tag given to other components when their physics body
collides with this component's physics body. Refer to [physics](physics.html)
for more information.  
###
visibleType| Description  
---|---  
| **PropTypes.bool** False if the image should be hidden. By default the
button is visible and this value is true.  
###
widthType| Description  
---|---  
| **PropTypes.number** The width of the image in 3D space. Default value is 1.  
###
renderingOrderType| Description  
---|---  
| **PropTypes.number** This determines the order in which this Node is
rendered relative to other Nodes. Nodes with greater rendering orders are
rendered last. The default rendering order is zero. For example, setting a
Node's rendering order to -1 will cause the Node to be rendered before all
Nodes with rendering orders greater than or equal to 0.  
##
Methodsasync getBoundingBoxAsync()  
---  
[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's bounding box in world coordinates.Returns a
[Promise](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be
completed with the following object:`{ `boundingBox` : { `minX` : number,
`maxX` : number, `minY` : number, `maxY` : number, `minZ` : number, `maxZ` :
number }}`  
async getTransformAsync()  
---  
[Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) function that returns the component's transform (position, scale and rotation).|Return value | Description||---|---|| transform | an object that contains "position", "scale" and "rotation" keys which point to number arrays |  
applyImpulse(force: arrayOf(number), position: arrayOf(number))  
---  
A function used with [physics](physics.html) to apply an impulse
(instantaneous) force to an object with a physics
body.|Parameter|Description||---|---||force |an array of magnitudes to be
applied as force (N) to the object in the positive x, y and z directions|  
applyTorqueImpulse(torque: arrayOf(number), position: arrayOf(number))  
---  
A function used with [physics](physics.html) to apply an impulse (instantaneous) torque to an object with a physics body.|Parameter|Description||---|---||torque |an array of magnitudes to be applied as a torque (N * m) to the object in the positive x, y and z directions at the given position||position | a position relative to the object from which to apply the given torque|  
setVelocity(velocity: arrayOf(number))  
---  
A function used with [physics](physics.html) to set the velocity of an object with a physics body.|Parameter|Description||---|---||velocity | an array of numbers corresponding to x, y, and z velocity |  
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
##
Static MethodsevictFromCache(source)  
---  
**source** \- **PropTypes.oneOfType( [PropTypes.shape( {uri: PropTypes.string}
), PropTypes.number] )** The given source will be purged from the memory and
local storage cache of the device. On Android, Viro, like React-Native, uses
the Fresco image library to load and cache images and this is required if the
given source reference (uri, etc) is the same, but the image data
changes.**Android Only**  
 __Updated over 3 years ago