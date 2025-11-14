Example use: JavaScript&lt;ViroSpatialSound source={require(&quot;./sound/mysound.wav&quot;)} position={[0, 0, -3]} onFinish={this.onFinishSound} /&gt;  Props source (* required) TypeDescriptionImageSourcePropTypeThe source of a spatial sound. Must be a single-channel audio file. loop TypeDescriptionbooleanSet to true to loop the spatial sound. This is set to false by default. maxDistance TypeDescriptionnumberA distance after which the audio can not be heard. minDistance TypeDescriptionnumberA distance after which the audio will begin to attenuate until maxDistance where the sound is completely gone. muted TypeDescriptionbooleanSet to true to mute the spatial sound. This is set to false by default. onError TypeDescriptionFunctionCallback invoked when the 360 Image fails to load. The error message is contained in event.nativeEvent.error onFinish TypeDescriptionFunctionCallback that is called when the spatial sound is finished playing. This function isn&#x27;t called at the end of a spatial sound if looping is enabled. paused TypeDescriptionbooleanSet to true to pause the spatial sound. This is set to false by default. rolloffModel TypeDescription&quot;None&quot; | &quot;Linear&quot; | &quot;Logarithmic&quot;The rolloff model which determines how the sound volume will fall off between minDistance and maxDistance. Accepts the following values:None  Linear * Logarithmic volume TypeDescriptionnumberA number represented volume from 0 to 1. Max volume is equal to 1. Min volume is equal to 0. This is set to 1 by default. position TypeDescription[number, number, number]Cartesian position of the sound in 3D world space, specified as [x, y, z]. Method seekToTime(timeInSeconds) Seek to the given point in the Sound, in seconds. Parameters timeInSeconds \- The seek position in seconds." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that represents a sound in 3D space. **Must be a single-channel
sound (mono)** and can be placed within a ViroNode or ViroAnimatedComponent
which changes its position relative to the user. Refer to
[Sound](https://viro-community.readme.io/docs/audio) under Develop for more
information.
######
Example use:JavaScript
##
Props###
source (* required)Type| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| The source
of a spatial sound. Must be a single-channel audio file.  
###
loopType| Description  
---|---  
boolean| Set to true to loop the spatial sound. This is set to false by
default.  
###
maxDistanceType| Description  
---|---  
number| A distance after which the audio can not be heard.  
###
minDistanceType| Description  
---|---  
number| A distance after which the audio will begin to attenuate until
maxDistance where the sound is completely gone.  
###
mutedType| Description  
---|---  
boolean| Set to true to mute the spatial sound. This is set to false by
default.  
###
onErrorType| Description  
---|---  
Function| Callback invoked when the 360 Image fails to load. The error message
is contained in event.nativeEvent.error  
###
onFinishType| Description  
---|---  
Function| Callback that is called when the spatial sound is finished playing.
This function isn't called at the end of a spatial sound if looping is
enabled.  
###
pausedType| Description  
---|---  
boolean| Set to true to pause the spatial sound. This is set to false by
default.  
###
rolloffModelType| Description  
---|---  
"None" | "Linear" | "Logarithmic"| The rolloff model which determines how the sound volume will fall off between minDistance and maxDistance. Accepts the following values:  
_None  
_ Linear  
* Logarithmic  
###
volumeType| Description  
---|---  
number| A number represented volume from 0 to 1. Max volume is equal to 1. Min
volume is equal to 0. This is set to 1 by default.  
###
positionType| Description  
---|---  
[number, number, number]| Cartesian position of the sound in 3D world space,
specified as [x, y, z].  
##
Method###
seekToTime(timeInSeconds)Seek to the given point in the Sound, in seconds.
####
Parameters**timeInSeconds** \- The seek position in seconds.
__Updated over 3 years ago