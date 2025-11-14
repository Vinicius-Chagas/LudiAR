Example use: JavaScript&lt;ViroNode position={[2.0, 5.0, -2.0]} rotation={[0, 45, 45]} scale={[2.0, 2.0, 2.0]} /&gt;  Props animation TypeDescriptionViroAnimationPropsA collection of parameters that determine if this component should animate. For more information on animated components please see our Animation Guide. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified. The default value is &quot;FixedDistance&quot;.FixedDistance: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable nodeFixedDistanceOrigin: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.FixedToWorld: Dragging is based on intersection with real world objects. Available only in ARFixedToPlane: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. highAccuracyEvents TypeDescriptionbooleanTrue if events should use the geometry of the object to determine if the user is interacting with this object. If false, the object&#x27;s axis-aligned bounding box will be used instead. Enabling this is more accurate but takes more processing power, so it is set to false by default. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks. The default value is false. onClick TypeDescriptionCalled when an object has been clicked. The position parameter represents the position in world coordinates on the box where the click occurred. For the mapping of sources to controller inputs, see the Events section. JavaScript&lt;ViroNode onClick={(position, source) =&gt; console.log(&#x27;Click&#x27;, position, source)}/&gt;  onClickState TypeDescriptionCalled for each click state an object goes through as it is clicked. Supported click states and their values are the following:Click Down (1): Triggered when the user has performed a click down action while hovering on this control.Click Up (2): Triggered when the user has performed a click up action while hovering on this control.Clicked (3): Triggered when the user has performed both a click down and click up action on this control sequentially, thereby having &quot;Clicked&quot; the object. For the mapping of sources to controller inputs, see the Events section. JavaScript&lt;ViroNode height={2} length={2} width={2} onClickState={(stateValue, position, source) =&gt; { console.log(&#x27;ClickState&#x27;, stateValue, position, source) if(stateValue == 1) { // Click Down } else if(stateValue == 2) { // Click Up } else if(stateValue == 3) { // Clicked } }} /&gt;  onCollision TypeDescription(viroTag, collidedPoint, collidedNormal) =&gt; voidCalled when this component&#x27;s physics body collides with another component&#x27;s physics body. Also invoked by ViroScene/ViroARScene&#x27;s findCollisions... functions.viroTag: the given viroTag (string) of the collided componentcollidedPoint: an array of numbers representing the position, in world coordinates, of the point of collisioncollidedNormal: an array representing the normal of the collision in world coordinates. JavaScript&lt;ViroNode height={2} length={2} width={2} onCollision={(viroTag, collidedPoint, collidedNormal) =&gt; console.log(&#x27;Collision&#x27;, viroTag, collidedPoint, collidedNormal) } /&gt;  onDrag TypeDescription(dragToPos, source) =&gt; voidCalled when the view is currently being dragged. The dragToPos parameter provides the current 3D location of the dragged object. For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard iOS JavaScript&lt;ViroNode height={2} length={2} width={2} onDrag={(dragToPos, source) =&gt; { console.log(&#x27;Drag&#x27;, dragToPos, source); // dragtoPos[0]: x position // dragtoPos[1]: y position // dragtoPos[2]: z position }} /&gt;  onFuse TypeDescriptionFunction | { callback: Function, timeToFuse?: number }onFuse takes one of two types - either a callback, or a dictionary with a callback and duration. It is called after the user hovers onto and remains hovered on the control for a certain duration of time, as indicated in timeToFuse that represents the duration of time in milliseconds. While hovering, the reticle will display a count down animation while fusing towards timeToFuse. For the mapping of sources to controller inputs, see the Events section. Note that timeToFuse defaults to 2000ms. JavaScript&lt;ViroNode height={2} length={2} width={2} onFuse={{ callback: (source) =&gt; { console.log(&#x27;Fuse&#x27;, source); // User has hovered over object for timeToFuse milliseconds }, timeToFuse: 3000, }} /&gt;  onHover TypeDescription(isHovering, position, source) =&gt; voidCalled when the user hovers on or off the control. For the mapping of sources to controller inputs, see the Events section. JavaScript&lt;ViroNode height={2} length={2} width={2} onHover={ (isHovering, position, source) =&gt; { if(isHovering) { // user is hovering over the box } else { // user is no longer hovering over the box } }} /&gt;  onPinch 🚧onPinchThis event is only available in AR. TypeDescriptionCalled when the user performs a pinch gesture on the control. When the pinch starts, the scale factor is set to 1 is relative to the points of the two touch points. pinchState can be the following values:Pinch Start (1): Triggered when the user has started a pinch gesture.Pinch Move (2): Triggered when the user has adjusted the pinch, moving both fingers.Pinch End (3): When the user has finishes the pinch gesture and released both touch points. JavaScript&lt;ViroNode height={2} length={2} width={2} onPinch={(pinchState, scaleFactor, source) =&gt; { if(pinchState == 3) { // update scale of obj by multiplying by scaleFactor when pinch ends. return; } //set scale using native props to reflect pinch. }} /&gt;  onRotate 🚧This event is only available in AR TypeDescription(rotateState, rotationFactor, source) =&gt; voidCalled when the user performs a rotation touch gesture on the control. Rotation factor is returned in degrees. When setting rotation, the rotation should be relative to it&#x27;s current rotation, not set to the absolute value of the given rotationFactor. rotationFactor can be the following values:Rotation Start (1): Triggered when the user has started a rotation gesture.Rotation Move (2): Triggered when the user has adjusted the rotation, moving both fingers.Rotation End (3): When the user has finishes the rotation gesture and released both touch points. JavaScript&lt;ViroNode height={2} length={2} width={2} onRotate={(rotateState, rotationFactor, source) =&gt; { if (rotateState == 3) { //set to current rotation - rotationFactor. return; } //update rotation using setNativeProps }} /&gt;  onScroll TypeDescription(scrollPos, source) =&gt; voidCalled when the user performs a scroll action, while hovering on the control. For the mapping of sources to controller inputs, see the Events section. Unsupported VR Platforms: Cardboard (Android and iOS). JavaScript&lt;ViroNode height={2} length={2} width={2} onScroll={(scrollPos, source) =&gt; { // scrollPos[0]: x scroll position from 0.0 to 1.0. // scrollPos[1]: y scroll position from 0.0 to 1.0.} } /&gt;  onSwipe TypeDescription(state, source) =&gt; voidCalled when the user performs a swipe gesture on the physical controller, while hovering on this control. For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard (Android and iOS) JavaScript&lt;ViroNode height={2} length={2} width={2} onSwipe={(state, source) =&gt; { if(state == 1) { // Swiped up } else if(state == 2) { // Swiped down } else if(state == 3) { // Swiped left } else if(state == 4) { // Swiped right } } /&gt;  onTouch TypeDescription(state, touchPos, source) =&gt; voidCalled when the user performs a touch action, while hovering on the control. Provides the touch state type, and the x/y coordinate at which this touch event has occurred.Touch Down (1): Triggered when the user makes physical contact with the touch pad on the controller.Touch Down Move (2): Called when the user moves around the touch pad immediately after having performed a Touch Down action.Touch Up (3): Triggered after the user is no longer in physical contact with the touch pad after a Touch Down action. For the mapping of sources to controller inputs, see the Events section.Unsupported VR Platforms: Cardboard (Android and iOS). JavaScript&lt;ViroNode height={2} length={2} width={2} onTouch={(state, touchPos, source) =&gt; { var touchX = touchPos[0]; var touchY = touchPos[1]; if(state == 1) { // Touch Down } else if(state == 2) { // Touch Down Move } else if(state == 3) { // Touch Up } } /&gt;  onTransformUpdate TypeDescriptionFunctionA function that is invoked when the component moves and provides an array of numbers representing the component&#x27;s position in world coordinates. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the container. A value of 1 translates into a fully opaque node while 0 represents full transparency. position TypeDescription[number, number, number]Cartesian position in 3D space, stored as [x, y, z]. physicsBody TypeDescriptionPhysics BodyCreates and binds a physics body that is configured with the provided collection of physics properties associated with this control.For more information on physics components, please see the Physics. renderingOrder TypeDescriptionnumberThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. rotation TypeDescription[number, number, number]The rotation of the box around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. rotationPivot TypeDescription[number, number, number]Cartesian position in [x,y,z] about which rotation is applied relative to the component&#x27;s position. scale TypeDescription[number, number, number]The scale of the component in 3D space, specified as [x,y,z]. A scale of 1 represents the current size of the box. A scale value of &lt; 1 will make the component proportionally smaller while a value &gt;1 will make the component proportionally bigger along the specified axis. scalePivot TypeDescription[number, number, number]Cartesian position in [x,y,z] from which scale is applied relative to the component&#x27;s position. transformBehaviors TypeDescriptionstring[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the box is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the box to always face the user at a particular rotation. Allowed values(values are case sensitive):&quot;billboard&quot;: Billboard object on x,y,z axis &quot;billboardX&quot;: Billboard object on the x axis&quot;billboardY&quot;: Billboard object on the y axis&quot;billboardZ&quot;: Billboard object on the z axis viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the container should be hidden. By default the container is visible and this value is true. width TypeDescriptionThe width of the image in 3D space. Default value is 1. Methods async getBoundingBoxAsync() Async function that returns the component&#x27;s bounding box in world coordinates. Returns a Promise that will be completed with the following object: JSON{ &quot;boundingBox&quot;: { &quot;minX&quot;: number, &quot;maxX&quot;: number, &quot;minY&quot;: number, &quot;maxY&quot;: number, &quot;minZ&quot;: number, &quot;maxZ&quot;: number } }  async getTransformAsync() Async function that returns the component&#x27;s transform (position, scale and rotation). Returns a transform object that contains &quot;position&quot;, &quot;scale&quot; and &quot;rotation&quot; keys which point to number arrays applyImpulse(force: number[], position: number[]) A function used with physics to apply an impulse (instantaneous) force to an object with a physics body. ParameterDescriptionforcean array of magnitudes to be applied as force (N) to the object in the positive x, y and z directionspositiona position relative to the object from which to apply the given force applyTorqueImpulse(torque: number[], position: number[]) A function used with physics to apply an impulse (instantaneous) torque to an object with a physics body. ParameterDescriptiontorquean array of magnitudes to be applied as a torque (N * m) to the object in the positive x, y and z directions at the given positionpositiona position relative to the object from which to apply the given torque setVelocity(velocity: number[]) A function used with physics to set the velocity of an object with a physics body. ParameterDescriptionvelocityan array of numbers corresponding to x, y, and z velocity setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterDescriptionnativePropsan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
Generic, empty 3D node in the scene graph. The transforms set on a node
(position, rotation, scale), apply to all children. See the
[Scenes](scenes.html) guide for more information. Animatable.
######
Example use:JavaScript
##
Props###
animationType| Description  
---|---  
[ViroAnimationProps](viroanimations.html#viroanimationprops)| A collection of
parameters that determine if this component should animate. For more
information on animated components please see our [Animation](animation.html)
Guide.  
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
controls behind it from receiving event callbacks.  
The default value is false.  
###
onClickType| Description  
---|---  
| Called when an object has been clicked.  
The position parameter represents the position in world coordinates on the box
where the click occurred.  
For the mapping of sources to controller inputs, see the [Events](input-
events.html) section.  
JavaScript
     console.log('Click', position, source)}/>
