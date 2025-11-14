A ViroSceneNavigator component is the entry point for VR applications. Please see our Scene Navigation Guide for more information on how to properly navigate between scenes. Example use: JavaScriptvar MyStartScene = require(&#x27;./MyStartScene&#x27;); import { AppRegistry, ViroScene, ViroSceneNavigator, } from &#x27;react-viro&#x27;; var ViroSceneNav = React.createClass({ render: function () { return ( &lt;ViroSceneNavigator initialScene={{ scene: MyStartScene }} /&gt; ); } })  Props initialScene (* required) TypeDescriptionPropTypes.shape( {scene: PropTypes.func.isRequired} ),The initial scene to display for your application on application start. debug TypeDescriptionPropTypes.boolUsed to enable dev menu on Android Nougat device with Cardboard. onExitViro TypeDescriptionPropTypes.funcCalled if the user presses the &quot;X&quot; button to exit. viroAppProps TypeDescriptionPropTypes.objectA javascript object containing properties for this viro app. One use would be to pass in properties from native if you&#x27;re using a hybrid applications. vrModeEnabled TypeDescriptionPropTypes.boolCalling vrModeEnabled allows switching to and from VR mode. When set to false, it transitions back to pre-VR (mono) mode. When set to true, we set thie view into a full VR mode. This is set to true by default. rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description here. style TypeDescriptionstylePropType text TypeDescriptionPropTypes.stringPut the PropType Description here. transformBehaviors TypeDescriptionPropTypes.arrayOf(PropTypes.string)Put the PropType Description here. width TypeDescriptionPropTypes.numberPut the PropType Description here. visible TypeDescriptionPropTypes.boolPut the PropType Description here. Methods These are the functions available on the ViroSceneNavigator component, you can get the handle to the ViroSceneNavigator in 2 ways:  using the built-in React Native ref property to grab a reference from your ViroScene which has been added to the ViroSceneNavigator, it will be given the reference to the ViroSceneNavigator in this variable: this.props.sceneNavigator.  push(scene: ViroScene)Push the given scene onto scene stack, displaying the scene to the user.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will be pushed onto the stack and displayed to the user | pop()Pop the top most scene of the stack, effectively going back to the previous scene. pop(n: number)Go back n scenes at once. If n is equal to 1 this is equivalent to calling pop(). jump(scene: ViroScene)Move to the given scene in the stack, removing it from its current position in the stack and placing it on top, thereby displaying it to the user. If the scene is not already on the stack, this method pushes the scene to the top of the stack, displaying it to the user. This is best used in applications where the user jumps between a set of scenes frequently.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will be moved or pushed to the top of the stack and displayed to the user | replace(scene: ViroScene)Replace the currently displayed scene (the scene at the top of the stack) with the given scene, displaying it to the user. This leaves the remainder of the stack unchanged.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will replace the scene at the top of stack and be displayed to the user | recenterTracking()Reorients the virtual world such that directly forward of the user is [0, 0, -1] by rotating the scene by the user&#x27;s y-rotation." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
> ## 🚧
>
> DEPRECATED (starting in ViroReact 2.5.0)
>
> `` has been DEPRECATED. Please use one of the following:
> 1. [ViroVRSceneNavigator](virovrscenenavigator.html) for VR applications.2.
> [ViroARSceneNavigator](viroarscenenavigator.html) for AR applications. 3.
> [Viro3DSceneNavigator](viro3dscenenavigator.html) for 3D (non AR/VR)
> applications.
A ViroSceneNavigator component is the entry point for VR applications. Please
see our [Scene Navigation Guide](scene-navigation.html) for more information
on how to properly navigate between scenes.
######
Example use:JavaScript
    var MyStartScene = require('./MyStartScene');
    import { AppRegistry, ViroScene, ViroSceneNavigator, } from 'react-viro';
    var ViroSceneNav = React.createClass({
        render: function () {
            return (
            );
        }
    })
##
Props###
initialScene (* required)Type| Description  
---|---  
| **PropTypes.shape( {scene: PropTypes.func.isRequired} ),** The initial scene
to display for your application on application start.  
###
debugType| Description  
---|---  
| **PropTypes.bool** Used to enable dev menu on Android Nougat device with
Cardboard.  
###
onExitViroType| Description  
---|---  
| **PropTypes.func** Called if the user presses the "X" button to exit.  
###
viroAppPropsType| Description  
---|---  
| **PropTypes.object** A javascript object containing properties for this viro
app. One use would be to pass in properties from native if you're using a
hybrid applications.  
###
vrModeEnabledType| Description  
---|---  
| **PropTypes.bool** Calling vrModeEnabled allows switching to and from VR
mode. When set to false, it transitions back to pre-VR (mono) mode. When set
to true, we set thie view into a full VR mode. This is set to true by default.  
###
rotationType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
###
styleType| Description  
---|---  
| stylePropType  
###
textType| Description  
---|---  
| PropTypes.stringPut the PropType Description here.  
###
transformBehaviorsType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.string)Put the PropType Description here.  
###
widthType| Description  
---|---  
| PropTypes.numberPut the PropType Description here.  
###
visibleType| Description  
---|---  
| PropTypes.boolPut the PropType Description here.  
##
MethodsThese are the functions available on the `ViroSceneNavigator` component, you
can get the handle to the `ViroSceneNavigator` in 2 ways:
  1. using the built-in React Native `ref` property to grab a reference
  2. from your `ViroScene` which has been added to the `ViroSceneNavigator`, it will be given the reference to the `ViroSceneNavigator` in this variable: `this.props.sceneNavigator`.
push(scene: ViroScene)  
---  
Push the given scene onto scene stack, displaying the scene to the user.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will be pushed onto the stack and displayed to the user |  
pop()  
---  
Pop the top most scene of the stack, effectively going back to the previous
scene.  
pop(n: number)  
---  
Go back n scenes at once. If n is equal to 1 this is equivalent to calling
pop().  
jump(scene: ViroScene)  
---  
Move to the given scene in the stack, removing it from its current position in the stack and placing it on top, thereby displaying it to the user. If the scene is not already on the stack, this method pushes the scene to the top of the stack, displaying it to the user. This is best used in applications where the user jumps between a set of scenes frequently.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will be moved or pushed to the top of the stack and displayed to the user |  
replace(scene: ViroScene)  
---  
Replace the currently displayed scene (the scene at the top of the stack) with the given scene, displaying it to the user. This leaves the remainder of the stack unchanged.|Parameters | Description | | ------------- |:------------- ||scene | Scene that will replace the scene at the top of stack and be displayed to the user |  
recenterTracking()  
---  
Reorients the virtual world such that directly forward of the user is [0, 0,
-1] by rotating the scene by the user's y-rotation.  
__Updated over 3 years ago