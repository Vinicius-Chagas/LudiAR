Example use: JavaScript&lt;Viro360Image source={require(&quot;./res/myimage.png&quot;)} rotation={[0, 45, 0]} format=&quot;RGBA8&quot; onLoadStart={handleLoadStart} onLoadEnd={handleLoadEnd} onError={handleError} /&gt;  Props source (*required) TypeDescriptionImageSourcePropTypeAn asset can be loaded by using require() or { uri: &#x27;https://example.com/your-image.png&#x27; } JavaScript&lt;Viro360Image source={require(&quot;./res/myimage.png&quot;)} /&gt; &lt;Viro360Image source={{ uri: &#x27;https://example.com/your-image.png&#x27; }} /&gt;  isHDR TypeDescriptionbooleanSet to true if we are providing a radiance HDR image (.hdr) as the source of this 360 image. format TypeDescription&#x27;RGBA8&#x27; | &#x27;RGBA4&#x27; | &#x27;RGB565&#x27;The internal format to use for the image. This is the format we will use to store the image on the GPU. It is not the format of the source image data. This property does not apply to HDR images. ValueDescriptionRGBA8Each pixel is described with 32-bits, using eight bits per channelRGBA4Each pixel is described with 16 bits, using four bits per channelRGB565Formats the picture into 16 bit color values without alpha onLoadEnd TypeDescriptionFunctionCallback triggered when we have finished loading the 360 image to be displayed. If the image was loaded and displayed correctly, the &#x27;success&#x27; parameter will be true. JavaScriptconst handleLoadEnd = (event: Event) =&gt; { // Indication of asset loading success if (event.nativeEvent.success) { //our image successfully loaded! } } &lt;Viro360Image source={{ uri: &#x27;https://example.com/your-image.png&#x27; }} onLoadEnd={handleLoadEnd} /&gt;  onError TypeDescriptionFunctionCallback invoked when the 360 Image fails to load. The error message is contained in event.nativeEvent.error JavaScriptconst handleError = (event: Event) =&gt; { console.log(event.nativeEvent.error); } &lt;Viro360Image source={{ uri: &#x27;https://example.com/your-image.png&#x27; }} onError={handleError} /&gt;  onLoadStart TypeDescriptionFunctionCallback triggered when the image is processing to be displayed in this 360 Photo (either downloading / reading from file). rotation TypeDescription[number, number, number]The rotation of the box around its local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. JavaScript&lt;Viro360Image source={{ uri: &#x27;https://example.com/your-image.png&#x27; }} rotation={[0,45,0]} /&gt;  stereoMode TypeDescription&#x27;leftRight&#x27;, &#x27;rightLeft&#x27;, &#x27;topBottom&#x27;, &#x27;bottomTop&#x27;, &#x27;none&#x27;Specifies the alignment mode of the provided stereo image in source. The image will be rendered in the given order, the first being the left eye, the next the right eye.For example, leftRight will render the left half of the image to the left eye, and the right half of the image to the right eye. Similarly, topBottom will render the top half of the image to the left eye, and the bottom half of the image to the right eye. Defaults to none. 🚧NoteThere&#x27;s a known issue with stereoscopic images of the format RGB565 (the fix is on the roadmap). Methods setNativeProps(nativeProps) A wrapper function around the native component&#x27;s setNativeProps which allow users to set values on the native component without changing state/setting props and re-rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys are the properties to set and the values are the values to set JavaScriptcomponentRef.setNativeProps({ position: [0, 0, -1] }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that displays a 360 photo sphere that surrounds the user.
######
Example use:JavaScript
##
Props###
source (*required)Type| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| An asset can
be loaded by using `require()` or `{ uri: 'https://example.com/your-image.png'
}`  
JavaScript
###
isHDRType| Description  
---|---  
boolean| Set to true if we are providing a radiance HDR image (.hdr) as the
source of this 360 image.  
###
formatType| Description  
---|---  
'RGBA8' | 'RGBA4' | 'RGB565'| The _internal_ format to use for the image. This is the format we will use to store the image on the GPU. It is not the format of the source image data. This property does not apply to HDR images.  
Value| Description  
---|---  
RGBA8| Each pixel is described with 32-bits, using eight bits per channel  
RGBA4| Each pixel is described with 16 bits, using four bits per channel  
RGB565| Formats the picture into 16 bit color values without alpha  
###
onLoadEndType| Description  
---|---  
Function| Callback triggered when we have finished loading the 360 image to be
displayed. If the image was loaded and displayed correctly, the 'success'
parameter will be true.  
JavaScript
    const handleLoadEnd = (event: Event) => {
      // Indication of asset loading success
      if (event.nativeEvent.success) {
        //our image successfully loaded!
      }
    }
###
onErrorType| Description  
---|---  
Function| Callback invoked when the 360 Image fails to load. The error message
is contained in event.nativeEvent.error  
JavaScript
    const handleError = (event: Event) => {
      console.log(event.nativeEvent.error);
    }
###
onLoadStartType| Description  
---|---  
Function| Callback triggered when the image is processing to be displayed in
this 360 Photo (either downloading / reading from file).  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the box around its local axis
specified as Euler angles [x, y, z]. Units for each angle are specified in
degrees.  
JavaScript
###
stereoModeType| Description  
---|---  
'leftRight', 'rightLeft', 'topBottom', 'bottomTop', 'none'| Specifies the
alignment mode of the provided stereo image in source. The image will be
rendered in the given order, the first being the left eye, the next the right
eye.For example, leftRight will render the left half of the image to the left
eye, and the right half of the image to the right eye. Similarly, topBottom
will render the top half of the image to the left eye, and the bottom half of
the image to the right eye. Defaults to none.  
> ## 🚧
>
> Note
>
> There's a known issue with stereoscopic images of the format RGB565 (the fix
> is on the roadmap).
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