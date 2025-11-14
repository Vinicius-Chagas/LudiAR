Example use: JavaScriptimport React from
&#x27;react&#x27;; import { Viro3DSceneNavigator } from
&#x27;@reactvision/react-viro&#x27;; import MyScene from
&#x27;./MyScene&#x27;; function ViroSceneNav() { return (
&lt;Viro3DSceneNavigator initialScene={{ scene: MyStartScene }} /&gt; ); }
 Props initialScene (* required) TypeDescription{ scene: React.Component }The
initial scene to display for your application on application
start. bloomEnabled TypeDescriptionbooleanEnable or disable bloom.
Bloom adds a soft glow to bright areas in scene, simulating the way bright
highlights appear to the human eye. To make an object bloom, this property
must be enabled, and the objects&#x27;s threshold for bloom must be set via
its material&#x27;s bloomThreshold
property. debug TypeDescriptionbooleanUsed to enable the Dev
menu on Android Nougat devices with
Cardboard. hdrEnabled TypeDescriptionbooleanWhen HDR rendering is
enabled, Viro uses a deeper color space and renders to a floating point
texture, then applies a tone-mapping algorithm to preserve fine details in
both bright and dark regions of the scene. If HDR is disabled, then features
like Bloom and PBR will not work, and tone-mapping will be disabled. HDR is
not supported on all devices. onExitViro TypeDescriptionFunctionCalled if the user
presses the &quot;X&quot; button to
exit. pbrEnabled TypeDescriptionbooleanEnable or disable
physically-based rendering. Physically based rendering, or PBR, produces more
realistic lighting results for your scenes, and provides a more intuitive
workflow for artists. To use PBR, this property must be enabled, and materials
must use the physicallyBased lighting model. PBR is controlled by a
variety of properties, see PBR for
details. shadowsEnabled TypeDescriptionbooleanEnable or
disable rendering dynamic shadows. If shadows are disabled here, shadow
casting lights will simply not cast a
shadow. viroAppProps TypeDescriptionObjectA Javascript object
containing properties for this Viro app. This can be used to pass in
properties from native if you&#x27;re using a hybrid
application. vrModeEnabled TypeDescriptionbooleanvrModeEnabled
allows switching to and from VR mode. When set to false, it transitions back
to pre-VR (mono) mode. When set to true, we set the view into a full VR mode.
This is set to true by default. Methods
The following functions are available on the ViroVRSceneNavigator component. You
can get the handle to the Viro3DSceneNavigator in 2 ways:  Use the
built-in React Native ref property to grab a reference From your
ViroScene. Each ViroScene added to a ViroVRSceneNavigator provides its parent navigator in the
variable: this.props.sceneNavigator.  push(scene: { scene:
ViroARScene, passProps: Object })
Push the given scene onto scene stack, displaying the scene to the user
ArgumentTypeDescriptionsceneViroARSceneScene that will be
pushed onto the stack and displayed to the userpassPropsObjectProps to pass to the rendered
scene pop() Pop
the top most scene of the stack, effectively going back to the previous
scene. pop(n: number) Go back n scenes at once. If n is equal to 1 this is
equivalent to calling pop(). jump(scene: { scene: ViroARScene,
passProps: Object }) Move to
the given scene in the stack, removing it from its current position in the
stack and placing it on top, thereby displaying it to the user. If the scene
is not already on the stack, this method pushes the scene to the top of the
stack, displaying it to the user. This is best used in applications where the
user jumps between a set of scenes frequently. ArgumentTypeDescriptionsceneViroARSceneScene that will be moved or pushed to the top of the
stack and displayed to the userpassPropsObjectProps to pass to the rendered
scene replace(scene: { scene: ViroARScene,
passProps: Object }) Replace
the currently displayed scene (the scene at the top of the stack) with the
given scene, displaying it to the user. This leaves the remainder of the stack
unchanged. ArgumentTypeDescriptionsceneViroARSceneScene that will replace the scene at the top of stack
and be displayed to the userpassPropsObjectProps to pass to the rendered
scene recenterTracking() Reorients the virtual world such
that directly forward of the user is [0, 0, -1] by rotating the scene by the
user&#x27;s y-rotation." style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
ViroVRSceneNavigator is the entry point for VR applications. Please see the
[Scene Navigation Guide](scene-navigation.html) for more information on how to
properly navigate between scenes.
######
Example use:JavaScript
    import React from 'react';
    import { Viro3DSceneNavigator } from '@reactvision/react-viro';
    import MyScene from './MyScene';
    function ViroSceneNav() {
        return (
        );
    }
##
Props###
initialScene (* required)Type| Description  
---|---  
{ scene: React.Component }| The initial scene to display for your application
on application start.  
###
bloomEnabledType| Description  
---|---  
boolean| Enable or disable bloom. Bloom adds a soft glow to bright areas in
scene, simulating the way bright highlights appear to the human eye. To make
an object bloom, this property must be enabled, and the objects's threshold
for bloom must be set via its material's `bloomThreshold` property.  
###
debugType| Description  
---|---  
boolean| Used to enable the Dev menu on Android Nougat devices with Cardboard.  
###
hdrEnabledType| Description  
---|---  
boolean| When HDR rendering is enabled, Viro uses a deeper color space and
renders to a floating point texture, then applies a tone-mapping algorithm to
preserve fine details in both bright and dark regions of the scene. If HDR is
disabled, then features like Bloom and PBR will not work, and tone-mapping
will be disabled. HDR is not supported on all devices.  
###
onExitViroType| Description  
---|---  
Function| Called if the user presses the "X" button to exit.  
###
pbrEnabledType| Description  
---|---  
boolean| Enable or disable physically-based rendering. Physically based
rendering, or PBR, produces more realistic lighting results for your scenes,
and provides a more intuitive workflow for artists. To use PBR, this property
must be enabled, and materials must use the `physicallyBased` lighting model.
PBR is controlled by a variety of properties, see [PBR](pbr.html) for details.  
###
shadowsEnabledType| Description  
---|---  
boolean| Enable or disable rendering dynamic shadows. If shadows are disabled
here, shadow casting lights will simply not cast a shadow.  
###
viroAppPropsType| Description  
---|---  
Object| A Javascript object containing properties for this Viro app. This can
be used to pass in properties from native if you're using a hybrid
application.  
###
vrModeEnabledType| Description  
---|---  
boolean| vrModeEnabled allows switching to and from VR mode. When set to
false, it transitions back to pre-VR (mono) mode. When set to true, we set the
view into a full VR mode. This is set to true by default.  
##
MethodsThe following functions are available on the `ViroVRSceneNavigator` component.
You can get the handle to the `Viro3DSceneNavigator` in 2 ways:
  1. Use the built-in React Native `ref` property to grab a reference
  2. From your `ViroScene`. Each `ViroScene` added to a `ViroVRSceneNavigator` provides its parent navigator in the variable: `this.props.sceneNavigator`.
###
push(scene: { scene: ViroARScene, passProps: Object })Push the given scene onto scene stack, displaying the scene to the user
Argument| Type| Description  
---|---|---  
scene| ViroARScene| Scene that will be pushed onto the stack and displayed to
the user  
passProps| Object| Props to pass to the rendered scene  
###
pop()Pop the top most scene of the stack, effectively going back to the previous
scene.
###
pop(n: number)Go back n scenes at once. If n is equal to 1 this is equivalent to calling
pop().
###
jump(scene: { scene: ViroARScene, passProps: Object })Move to the given scene in the stack, removing it from its current position in
the stack and placing it on top, thereby displaying it to the user. If the
scene is not already on the stack, this method pushes the scene to the top of
the stack, displaying it to the user. This is best used in applications where
the user jumps between a set of scenes frequently.
Argument| Type| Description  
---|---|---  
scene| ViroARScene| Scene that will be moved or pushed to the top of the stack
and displayed to the user  
passProps| Object| Props to pass to the rendered scene  
###
replace(scene: { scene: ViroARScene, passProps: Object })
[](virovrscenenavigator.html#replacescene--scene-viroarscene-passprops-
object-)
Replace the currently displayed scene (the scene at the top of the stack) with
the given scene, displaying it to the user. This leaves the remainder of the
stack unchanged.
Argument| Type| Description  
---|---|---  
scene| ViroARScene| Scene that will replace the scene at the top of stack and
be displayed to the user  
passProps| Object| Props to pass to the rendered scene  
###
recenterTracking()Reorients the virtual world such that directly forward of the user is [0, 0,
-1] by rotating the scene by the user's y-rotation.
__Updated over 1 year ago