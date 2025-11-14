Props initialScene (* required) PropKeyPropType{ scene: JSX.Element }The initial AR scene to display for your application on application start. Note: ViroARSceneNavigator only accepts ViroARScene autofocus TypeDescriptionbooleanWhether or not to enable autofocus for this AR session. Default value is true for iOS, false for Android. False on Android, since currently (as of ARCore 1.4.0), ARCore&#x27;s tracking is optimized for auto-focus turned off. bloomEnabled TypeDescriptionbooleanEnable or disable bloom. Bloom adds a soft glow to bright areas in scene, simulating the way bright highlights appear to the human eye. To make an object bloom, this property must be enabled, and the objects&#x27;s threshold for bloom must be set via its material&#x27;s bloomThreshold property. hdrEnabled TypeDescriptionbooleanWhen HDR rendering is enabled, Viro uses a deeper color space and renders to a floating point texture, then applies a tone-mapping algorithm to preserve fine details in both bright and dark regions of the scene. If HDR is disabled, then features like Bloom and PBR will not work, and tone-mapping will be disabled.HDR is not supported on all devices. numberOfTrackedImages TypeDescriptionnumberiOS 12+/ARKit 2.0+ only Tracked images are images that track continuously. This property represents the max amount of images that should be tracked concurrently. For example, if this number is set to 3, then the first 3 images visible in a scene will be tracked. Even if there are 5 total ViroARImageMarkers only the first 3 will be tracked, if one marker leaves the view, then an untracked marker will then be tracked. Keep in mind that this number should be kept low as the higher the number, the worse the performance. pbrEnabled TypeDescriptionbooleanEnable or disable physically-based rendering. Physically based rendering, or PBR, produces more realistic lighting results for your scenes, and provides a more intuitive workflow for artists. To use PBR, this property must be enabled, and materials must use the physicallyBased lighting model. PBR is controlled by a variety of properties, see PBR guide for details. shadowsEnabled TypeDescriptionbooleanEnable or disable rendering dynamic shadows. If shadows are disabled here, shadow casting lights will simply not cast a shadow. videoQuality TypeDescription&quot;High&quot; | &quot;Low&quot;iOS 11.3+/ARKit 1.5+ only Sets the video quality either to the highest or lowest possible if the device supports more than 1 applicable video quality. Default value is &quot;High&quot;. viroAppProps TypeDescriptionobjectA javascript object containing properties for this viro app. One use would be to pass in properties from native if you&#x27;re using a hybrid applications.Access this given props from within ViroARScene objects through this.props.sceneNavigator.viroAppProps worldAlignment TypeDescription&quot;Gravity&quot; | &quot;GravityAndHeading&quot; | &quot;Camera&quot;iOS only - has no effect on Android/ARCore This property determines the initial orientation/alignment of the world&#x27;s coordinate system.Gravity \- origin is the device&#x27;s starting location and the X-Z plane is perpendicular to gravity.GravityAndHeading \- origin is the device&#x27;s starting location and the X and Z axes are latitudinally and longitudinally aligned.Camera \- coordinate system is locked to the camera&#x27;s current orientation. Methods The following functions are available on the ViroARSceneNavigator component. You can get the handle to the ViroARSceneNavigator, from your ViroScene. Each ViroScene added to a ViroARSceneNavigator provides its parent navigator in the variable: this.props.sceneNavigator. push({ scene: ViroARScene, passProps: Object }) Push the given scene onto scene stack, displaying the scene to the user. Parameters scene \- Scene that will be pushed onto the stack and displayed to the user passProps \- Props to pass to the rendered scene pop() Pop the top most scene of the stack, effectively going back to the previous scene. pop(n: number) Go back n scenes at once. If n is equal to 1 this is equivalent to calling pop(). jump({ scene: ViroARScene, passProps: Object }) Move to the given scene in the stack, removing it from its current position in the stack and placing it on top, thereby displaying it to the user. If the scene is not already on the stack, this method pushes the scene to the top of the stack, displaying it to the user. This is best used in applications where the user jumps between a set of scenes frequently. Parameters scene \- Scene that will be moved or pushed to the top of the stack and displayed to the user passProps \- Props to pass to the rendered scene replace({ scene: ViroARScene, passProps: Object }) Replace the currently displayed scene (the scene at the top of the stack) with the given scene, displaying it to the user. This leaves the remainder of the stack unchanged. Parameters scene \- Scene that will replace the scene at the top of stack and be displayed to the user passProps \- Props to pass to the rendered scene resetARSession(resetTracking: boolean, removeAnchors:boolean) iOS Only Call this function to reset the ARSession with a combination of the two flags:resetTracking - if true, the scene will realign with the camera&#x27;s position and orientation.removeAnchors - if true, the anchors will all be removed (onAnchorRemoved will be called on the ViroARScene). It&#x27;s recommended to also set removeAnchor to true if resetTracking is also set to true. setWorldOrigin(offset:Object) iOS 11.3+/ARKit 1.5+ Only!This function transforms the world origin by the given offset. Multiple calls to this function are additive, translating the worldOrigin by the given position/rotation. The offset Object can contain a position and/or a rotation key w/ corresponding values, ie: this.arSceneNavigator.setWorldOrigin({ position : [x, y, z], rotation : [x, y, z],}) startVideoRecording(fileName: string, saveToCameraRoll: bool, onError: func) Starts a recording of the ViroARSceneNavigator capturing only Viro-rendered components and external audio (microphone and camera permissions required). Parameters fileName \- name of the file saved to app&#x27;s temporary files. If the name matches an existing file at the location, it will be overridden. A file extension will automatically be added. saveToCameraRoll \- Whether or not the file should also be saved to the user&#x27;s Photos at the end of recording. (Requires photo/video saving permissions) onError \- a function invoked w/ an errorCode if recording encounters an issue. Possible error codes here. async stopVideoRecording() Async function called to stop video recording. Returns object with keys: success \- true/false if stopping was successful url \- path to the file in the application&#x27;s temporary files. errorCode \- a number representing an error while stopping recording. Possible error codes here. async takeScreenshot(fileName: string, saveToCameraRoll: bool) Async function called to take a screenshot of the ViroARSceneNavigator capturing only Viro-rendered components. Parameters fileName \- name of the file saved to app&#x27;s temporary files. If the name matches an existing file at the location, it will be overridden. A file extension will automatically be added. saveToCameraRoll \- Whether or not the file should also be saved to the user&#x27;s Photos at the end of recording. (Requires photo/video saving permissions) Returns object with keys: success \- true/false if stopping was successful url \- path to the file in the application&#x27;s temporary files. errorCode \- a number representing an error while stopping recording. Possible error codes here. async project(point:array) Async function called that takes a 3d vector representing a 3d world position and returns a vector representing a x,y screen position. Parameters point \- A 3d vector that represents a 3d world position. For example, a value of [-1, 4, -5] would represent the point (x:-1, y:4, z:-5) in world space.  Returns an object with the keys: screenPosition \- A 2d vector that represents the projected screen position of the passed in point parameter. screenPosition[0] will represent the x screen position. screenPosition[1] will store the y screen position.  Example use: TypeScriptthis.props.arSceneNavigator.project(projectPoint).then((returnPos)=&gt; { this.setState({ screenX: returnPos[&quot;screenPosition&quot;][0], screenY: returnPos[&quot;screenPosition&quot;][1], }); });  async unproject(point:array) Async function called that takes a 3d vector representing a 2d screen position plus a value from 0 to 1 representing a interpolation from the near clipping plane and far clipping plane, and returns a vector representing a x,y,z world space position of the given screen position. Parameters point \- A 3d vector. point[0] represents the screen x position. point[1] represents the screen y position. point[2] is a value from 0 to 1. 0 will unproject the point on the near clipping plane. A value of 1 will unproject the point on the far clipping plane. A value between 0 and 1 will interpolate between the two planes and unproject the point at that interpolated distance. For example, a value of [100, 400, 0] would inform the method to unproject the screen position(x:100, y:400) onto the near clipping plane. Returns an object with the keys: position \- A 3d vector that represents the unprojected world position. position[0] will represent the x position. position[1] will store the y position. position[2] will store the z position. Example use: TypeScriptthis.props.arSceneNavigator.unproject(unprojectPoint).then((returnDict)=&gt; { this.setState({ unprojectedPoint: returnDict[&quot;position&quot;] }); }); " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
`ViroARSceneNavigator` is the entry point for AR applications with Viro. For
more information about developing in AR, see our Develop page for [Augmented
Reality (AR)](overview-1.html).
##
Props###
initialScene (* required)PropKey| PropType  
---|---  
{ scene: JSX.Element }| The initial AR scene to display for your application
on application start.  
Note: ViroARSceneNavigator only accepts [ViroARScene](viroarscene.html)  
###
autofocusType| Description  
---|---  
boolean| Whether or not to enable autofocus for this AR session.  
Default value is true for iOS, false for Android.  
False on Android, since currently (as of ARCore 1.4.0), ARCore's tracking is
optimized for auto-focus turned off.  
###
bloomEnabledType| Description  
---|---  
boolean| Enable or disable bloom. Bloom adds a soft glow to bright areas in
scene, simulating the way bright highlights appear to the human eye. To make
an object bloom, this property must be enabled, and the objects's threshold
for bloom must be set via its material's `bloomThreshold` property.  
###
hdrEnabledType| Description  
---|---  
boolean| When HDR rendering is enabled, Viro uses a deeper color space and
renders to a floating point texture, then applies a tone-mapping algorithm to
preserve fine details in both bright and dark regions of the scene. If HDR is
disabled, then features like Bloom and PBR will not work, and tone-mapping
will be disabled.HDR is not supported on all devices.  
###
numberOfTrackedImagesType| Description  
---|---  
number| **iOS 12+/ARKit 2.0+ only**  
Tracked images are images that track continuously. This property represents
the max amount of images that should be tracked concurrently. For example, if
this number is set to 3, then the first 3 images visible in a scene will be
tracked. Even if there are 5 total ViroARImageMarkers only the first 3 will be
tracked, if one marker leaves the view, then an untracked marker will then be
tracked. Keep in mind that this number should be kept low as the higher the
number, the worse the performance.  
###
pbrEnabledType| Description  
---|---  
boolean| Enable or disable physically-based rendering. Physically based
rendering, or PBR, produces more realistic lighting results for your scenes,
and provides a more intuitive workflow for artists. To use PBR, this property
must be enabled, and materials must use the `physicallyBased` lighting model.
PBR is controlled by a variety of properties, see [PBR guide](pbr.html) for
details.  
###
shadowsEnabledType| Description  
---|---  
boolean| Enable or disable rendering dynamic shadows. If shadows are disabled
here, shadow casting lights will simply not cast a shadow.  
###
videoQualityType| Description  
---|---  
"High" | "Low"| **iOS 11.3+/ARKit 1.5+ only**  
Sets the video quality either to the highest or lowest possible if the device
supports more than 1 applicable video quality.  
Default value is "High".  
###
viroAppPropsType| Description  
---|---  
object| A javascript object containing properties for this viro app. One use
would be to pass in properties from native if you're using a hybrid
applications.Access this given props from within
[ViroARScene](viroarscene.html) objects through
`this.props.sceneNavigator.viroAppProps`  
###
worldAlignmentType| Description  
---|---  
"Gravity" | "GravityAndHeading" | "Camera"| **iOS only - has no effect on Android/ARCore**  
This property determines the initial orientation/alignment of the world's
coordinate system.  
**Gravity** \- origin is the device's starting location and the X-Z plane is
perpendicular to gravity.  
**GravityAndHeading** \- origin is the device's starting location and the X
and Z axes are latitudinally and longitudinally aligned.  
**Camera** \- coordinate system is locked to the camera's current orientation.  
##
MethodsThe following functions are available on the `ViroARSceneNavigator` component.
You can get the handle to the `ViroARSceneNavigator`, from your `ViroScene`.
Each `ViroScene` added to a `ViroARSceneNavigator` provides its parent
navigator in the variable: `this.props.sceneNavigator`.
###
push({ scene: ViroARScene, passProps: Object })Push the given scene onto scene stack, displaying the scene to the user.
####
Parameters**scene** \- Scene that will be pushed onto the stack and displayed to the
user  
**passProps** \- Props to pass to the rendered scene
###
pop()Pop the top most scene of the stack, effectively going back to the previous
scene.
###
pop(n: number)Go back n scenes at once. If n is equal to 1 this is equivalent to calling
pop().
###
jump({ scene: ViroARScene, passProps: Object })Move to the given scene in the stack, removing it from its current position in
the stack and placing it on top, thereby displaying it to the user. If the
scene is not already on the stack, this method pushes the scene to the top of
the stack, displaying it to the user. This is best used in applications where
the user jumps between a set of scenes frequently.
####
Parameters**scene** \- Scene that will be moved or pushed to the top of the stack and
displayed to the user  
**passProps** \- Props to pass to the rendered scene
###
replace({ scene: ViroARScene, passProps: Object })Replace the currently displayed scene (the scene at the top of the stack) with
the given scene, displaying it to the user. This leaves the remainder of the
stack unchanged.
####
Parameters**scene** \- Scene that will replace the scene at the top of stack and be
displayed to the user  
**passProps** \- Props to pass to the rendered scene
###
resetARSession(resetTracking: boolean, removeAnchors:boolean)
[](viroarscenenavigator.html#resetarsessionresettracking-boolean-
removeanchorsboolean)
**iOS Only**
Call this function to reset the ARSession with a combination of the two
flags:resetTracking - if true, the scene will realign with the camera's
position and orientation.removeAnchors - if true, the anchors will all be
removed (`onAnchorRemoved` will be called on the
[ViroARScene](viroarscene.html)). It's recommended to also set `removeAnchor`
to true if `resetTracking` is also set to true.
###
setWorldOrigin(offset:Object)**iOS 11.3+/ARKit 1.5+ Only!** This function transforms the world origin by
the given offset. Multiple calls to this function are additive, translating
the worldOrigin by the given position/rotation.
The offset `Object` can contain a position and/or a rotation key w/
corresponding values, ie:
`this.arSceneNavigator.setWorldOrigin({ position : [x, y, z], rotation : [x,
y, z],})`
###
startVideoRecording(fileName: string, saveToCameraRoll: bool, onError: func)
[](viroarscenenavigator.html#startvideorecordingfilename-string-
savetocameraroll-bool-onerror-func)
Starts a recording of the ViroARSceneNavigator capturing only Viro-rendered
components and external audio (microphone and camera permissions required).
####
Parameters**fileName** \- name of the file saved to app's temporary files. If the name
matches an existing file at the location, it will be overridden. A file
extension will automatically be added.  
**saveToCameraRoll** \- Whether or not the file should also be saved to the
user's Photos at the end of recording. (Requires photo/video saving
permissions)  
**onError** \- a function invoked w/ an errorCode if recording encounters an
issue. Possible error codes [here](viroconstants.html#section-video-recording-
screenshot-errors).
###
async stopVideoRecording()[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function called to
stop video recording.
####
Returnsobject with keys:
**success** \- true/false if stopping was successful  
**url** \- path to the file in the application's temporary files.  
**errorCode** \- a number representing an error while stopping recording.
Possible error codes [here](viroconstants.html#section-video-recording-
screenshot-errors).
###
async takeScreenshot(fileName: string, saveToCameraRoll: bool)
[](viroarscenenavigator.html#async-takescreenshotfilename-string-
savetocameraroll-bool)
[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function called to
take a screenshot of the ViroARSceneNavigator capturing only Viro-rendered
components.
####
Parameters**fileName** \- name of the file saved to app's temporary files. If the name
matches an existing file at the location, it will be overridden. A file
extension will automatically be added.  
**saveToCameraRoll** \- Whether or not the file should also be saved to the
user's Photos at the end of recording. (Requires photo/video saving
permissions)
####
Returnsobject with keys:
**success** \- true/false if stopping was successful  
**url** \- path to the file in the application's temporary files.  
**errorCode** \- a number representing an error while stopping recording.
Possible error codes [here](viroconstants.html#section-video-recording-
screenshot-errors).
###
async project(point:array)[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function called
that takes a 3d vector representing a 3d world position and returns a vector
representing a x,y screen position.
####
Parameters**point** \- A 3d vector that represents a 3d world position. For example, a
value of [-1, 4, -5] would represent the point (x:-1, y:4, z:-5) in world
space.
####
Returnsan object with the keys:
**screenPosition** \- A 2d vector that represents the projected screen
position of the passed in **point** parameter. screenPosition[0] will
represent the x screen position. screenPosition[1] will store the y screen
position.
Example use:
TypeScript
    this.props.arSceneNavigator.project(projectPoint).then((returnPos)=> {      
      this.setState({          
        screenX: returnPos["screenPosition"][0],          
        screenY: returnPos["screenPosition"][1],      
      });    
    }); 
###
async unproject(point:array)[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function called
that takes a 3d vector representing a 2d screen position plus a value from 0
to 1 representing a interpolation from the near clipping plane and far
clipping plane, and returns a vector representing a x,y,z world space position
of the given screen position.
####
Parameters**point** \- A 3d vector. point[0] represents the screen x position. point[1]
represents the screen y position. point[2] is a value from 0 to 1. 0 will
unproject the point on the near clipping plane. A value of 1 will unproject
the point on the far clipping plane. A value between 0 and 1 will interpolate
between the two planes and unproject the point at that interpolated distance.
For example, a value of [100, 400, 0] would inform the method to unproject the
screen position(x:100, y:400) onto the near clipping plane.
####
Returnsan object with the keys:
**position** \- A 3d vector that represents the unprojected world position.
position[0] will represent the x position. position[1] will store the y
position. position[2] will store the z position.
Example use:
TypeScript
    this.props.arSceneNavigator.unproject(unprojectPoint).then((returnDict)=> {
      this.setState({ unprojectedPoint: returnDict["position"] });
    }); 
__Updated over 3 years ago