Example use: JavaScript&lt;ViroBox height={2} length={2} width={2} /&gt;  Props animation TypeDescriptionViroAnimationA collection of parameters that determine if this component should animate. For more information on animated components please see our Animation Guide. dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified. The default value is &quot;FixedDistance&quot;.FixedDistance: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable nodeFixedDistanceOrigin: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.FixedToWorld: Dragging is based on intersection with real world objects. Available only in ARFixedToPlane: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. height TypeDescriptionnumberThe height of the box in 3D space. Default value is 1. highAccuracyEvents TypeDescriptionbooleanTrue if events should use the geometry of the object to determine if the user is interacting with this object. If false, the object&#x27;s axis-aligned bounding box will be used instead. Enabling this is more accurate but takes more processing power, so it is set to false by default. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks. The default value is false. lightReceivingBitMask TypeDescriptionnumberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then the light will illuminate this object. For more information please see the Lighting and Materials Guide. length TypeDescriptionnumberThe length of the box in 3D space. Default value is 1.0. materials TypeDescriptionstring[]An array of strings that each represent a material that was created via ViroMaterials.createMaterials(). See ViroMaterials for more. A ViroBox can accept one material, which is used for all sides. onClick See ViroNode onClick. onClickState See ViroNode onClickState. onCollision See ViroNode onCollision. onDrag See ViroNode onDrag. onFuse See ViroNode onFuse. onHover See ViroNode onHover. onPinch See ViroNode onPinch. onRotate See ViroNode onRotate. onScroll See ViroNode onScroll. onSwipe See ViroNode onSwipe. onTouch See ViroNode onTouch. onTransformUpdate See ViroNode onTransformUpdate. opacity TypeDescriptionnumberA number from 0 to 1 that specifies the opacity of the object. A value of 1 translates into a fully opaque object while 0 represents full transparency. position TypeDescription[number, number, number]Cartesian position of the box in 3D world space, specified as [x, y, z]. physicsBody TypeDescriptionPhysics BodyCreates and binds a physics body that is configured with the provided collection of physics properties associated with this control.For more information on physics components, please see the Physics. rotation TypeDescription[number, number, number]The rotation of the component around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. rotationPivot TypeDescription[number, number, number]Cartesian position in [x,y,z] about which rotation is applied relative to the component&#x27;s position. scale TypeDescription[number, number, number]The scale of the box in 3D space, specified as [x,y,z]. A scale of 1 represents the current size of the box. A scale value of &lt; 1 will make the box proportionally smaller while a value &gt;1 will make the box proportionally bigger along the specified axis. scalePivot TypeDescription[number, number, number]Cartesian position in [x,y,z] from which scale is applied relative to the component&#x27;s position. shadowCastingBitMask TypeDescriptionnumberA bit mask that is bitwise and-ed (&amp;) with each light&#x27;s influenceBitMask. If the result is &gt; 0, then this object will cast shadows from the light. For more information please see the Lighting and Materials Guide. transformBehaviors TypeDescriptionstring[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the box is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the box to always face the user at a particular rotation. Allowed values(values are case sensitive):&quot;billboard&quot;: Billboard object on x,y,z axis &quot;billboardX&quot;: Billboard object on the x axis&quot;billboardY&quot;: Billboard object on the y axis&quot;billboardZ&quot;: Billboard object on the z axis viroTag TypeDescriptionstringA tag given to other components when their physics body collides with this component&#x27;s physics body. Refer to physics for more information. visible TypeDescriptionbooleanFalse if the box should be hidden. By default the box is visible and this value is true. width TypeDescriptionnumberThe width of the component in 3D space. Default value is 1. renderingOrder TypeDescriptionThis determines the order in which this Node is rendered relative to other Nodes. Nodes with greater rendering orders are rendered last. The default rendering order is zero. For example, setting a Node&#x27;s rendering order to -1 will cause the Node to be rendered before all Nodes with rendering orders greater than or equal to 0. Methods async getBoundingBoxAsync() Async function that returns the component&#x27;s bounding box in world coordinates. Returns a Promise that will be completed with the following object: JSON{ &quot;boundingBox&quot;: { &quot;minX&quot;: number, &quot;maxX&quot;: number, &quot;minY&quot;: number, &quot;maxY&quot;: number, &quot;minZ&quot;: number, &quot;maxZ&quot;: number } }  async getTransformAsync() Async function that returns the component&#x27;s transform (position, scale and rotation). Returns a transform object that contains &quot;position&quot;, &quot;scale&quot; and &quot;rotation&quot; keys which point to number arrays applyImpulse(force: number[], position: number[]) A function used with physics to apply an impulse (instantaneous) force to an object with a physics body. ParameterDescriptionforcean array of magnitudes to be applied as force (N) to the object in the positive x, y and z directionspositiona position relative to the object from which to apply the given force applyTorqueImpulse(torque: number[], position: number[]) A function used with physics to apply an impulse (instantaneous) torque to an object with a physics body. ParameterDescriptiontorquean array of magnitudes to be applied as a torque (N * m) to the object in the positive x, y and z directions at the given positionpositiona position relative to the object from which to apply the given torque setVelocity(velocity: number[]) A function used with physics to set the velocity of an object with a physics body. ParameterDescriptionvelocityan array of numbers corresponding to x, y, and z velocity setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterDescriptionnativePropsan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A simple 3D box that is defined by width, height and length.
######
Example use:JavaScript
##
Props###
animationType| Description  
---|---  
[ViroAnimation](viroanimations.html)| A collection of parameters that
determine if this component should animate. For more information on animated
components please see our [Animation](animation.html) Guide.  
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
heightType| Description  
---|---  
number| The height of the box in 3D space. Default value is 1.  
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
lightReceivingBitMaskType| Description  
---|---  
number| A bit mask that is bitwise and-ed (&) with each light's
influenceBitMask. If the result is > 0, then the light will illuminate this
object. For more information please see the [Lighting and Materials](lighting-
and-materials.html) Guide.  
###
lengthType| Description  
---|---  
number| The length of the box in 3D space. Default value is 1.0.  
###
materialsType| Description  
---|---  
string[]| An array of strings that each represent a material that was created
via ViroMaterials.createMaterials(). See [ViroMaterials](viromaterials.html)
for more.  
A ViroBox can accept one material, which is used for all sides.  
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
number| A number from 0 to 1 that specifies the opacity of the object. A value
of 1 translates into a fully opaque object while 0 represents full
transparency.  
###
positionType| Description  
---|---  
[number, number, number]| Cartesian position of the box in 3D world space,
specified as [x, y, z].  
###
physicsBodyType| Description  
---|---  
[Physics Body](physics.html#physicsbody-api)| Creates and binds a physics body
that is configured with the provided collection of physics properties
associated with this control.For more information on physics components,
please see the [Physics](physics.html).  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the component around it's local axis
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
[number, number, number]| The scale of the box in 3D space, specified as
[x,y,z]. A scale of 1 represents the current size of the box. A scale value of
1 will make the
box proportionally bigger along the specified axis.  
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
Materials](lighting-and-materials.html) Guide.  
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
boolean| False if the box should be hidden. By default the box is visible and
this value is true.  
###
widthType| Description  
---|---  
number| The width of the component in 3D space. Default value is 1.  
###
renderingOrderType| Description  
---|---  
| This determines the order in which this Node is rendered relative to other
Nodes. Nodes with greater rendering orders are rendered last. The default
rendering order is zero. For example, setting a Node's rendering order to -1
will cause the Node to be rendered before all Nodes with rendering orders
greater than or equal to 0.  
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
manipulation) for more information.
Parameter| Description  
---|---  
nativeProps| an object where the keys are the properties to set and the values
are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago