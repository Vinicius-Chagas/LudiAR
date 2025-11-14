Example use: JavaScript&lt;ViroSkyBox source={{ nx: require(&#x27;res/sb_space_left.png&#x27;), px: require(&#x27;res/sb_space_right.png&#x27;), ny: require(&#x27;res/sb_space_bottom.png&#x27;), py: require(&#x27;res/sb_space_top.png&#x27;), nz: require(&#x27;res/sb_space_back.png&#x27;), pz: require(&#x27;res/sb_space_front.png&#x27;) }} /&gt;  Props color TypeDescriptionColorPropTypeThe color of the skybox. The default color is black. This property is ignored if source is set. See Styles for more. source TypeDescriptionCubeMapPropTypeA cube map which consists of six images that will end up surrounding the user creating a sky effect. The parameters are nx(negative x), px(positive x), ny(negative y), py(positive y), nz(negative z), pz(positive z). nx, py, nz, pz represents the sides of the skybox while py, ny represent the top and bottom of the skybox. Each of the parameters are type ImageSourcePropType. Example:  TypeScript{ nx: require(&quot;res/nx.png&quot;), px: require(&quot;res/px.png&quot;), ny: require(&quot;res/ny.png&quot;), py: require(&quot;res/py.png&quot;), nz: require(&quot;res/nz.png&quot;), pz: require(&quot;res/pz.png&quot;), };  format TypeDescription&#x27;RGBA8&#x27; | &#x27;RGBA4&#x27; | &#x27;RGB565&#x27;Image texture formats for storage on the GPU.RGBA8 \- Each pixel is described with 32-bits, using eight bits per channelRGBA4 \- Each pixel is described with 16 bits, using four bits per channelRGB565 \- Formats the picture into 16 bit color values without alpha onLoadEnd TypeDescriptionFunctionCallback triggered when the cube map specified in source is finished loading. For example: TypeScriptconst handleLoadEnd = (event:Event) =&gt; { if(event.nativeEvent.success) { //skybox has loaded successfully! } }  onLoadStart TypeDescriptionFunctionCallback triggered when we are processing the assets specified in the source property. rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description here. style TypeDescriptionstylePropTypeSee Styles. transformBehaviors TypeDescriptionstring | string[]An array of transform constraints that affect the transform of the object. For example, putting the value &quot;billboard&quot; will ensure the object is facing the user as the user rotates their head on any axis. This is useful for icons or text where you&#x27;d like the object to always face the user. Allowed values (values are case sensitive):&#x27;billboard&#x27;: Billboard object on x,y,z axis&#x27;billboardX&#x27;: Billboard object on the x axis&#x27;billboardY&#x27;: Billboard object on the y axis&#x27;billboardZ&#x27;: Billboard object on the z axis visible TypeDescriptionbooleanFalse if the object should be hidden. By default the object is visible and this value is true." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that provides scene backgrounds by displaying a cube that
surrounds the user to give the effect of a sky or distant horizon. The skybox
can either be a fixed `color`, or it can be composed of six textures via the
`source` property. For more information on scene backgrounds check out our
[Scene Guide](scenes.html#scene-backgrounds) .
######
Example use:JavaScript
##
Props###
colorType| Description  
---|---  
ColorPropType| The color of the skybox. The default color is black. This
property is ignored if `source` is set.  
See [Styles](styles.html#color) for more.  
###
sourceType| Description  
---|---  
CubeMapPropType| A cube map which consists of six images that will end up
surrounding the user creating a sky effect. The parameters are nx(negative x),
px(positive x), ny(negative y), py(positive y), nz(negative z), pz(positive
z). nx, py, nz, pz represents the sides of the skybox while py, ny represent
the top and bottom of the skybox.  
Each of the parameters are type
[ImageSourcePropType](https://reactnative.dev/docs/image#source).  
Example:
TypeScript
    {
      nx: require("res/nx.png"),
      px: require("res/px.png"),
      ny: require("res/ny.png"),
      py: require("res/py.png"),
      nz: require("res/nz.png"),
      pz: require("res/pz.png"),
    };
###
formatType| Description  
---|---  
'RGBA8' | 'RGBA4' | 'RGB565'| Image texture formats for storage on the GPU.  
**RGBA8** \- Each pixel is described with 32-bits, using eight bits per
channel  
**RGBA4** \- Each pixel is described with 16 bits, using four bits per channel  
**RGB565** \- Formats the picture into 16 bit color values without alpha  
###
onLoadEndType| Description  
---|---  
Function| Callback triggered when the cube map specified in source is finished
loading.  
For example:
TypeScript
    const handleLoadEnd = (event:Event) => {
      if(event.nativeEvent.success) {
        //skybox has loaded successfully!
      }
    }
###
onLoadStartType| Description  
---|---  
Function| Callback triggered when we are processing the assets specified in
the source property.  
###
rotationType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
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
__Updated over 3 years ago