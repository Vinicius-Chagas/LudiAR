Example use: JavaScript&lt;ViroSound
source={require(&quot;./sound/mysound.mp3&quot;)}
onFinish={this.onFinishSound} /&gt;  Props source (*
required)
TypeDescriptionImageSourcePropTypeThe sound
source, either a mono or stereo audio file. Supported extensions include .mp3
and .wav.This can also be the key of a preloaded sound. See preloadSounds
below for more information. An asset can be loaded by using require() or
{ uri:
&#x27;https://example.com/your-sound.mp3&#x27;
} loop TypeDescriptionbooleanSet to true to loop the
sound. This is set to false by default.
muted TypeDescriptionbooleanSet to true to mute the
sound. This is set to false by default.
onError
TypeDescriptionFunctionCallback invoked when the
Sound fails to load. The error message is contained in
event.nativeEvent.error onFinish
TypeDescriptionFunctionCallback that is called
when the sound is finished playing. This function isn&#x27;t called at the end
of a sound if looping is enabled. paused TypeDescriptionbooleanSet to true to pause the
sound. This is set to false by default.
volume TypeDescriptionnumberA number represented volume
from 0 to 1. Max volume is equal to 1. Min volume is equal to 0. This is set
to 1 by default. Methods seekToTime(timeInSeconds) Seek to the given
point in the Sound, in seconds. Parameters timeInSeconds \- The seek
position in seconds. Static Methods static
preloadSounds(soundMap:{[key:string]: string) Given a map of keys and links to their corresponding
sound data, Viro will prefetch each sound and store it locally for quick
access, asynchronously. You can then play these sounds later by providing the
key in the sound&#x27;s source attribute. We currently only support external urls
(web-based). Example showing the preloading of two sounds: TypeScriptViroSound.preloadSounds({
&quot;cube_sound&quot;:
resolveAssetSource(require(&quot;../res/metronome.mp3&quot;)),
&quot;cube_sound_2&quot;: &quot;http://www.kozco.com/tech/32.mp3&quot;), });
 static unloadSounds(soundKeys:
[string]) Given sound keys, will delete the
local prefetched copy of sound data from the application&#x27;s internal
directory.  TypeScriptViroSound.unloadSounds([ &quot;cube_sound&quot; ]);
" style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
A component that enables the user play and control mono and stereo sound
effects. Refer to [Sound](https://viro-community.readme.io/docs/audio) under
Develop for more information.
######
Example use:JavaScript
##
Props###
source (* required)Type| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| The sound
source, either a mono or stereo audio file. Supported extensions include .mp3
and .wav.This can also be the _key_ of a preloaded sound. See `preloadSounds`
below for more information.  
An asset can be loaded by using `require()` or `{ uri:
'https://example.com/your-sound.mp3' }`  
###
loopType| Description  
---|---  
boolean| Set to true to loop the sound. This is set to false by default.  
###
mutedType| Description  
---|---  
boolean| Set to true to mute the sound. This is set to false by default.  
###
onErrorType| Description  
---|---  
Function| Callback invoked when the Sound fails to load. The error message is
contained in event.nativeEvent.error  
###
onFinishType| Description  
---|---  
Function| Callback that is called when the sound is finished playing. This
function isn't called at the end of a sound if looping is enabled.  
###
pausedType| Description  
---|---  
boolean| Set to true to pause the sound. This is set to false by default.  
###
volumeType| Description  
---|---  
number| A number represented volume from 0 to 1. Max volume is equal to 1. Min
volume is equal to 0. This is set to 1 by default.  
##
Methods###
seekToTime(timeInSeconds)Seek to the given point in the Sound, in seconds.
####
Parameters**timeInSeconds** \- The seek position in seconds.
##
Static Methods###
static preloadSounds(soundMap:{[key:string]: string)Given a map of keys and links to their corresponding sound data, Viro will
prefetch each sound and store it locally for quick access, asynchronously. You
can then play these sounds later by providing the key in the sound's `source`
attribute. We currently only support external urls (web-based).
Example showing the preloading of two sounds:
TypeScript
    ViroSound.preloadSounds({  
      "cube_sound": resolveAssetSource(require("../res/metronome.mp3")),
      "cube_sound_2": "http://www.kozco.com/tech/32.mp3"),
    });
###
static unloadSounds(soundKeys: [string])Given sound keys, will delete the local prefetched copy of sound data from the
application's internal directory.
TypeScript
    ViroSound.unloadSounds([ "cube_sound" ]);
__Updated over 3 years ago