###
onClickStateType| Description  
---|---  
| Called for each click state an object goes through as it is clicked.
Supported click states and their values are the following:  
**Click Down (1):** Triggered when the user has performed a click down action
while hovering on this control.  
**Click Up (2):** Triggered when the user has performed a click up action
while hovering on this control.  
**Clicked (3):** Triggered when the user has performed both a click down and
click up action on this control sequentially, thereby having "Clicked" the
object.  
For the mapping of sources to controller inputs, see the [Events](input-
events.html) section.  
JavaScript
     {
        console.log('ClickState', stateValue, position, source)
        if(stateValue == 1) {        
          // Click Down    
        } else if(stateValue == 2) {        
          // Click Up    
        } else if(stateValue == 3) {         
          // Clicked    
        }
      }}
    />
###
onCollisionType| Description  
---|---  
(viroTag, collidedPoint, collidedNormal) => void| Called when this component's
physics body collides with another component's physics body. Also invoked by
[ViroScene](viroscene.html)/[ViroARScene](viroarscene.html)'s
`findCollisions...` functions.  
**viroTag:** the given viroTag (string) of the collided component  
**collidedPoint:** an array of numbers representing the position, in world
coordinates, of the point of collision  
**collidedNormal:** an array representing the normal of the collision in world
coordinates.  
JavaScript
        console.log('Collision', viroTag, collidedPoint, collidedNormal)
      }
    />
