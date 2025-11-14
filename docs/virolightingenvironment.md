Lighting environment expects an equirectangular texture. Radiance HDR
textures (*.hdr) work best. Props source (*required) TypeDescriptionImageSourcePropTypeThe image
source, a remote URL or a local file resource. Radiance HDR images (.hdr) are
accepted. To invoke with remote url:{uri:&quot;http://example.org/myimage.hdr&quot;}
To invoke with local source: require(&#x27;./image.hdr&#x27;);
onLoadStart TypeDescription() =&gt; voidCallback triggered
when we start processing the image to be used in computing this lighting
environment (either downloading / reading from
file). onLoadEnd TypeDescription(event) =&gt; voidCallback
triggered when we have finished processing assets to be used in computing this
lighting environment. Whether or not assets were processed successfully will
be indicated by the parameter
&quot;success&quot;. For example:
TypeScriptconst handleLoadEnd = (event: Event)
=&gt; { // Indication of asset loading success event.nativeEvent.success }
 onError
TypeDescription(event) =&gt; voidCallback
triggered when the hdr image fails to load. Invoked with {nativeEvent:
{error}}." style="margin-left:31px"
class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable"
data-testid="RDMD">
Component that represents the lighting environment to use for its parent
`ViroScene` or `ViroPortalScene`. The lighting environment is a texture that
acts as a global light source, illuminating surfaces with diffuse and specular
ambient light. Each pixel in the lighting environment is treated as a light
emitter, thereby capturing the environment's global lighting and general feel.
This gives objects a sense of belonging to their environment. For this reason
it is common to use the scene's background texture (set through
[Viro360Image](viro360image.html)) as the lighting environment, but this is
not necessary.
Lighting environment expects an equirectangular texture. Radiance HDR textures
(*.hdr) work best.
##
Props###
source (*required)Type| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| The image
source, a remote URL or a local file resource. Radiance HDR images (.hdr) are
accepted.  
To invoke with remote url:  
`{uri:"http://example.org/myimage.hdr"}`  
To invoke with local source: `require('./image.hdr');`  
###
onLoadStartType| Description  
---|---  
() => void| Callback triggered when we start processing the image to be used
in computing this lighting environment (either downloading / reading from
file).  
###
onLoadEndType| Description  
---|---  
(event) => void| Callback triggered when we have finished processing assets to
be used in computing this lighting environment. Whether or not assets were
processed successfully will be indicated by the parameter "success".  
For example:
TypeScript
    const handleLoadEnd = (event: Event) => {     
      // Indication of asset loading success 
      event.nativeEvent.success 
    }
###
onErrorType| Description  
---|---  
(event) => void| Callback triggered when the hdr image fails to load. Invoked
with {nativeEvent: {error}}.  
__Updated over 3 years ago