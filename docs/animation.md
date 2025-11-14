Overview
Animations work by registering animations with ViroAnimations.registerAnimations(), then
invoking the animation by using the animation prop of the component
being animated. Registering Animations Before an animation can be
used, it must created and registered. Animations are specified by the
following properties: NameDescriptionpropertiesDictionary containing
the values the component should animate toward. Animatable
properties include:opacity: opacity of an object, [0, 1]positionX:
position of object on x-axispositionY: position of object on
y-axispositionZ: position of object on z-axisrotateX: rotation
of object around x-axis, in degreesrotateY: rotation of object around
y-axis, in degreesrotateZ: rotation of object around z-axis, in
degreesscaleX: scale value of object on x-axisscaleY: scale
value of object on y-axisscaleZ: scale value of object on
z-axismaterial: the texture, lighting, and other surface
properties of the objecteasingThe pacing of the
animation.Linear: the animation will occur evenly over its
duration  EaseIn: the animation will begin slowly and then speed up
as it progressesEaseOut: the animation will begin quickly and then slow as
it progresses  EaseInEaseOut: the animation will begin slowly, accelerate
through the middle of its duration, and then slow again before
completingBounce: the animation will begin quickly and
overshoot* its final position before settling into its final resting
placedurationLength in milliseconds of the animationdelayDelay in
milliseconds to wait before starting the
animation In the following example,
we register an animation that sets the scale of the component to which it is
applied to[1.0, 0.6, 1.0], and sets the opacity of said component to
1.0. The animation bounces toward its final value, and
lasts for five seconds. JavaScriptViroAnimations.registerAnimations({
animateImage:{ properties:{ scaleX: 1.0, scaleY: 0.6, scaleZ: 1.0, opacity:
1.0 }, easing:&quot;Bounce&quot;, duration: 5000 }, });
 Applying
Animations
Once an animation is registered, it needs to be applied to the
components we wish to animate. To do this, we use the animation prop of the
component. Please check the API reference of the component you wish to animate
to ensure it supports animations. The animation object prop has the
following structure:  animationstring The name of the animation. This
should match the name in the Animation registry.delaynumber The delay in milliseconds to
apply before executing the specified animation.loopboolean True if the animation should
loop. Set to false by default.onFinishfunction Callback invoked when the
animation has finished. If loop is set to true, this is invoked every time the
animation loops.onStartfunction Callback invoked
when the animation has started. If loop is set to true, this is invoked every
time the animation loops.runboolean Set to true to
start the animation. If you set to false, this will pause the animation. The
default value is true.interruptibleboolean Set to true if this animation
can be interrupted. This means if the animation is changed while it is
playing, rather than waiting until the current animation finishes, the
animation will be interrupted
immediately. JavaScript&lt;ViroImage
source={require(&#x27;./res/myimage.jpg&#x27;)} position={[0, -1, -2]}
scale={[0.1, 0.1, 0.1]} animation={{ name:&#x27;animateImage&#x27;, run:true
}} /&gt;  In the example above, we apply the
animateImage animation (which we registered in the section
above) to the &lt;ViroImage&gt;. The &lt;ViroImage&gt; initially has a
scale of [0.1, 0.1, 0.1]. animateImage will animate this scale
to [1.0,
0.6, 1.0] over 5 seconds. The animation will run immediately
after the &lt;ViroImage&gt; is added to the scene because run is set to
true. If run were set to false, you could trigger the animation at
any time by setting it to true. After a button press, for example. Note
that you can apply a single animation to multiple components. The full
code for this animation is below. JavaScript&#x27;use strict&#x27;; import React, {
Component } from &#x27;react&#x27;; import { ViroScene, ViroImage,
ViroAnimations, } from &#x27;react-viro&#x27;; const AnimationTest = () =&gt;
{ return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;./res/myimage.jpg&#x27;)} position={[0, -1, -2]}
scale={[.1, .1, .1]} animation={{name:&#x27;animateImage&#x27;, run:true}}
/&gt; &lt;/ViroScene&gt; ); } ViroAnimations.registerAnimations({
animateImage:{ properties:{ scaleX:1, scaleY:.6, scaleZ:1, opacity: 1 },
easing:&quot;Bounce&quot;, duration: 5000 }, });  Looping and Additive
Animations Animations can be looped, and the target properties
for an animation can be set in an additive or multiplicative manner. Below is
a simple example showing how to loop an animation that adds to the current
property of a component.  JavaScript&#x27;use strict&#x27;; import React, {
Component } from &#x27;react&#x27;; import { ViroScene, ViroImage,
ViroAnimations, } from &#x27;react-viro&#x27;; const AnimationTest = () =&gt;
{ return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;./res/myimage.jpg&#x27;)} position={[0, -1, -2]}
scale={[.1, .1, .1]} animation={{name:&#x27;loopRotate&#x27;, run:true,
loop:true}} /&gt; &lt;/ViroScene&gt; ); } ViroAnimations.registerAnimations({
loopRotate:{ properties:{ rotateY: &quot;+=45&quot; }, duration:1000 }, });
 The example above rotates an image around the y