###
onDragType| Description  
---|---  
(dragToPos, source) => void| Called when the view is currently being dragged.
The dragToPos parameter provides the current 3D location of the dragged
object. For the mapping of sources to controller inputs, see the
[Events](input-events.html) section.  
**Unsupported VR Platforms: Cardboard iOS**  
JavaScript
     {    
      	console.log('Drag', dragToPos, source);
        // dragtoPos[0]: x position    
        // dragtoPos[1]: y position    
        // dragtoPos[2]: z position
      }}
    />
###
onFuseType| Description  
---|---  
Function | { callback: Function, timeToFuse?: number }| onFuse takes one of two types - either a callback, or a dictionary with a callback and duration. It is called after the user hovers onto and remains hovered on the control for a certain duration of time, as indicated in timeToFuse that represents the duration of time in milliseconds. While hovering, the reticle will display a count down animation while fusing towards timeToFuse. For the mapping of sources to controller inputs, see the [Events](input-events.html) section.  
Note that timeToFuse defaults to 2000ms.  
JavaScript
     {
          console.log('Fuse', source);
        	// User has hovered over object for timeToFuse milliseconds
        },
        timeToFuse: 3000,
      }}
    />
###
onHoverType| Description  
---|---  
(isHovering, position, source) => void| Called when the user hovers on or off
the control. For the mapping of sources to controller inputs, see the
[Events](input-events.html) section.  
JavaScript
     {    
        if(isHovering) {        
          // user is hovering over the box    
        } else {        
          // user is no longer hovering over the box    
        }
      }}
    />
