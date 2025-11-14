Example use: JavaScript&lt;ViroMaterialVideo ref={&quot;video_ref&quot;} material={&quot;test_material&quot;} paused={false} onBufferStart={this._onBufferStart} onBufferEnd={this._onBufferEnd} loop={true} muted={false} volume={1.0} onFinish={this._onVideoFinished} onUpdateTime={this._onUpdateTime} /&gt; /*Video texture example: ViroMaterials.createMaterials({ test_material: { shininess: 2.0, lightingModel: &quot;Lambert&quot;, diffuseTexture: require(&#x27;./res/test_video.mp4&#x27;) } }); */  Props material TypeDescriptionPropTypes.stringA string that each represent a video material that was created via ViroMaterials.createMaterials(). A video material has it&#x27;s diffuseTexture property set to a video asset. paused TypeDescriptionPropTypes.boolSet to true to pause the video. This is set to false by default. loop TypeDescriptionPropTypes.boolSet to true to loop the video. This is set to false by default. muted TypeDescriptionPropTypes.boolSet to true to mute the video. This is set to false by default. onBufferEnd TypeDescriptionPropTypes.funcCallback invoked when the underlying video component has finished buffering. onError TypeDescriptionPropTypes.funcCallback invoked when the Video fails to load. The error message is contained in event.nativeEvent.error onBufferStart TypeDescriptionPropTypes.funcCallback invoked when video begins buffering. Called at least once at the beginning of playback/video creation. onFinish TypeDescriptionPropTypes.funcCallback that is called when the video is finished playing. This function isn&#x27;t called at the end of a video if looping is enabled. onUpdateTime TypeDescriptionPropTypes.funcCallback that is called when the current playback position has changed.For example: _onUpdateTime(currentPlaybackTimeInSeconds, totalPlayBackDurationInSeconds) { // Update Seek Bar or custom UI} volume TypeDescriptionPropTypes.numberA number represented volume from 0 to 1. Max volume is equal to 1. Min volume is equal to 0. This is set to 1 by default. Methods seekToTime(timeInSeconds: number)Sets the video to the specified time in seconds. |Parameters | Description | | ------------- |:------------- ||timeInSeconds | Number of seconds into video to seek to. |" style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that provides a control for video materials. This can be used to
start, stop, play video textures.
######
Example use:JavaScript
    /*Video texture example: 
    ViroMaterials.createMaterials({
        test_material: {
            shininess: 2.0,
            lightingModel: "Lambert",
            diffuseTexture: require('./res/test_video.mp4')
        }
    });
    */
##
Props###
materialType| Description  
---|---  
| **PropTypes.string** A string that each represent a video material that was
created via ViroMaterials.createMaterials(). A video material has it's
diffuseTexture property set to a video asset.  
###
pausedType| Description  
---|---  
| **PropTypes.bool** Set to true to pause the video. This is set to false by
default.  
###
loopType| Description  
---|---  
| **PropTypes.bool** Set to true to loop the video. This is set to false by
default.  
###
mutedType| Description  
---|---  
| **PropTypes.bool** Set to true to mute the video. This is set to false by
default.  
###
onBufferEndType| Description  
---|---  
| **PropTypes.func** Callback invoked when the underlying video component has
finished buffering.  
###
onErrorType| Description  
---|---  
| **PropTypes.func** Callback invoked when the Video fails to load. The error
message is contained in event.nativeEvent.error  
###
onBufferStartType| Description  
---|---  
| **PropTypes.func** Callback invoked when video begins buffering. Called at
least once at the beginning of playback/video creation.  
###
onFinishType| Description  
---|---  
| **PropTypes.func** Callback that is called when the video is finished
playing. This function isn't called at the end of a video if looping is
enabled.  
###
onUpdateTimeType| Description  
---|---  
| **PropTypes.func** Callback that is called when the current playback
position has changed.For example:` _onUpdateTime(currentPlaybackTimeInSeconds,
totalPlayBackDurationInSeconds) { // Update Seek Bar or custom UI}`  
###
volumeType| Description  
---|---  
| **PropTypes.number** A number represented volume from 0 to 1. Max volume is
equal to 1. Min volume is equal to 0. This is set to 1 by default.  
##
MethodsseekToTime(timeInSeconds: number)  
---  
Sets the video to the specified time in seconds. |Parameters | Description | | ------------- |:------------- ||timeInSeconds | Number of seconds into video to seek to. |  
__Updated over 3 years ago