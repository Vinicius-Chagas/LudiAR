Example use: JavaScript&lt;Viro360Video
source={require(&quot;./video/myvideo.mp4&quot;)} onFinish={this._onFinish}
onUpdateTime={this._onUpdateTime} onError={this._videoError} loop={true}
paused={false} volume={1.0} /&gt;  Props source (*
required)
TypeDescriptionsourcePropTypes.oneOfType( [PropTypes.shape(
{uri:PropTypes.string} ), PropTypes.number])The video source, a
remote URL or a local file resource. MPEG videos accepted.To invoke with
remote url:{uri:&quot;http://example.org/myvideo.mp4&quot;}To invoke
with local source:require(&#x27;./myvideo.mp4&#x27;);
loop TypeDescriptionPropTypes.boolSet to true to loop the video. This
is set to false by default. muted TypeDescriptionPropTypes.boolSet to true to mute the video
audio. This is set to false by default.
onBufferEnd TypeDescriptionPropTypes.funcCallback invoked when the
underlying video component has finished
buffering. onBufferStart TypeDescriptionPropTypes.funcCallback invoked when video begins
buffering. Called at least once at the beginning of playback/video
creation. onError TypeDescriptionPropTypes.funcCallback invoked when the 360 Video
fails to load. The error message is contained in
event.nativeEvent.error onFinish
TypeDescriptionPropTypes.funcCallback that is called when the
video is finished playing. This function isn&#x27;t called at the end of a
video if looping is enabled. onUpdateTime TypeDescriptionPropTypes.funcCallback that is called when the
current playback position has changed.For example:
_onUpdateTime(currentPlaybackTimeInSeconds, totalPlayBackDurationInSeconds) {
// Update Seek Bar or custom UI}
paused TypeDescriptionPropTypes.boolSet to true to pause the video.
This is set to false by default. rotation
TypeDescriptionPropTypes.arrayOf(PropTypes.number)The rotation
of the box around it&#x27;s local axis specified as Euler angles [x, y, z].
Units for each angle are specified in
degrees. stereoMode TypeDescriptionPropTypes.oneOf([&#x27;leftRight&#x27;,
&#x27;rightLeft&#x27;, &#x27;topBottom&#x27;, &#x27;bottomTop&#x27;,
&#x27;none&#x27;])Specifies the alignment mode of the provided stereo
video in source. The video will be rendered in the given order, the first
being the left eye, the next the right eye.For example, leftRight will render
the left half of the video to the left eye, and the right half of the video to
the right eye. Similarly, topBottom will render the top half of the video to
the left eye, and the bottom half of the video to the right eye. Defaults to
none. volume TypeDescriptionPropTypes.numberA number represented volume from
0 to 1. Max volume is equal to 1. Min volume is equal to 0. This is set to 1
by default. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A component that displays a 360 video sphere that surrounds the user.
######
Example use:JavaScript
##
Props###
source (* required)Type| Description  
---|---  
**source**| **PropTypes.oneOfType( [PropTypes.shape( {uri:PropTypes.string} ),
PropTypes.number])** The video source, a remote URL or a local file resource.
MPEG videos accepted.To invoke with remote
url:`{uri:"http://example.org/myvideo.mp4"}`To invoke with local
source:`require('./myvideo.mp4');`  
###
loopType| Description  
---|---  
| **PropTypes.bool** Set to true to loop the video. This is set to false by
default.  
###
mutedType| Description  
---|---  
| **PropTypes.bool** Set to true to mute the video audio. This is set to false
by default.  
###
onBufferEndType| Description  
---|---  
| **PropTypes.func** Callback invoked when the underlying video component has
finished buffering.  
###
onBufferStartType| Description  
---|---  
| **PropTypes.func** Callback invoked when video begins buffering. Called at
least once at the beginning of playback/video creation.  
###
onErrorType| Description  
---|---  
| **PropTypes.func** Callback invoked when the 360 Video fails to load. The
error message is contained in event.nativeEvent.error  
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
pausedType| Description  
---|---  
| **PropTypes.bool** Set to true to pause the video. This is set to false by
default.  
###
rotationType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** The rotation of the box around it's
local axis specified as Euler angles [x, y, z]. Units for each angle are
specified in degrees.  
###
stereoModeType| Description  
---|---  
| **PropTypes.oneOf([ 'leftRight', 'rightLeft', 'topBottom', 'bottomTop',
'none'])**Specifies the alignment mode of the provided stereo video in source.
The video will be rendered in the given order, the first being the left eye,
the next the right eye.For example, leftRight will render the left half of the
video to the left eye, and the right half of the video to the right eye.
Similarly, topBottom will render the top half of the video to the left eye,
and the bottom half of the video to the right eye. Defaults to none.  
###
volumeType| Description  
---|---  
| **PropTypes.number** A number represented volume from 0 to 1. Max volume is
equal to 1. Min volume is equal to 0. This is set to 1 by default.  
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