###
onPinch> ## 🚧
>
> onPinch
>
> This event is only available in AR.
Type| Description  
---|---  
| Called when the user performs a pinch gesture on the control. When the pinch
starts, the scale factor is set to 1 is relative to the points of the two
touch points.  
pinchState can be the following values:  
**Pinch Start (1):** Triggered when the user has started a pinch gesture.  
**Pinch Move (2):** Triggered when the user has adjusted the pinch, moving
both fingers.  
**Pinch End (3):** When the user has finishes the pinch gesture and released
both touch points.  
JavaScript
     {
        if(pinchState == 3) {
        	// update scale of obj by multiplying by scaleFactor when pinch ends.
          return;       
        }     
        //set scale using native props to reflect pinch.  
      }} 
    />
###
onRotate> ## 🚧
>
> This event is only available in AR
Type| Description  
---|---  
(rotateState, rotationFactor, source) => void| Called when the user performs a
rotation touch gesture on the control. Rotation factor is returned in degrees.
When setting rotation, the rotation should be relative to it's current
rotation, _not_ set to the absolute value of the given rotationFactor.
rotationFactor can be the following values:  
**Rotation Start (1):** Triggered when the user has started a rotation
gesture.  
**Rotation Move (2):** Triggered when the user has adjusted the rotation,
moving both fingers.  
**Rotation End (3):** When the user has finishes the rotation gesture and
released both touch points.  
JavaScript
     {
        if (rotateState == 3) {
          //set to current rotation - rotationFactor.
          return;      
        }     
        //update rotation using setNativeProps    
      }}
    />
###
onScrollType| Description  
---|---  
(scrollPos, source) => void| Called when the user performs a scroll action,
while hovering on the control.  
For the mapping of sources to controller inputs, see the [Events](input-
events.html) section. Unsupported VR Platforms: Cardboard (Android and iOS).  
JavaScript
     {    
        // scrollPos[0]: x scroll position from 0.0 to 1.0.     
        // scrollPos[1]: y scroll position from 0.0 to 1.0.}
      }
    />
###
onSwipeType| Description  
---|---  
(state, source) => void| Called when the user performs a swipe gesture on the
physical controller, while hovering on this control.  
For the mapping of sources to controller inputs, see the [Events](input-
events.html) section.  
**Unsupported VR Platforms: Cardboard (Android and iOS)**  
JavaScript
     {    
        if(state == 1) {        
          // Swiped up    
        } else if(state == 2) {        
          // Swiped down    
        } else if(state == 3) {        
          // Swiped left    
        } else if(state == 4) {        
          // Swiped right    
        }
      }
    />
