Example use: JavaScript&lt;ViroSoundField
source={require(&quot;./sound/mysound.wav&quot;)} rotation={[0, 90, 0]}
paused={false} onFinish={this.onFinishSound} /&gt; 
Props source (* required) TypeDescriptionPropTypes.oneOfType(
[PropTypes.shape( {uri:PropTypes.string} ), PropTypes.number])An
ambisonic sound file. Only supports multi-channel audio
files. loop TypeDescriptionbooleanSet to true to loop the
sound field. This is set to false by
default. muted TypeDescriptionbooleanSet to true to mute the
sound field. This is set to false by
default. onError TypeDescriptionFunctionCallback invoked when the
360 Image fails to load. The error message is contained in
event.nativeEvent.error onFinish
TypeDescriptionFunctionCallback that is called
when the sound field is finished playing. This function isn&#x27;t called at
the end of a sound field if looping is
enabled. paused TypeDescriptionbooleanSet to true to pause the
sound field. This is set to false by
default. rotation TypeDescription[number, number, number]The
rotation which will be applied to the ambisonic
sound. volume TypeDescriptionnumberA number represented volume
from 0 to 1. Max volume is equal to 1. Min volume is equal to 0. This is set
to 1 by default. Method seekToTime(timeInSeconds) Seek to the given
point in the Sound, in seconds. Parameters timeInSeconds \- The seek
position in seconds." style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that enables the control and playback of ambisonic sound files.
Refer to [Sound](https://viro-community.readme.io/docs/audio) under Develop
for more information.
######
Example use:JavaScript
##
Props###
source (* required)Type| Description  
---|---  
| **PropTypes.oneOfType( [PropTypes.shape( {uri:PropTypes.string} ),
PropTypes.number])** An ambisonic sound file. Only supports multi-channel
audio files.  
###
loopType| Description  
---|---  
boolean| Set to true to loop the sound field. This is set to false by default.  
###
mutedType| Description  
---|---  
boolean| Set to true to mute the sound field. This is set to false by default.  
###
onErrorType| Description  
---|---  
Function| Callback invoked when the 360 Image fails to load. The error message
is contained in event.nativeEvent.error  
###
onFinishType| Description  
---|---  
Function| Callback that is called when the sound field is finished playing.
This function isn't called at the end of a sound field if looping is enabled.  
###
pausedType| Description  
---|---  
boolean| Set to true to pause the sound field. This is set to false by
default.  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation which will be applied to the ambisonic
sound.  
###
volumeType| Description  
---|---  
number| A number represented volume from 0 to 1. Max volume is equal to 1. Min
volume is equal to 0. This is set to 1 by default.  
##
Method###
seekToTime(timeInSeconds)Seek to the given point in the Sound, in seconds.
####
Parameters**timeInSeconds** \- The seek position in seconds.
__Updated over 3 years ago