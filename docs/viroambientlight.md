Example use: JavaScript&lt;ViroAmbientLight
color=&quot;#ffffff&quot; /&gt;  Props color TypeDescriptionColorPropTypeThe color of the
light. The default light color is white. Valid color formats are: \-
&#x27;#f0f&#x27; (#rgb) \- &#x27;#f0fc&#x27; (#rgba) \-
&#x27;#ff00ff&#x27; (#rrggbb) \- &#x27;#ff00ff00&#x27; (#rrggbbaa)
\- &#x27;rgb(255, 255, 255)&#x27; \- &#x27;rgba(255, 255, 255,
1.0)&#x27; \- &#x27;hsl(360, 100%, 100%)&#x27; \- &#x27;hsla(360,
100%, 100%, 1.0)&#x27; \- &#x27;transparent&#x27; \-
&#x27;red&#x27; \- 0xff00ff00 (0xrrggbbaa) See Styles for
more. influenceBitMask TypeDescriptionnumberThis property
is used to make lights apply to specific nodes. Lights and nodes in the scene
can be assigned bit-masks to determine how each light influences each node.
During rendering, Viro compares each light&#x27;s influenceBitMask with each
node&#x27;s lightReceivingBitMask and shadowCastingBitMask. The bit-masks are
compared using a bitwise AND operation: If (influenceBitMask &amp;
lightReceivingBitMask) != 0, then the light will illuminate the node
(and the node will receive shadows cast from objects occluding the
light). If (influenceBitMask &amp; shadowCastingBitMask) != 0, then
the node will cast shadows from the light. The default mask is
0x1. intensity TypeDescriptionnumberThe brightness of the
light. Set to 1000 for normal intensity. The intensity is simply divided by
1000 and multiplied by the light&#x27;s color. Lower intensities
will decrease the brightness of the light, and higher intensities will
increase the brightness of the light. The default intensity is
1000. temperature TypeDescriptionnumberThe temperature of the
light, in Kelvin. Viro will derive a hue from this temperature and multiply it
by the light&#x27;s color. To model a physical light with a known temperature,
you can leave the color of this Light set to (1.0, 1.0, 1.0) and set its
temperature only. The default value for temperature is 6500K, which
represents pure white light. rotation
TypeDescriptionnumberThe rotation of the
component around it&#x27;s local axis specified as Euler angles [x, y, z].
Units for each angle are specified in
degrees. style TypeDescriptionStylesStyles of the
component. transformBehaviors TypeDescriptionstring[]An array of transform
constraints that affect the transform of the object. For example, putting the
value &quot;billboard&quot; will ensure the box is facing the user as the user
rotates their head on any axis. This is useful for icons or text where
you&#x27;d like the box to always face the user at a particular rotation.
Allowed values(values are case
sensitive):&quot;billboard&quot;: Billboard object
on x,y,z axis &quot;billboardX&quot;: Billboard object on the
x axis&quot;billboardY&quot;: Billboard object on the y
axis&quot;billboardZ&quot;: Billboard object on the z
axis width TypeDescriptionnumberThe width of the component
in 3D space. Default value is 1. visible
TypeDescriptionbooleanFalse if the box should be
hidden. By default the box is visible and this value is
true. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A light object that emits ambient light that affects all objects equally. See
our [Lighting and Material Guide][https://viro-
community.readme.io/docs/lighting-and-materials](lighting-and-materials.html))
for more information on lights in a scene.
######
Example use:JavaScript
##
Props###
colorType| Description  
---|---  
ColorPropType| The color of the light. The default light color is white. Valid
color formats are:  
\- '#f0f' (#rgb)  
\- '#f0fc' (#rgba)  
\- '#ff00ff' (#rrggbb)  
\- '#ff00ff00' (#rrggbbaa)  
\- 'rgb(255, 255, 255)'  
\- 'rgba(255, 255, 255, 1.0)'  
\- 'hsl(360, 100%, 100%)'  
\- 'hsla(360, 100%, 100%, 1.0)'  
\- 'transparent'  
\- 'red'  
\- 0xff00ff00 (0xrrggbbaa)  
See [Styles](styles.html#color) for more.  
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
number| The rotation of the component around it's local axis specified as
Euler angles [x, y, z]. Units for each angle are specified in degrees.  
###
styleType| Description  
---|---  
[Styles](styles.html)| Styles of the component.  
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
widthType| Description  
---|---  
number| The width of the component in 3D space. Default value is 1.  
###
visibleType| Description  
---|---  
boolean| False if the box should be hidden. By default the box is visible and
this value is true.  
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