###
onTouchType| Description  
---|---  
(state, touchPos, source) => void| Called when the user performs a touch
action, while hovering on the control. Provides the touch state type, and the
x/y coordinate at which this touch event has occurred.  
**Touch Down (1):** Triggered when the user makes physical contact with the
touch pad on the controller.  
**Touch Down Move (2):** Called when the user moves around the touch pad
immediately after having performed a Touch Down action.  
**Touch Up (3):** Triggered after the user is no longer in physical contact
with the touch pad after a Touch Down action.  
For the mapping of sources to controller inputs, see the [Events](input-
events.html) section.  
**Unsupported VR Platforms: Cardboard (Android and iOS).**  
JavaScript
     {   
        var touchX = touchPos[0];   
        var touchY = touchPos[1];    
        if(state == 1) {        
          // Touch Down    
        } else if(state == 2) {        
          // Touch Down Move    
        } else if(state == 3) {         
          // Touch Up    
        }
      }
    />
###
onTransformUpdateType| Description  
---|---  
Function| A function that is invoked when the component moves and provides an
array of numbers representing the component's position in world coordinates.  
###
opacityType| Description  
---|---  
number| A number from 0 to 1 that specifies the opacity of the container. A
value of 1 translates into a fully opaque node while 0 represents full
transparency.  
###
positionType| Description  
---|---  
[number, number, number]| Cartesian position in 3D space, stored as [x, y, z].  
###
physicsBodyType| Description  
---|---  
[Physics Body](physics.html#physicsbody-api)| Creates and binds a physics body
that is configured with the provided collection of physics properties
associated with this control.For more information on physics components,
please see the [Physics](physics.html).  
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
[number, number, number]| The rotation of the box around it's local axis
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
[number, number, number]| The scale of the component in 3D space, specified as
[x,y,z]. A scale of 1 represents the current size of the box. A scale value of
1 will make
the component proportionally bigger along the specified axis.  
###
scalePivotType| Description  
---|---  
[number, number, number]| Cartesian position in [x,y,z] from which scale is
applied relative to the component's position.  
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
widthType| Description  
---|---  
| The width of the image in 3D space. Default value is 1.  
##
Methods###
async getBoundingBoxAsync()[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's bounding box in world coordinates. Returns a
[Promise](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be
completed with the following object:
JSON
    {
      "boundingBox": {
        "minX": number,
        "maxX": number,
        "minY": number,
        "maxY": number,
        "minZ": number, 
        "maxZ": number
      }
    }
###
async getTransformAsync()[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's transform (position, scale and rotation).
Returns a _transform_ object that contains "position", "scale" and "rotation"
keys which point to number arrays
###
applyImpulse(force: number[], position: number[])A function used with [physics](physics.html) to apply an impulse
(instantaneous) force to an object with a physics body.
Parameter| Description  
---|---  
force| an array of magnitudes to be applied as force (N) to the object in the
positive x, y and z directions  
position| a position relative to the object from which to apply the given
force  
###
applyTorqueImpulse(torque: number[], position: number[])A function used with [physics](physics.html) to apply an impulse
(instantaneous) torque to an object with a physics body.
Parameter| Description  
---|---  
torque| an array of magnitudes to be applied as a torque (N * m) to the object
in the positive x, y and z directions at the given position  
position| a position relative to the object from which to apply the given
torque  
###
setVelocity(velocity: number[])A function used with [physics](physics.html) to set the velocity of an object
with a physics body.
Parameter| Description  
---|---  
velocity| an array of numbers corresponding to x, y, and z velocity  
###
setNativeProps(nativeProps)A wrapper function around the native component's setNativeProps which allow
users to set values on the native component without changing state/setting
props and re-rendering. Refer to the React Native documentation on [Direct
Manipulation](https://facebook.github.io/react-native/docs/direct-
manipulation.html) for more information.
Parameter| Description  
---|---  
nativeProps| an object where the keys are the properties to set and the values
are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago