Example use: JavaScript/* A directional light coming from directly above */ &lt;ViroDirectionalLight color=&quot;#ffffff&quot; direction={[0, -1, 0]} /&gt;  Props direction (* required) [number, number, number]A 3D unit vector, specified as [x, y, z] that represents the direction the light is facing. Values for each axis can be from -1 to 1. A value of [1, 0, 0]} would make the light direction be towards positive x. So if an object was positioned at [0,0,0] the light would hit it from it&#x27;s left side. castsShadow TypeDescriptionbooleanTrue if this light should cast shadows. color TypeDescriptionColorPropTypeThe color of the light. The default light color is white. See Styles for more influenceBitMask TypeDescriptionnumberThis property is used to make lights apply to specific nodes. Lights and nodes in the scene can be assigned bit-masks to determine how each light influences each node. During rendering, Viro compares each light&#x27;s influenceBitMask with each node&#x27;s lightReceivingBitMask and shadowCastingBitMask. The bit-masks are compared using a bitwise AND operation: If (influenceBitMask &amp; lightReceivingBitMask) != 0, then the light will illuminate the node (and the node will receive shadows cast from objects occluding the light). If (influenceBitMask &amp; shadowCastingBitMask) != 0, then the node will cast shadows from the light. The default mask is 0x1. intensity TypeDescriptionnumberThe brightness of the light. Set to 1000 for normal intensity. The intensity is simply divided by 1000 and multiplied by the light&#x27;s color. Lower intensities will decrease the brightness of the light, and higher intensities will increase the brightness of the light. The default intensity is 1000. shadowBias TypeDescriptionnumberThe amount of bias to apply to the Z coordinate when performing the shadow depth comparison. This reduces shadow acne, but large biases can cause &quot;peter panning&quot;. The default value is 0.005. shadowFarZ TypeDescriptionnumberThe far clipping plane to use when rendering shadows. Shadows are only cast by and on surfaces closer than this plane. This value defines the units away the far clipping plane is from the shadowOrthographicPosition in the direction of the light. The shadow bounds constructed from this property, shadowNearZ, and shadowOrthographicSize should be kept as tight as possible to maximize the resolution of shadows. The default value is 20. shadowNearZ TypeDescriptionnumberThe near clipping plane to use when rendering shadows. Shadows are only cast by and on surfaces further away than this plane. This value defines the units away the near clipping plane is from the shadowOrthographicPosition in the direction of the light. The shadow bounds constructed from this property, shadowFarZ, and shadowOrthographicSize should be kept as tight as possible to maximize the resolution of shadows. The default value is 0.1. shadowOrthographicSize TypeDescriptionnumberThe orthographic size determines the width and height of the area, centered at shadowOrthographicPosition, that should be rendered to the shadow map. A larger value means more of the scene will be shadowed, but at lower resolution. The shadow bounds constructed from this property, shadowFarZ, and shadowOrthographicSize should be kept as tight as possible to maximize the resolution of shadows. The default value is 20. shadowOrthographicPosition TypeDescription[number, number, number]The center of the shadow map created by this directional light. Although directional lights have no center, the shadow map must have a center. shadowMapSize TypeDescriptionnumberThe size of the shadow map used to cast shadows for this light. Shadows are created by rendering the silhouettes of scene geometry onto a 2D image from the point of view of the light, then projecting that image onto the final view. Larger shadow maps result in higher resolution shadows, but can have a higher memory and performance cost. Smaller shadow maps are faster but result in pixelated edges. The default value is 1024. shadowOpacity TypeDescriptionnumberThe opacity of the shadow. 1.0 creates a pitch black shadow. temperature TypeDescriptionnumberThe temperature of the light, in Kelvin. Viro will derive a hue from this temperature and multiply it by the light&#x27;s color. To model a physical light with a known temperature, you can leave the color of this Light set to (1.0, 1.0, 1.0) and set its temperature only. The default value for temperature is 6500K, which represents pure white light. rotation TypeDescription[number, number, number]The rotation of the object around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. style TypeDescriptionstylePropTypeSee Styles. transformBehaviors TypeDescriptionstring | string[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the object is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the object to always face the user. Allowed values (values are case sensitive):&#x27;billboard&#x27;: Billboard object on x,y,z axis&#x27;billboardX&#x27;: Billboard object on the x axis&#x27;billboardY&#x27;: Billboard object on the y axis&#x27;billboardZ&#x27;: Billboard object on the z axis visible TypeDescriptionbooleanFalse if the object should be hidden. By default the object is visible and this value is true. Methods setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A light object that emits a directional light, much like the sun. See our
[Lighting and Material Guide](lighting-and-materials.html) for more
information on lights in a scene.
######
Example use:JavaScript
    /* A directional light coming from directly above */
