Example use: JavaScript&lt;ViroCamera
position={[0, 0, 0]} rotation={[45, 0, 0]} active={true} /&gt;
 Props active (* required) TypeDescriptionbooleanIf true, sets the
corresponding camera as the active one from which we render the world. Setting
more than one active camera within a scene will result in undefined
behavior. animation TypeScripttype ViroAnimation = { name: string,
delay: number, loop: boolean, onStart: Function, onFinish: Function, run:
boolean, }  TypeDescriptionViroAnimationA
collection of parameters that determine if this component should animate. For
more information on animated components please see our Animation Guide.
fieldOfView TypeDescriptionnumberSet the field of view for
this camera, along the major (larger) axis. Field of view is an angle that
determines how wide or narrow the camera lens is when rendering the scene.This
value sets the field of view, in degrees, for the major axis. The major axis
is the axis with the larger dimension: the X axis in landscape mode, or the Y
axis in portrait mode. By specifying the field of view in terms of the major
axis, Viro can keep the field of view consistent upon orientation changes,
when the major/minor axes swap. The minor axis field of view is automatically
computed from the major axis field of view and the viewport.This value is
ignored on VR and AR platforms, where the FOV is fixed by the VR headset or
the AR camera. Else, in non-VR (360 mode) the FOV defaults to
90. position TypeDescription[number, number, number]Cartesian
position of the camera in 3D world space, specified as [x, y,
z]. rotation TypeDescription[number, number, number]Cartesian
rotation of the camera in 3D world space, specified as [x, y,
z]. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A stationary look around camera through which the user views the world. More
than 1 camera may be placed within a scene.
######
Example use:JavaScript
##
Props###
active (* required)Type| Description  
---|---  
boolean| If true, sets the corresponding camera as the active one from which
we render the world. Setting more than one active camera within a scene will
result in undefined behavior.  
###
animationTypeScript
    type ViroAnimation = {
      name: string,
      delay: number,
      loop: boolean,
      onStart: Function,
      onFinish: Function,
      run: boolean,
    }
Type| Description  
---|---  
ViroAnimation| A collection of parameters that determine if this component
should animate. For more information on animated components please see our
[Animation](animation.html) Guide.  
###
fieldOfViewType| Description  
---|---  
number| Set the field of view for this camera, along the major (larger) axis.
Field of view is an angle that determines how wide or narrow the camera lens
is when rendering the scene.This value sets the field of view, in degrees, for
the major axis. The major axis is the axis with the larger dimension: the X
axis in landscape mode, or the Y axis in portrait mode. By specifying the
field of view in terms of the major axis, Viro can keep the field of view
consistent upon orientation changes, when the major/minor axes swap. The minor
axis field of view is automatically computed from the major axis field of view
and the viewport.This value is ignored on VR and AR platforms, where the FOV
is fixed by the VR headset or the AR camera. Else, in non-VR (360 mode) the
FOV defaults to 90.  
###
positionType| Description  
---|---  
[number, number, number]| Cartesian position of the camera in 3D world space,
specified as [x, y, z].  
###
rotationType| Description  
---|---  
[number, number, number]| Cartesian rotation of the camera in 3D world space,
specified as [x, y, z].  
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