axis in an infinite loop. The rotateY property of the loopRotate animation takes the
value +=45. This means it will add 45 degrees to the y
angle of the component every 1 second. Properties can also be subtracted (-=),
multiplied (*=), or divided (/=). Chaining
Animations
Suppose you have a series of animations that you wish to run in sequence.
For example, you have an animation that moves a component horizontally called
moveRight, and an animation that rotates a component
called rotate, and you would like to run these one after the
other. You can do the following: JavaScriptViroAnimations.registerAnimations({
moveRight:{ properties:{ positionX:&quot;+=0.3&quot; }, duration: 10000 },
rotate:{ properties:{ rotateZ:&quot;+=45&quot; }, duration:1000 },
rotateAndMovePicture: [ [&quot;moveRight&quot;, &quot;rotate&quot;] ] });
 In the example above, we define an animation
chain called rotateAndMovePicture. It is defined as an array of
existing animations. This new animation, when applied, will move the component
then rotate it. If you want animations to run in parallel
instead of in sequence, simply define an animation as multiple animation
chains, as demonstrated in the following snippet. rotateAndMovePicture, when
applied, will start both chains at the same time: the component will move
right and rotate concurrently. JavaScriptViroAnimations.registerAnimations({
moveRight:{ properties:{ positionX:&quot;+=0.3&quot; }, duration: 10000 },
rotate:{ properties:{ rotateZ:&quot;+=45&quot; }, duration:1000 },
rotateAndMovePicture: [ [&quot;moveRight&quot;], [&quot;rotate&quot;], ] });
 Finally, you can also run animation chains, each
with multiple sequential steps, concurrently in parallel with one another. The
following example makes our component move right, then move back to its
original position; while this is happening, the component will also
rotate. JavaScriptViroAnimations.registerAnimations({ moveRight:{ properties:{
positionX:&quot;+=0.3&quot; }, duration: 10000 }, moveLeft:{ properties:{
positionX:&quot;-=0.3&quot;, rotateZ:&quot;+=45&quot; }, duration: 10000 },
rotate:{ properties:{ rotateZ:&quot;+=45&quot; }, duration:1000 },
rotateAndMovePicture:[ [&quot;moveRight&quot;, &quot;moveLeft&quot;],
[&quot;rotate&quot;] ] });  Interrupting Animations There are times when
interrupting an animation in motion is desired. For example, if a user touches
a moving box, you may want to stop the box&#x27;s movement and have it do
something else entirely.  Animations can be interrupted by setting the
interruptible flag to true. If this flag is set to true,
then changing the animation will immediately start the new animation without
waiting for the current animation to finish. Let&#x27;s look at an example:
 JavaScriptconst InterruptAnimation = () =&gt; {
const [currentAnim, setCurrentAnim] = useState(&quot;moveLeftRight&quot;);
const handleSwitchAnimation = () =&gt; { setCurrentAnim((prevAnim) =&gt; {
if(prevAnim === &quot;moveLeftRight&quot;) return &quot;rotate&quot; return
&quot;moveLeftRight&quot;; }); } return ( &lt;ViroScene&gt; &lt;ViroBox
position={[0, -1, -2]} scale={[0.1, 0.1, 0.1]} onClick={handleSwitchAnimation}
animation={{ name: currentAnim, run: true, interruptible: true }} /&gt;
&lt;/ViroScene&gt; ) } ViroAnimations.registerAnimations({ moveRight:{
properties: { positionX:&quot;+=0.3&quot; }, duration: 10000 }, moveLeft:{
properties:{ positionX:&quot;-=0.3&quot;, rotateZ:&quot;+=45&quot; },
duration: 10000 }, rotate:{ properties: { rotateZ:&quot;+=45&quot; },
duration:1000 }, moveLeftRight:[ [&quot;moveRight&quot;,
&quot;moveLeft&quot;], ] });  The above sample
will render a ViroBox moving from left to right. When clicked, it will
start rotating; and when clicked again it will resume moving left to right.
 Animation callbacks Animation callbacks can be
