Example use: JavaScript&lt;ViroOmniLight
color=&quot;#ffffff&quot; attenuationStartDistance={2}
attenuationEndDistance={6} position={[0, -5, 5]} /&gt;
 Props attenuationEndDistance TypeDescriptionPropTypes.numberObjects positioned at a distance
greater than the attenuation end distance from the lights position will
receive no illumination from this light.The default value is
10. attenuationStartDistance TypeDescriptionPropTypes.numberObjects positioned within the
attenuation start distance will receive the lights full illumination.Objects
positioned between the start and end distance will receive a proportion of the
lights illumination, transitioning from full illumination to no illumination
the further out from the lights position the object is.The default value is
2. color TypeDescriptionColorPropTypeThe
color of the light. The default light color is white. Valid color formats are:
 &#x27;#f0f&#x27; (#rgb)  &#x27;#f0fc&#x27; (#rgba) 
&#x27;#ff00ff&#x27; (#rrggbb)  &#x27;#ff00ff00&#x27; (#rrggbbaa) 
&#x27;rgb(255, 255, 255)&#x27;  &#x27;rgba(255, 255, 255, 1.0)&#x27; 
&#x27;hsl(360, 100%, 100%)&#x27;  &#x27;hsla(360, 100%, 100%, 1.0)&#x27;
 &#x27;transparent&#x27;  &#x27;red&#x27; * 0xff00ff00
(0xrrggbbaa) influenceBitMask TypeDescriptionPropTypes.numberThis property is used to make
lights apply to specific nodes. Lights and nodes in the scene can be assigned
bit-masks to determine how each light influences each node. During rendering,
Viro compares each light&#x27;s influenceBitMask with each node&#x27;s
lightReceivingBitMask and shadowCastingBitMask. The bit-masks are compared
using a bitwise AND operation:If (influenceBitMask &amp; lightReceivingBitMask) !=
0, then the light will illuminate the node (and the node will receive
shadows cast from objects occluding the light).If (influenceBitMask &amp;
shadowCastingBitMask) != 0, then the node will cast shadows from the
light.The default mask is 0x1. intensity TypeDescriptionPropTypes.numberSet the intensity of this Light.
Set to 1000 for normal intensity. When using physically-based rendering, this
value is specified in Lumens. When using non-physical rendering, the intensity
is simply divided by 1000 and multiplied by the Light&#x27;s color.Lower
intensities will decrease the brightness of the light, and higher intensities
will increase the brightness of the
light. position TypeDescriptionPropTypes.arrayOf(PropTypes.number)Cartesian
position of the light in 3D world space, specified as [x, y, z]. Default
position is [0,0,0]. temperature TypeDescriptionPropTypes.numberThe temperature of the light, in
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
A light object that emits a omni light. See our [Lighting and Material
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
colorType| Description  
---|---  
| **ColorPropType** The color of the light. The default light color is white.
Valid color formats are: _ '#f0f' (#rgb) _ '#f0fc' (#rgba) _ '#ff00ff'
(#rrggbb) _ '#ff00ff00' (#rrggbbaa) _ 'rgb(255, 255, 255)' _ 'rgba(255, 255,
255, 1.0)' _ 'hsl(360, 100%, 100%)' _ 'hsla(360, 100%, 100%, 1.0)' _
'transparent' _ 'red' * 0xff00ff00 (0xrrggbbaa)  
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
intensityType| Description  
---|---  
| **PropTypes.number** Set the intensity of this Light. Set to 1000 for normal
intensity. When using physically-based rendering, this value is specified in
Lumens. When using non-physical rendering, the intensity is simply divided by
1000 and multiplied by the Light's color.Lower intensities will decrease the
brightness of the light, and higher intensities will increase the brightness
of the light.  
###
positionType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position of the light in
3D world space, specified as [x, y, z]. Default position is [0,0,0].  
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
Manipulation](https://reactnative.dev/docs/0.65/direct-manipulation) for more
information.
Parameter| Type| Description  
---|---|---  
nativeProps| object| an object where the keys are the properties to set and
the values are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago