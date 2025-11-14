Methods
static
registerAnimations(animations:{[key:string]: ViroAnimationProps}) Takes a
dictionary object that is a set of key/value pairs. The key being a string
representing the animation name. The value being either a list of properties
that conforms ViroAnimationProps or an array that represents a chained
animation. Example
JavaScript&lt;ViroBox animation={{name:
&#x27;loopRotate&#x27;, run: true, loop: true}}/&gt;
ViroAnimations.registerAnimations({ loopRotate: { properties: { rotateY:
&#x27;+=45&#x27; }, duration: 1000 }, });  ViroAnimation
(used with registerAnimations) duration (* required) The length of the animation in
milliseconds. 1000 milliseconds = 1 second properties (* required) A list of properties that
represent the final value of the object when the animation
completes. On animation start the current value of the components property
value will be the start value and will animate to the final value specified
here. List of animatable properties: Accepted values for scale, translate,
position and rotate properties can be a string or number.
Valid color formats are:   &#x27;#f0f&#x27; (#rgb) 
&#x27;#f0fc&#x27; (#rgba)  &#x27;#ff00ff&#x27; (#rrggbb) 
&#x27;#ff00ff00&#x27; (#rrggbbaa)  &#x27;rgb(255, 255, 255)&#x27;
 &#x27;rgba(255, 255, 255, 1.0)&#x27;  &#x27;hsl(360, 100%,
100%)&#x27;  &#x27;hsla(360, 100%, 100%, 1.0)&#x27; 
&#x27;transparent&#x27;  &#x27;red&#x27;  0xff00ff00
(0xrrggbbaa)  Accepted values for scale, translate, position and rotate properties
can be a string or number. Specifying additive
values If you wish to do additive animations, a string value
represents the amount to add to the property during the animation. Example:
rotateX:&quot;+45&quot;. Animatable PropertyDescriptionopacityOpacity of an object. A
value of 0 is fully transparent. Anything &gt;= 0 is a range of partially
transparency, becoming more opaque when approaching 1 and fully opaque when
equal to 1.positionXPosition of object on x-axis.positionYPosition of
object on y-axis.positionZPosition of object on z-axis.rotateXRotation of
object around x-axis, in degrees.rotateYRotation of object around
y-axis, in degrees.rotateZRotation of object around z-axis, in
degrees.scaleXScale value of object on x-axis.scaleYScale value of object on
y-axis.scaleZScale value of object on z-axis.translateXChange position of
object on x-axis.translateYChange position of object on y-axis.translateZChange
position of object on z-axis.colorThe color of the light. The
default light color is white.materialMaterial that was created
via ViroMaterials.createMaterials() with properties (like diffuseColor) that
we wish to animate toward. delay The amount to delay the animation when started,
specified in milliseconds. Default is 0. easing The pacing of the animation.  Linear: the
animation will occur evenly over its duration EaseIn: the
animation will begin slowly and then speed up as it progresses
EaseOut: the animation will begin quickly and then slow as
it progresses EaseInEaseOut: the animation will begin slowly, accelerate
through the middle of its duration, and then slow again before completing
Bounce: the animation will begin quickly and
overshoot its final position before settling into its final resting
place  ViroAnimationProps The ViroAnimationProps type
allows you to describe how an animation behaves.  TypeScripttype ViroAnimationProps = { name:
string, delay: number, loop: boolean, onStart: Function, onFinish: Function,
run: boolean, interruptible: boolean }  PropertyTypeDescriptionnamestringName of the animation that has been
registered.delaynumberThe number of
milliseconds to delay the animation starting.loopbooleanIf true, the animation loops. If false, the animation does not
loop.onStartfunctionCallback function when
the animation starts. If the animation is looping, the onStart callback will
only fire when the animation is started, not every loop.onFinishfunctionCallback function when
the animation ends. If the animation is looping, the onFinish callback will
never fire.runbooleanIf true, the animation is
running. If false, the animation is paused.interruptiblebooleanIf true, the animation can be interrupted. If false,
the animation cannot be interrupted."
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
The `ViroAnimations` class is used to create reusable animations that are
applied to a ViroReact component. For more information on how animations work,
please read our [Animation Guide](animation.html).
##
Methods###
static registerAnimations(animations:{[key:string]: ViroAnimationProps})
[](viroanimations.html#static--registeranimationsanimationskeystring-
viroanimationprops)
Takes a dictionary object that is a set of key/value pairs. The key being a
string representing the animation name. The value being either a list of
properties that conforms `ViroAnimationProps` or an array that represents a
chained animation.
##
ExampleJavaScript
    ViroAnimations.registerAnimations({
      loopRotate: {
        properties: {
          rotateY: '+=45'
        }, 
        duration: 1000
      },
    });
##
ViroAnimation (used with registerAnimations)###
duration (* required)The length of the animation in milliseconds. 1000 milliseconds = 1 second
###
properties (* required)A list of properties that represent the **final** value of the object when the
animation completes. On animation start the current value of the components
property value will be the start value and will animate to the final value
specified here. List of animatable properties:
Accepted values for `scale`, `translate`, `position` and `rotate` properties
can be a string or number.
Valid color formats are:
  * '#f0f' (#rgb) 
  * '#f0fc' (#rgba) 
  * '#ff00ff' (#rrggbb) 
  * '#ff00ff00' (#rrggbbaa) 
  * 'rgb(255, 255, 255)'
  * 'rgba(255, 255, 255, 1.0)'
  * 'hsl(360, 100%, 100%)'
  * 'hsla(360, 100%, 100%, 1.0)'
  * 'transparent'
  * 'red'
  * 0xff00ff00 (0xrrggbbaa)
Accepted values for `scale`, `translate`, `position` and `rotate` properties
can be a string or number.
**Specifying additive values**  
If you wish to do additive animations, a string value represents the amount to
add to the property during the animation. Example: `rotateX:"+45"`.
Animatable Property| Description  
---|---  
opacity| Opacity of an object. A value of 0 is fully transparent. Anything >=
0 is a range of partially transparency, becoming more opaque when approaching
1 and fully opaque when equal to 1.  
positionX| Position of object on x-axis.  
positionY| Position of object on y-axis.  
positionZ| Position of object on z-axis.  
rotateX| Rotation of object around x-axis, in degrees.  
rotateY| Rotation of object around y-axis, in degrees.  
rotateZ| Rotation of object around z-axis, in degrees.  
scaleX| Scale value of object on x-axis.  
scaleY| Scale value of object on y-axis.  
scaleZ| Scale value of object on z-axis.  
translateX| Change position of object on x-axis.  
translateY| Change position of object on y-axis.  
translateZ| Change position of object on z-axis.  
color| The color of the light. The default light color is white.  
material| Material that was created via ViroMaterials.createMaterials() with
properties (like diffuseColor) that we wish to animate toward.  
###
delayThe amount to delay the animation when started, specified in milliseconds.
Default is 0.
###
easingThe pacing of the animation.
  * `Linear`: the animation will occur evenly over its duration
  * `EaseIn`: the animation will begin slowly and then speed up as it progresses
  * `EaseOut`: the animation will begin quickly and then slow as it progresses
  * `EaseInEaseOut`: the animation will begin slowly, accelerate through the middle of its duration, and then slow again before completing
  * `Bounce`: the animation will begin quickly and _overshoot_ its final position before settling into its final resting place
##
ViroAnimationPropsThe ViroAnimationProps type allows you to describe how an animation behaves.
TypeScript
    type ViroAnimationProps = {
      name: string,
      delay: number,
      loop: boolean,
      onStart: Function,
      onFinish: Function,
      run: boolean,
      interruptible: boolean
    }
Property| Type| Description  
---|---|---  
name| string| Name of the animation that has been registered.  
delay| number| The number of milliseconds to delay the animation starting.  
loop| boolean| If true, the animation loops. If false, the animation does not
loop.  
onStart| function| Callback function when the animation starts. If the
animation is looping, the onStart callback will only fire when the animation
is started, not every loop.  
onFinish| function| Callback function when the animation ends. If the
animation is looping, the onFinish callback will never fire.  
run| boolean| If true, the animation is running. If false, the animation is
paused.  
interruptible| boolean| If true, the animation can be interrupted. If false,
the animation cannot be interrupted.  
__Updated over 3 years ago