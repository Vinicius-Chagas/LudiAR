Example use: JavaScript&lt;ViroOrbitCamera
position={[0, 0, 0]} focalPoint={[0, 0, -1]} active={true} /&gt;
 Props active (* required) TypeDescriptionPropTypes.bool.isRequiredIf true, sets the
corresponding camera as the active one from which we render the world. Setting
more than one active camera within a scene will result in undefined
behavior. fieldOfView TypeDescriptionPropTypes.numberSet the field of view for this
camera, along the major (larger) axis. Field of view is an angle that
determines how wide or narrow the camera lens is when rendering the scene.This
value sets the field of view, in degrees, for the major axis. The major axis
is the axis with the larger dimension: the X axis in landscape mode, or the Y
axis in portrait mode. By specifying the field of view in terms of the major
axis, Viro can keep the field of view consistent upon orientation changes,
when the major/minor axes swap. The minor axis field of view is automatically
computed from the major axis field of view and the viewport.This value is
ignored on VR and AR platforms, where the FOV is fixed by the VR headset or
the AR camera. Else, in non-VR (360 mode) the FOV defaults to
90. focalPoint TypeDescriptionPropTypes.arrayOf(PropTypes.number)Cartesian
position in 3D world space where the camera focuses on and orbits around.
Default position is [0,0,0]. position
TypeDescriptionPropTypes.numberThe desired fov for this camera.
Default fov is 90. text TypeDescriptionPropTypes.stringPut the PropType
Description here. transformBehaviors TypeDescriptionPropTypes.arrayOf(PropTypes.string)Put the PropType Description
here. width TypeDescriptionPropTypes.numberPut the PropType
Description here. visible TypeDescriptionPropTypes.boolPut the PropType
Description here. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A camera component that allows the user to orbit around a specified focal
point. See our [Camera Guide](camera.html) for more information on using
cameras.
######
Example use:JavaScript
##
Props###
active (* required)Type| Description  
---|---  
| **PropTypes.bool.isRequired** If true, sets the corresponding camera as the
active one from which we render the world. Setting more than one active camera
within a scene will result in undefined behavior.  
###
fieldOfViewType| Description  
---|---  
| **PropTypes.number** Set the field of view for this camera, along the major
(larger) axis. Field of view is an angle that determines how wide or narrow
the camera lens is when rendering the scene.This value sets the field of view,
in degrees, for the major axis. The major axis is the axis with the larger
dimension: the X axis in landscape mode, or the Y axis in portrait mode. By
specifying the field of view in terms of the major axis, Viro can keep the
field of view consistent upon orientation changes, when the major/minor axes
swap. The minor axis field of view is automatically computed from the major
axis field of view and the viewport.This value is ignored on VR and AR
platforms, where the FOV is fixed by the VR headset or the AR camera. Else, in
non-VR (360 mode) the FOV defaults to 90.  
###
focalPointType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position in 3D world space
where the camera focuses on and orbits around. Default position is [0,0,0].  
###
positionType| Description  
---|---  
| **PropTypes.number** The desired fov for this camera. Default fov is 90.  
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