##
Props###
direction (* required)|  
---|---  
[number, number, number]| A 3D unit vector, specified as [x, y, z] that
represents the direction the light is facing. Values for each axis can be from
-1 to 1. A value of `[1, 0, 0]}` would make the light direction be towards
positive x. So if an object was positioned at `[0,0,0]` the light would hit it
from it's left side.  
###
castsShadowType| Description  
---|---  
boolean| True if this light should cast shadows.  
###
colorType| Description  
---|---  
[ColorPropType](https://reactnative.dev/docs/colors)| The color of the light.
The default light color is white.  
See [Styles](styles.html#color) for more  
###
influenceBitMaskType| Description  
---|---  
number| This property is used to make lights apply to specific nodes. Lights
and nodes in the scene can be assigned bit-masks to determine how each light
influences each node. During rendering, Viro compares each light's
influenceBitMask with each node's lightReceivingBitMask and
shadowCastingBitMask. The bit-masks are compared using a bitwise AND
operation:  
If `(influenceBitMask & lightReceivingBitMask) != 0`, then the light will
illuminate the node (and the node will receive shadows cast from objects
occluding the light).  
If `(influenceBitMask & shadowCastingBitMask) != 0`, then the node will cast
shadows from the light.  
The default mask is 0x1.  
###
intensityType| Description  
---|---  
number| The brightness of the light. Set to 1000 for normal intensity. The
intensity is simply divided by 1000 and multiplied by the light's color.  
Lower intensities will decrease the brightness of the light, and higher
intensities will increase the brightness of the light.  
The default intensity is 1000.  
###
shadowBiasType| Description  
---|---  
number| The amount of bias to apply to the Z coordinate when performing the
shadow depth comparison. This reduces shadow acne, but large biases can cause
"peter panning".  
The default value is 0.005.  
###
shadowFarZType| Description  
---|---  
number| The far clipping plane to use when rendering shadows. Shadows are only
cast by and on surfaces closer than this plane.  
This value defines the units away the far clipping plane is from the
shadowOrthographicPosition in the direction of the light.  
The shadow bounds constructed from this property, shadowNearZ, and
shadowOrthographicSize should be kept as tight as possible to maximize the
resolution of shadows.  
The default value is 20.  
###
shadowNearZType| Description  
---|---  
number| The near clipping plane to use when rendering shadows. Shadows are
only cast by and on surfaces further away than this plane.  
This value defines the units away the near clipping plane is from the
shadowOrthographicPosition in the direction of the light.  
The shadow bounds constructed from this property, shadowFarZ, and
shadowOrthographicSize should be kept as tight as possible to maximize the
resolution of shadows.  
The default value is 0.1.  
###
shadowOrthographicSizeType| Description  
---|---  
number| The orthographic size determines the width and height of the area,
centered at shadowOrthographicPosition, that should be rendered to the shadow
map. A larger value means more of the scene will be shadowed, but at lower
resolution.  
The shadow bounds constructed from this property, shadowFarZ, and
shadowOrthographicSize should be kept as tight as possible to maximize the
resolution of shadows.  
The default value is 20.  
###
shadowOrthographicPositionType| Description  
---|---  
[number, number, number]| The center of the shadow map created by this
directional light. Although directional lights have no center, the shadow
_map_ must have a center.  
###
shadowMapSizeType| Description  
---|---  
number| The size of the shadow map used to cast shadows for this light.  
Shadows are created by rendering the silhouettes of scene geometry onto a 2D
image from the point of view of the light, then projecting that image onto the
final view. Larger shadow maps result in higher resolution shadows, but can
have a higher memory and performance cost. Smaller shadow maps are faster but
result in pixelated edges.  
The default value is 1024.  
###
shadowOpacityType| Description  
---|---  
number| The opacity of the shadow. 1.0 creates a pitch black shadow.  
###
temperatureType| Description  
---|---  
number| The temperature of the light, in Kelvin. Viro will derive a hue from
this temperature and multiply it by the light's color. To model a physical
light with a known temperature, you can leave the color of this Light set to
(1.0, 1.0, 1.0) and set its temperature only.  
The default value for temperature is 6500K, which represents pure white light.  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the object around it's local axis
specified as Euler angles [x, y, z]. Units for each angle are specified in
degrees.  
###
styleType| Description  
---|---  
stylePropType| See [Styles](styles.html).  
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
visibleType| Description  
---|---  
boolean| False if the object should be hidden. By default the object is
visible and this value is true.  
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