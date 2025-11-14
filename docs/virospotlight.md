Example use: JavaScript&lt;ViroSpotLight
color=&quot;#ffffff&quot; attenuationStartDistance={2}
attenuationEndDistance={6} position={[0, -5, 5]} direction={[0 - 1, 0]}
innerAngle={0} outerAngle={45} /&gt;  Props attenuationEndDistance TypeDescriptionPropTypes.numberObjects positioned at a distance
greater than the attenuation end distance from the lights position will
receive no illumination from this light.The default value is
10. attenuationStartDistance TypeDescriptionPropTypes.numberObjects positioned within the
attenuation start distance will receive the lights full illumination.Objects
positioned between the start and end distance will receive a proportion of the
lights illumination, transitioning from full illumination to no illumination
the further out from the lights position the object is.The default value is
2. castsShadow TypeDescriptionPropTypes.boolTrue if this light should cast
shadows. color TypeDescriptionColorPropTypeThe
color of the light. The default light color is white.Valid color formats are:
 &#x27;#f0f&#x27; (#rgb)  &#x27;#f0fc&#x27; (#rgba) 
&#x27;#ff00ff&#x27; (#rrggbb)  &#x27;#ff00ff00&#x27; (#rrggbbaa) 
&#x27;rgb(255, 255, 255)&#x27;  &#x27;rgba(255, 255, 255, 1.0)&#x27; 
&#x27;hsl(360, 100%, 100%)&#x27;  &#x27;hsla(360, 100%, 100%, 1.0)&#x27;
 &#x27;transparent&#x27;  &#x27;red&#x27; * 0xff00ff00