used to perform an action when an animation starts, or after an animation
completes. For example, to respond to the end of an animation, add the desired
function to the onFinish property of the animation property. Let&#x27;s
look at an example: JavaScriptconst AnimationOnFinishTest = () =&gt;
{ const handleAninimationFinished = () =&gt; { console.log(&quot;Animation has
finished!&quot;); } return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;./res/myimage.jpg&#x27;)} position={[0, -1, -2]}
scale={[0.1, 0.1, 0.1]} animation={{ name:&#x27;animateImage&#x27;, run:true,
onFinish: handleAninimationFinished }}/&gt; &lt;/ViroScene&gt; ) }
ViroAnimations.registerAnimations({ animateImage:{ properties:{ scaleX:1,
scaleY:.6, scaleZ:1, opacity: 1 }, easing:&quot;Bounce&quot;, duration: 5000
}, });  The function is invoked after the
animation has ended. If the animation is looping, the function is invoked at
the end of every loop. Animating
Materials
In addition to position, rotation, and scale, the material used by
any Viro object can also be animated from one to another. In the example
below, we animate a ViroQuad from red to blue. JavaScriptconst AnimationTest = () =&gt; { const
handleAninimationFinished = () =&gt; { console.log(&quot;Animation has
finished!&quot;); } return ( &lt;ViroScene&gt; &lt;ViroQuad
materials={[&quot;redColor&quot;]} position={[0, -.5, -1]} animation={{
name:&#x27;animateColor&#x27;, run: true, loop: false, delay:3000 }} /&gt;
&lt;/ViroScene&gt; ) } ViroMaterials.createMaterials({ redColor: {
diffuseColor: &quot;#FF0000&quot; }, blueColor: { diffuseColor:
&quot;#0000FF&quot; }, }); ViroAnimations.registerAnimations({ animateColor: {
properties: { material: &quot;blueColor&quot; }, duration:3000 }, });
 Because material animations can move from one
material to any other material, you can use this feature to animate between
textures, lighting models, and more. Skeletal
Animation Skeletal
animation is a technique for animating complex geometries; for example, to
make a humanoid character walk. These animations are typically authored in 3D
graphics software, and exported as FBX files. Viro has full support for these
animations. For more information, please see the 3D Objects
guide." style="margin-left:31px" class="rm-Markdown markdown-body rm-
Markdown markdown-body ng-non-bindable" data-testid="RDMD">
Animations provide useful feedback to users and add "life" to an application.
Viro enables powerful and simple animations on all components.
##
OverviewAnimations work by _registering_ animations with
`ViroAnimations.registerAnimations()`, then _invoking_ the animation by using
the animation prop of the component being animated.
##
Registering AnimationsBefore an animation can be used, it must created and registered. Animations
are specified by the following properties:
Name| Description  
---|---  
properties| Dictionary containing the values the component should animate
_toward_.  
Animatable properties include:  
`opacity`: opacity of an object, [0, 1]  
`positionX`: position of object on x-axis  
`positionY`: position of object on y-axis  
`positionZ`: position of object on z-axis  
`rotateX`: rotation of object around x-axis, in degrees  
`rotateY`: rotation of object around y-axis, in degrees  
`rotateZ`: rotation of object around z-axis, in degrees  
`scaleX`: scale value of object on x-axis  
`scaleY`: scale value of object on y-axis  
`scaleZ`: scale value of object on z-axis  
`material`: the texture, lighting, and other surface properties of the object  
easing| The pacing of the animation.  
_`Linear`: the animation will occur evenly over its duration  
_ `EaseIn`: the animation will begin slowly and then speed up as it progresses  
 _`EaseOut`: the animation will begin quickly and then slow as it progresses  
_ `EaseInEaseOut`: the animation will begin slowly, accelerate through the
middle of its duration, and then slow again before completing  
 _`Bounce`: the animation will begin quickly and _overshoot* its final
position before settling into its final resting place  
duration| Length in milliseconds of the animation  
delay| Delay in milliseconds to wait before starting the animation  
In the following example, we register an animation that sets the scale of the
component to which it is applied to`[1.0, 0.6, 1.0]`, and sets the opacity of
said component to `1.0`. The animation bounces toward its final value, and
lasts for five seconds.
JavaScript
    ViroAnimations.registerAnimations({
      animateImage:{
        properties:{
          scaleX: 1.0,
          scaleY: 0.6,
          scaleZ: 1.0,
          opacity: 1.0
        },
        easing:"Bounce", 
        duration: 5000
      },
    });
##
Applying AnimationsOnce an animation is registered, it needs to be _applied_ to the components we
wish to animate. To do this, we use the animation prop of the component.
Please check the API reference of the component you wish to animate to ensure
it supports animations.
The animation object prop has the following structure:
|  
---|---  
animation| **string**  
The name of the animation. This should match the name in the Animation
registry.  
delay| **number**  
The delay in milliseconds to apply before executing the specified animation.  
loop| **boolean**  
True if the animation should loop. Set to false by default.  
onFinish| **function**  
Callback invoked when the animation has finished. If loop is set to true, this
is invoked every time the animation loops.  
onStart| **function**  
Callback invoked when the animation has started. If loop is set to true, this
is invoked every time the animation loops.  
run| **boolean**  
Set to true to start the animation. If you set to false, this will pause the
animation. The default value is true.  
interruptible| **boolean**  
Set to true if this animation can be interrupted. This means if the animation
is changed while it is playing, rather than waiting until the current
animation finishes, the animation will be interrupted immediately.  
JavaScript
In the example above, we apply the `animateImage` animation (which we
registered in the section above) to the ``. The ``
initially has a scale of `[0.1, 0.1, 0.1]`. `animateImage` will animate this
scale to `[1.0, 0.6, 1.0]` over 5 seconds.
The animation will run immediately after the `` is added to the
scene because `run` is set to true. If `run` were set to false, you could
trigger the animation at any time by setting it to true. After a button press,
for example.
Note that you can apply a single animation to multiple components.
The full code for this animation is below.
JavaScript
    'use strict';
    import React, { Component } from 'react';
    import {
      ViroScene,
      ViroImage,
      ViroAnimations,
    } from 'react-viro';
    const AnimationTest = () => {
      return (
      );
    }
    ViroAnimations.registerAnimations({
      animateImage:{
        properties:{
          scaleX:1,
          scaleY:.6,
          scaleZ:1,
          opacity: 1
        },  
        easing:"Bounce", 
        duration: 5000
      },
    });
##
Looping and Additive AnimationsAnimations can be looped, and the target properties for an animation can be
set in an additive or multiplicative manner. Below is a simple example showing
how to loop an animation that adds to the current property of a component.
JavaScript
    'use strict';
    import React, { Component } from 'react';
    import {
      ViroScene,
      ViroImage,
      ViroAnimations,
    } from 'react-viro';
    const AnimationTest = () => {
      return (
      );
    }
    ViroAnimations.registerAnimations({
      loopRotate:{
        properties:{
          rotateY: "+=45"
        }, 
        duration:1000
      },
    });
The example above rotates an image around the y axis in an infinite loop. The
`rotateY` property of the `loopRotate` animation takes the value `+=45`. This
means it will _add_ 45 degrees to the y angle of the component every 1 second.
Properties can also be subtracted (-=), multiplied (*=), or divided (/=).
##
Chaining AnimationsSuppose you have a series of animations that you wish to run in sequence. For
example, you have an animation that moves a component horizontally called
`moveRight`, and an animation that rotates a component called `rotate`, and
you would like to run these one after the other. You can do the following:
JavaScript
    ViroAnimations.registerAnimations({
      moveRight:{
        properties:{
          positionX:"+=0.3"
        }, 
        duration: 10000
      },
      rotate:{
        properties:{
          rotateZ:"+=45"
        }, 
        duration:1000
      },
      rotateAndMovePicture: [
        ["moveRight", "rotate"]
      ]
    });
In the example above, we define an _animation chain_ called
`rotateAndMovePicture`. It is defined as an array of existing animations. This
new animation, when applied, will move the component then rotate it.
If you want animations to run _in parallel_ instead of in sequence, simply
define an animation as multiple animation chains, as demonstrated in the
following snippet. `rotateAndMovePicture`, when applied, will start both
chains at the same time: the component will move right and rotate
concurrently.
JavaScript
    ViroAnimations.registerAnimations({
      moveRight:{
        properties:{
          positionX:"+=0.3"
        }, 
        duration: 10000
      },
      rotate:{
        properties:{
          rotateZ:"+=45"
        }, 
        duration:1000
      },
      rotateAndMovePicture: [
        ["moveRight"],
        ["rotate"],
      ]
    });
Finally, you can also run animation chains, each with multiple sequential
steps, concurrently in parallel with one another. The following example makes
our component move right, then move back to its original position; while this
is happening, the component will also rotate.
JavaScript
    ViroAnimations.registerAnimations({
    	moveRight:{
        properties:{
          positionX:"+=0.3"
        }, 
        duration: 10000
      },
    	moveLeft:{
        properties:{
          positionX:"-=0.3", 
          rotateZ:"+=45"
        }, 
        duration: 10000
      },
    	rotate:{
        properties:{
          rotateZ:"+=45"
        }, 
        duration:1000
      },
    	rotateAndMovePicture:[
    		["moveRight", "moveLeft"],
    		["rotate"]
    	]
    });
##
Interrupting AnimationsThere are times when interrupting an animation in motion is desired. For
example, if a user touches a moving box, you may want to stop the box's
movement and have it do something else entirely.
Animations can be interrupted by setting the `interruptible` flag to true. If
this flag is set to true, then changing the animation will immediately start
the new animation without waiting for the current animation to finish. Let's
look at an example:
JavaScript
    const InterruptAnimation = () => {
      const [currentAnim, setCurrentAnim] = useState("moveLeftRight");
      const handleSwitchAnimation = () => {
        setCurrentAnim((prevAnim) => {
          if(prevAnim === "moveLeftRight") return "rotate"
          return "moveLeftRight";
        });
      }
      return (
      )
    }
    ViroAnimations.registerAnimations({
    	moveRight:{
        properties: {
          positionX:"+=0.3"
        }, 
        duration: 10000
      },
    	moveLeft:{
        properties:{
          positionX:"-=0.3", 
          rotateZ:"+=45"
        }, 
        duration: 10000
      },
    	rotate:{
        properties: {
          rotateZ:"+=45"
        }, 
        duration:1000
      },
    	moveLeftRight:[
    		["moveRight", "moveLeft"],
    	]
    });
The above sample will render a `ViroBox` moving from left to right. When
clicked, it will start rotating; and when clicked again it will resume moving
left to right.
##
Animation callbacksAnimation callbacks can be used to perform an action when an animation starts,
or after an animation completes. For example, to respond to the end of an
animation, add the desired function to the `onFinish` property of the
animation property. Let's look at an example:
JavaScript
    const AnimationOnFinishTest = () => {
      const handleAninimationFinished = () => {
        console.log("Animation has finished!");
      }
      return (
      )
    }
    ViroAnimations.registerAnimations({
        animateImage:{
          properties:{
            scaleX:1, 
            scaleY:.6, 
            scaleZ:1, 
            opacity: 1
          },
          easing:"Bounce", 
          duration: 5000
        },
    });
The function is invoked after the animation has ended. If the animation is
looping, the function is invoked at the end of every loop.
##
Animating MaterialsIn addition to position, rotation, and scale, the _material_ used by any Viro
object can also be animated from one to another. In the example below, we
animate a ViroQuad from red to blue.
JavaScript
    const AnimationTest = () => {
      const handleAninimationFinished = () => {
        console.log("Animation has finished!");
      }
      return (
      )
    }
    ViroMaterials.createMaterials({
      redColor: {
        diffuseColor: "#FF0000"
      },
      blueColor: {
        diffuseColor: "#0000FF"
      },
    });
    ViroAnimations.registerAnimations({
      animateColor: {
        properties: {
          material: "blueColor"
        }, 
        duration:3000
      },
    });
Because material animations can move from one material to any other material,
you can use this feature to animate between textures, lighting models, and
more.
##
Skeletal AnimationSkeletal animation is a technique for animating complex geometries; for
example, to make a humanoid character walk. These animations are typically
authored in 3D graphics software, and exported as FBX files. Viro has full
support for these animations. For more information, please see the [3D
Objects](3d-objects.html) guide.
__Updated over 3 years ago