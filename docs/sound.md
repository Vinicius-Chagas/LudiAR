Stereo Sound Many scenes benefit from having a background sound track,
either in the form of music or ambient noise like wind or ocean waves. You can
add background audio to your scene by utilizing the &lt;ViroSound&gt; component.
The audio to be played is specified via the source property, as in the following
example.  JavaScript&lt;ViroSound
paused={false} muted={false} source={require(&#x27;./res/sound.mp3&#x27;}
loop={false} volume={1.0} onFinish={this.onFinishSound}
onError={this.onErrorSound} /&gt;  &lt;ViroSound&gt;
can also be used for short sound effects. To replay such a sound, either set
loop to true, or toggle paused off and on. Finally, these
sounds also provide callbacks:  onFinish is invoked whenever the
sound completes (if looping, this is invoked at the end of each loop
onError is invoked if a sound fails to load. 
Spatial Sound Spatial sound is positioned audio that can
travel throughout a scene. For example, you can create a spatial sound that
animates along with a bird, chirping as it flies through the scene. To create
spatial sounds, use the &lt;ViroSpatialSound&gt; component. This component
supports all the fields of &lt;ViroSound&gt;, and adds new properties that
define how the sound travels. Spatial Sound File must be a single-
channel sound (mono)  JavaScript&lt;ViroSpatialSound
rolloffModel=&quot;linear&quot; paused={false} muted={false} minDistance={2}
maxDistance={5} position={[0, 0, 5]}
source={require(&#x27;./res/spatial_sound.wav&#x27;} loop={false} volume={1.0}
onFinish={this.onFinishSpatial} onError={this.onErrorSpatial}/&gt;
 The new properties are:  position
indicates the position of the sound within the coordinate space of its parent
node minDistance specifies the distance from the sound at which
it starts attenuating maxDistance the maximum distance at
which the sound can be heard; that is, when the sound attenuates to zero
rolloffModel defines the curve of the attenuation between
minDistance and maxDistance, and can be set to
none, linear, or logarithmic  Spatial sounds are
especially useful in that they can be animated along with visual objects in
the scene graph. In the example below, the &#x27;chirp&#x27; sound follows the
bird 3D object. We can do this by adding both the sound and the 3D object to
the same node, then simply animating the node as a whole. JavaScriptconst SoundAnimationTest = () =&gt; {
return ( &lt;ViroScene&gt; &lt;ViroAnimatedComponent
animation=&#x27;translate&#x27; run={true} loop={true}&gt; &lt;ViroNode&gt;
&lt;Viro3DObject source={require(&#x27;./res/bird.obj&#x27;)}
resources={[require(&#x27;./res/bird.mtl&#x27;),
require(&#x27;./res/bird.jpg&#x27;)]} position={[0, 0, 0]} /&gt;
&lt;ViroSpatialSound rolloffModel=&quot;linear&quot; paused={false}
muted={false} minDistance={5} maxDistance={8} position={[0, 0, 0]}
source={require(&#x27;./res/chirp.wav&#x27;} loop={true} volume={1.0} /&gt;
&lt;/ViroNode&gt; &lt;/ViroAnimatedComponent&gt; &lt;/ViroScene&gt; ); };
ViroAnimations.registerAnimations({
translate:{properties:{positionX:&quot;+=1.0&quot;}, duration:1000}, });
 Ambisonic Sound
Fields Ambisonic sound fields emit environmental sound from
every direction. They are the audio equivalent of a skybox or 360 image,
providing atmospheric background noise. These sounds respond to the
user&#x27;s head rotation. Producing ambisonic sound is beyond the
scope of this document, but if you have ambisonic sound files, you can load
them into ViroReact via the &lt;ViroSoundField&gt; component. This component
shares the same properties as &lt;ViroSound&gt;, and can additionally be rotated
about the Z axis with the rotation property. See the ViroSoundField reference for details."
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
ViroReact supports three forms of audio: stereo sound, spatial sound, and
ambisonic sound fields. Sprinkling environments with sound helps to add true
immersion to your scenes; they draw the listener's attention and provide cues
on where to look next. ViroReact supports three forms of sound.
##
Stereo SoundMany scenes benefit from having a background sound track, either in the form
of music or ambient noise like wind or ocean waves. You can add background
audio to your scene by utilizing the `` component. The audio to be
played is specified via the `source` property, as in the following example.
JavaScript
`` can also be used for short sound effects. To replay such a
sound, either set `loop` to true, or toggle `paused` off and on. Finally,
these sounds also provide callbacks:
  * `onFinish` is invoked whenever the sound completes (if looping, this is invoked at the end of each loop
  * `onError` is invoked if a sound fails to load.
##
Spatial SoundSpatial sound is positioned audio that can travel throughout a scene. For
example, you can create a spatial sound that animates along with a bird,
chirping as it flies through the scene. To create spatial sounds, use the
`` component. This component supports all the fields of
``, and adds new properties that define how the sound travels.
Spatial Sound File must be a single-channel sound (mono)
JavaScript
The new properties are:
  * `position` indicates the position of the sound within the coordinate space of its parent node
  * `minDistance` specifies the distance from the sound at which it _starts_ attenuating
  * `maxDistance` the maximum distance at which the sound can be heard; that is, when the sound attenuates to zero
  * `rolloffModel` defines the curve of the attenuation between `minDistance` and `maxDistance`, and can be set to `none`, `linear`, or `logarithmic`
Spatial sounds are especially useful in that they can be animated along with
visual objects in the scene graph. In the example below, the 'chirp' sound
follows the bird 3D object. We can do this by adding both the sound and the 3D
object to the same node, then simply animating the node as a whole.
JavaScript
    const SoundAnimationTest = () => {
      return (
      );
    };
    ViroAnimations.registerAnimations({
      translate:{properties:{positionX:"+=1.0"}, duration:1000},
    });
##
Ambisonic Sound FieldsAmbisonic sound fields emit environmental sound from every direction. They are
the audio equivalent of a skybox or 360 image, providing atmospheric
background noise. These sounds respond to the user's head rotation.
Producing ambisonic sound is beyond the scope of this document, but if you
have ambisonic sound files, you can load them into ViroReact via the
`` component. This component shares the same properties as
``, and can additionally be rotated about the Z axis with the
`rotation` property. See the [ViroSoundField](virosoundfield.html) reference
for details.
__Updated over 3 years ago