(0xrrggbbaa) direction TypeDescriptionPropTypes.arrayOf(PropTypes.number)A 3D unit
vector, specified as [x, y, z] that represents the direction the spotlight is
facing. Values for each axis can be from -1 to 1. Example:direction={[1, 0,
0]}The above would make the light direction be towards positive x. So
if an object was positioned at [0,0,0] the spot light would hit it from
it&#x27;s left side if it was was positioned to it&#x27;s
left. influenceBitMask TypeDescriptionPropTypes.numberThis property is used to make
lights apply to specific nodes. Lights and nodes in the scene can be assigned
bit-masks to determine how each light influences each node. During rendering,
Viro compares each light&#x27;s influenceBitMask with each node&#x27;s
lightReceivingBitMask and shadowCastingBitMask. The bit-masks are compared
using a bitwise AND operation:If (influenceBitMask &amp; lightReceivingBitMask) !=
0, then the light will illuminate the node (and the node will receive
shadows cast from objects occluding the light).If (influenceBitMask &amp;
shadowCastingBitMask) != 0, then the node will cast shadows from the
light.The default mask is 0x1. innerAngle TypeDescriptionPropTypes.numberA spotlight is defined to be a
cone-shaped illumination. The cone is defined by a direction, position,
innerAngle, and outerAngle.The innerAngle is the the angle from the axis of
the light cone to the edge of the &#x27;full illumination&#x27; section of the
light cone.The default is set to 0, which means only objects hitting the
center of the spotlight will receive the light&#x27;s full illumination. The
illumination declines from innerAngle until reaching
outerAngle. intensity TypeDescriptionPropTypes.numberThe brightness of the light. Set
to 1000 for normal intensity. When using physically-based rendering, this
value is specified in Lumens. When using non-physical rendering, the intensity
is simply divided by 1000 and multiplied by the light&#x27;s color.Lower
intensities will decrease the brightness of the light, and higher intensities
will increase the brightness of the light.The default intensity is
1000. outerAngle TypeDescriptionPropTypes.numberA spotlight is defined to be a
cone-shaped illumination. The cone is defined by a direction, position,
innerAngle, and outerAngle. The outer angle is the angle from the hard edge of
the cone to the soft edge of the cone. If the outer angle is zero, then the
entirety of the cone will have full illumination.The default is set to 45,
which means objects that lie outside the 45 degree cone will not be
illuminated. position TypeDescriptionPropTypes.arrayOf(PropTypes.number)Cartesian
position of the box in 3D world space, specified as [x, y,
z]. shadowBias TypeDescriptionPropTypes.numberThe amount of bias to apply to
the Z coordinate when performing the shadow depth comparison. This reduces
shadow acne, but large biases can cause &quot;peter panning&quot;.The default
value is 0.005. shadowFarZ TypeDescriptionPropTypes.numberThe far clipping plane to use
when rendering shadows. Shadows are only cast by and on surfaces closer than
this plane.This value defines the units away the far clipping plane is from
the light&#x27;s position, in the direction of the light.The shadow bounds
constructed from this property, shadowNearZ, and the light&#x27;s cone
(innerAngle and outerAngle) should be kept as tight as possible to maximize
the resolution of shadows.The default value is
20. shadowNearZ TypeDescriptionPropTypes.numberThe near clipping plane to use
when rendering shadows. Shadows are only cast by and on surfaces further away
than this plane.This value defines the units away the near clipping plane is
from the light&#x27;s position, in the direction of the light.The shadow
bounds constructed from this property, shadowNearZ, and the light&#x27;s cone
(innerAngle and outerAngle) should be kept as tight as possible to maximize
the resolution of shadows.The default value is
0.1. shadowMapSize TypeDescriptionPropTypes.numberThe size of the shadow map used
to cast shadows for this light.Shadows are created by rendering the
silhouettes of scene geometry onto a 2D image from the point of view of the
light, then projecting that image onto the final view. Larger shadow maps
result in higher resolution shadows, but can have a higher memory and
performance cost. Smaller shadow maps are faster but result in pixelated
edges.The default value is 1024. shadowOpacity TypeDescriptionPropTypes.numberThe opacity of the shadow. 1.0
creates a pitch black shadow. temperature TypeDescriptionPropTypes.numberThe temperature of the light, in
Kelvin. Viro will derive a hue from this temperature and multiply it by the
light&#x27;s color. To model a physical light with a known temperature, you
can leave the color of this Light set to (1.0, 1.0, 1.0) and set its
temperature only.The default value for temperature is 6500K, which represents
pure white light. rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description
here. style TypeDescriptionstylePropType text TypeDescriptionPropTypes.stringPut the PropType
Description here. transformBehaviors TypeDescriptionPropTypes.arrayOf(PropTypes.string)Put the PropType Description
here. width TypeDescriptionPropTypes.numberPut the PropType
Description here. visible TypeDescriptionPropTypes.boolPut the PropType
Description here. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A light object that emits a spotlight. See our [Lighting and Material
Guide](lighting-and-materials.html) for more information on lights in a scene.
######
Example use:JavaScript
##
Props###
attenuationEndDistanceType| Description  
---|---  
| **PropTypes.number** Objects positioned at a distance greater than the
attenuation end distance from the lights position will receive no illumination
from this light.The default value is 10.  
###
attenuationStartDistanceType| Description  
---|---  
| **PropTypes.number** Objects positioned within the attenuation start
distance will receive the lights full illumination.Objects positioned between
the start and end distance will receive a proportion of the lights
illumination, transitioning from full illumination to no illumination the
further out from the lights position the object is.The default value is 2.  
###
castsShadowType| Description  
---|---  
| **PropTypes.bool** True if this light should cast shadows.  
###
colorType| Description  
---|---  
| **ColorPropType** The color of the light. The default light color is
white.Valid color formats are: _ '#f0f' (#rgb) _ '#f0fc' (#rgba) _ '#ff00ff'
(#rrggbb) _ '#ff00ff00' (#rrggbbaa) _ 'rgb(255, 255, 255)' _ 'rgba(255, 255,
255, 1.0)' _ 'hsl(360, 100%, 100%)' _ 'hsla(360, 100%, 100%, 1.0)' _
'transparent' _ 'red' * 0xff00ff00 (0xrrggbbaa)  
###
directionType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** A 3D unit vector, specified as [x,
y, z] that represents the direction the spotlight is facing. Values for each
axis can be from -1 to 1. Example:`direction={[1, 0, 0]}`The above would make
the light direction be towards positive x. So if an object was positioned at
[0,0,0] the spot light would hit it from it's left side if it was was
positioned to it's left.  
###
influenceBitMaskType| Description  
---|---  
| **PropTypes.number** This property is used to make lights apply to specific
nodes. Lights and nodes in the scene can be assigned bit-masks to determine
how each light influences each node. During rendering, Viro compares each
light's influenceBitMask with each node's lightReceivingBitMask and
shadowCastingBitMask. The bit-masks are compared using a bitwise AND
operation:If `(influenceBitMask & lightReceivingBitMask) != 0`, then the light
will illuminate the node (and the node will receive shadows cast from objects
occluding the light).If `(influenceBitMask & shadowCastingBitMask) != 0`, then
the node will cast shadows from the light.The default mask is 0x1.  
###
innerAngleType| Description  
---|---  
| **PropTypes.number** A spotlight is defined to be a cone-shaped
illumination. The cone is defined by a direction, position, innerAngle, and
outerAngle.The innerAngle is the the angle from the axis of the light cone to
the edge of the 'full illumination' section of the light cone.The default is
set to 0, which means only objects hitting the center of the spotlight will
receive the light's full illumination. The illumination declines from
innerAngle until reaching outerAngle.  
###
intensityType| Description  
---|---  
| **PropTypes.number** The brightness of the light. Set to 1000 for normal
intensity. When using physically-based rendering, this value is specified in
Lumens. When using non-physical rendering, the intensity is simply divided by
1000 and multiplied by the light's color.Lower intensities will decrease the
brightness of the light, and higher intensities will increase the brightness
of the light.The default intensity is 1000.  
###
outerAngleType| Description  
---|---  
| **PropTypes.number** A spotlight is defined to be a cone-shaped
illumination. The cone is defined by a direction, position, innerAngle, and
outerAngle. The outer angle is the angle from the hard edge of the cone to the
soft edge of the cone. If the outer angle is zero, then the entirety of the
cone will have full illumination.The default is set to 45, which means objects
that lie outside the 45 degree cone will not be illuminated.  
###
positionType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position of the box in 3D
world space, specified as [x, y, z].  
###
shadowBiasType| Description  
---|---  
| **PropTypes.number** The amount of bias to apply to the Z coordinate when
performing the shadow depth comparison. This reduces shadow acne, but large
biases can cause "peter panning".The default value is 0.005.  
###
shadowFarZType| Description  
---|---  
| **PropTypes.number** The far clipping plane to use when rendering shadows.
Shadows are only cast by and on surfaces closer than this plane.This value
defines the units away the far clipping plane is from the light's position, in
the direction of the light.The shadow bounds constructed from this property,
shadowNearZ, and the light's cone (innerAngle and outerAngle) should be kept
as tight as possible to maximize the resolution of shadows.The default value
is 20.  
###
shadowNearZType| Description  
---|---  
| **PropTypes.number** The near clipping plane to use when rendering shadows.
Shadows are only cast by and on surfaces further away than this plane.This
value defines the units away the near clipping plane is from the light's
position, in the direction of the light.The shadow bounds constructed from
this property, shadowNearZ, and the light's cone (innerAngle and outerAngle)
should be kept as tight as possible to maximize the resolution of shadows.The
default value is 0.1.  
###
shadowMapSizeType| Description  
---|---  
| **PropTypes.number** The size of the shadow map used to cast shadows for
this light.Shadows are created by rendering the silhouettes of scene geometry
onto a 2D image from the point of view of the light, then projecting that
image onto the final view. Larger shadow maps result in higher resolution
shadows, but can have a higher memory and performance cost. Smaller shadow
maps are faster but result in pixelated edges.The default value is 1024.  
###
shadowOpacityType| Description  
---|---  
| **PropTypes.number** The opacity of the shadow. 1.0 creates a pitch black
shadow.  
###
temperatureType| Description  
---|---  
| **PropTypes.number** The temperature of the light, in Kelvin. Viro will
derive a hue from this temperature and multiply it by the light's color. To
model a physical light with a known temperature, you can leave the color of
this Light set to (1.0, 1.0, 1.0) and set its temperature only.The default
value for temperature is 6500K, which represents pure white light.  
###
rotationType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
###
styleType| Description  
---|---  
| stylePropType  
###
textType| Description  
---|---  
| PropTypes.stringPut the PropType Description here.  
###
transformBehaviorsType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.string)Put the PropType Description here.  
###
widthType| Description  
---|---  
| PropTypes.numberPut the PropType Description here.  
###
visibleType| Description  
---|---  
| PropTypes.boolPut the PropType Description here.  
##
Methods###
setNativeProps(nativeProps)A wrapper function around the native component's setNativeProps which allow
users to set values on the native component without changing state/setting
props and re-rendering. Refer to the React Native documentation on [Direct
Manipulation](https://reactnative.dev/docs/direct-manipulation) for more
information.
Parameter| Type| Description  
---|---|---  
nativeProps| object| an object where the keys are the properties to set and
the values are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago