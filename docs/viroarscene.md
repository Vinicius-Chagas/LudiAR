This component also hosts various properties that enable developers to control and interact with the AR subsystem. Like displayPointCloud which configures the renderer to draw the AR point cloud. The onAnchorFound|Updated|Removed functions work in conjunction with ViroARPlane&#x27;s manual anchoring mode to enable developers to fully control their experience. Example use: JavaScript&lt;ViroARScene onTrackingUpdated={this._trackingUpdated}&gt; &lt;ViroARPlane&gt; &lt;ViroBox position={[0, .5, 0]} /&gt; &lt;/ViroARPlane&gt; &lt;/ViroARScene&gt;  Props anchorDetectionTypes TypeDescriptionstring | string[]Determines what types of anchors the scene should return. Currently supports the following values:&quot;None&quot; | &quot;PlanesHorizontal&quot; | &quot;PlanesVertical&quot; displayPointCloud TypeScriptinterface PointCloudOptions { // image used to represent each point imageSource: ImageSourcePropType; // scale of the image used for each point, the default is [.01,.01,.01] imageScale: [number, number, number]; // the max number of points drawn each frame maxPoints: number; }  TypeDescriptionboolean | pointCloudOptionsSetting this property to true draws the point cloud using a default configuration. Setting this property to false disables the drawing of the point cloud. This property can also take a dictionary of properties which enable point cloud drawing with the given pointCloudOptions. Example:  TypeScript&lt;ViroARScene displayPointCloud={{ imageSource: require(&quot;./res/pointCloudPoint.png&quot;), imageScale: [.02,.02,.02], maxPoints: 100 }} /&gt;  dragPlane TypeDescriptionViroDragPlaneWhen a drag type of &quot;FixedToPlane&quot; is given, dragging is limited to a user defined plane. The dragging behavior is then configured by this property (specified by a point on the plane and its normal vector). You can also limit the maximum distance the dragged object is allowed to travel away from the camera/controller (useful for situations where the user can drag an object towards infinity). dragType TypeDescription&quot;FixedDistance&quot; | &quot;FixedToWorld&quot; | &quot;FixedDistanceOrigin&quot; | &quot;FixedToPlane&quot;Determines the behavior of drag if onDrag is specified. The default value is &quot;FixedDistance&quot;.FixedDistance: Dragging is limited to a fixed radius around the user, dragged from the point at which the user has grabbed the geometry containing this draggable nodeFixedDistanceOrigin: Dragging is limited to a fixed radius around the user, dragged from the point of this node&#x27;s position in world space.FixedToWorld: Dragging is based on intersection with real world objects. Available only in ARFixedToPlane: Dragging is limited to a fixed plane around the user. The configuration of this plane is defined by the dragPlane property. ignoreEventHandling TypeDescriptionbooleanWhen set to true, this control will ignore events and not prevent controls behind it from receiving event callbacks. The default value is false. onAmbientLightUpdate TypeDescription(intensity, colorTempurature) =&gt; voidFunction that provides an estimate of the light intensity and color temperature.intensity: a number representing the estimated intensity of the ambient light as detected by the cameracolorTemperature: a number representing the estimated colorTemperature of the ambient light as detected by the camera onAnchorFound TypeDescription(anchor) =&gt; voidCalled when the AR system finds an Anchor. See Anchor. onAnchorUpdated TypeDescription(anchor) =&gt; voidCalled when the AR system detects changed properties of a previously found Anchor. See Anchor. onAnchorRemoved TypeDescription() =&gt; voidCalled when the AR system detects that a previously found Anchor no longer exists See Anchor. onARPointCloudUpdate JSON{ &quot;pointCloud&quot;: { &quot;points&quot; : [ [x, y, z, confidence], ... ], &quot;identifiers&quot;: [ identifier1, identifier2, ... ] } }  TypeDescription(pointCloud) =&gt; voidThis callback will invoke whenever the point cloud is updated. pointCloud is a Javascript object containing the point cloud in the format above: where: x, y, z \- represents the x,y,z coordinates of the point in world space.confidence \- is a float value from 0 -&gt; 1 that represents the confidence that the underlying system has for this point (Android only).identifier \- is a number that is unique to the corresponding point in the points array that allow the user to track points between point cloud updates (iOS only) onCameraARHitTest TypeScript{ &quot;hitTestResults&quot;: [ [ARHitTestResult1], [ARHitTestResult2], ... ], &quot;cameraOrientation&quot;: { position: [x, y, z], rotation:[x, y, z], forward:[x, y, z], up[x, y, z] } }  TypeDescriptionIf defined, a callback is invoked returning the camera position and orientation along with a set of hit results in an array consisting of ARHitTestResult objects. The hit test results correspond to the AR points found by the AR system defined by the ray shooting from the camera direction and position. This can be used to show a tracking plane placed in the world while the user moves or to inform the user of the confidence of the area being looked at. If defined, this callback is invoked as often as possible in order to keep with the frame rate. The above object structure is returned.ARHitTestResult format found here.cameraOrientation consists of position, the rotation of the camera in degrees, and the current forward and up vectors of the camera. onCameraTransformUpdate TypeScript{ cameraTransform: { position : [posX, posY, posZ], rotation : [rotX, rotY, rotZ], forward : [forwardX, forwardY, forwardZ], up : [upX, upY, upZ], } }  TypeDescription(updateObj) =&gt; voidA callback invoked when the camera changes (at most, once per frame). Returns the value as an object:pos \- position (in world coordinates) of the camerarot \- rotation (in world coordinates) of the camera in Euler angles (degrees).forward \- the forward vector of the camera (in world coordinatesup \- the up vector of the camera (in world coordinates) onClick See ViroNode onClick. onClickState See ViroNode onClickState. onCollision See ViroNode onCollision. onDrag See ViroNode onDrag. onFuse See ViroNode onFuse. onHover See ViroNode onHover. onPinch See ViroNode onPinch. onPlatformUpdate TypeScriptconst handlePlatformUpdate = (platformInfo) =&gt; { const platform = platformInfo.vrPlatform; const headset = platformInfo.headset; const controller = platformInfo.controller; }  TypeDescriptionCallback method set to be notified of platform specific information like headset type or controller type. Example Code:Supported platforms: gvr, ovr-mobileSupported Headsets: cardboard, daydream, gearvrSupported Controllers: cardboard, daydream, gearvr onRotate See ViroNode onRotate. onScroll See ViroNode onScroll. onSwipe See ViroNode onSwipe. onTouch See ViroNode onTouch. onTrackingInitialized (deprecated) TypeDescriptionWARN: This function will be deprecated in the upcoming release, in favor of onTrackingUpdated. Function called when the AR system has properly initialized. The platform maintains a right-handed coordinate system, where the origin of the system is the user&#x27;s location at the time AR tracking was initialized. The camera&#x27;s forward vector is [0, 0, -1] and up vector is [0,1,0]. onTrackingUpdated TypeDescriptionFunctionInvoked when the tracking state of the device changes. The tracking state indicates how well the device is able to track its position within the real world. Tracking state is subject to lighting conditions, the speed at which the device is moving, and other environmental factors. Tracking states include:TRACKING_UNAVAILABLE (1): Tracking is unavailable: the camera&#x27;s position in the world is not known.TRACKING_LIMITED (2): Tracking is available, but the camera&#x27;s position in the world may be inaccurate and should not be used with confidence.TRACKING_NORMAL (3): Camera position tracking is providing optimal results. For iOS, a possible diagnosis for limited tracking quality is provided in the second parameter: &quot;reason&quot;. These states include:TRACKING_REASON_NONE (1): The current tracking state is not limited.TRACKING_REASON_EXCESSIVE_MOTION (2):  The device is moving too fast for accurate position tracking.TRACKING_REASON_INSUFFICIENT_FEATURES (3) The scene visible to the camera does not contain enough distinguishable features for optimal position tracking. Sample code: (Note that we use ViroConstants to properly compare different tracked states):  TypeScriptconst handleTrackingUpdated = (state, reason) =&gt; { if (state == ViroConstants.TRACKING_NORMAL) { // Show my AR Scene experience } else if (state == ViroConstants.TRACKING_NONE) { // Prompt user to move phone around } }  postProcessEffects TypeDescriptionstring[]Specifies which post-process effects to enable. Refer to Post-Process Effects for more information. physicsWorld TypeScriptinterface PhysicsWorld { // required gravity: number[], drawBounds: boolean }  TypeDescriptionPhysicsWorld (see above)Contains and processes the physics bodies of all viro controls that have been physics enabled in this scene. Environmental physics properties are also applied, like gravity.gravity \- A constant gravitational acceleration that is applied to all physics body objects in this scene. It is a vector in the terms of meters per second. Defaults to [0, -9.81, 0].drawBounds \- If true, renders the mesh representing the shape of all physics bodies in this scene. soundRoom TypeScript Code Example: TypeScriptsoundRoom={{ size: {[2,2,2]}, wallMaterial: &quot;acoustic_ceiling_tiles&quot;, ceilingMaterial: &quot;glass_thin&quot;, floorMaterial: &quot;concrete_block_coarse&quot; }}  TypeDescriptionDescribes the acoustic properties of the room around the user by allowing the developer to describe the room based on its dimensions and its surface properties. Note: This is not supported in Cardboard iOS. List of soundRoom properties:size \- The 3D dimensions of the room.wallMaterial \- Sound Material for the four walls.ceilingMaterial \- Sound Material for the ceilingfloorMaterial \- Sound Material for the floor List of Supported Sound Materials:acoustic_ceiling_tiles Acoustic ceiling tiles, absorbs most frequencies.brick_bare \- Bare brick, relatively reflective.brick_painted \- Painted brickconcrete_block_coarse \- Coarse surface concrete block.concrete_block_painted \- Painted concrete block.curtain_heavy \- Heavy curtains.fiber_glass_insulation \- Fiber glass insulation.glass_thin \- Thin glass.glass_thick \- Thick glass.grass \- Grass.linoleum_on_concrete \- Linoleum on concrete.marble \- Marble.metal \- Galvanized sheet metal.parquet_on_concrete \- Wooden parquet on concrete.plaster_rough \- Rough plaster surface.plaster_smooth \- Smooth plaster surface.plywood_panel \- Plywood panelpolished_concrete_or_tile \- Polished concrete or tile surface.sheet_rock \- Sheet rocktransparent \- Acoustically transparent material, reflects no sound.water_or_ice_surface \- Surface of water or ice.wood_ceiling \- Wooden ceiling.wood_panel \- Wood paneling. rotation TypeDescription[number, number, number]The rotation of the component around it&#x27;s local axis specified as Euler angles [x, y, z]. Units for each angle are specified in degrees. style TypeDescriptionStylesstylePropType transformBehaviors TypeDescriptionPropTypes.arrayOf(PropTypes.string)Put the PropType Description here. Methods async findCollisionsWithRayAsync(from: number[], to: number[], closest: boolean, viroTag: string) This function is used to find collisions between physics bodies and a line emanating from the given from position to the to position. Collided components have their onCollision callbacks invoked. Parameters from: the origin position of the line||to|the end position of the line closest: if true, only the first object intersected by the line (determined by closest distance to the origin) receives the onCollision callback viroTag: the string tag passed to collided components&#x27; onCollision callbacks Returns returns true/false whether or not a collision was detected async findCollisionsWithShapeAsync(from: number[], to: number[], shapeString: string, shapeParam: object, viroTag: string) This function is used to find collisions between physics bodies and the given shape moving from the given from position to the to position. Collided components have their onCollision callbacks invoked. If the from and to positions are the same, then this function invokes the onCollision callbacks of all components within the given shape. Parameters from: the origin position of the line to: the end position of the line shapeString: the name of the shape to use in this test shapeParam: the configuration of the shape used in this collision test viroTag: the string tag passed to collided components&#x27; onCollision callbacks Returns true/false whether or not a collision was detected| async getCameraOrientationAsync() This function is used to fetch the current Camera&#x27;s orientation. Returns an object that contains the camera&#x27;s position, rotation, forward vector and up vector as number arrays async performARHitTestWithRay(ray: number[]) This function performs a AR system-backed hit test with the given ray from the camera&#x27;s position outward. returns returns an array of ARHitTestResult corresponding to the AR points found by the AR system along the ray. async performARHitTestWithPosition(position: number[]) This function performs an AR system-backed hit test with the ray from the camera to the given position. Returns returns an array of ARHitTestResult corresponding to the AR points found by the AR system along the ray. async performARHitTestWithPoint(x: number, y: number) This function performs an AR system-backed hit test with the given 2D screen coordinates in pixels. You may need to scale the x and y position by the pixel ratio to get the correct result: For example: TypeScriptperformARHitTestWithPoint(evt.nativeEvent.locationX * PixelRatio.get(), evt.nativeEvent.locationX * PixelRatio.get())  Returns returns an array of ARHitTestResult corresponding to the AR points found by the AR system along the ray. ARHitTestResult These are the individual objects in the array of ARHitTestResults returned by the two performARHitTest... functions.  JavaScriptinterface ArHitTestResult { type: string, transform: { position: number[], rotation: number[], scale: number[] } }  KeyTypeDescriptiontype&quot;ExistingPlaneUsingExtent&quot; | &quot;ExistingPlane&quot; | &quot;EstimatedHorizontalPlane&quot; | &quot;FeaturePoint&quot;The type of point returned.transformobjectThe transform of the point. Contains the following keys: position, rotation, scale as arrays of numbers. Anchor This is the object given to the developer through the onAnchorFound, onAnchorUpdated and onAnchorRemoved callback functions. KeyValueanchorIdstringId of the anchortypestringtype of the anchorpositionarrayOf(number)Position of the anchor in world coordinates.rotationarrayOf(number)Rotation of the rotation of the anchor in degrees.center (ViroARPlane only)arrayOf(number)Center of the plane relative to the plane&#x27;s position.alignment (ViroARPlane only)stringThe plane alignment, one of the following values:&quot;horizontal&quot; - iOS only&quot;HorizontalDownwards&quot; - Android only&quot;HorizontalUpwards&quot; - Android only&quot;NonHorizontal&quot; - Android onlywidth (ViroARPlane only)numberCurrent width of the attached planeheight (ViroARPlane only)numberCurrent height of the attached planeverticesarrayOf(arrayOf(number))An array of 3D points representing the vertices along the boundary of a polygonal plane for thisViroARPlane. Although the contents of this property consist of 3D points, the represented polygonal plane is always two-dimensional, and is always positioned in only the x and z axis. This points are always placed relative to the ViroARPlane&#x27;s center transform.trackingMethod (ViroARImageMarker &amp; Android only)Android only**String**The current tracking method used to keep track of the Image Marker Anchor. It can be one of the following values:&quot;notTracking&quot; - image marker hasn&#x27;t yet been found&quot;tracking&quot; - image marker is actively being tracked&quot;lastKnownPose&quot; - image marker isn&#x27;t currently being tracked but instead rendered based on its last known pose Post-Process Effects EffectDescriptiongrayscaleAn effect where the resulting image is in black and white.sepiaAn effect where the resulting image has a dark reddish-brown pigment color effect on it.sincityA sin-city like effect where the resulting image is in black and white, except for places where there is saturated red colors.baralleldistortionA fish-eye-like effect where the fish eye lens distortion becomes more pronounce towards the center of the image.pincushiondistortionA cushioning effect where the resulting image is &quot;pinched&quot; into the center.thermalvisionA coloring effect where the resulting image gives of a &quot;radiant heat&quot; look from a thermal sensor.crosshatchAn effect where the resulting image is made up of tiny crossed lines that recreates the scene.pixelatedAn effect where the resulting image is pixelized." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
The `ViroARScene` component allows developers to logically group their
experiences and components and switch between them using the
[ViroARSceneNavigator](viroarscenenavigator.html).
This component also hosts various properties that enable developers to control
and interact with the AR subsystem. Like `displayPointCloud` which configures
the renderer to draw the AR point cloud. The `onAnchorFound|Updated|Removed`
functions work in conjunction with `ViroARPlane's` [manual
anchoring](viroarplane.html#anchoring) mode to enable developers to fully
control their experience.
######
Example use:JavaScript
##
Props###
anchorDetectionTypesType| Description  
---|---  
string | string[]| Determines what types of anchors the scene should return.  
Currently supports the following values:  
_" None"_ | _" PlanesHorizontal"_ | _" PlanesVertical"_  
###
displayPointCloudTypeScript
    interface PointCloudOptions {
      //  image used to represent each point
      imageSource: ImageSourcePropType;
      // scale of the image used for each point, the default is [.01,.01,.01]
      imageScale: [number, number, number];
      // the max number of points drawn each frame
      maxPoints: number;
    }
Type| Description  
---|---  
boolean | pointCloudOptions| Setting this property to `true` draws the point cloud using a default configuration.  
Setting this property to `false` disables the drawing of the point cloud.  
This property can also take a dictionary of properties which enable point
cloud drawing with the given **pointCloudOptions.**  
Example:
TypeScript
###
dragPlaneType| Description  
---|---  
[ViroDragPlane](virodragplane.html)| When a drag type of "FixedToPlane" is
given, dragging is limited to a user defined plane. The dragging behavior is
then configured by this property (specified by a point on the plane and its
normal vector). You can also limit the maximum distance the dragged object is
allowed to travel away from the camera/controller (useful for situations where
the user can drag an object towards infinity).  
###
dragTypeType| Description  
---|---  
"FixedDistance" | "FixedToWorld" | "FixedDistanceOrigin" | "FixedToPlane"| Determines the behavior of drag if **onDrag** is specified. The default value is "FixedDistance".  
**FixedDistance:** Dragging is limited to a fixed radius around the user,
dragged from the point at which the user has grabbed the geometry containing
this draggable node  
**FixedDistanceOrigin:** Dragging is limited to a fixed radius around the
user, dragged from the point of this node's position in world space.  
**FixedToWorld:** Dragging is based on intersection with real world objects.
**Available only in AR**  
**FixedToPlane:** Dragging is limited to a fixed plane around the user. The
configuration of this plane is defined by the **dragPlane** property.  
###
ignoreEventHandlingType| Description  
---|---  
boolean| When set to true, this control will ignore events and not prevent
controls behind it from receiving event callbacks.  
The default value is false.  
###
onAmbientLightUpdateType| Description  
---|---  
(intensity, colorTempurature) => void| Function that provides an estimate of
the light intensity and color temperature.  
**intensity:** a number representing the estimated intensity of the ambient
light as detected by the camera  
**colorTemperature:** a number representing the estimated colorTemperature of
the ambient light as detected by the camera  
###
onAnchorFoundType| Description  
---|---  
(anchor) => void| Called when the AR system finds an Anchor.  
See [Anchor](viroarscene.html#anchor).  
###
onAnchorUpdatedType| Description  
---|---  
(anchor) => void| Called when the AR system detects changed properties of a
previously found Anchor.  
See [Anchor](viroarscene.html#anchor).  
###
onAnchorRemovedType| Description  
---|---  
() => void| Called when the AR system detects that a previously found Anchor
no longer exists  
See [Anchor](viroarscene.html#anchor).  
###
onARPointCloudUpdateJSON
    {  
      "pointCloud": {
        "points" : [ 
          [x, y, z, confidence], 
          ... 
         ],
        "identifiers": [ 
          identifier1, 
          identifier2, 
          ... 
        ] 
      }
    }
Type| Description  
---|---  
(pointCloud) => void| This callback will invoke whenever the point cloud is
updated. pointCloud is a Javascript object containing the point cloud in the
format above:  
where: `x, y, z` \- represents the x,y,z coordinates of the point in world
space.  
`confidence` \- is a float value from 0 -> 1 that represents the confidence
that the underlying system has for this point (Android only).  
`identifier` \- is a number that is unique to the corresponding point in the
points array that allow the user to track points between point cloud updates
(iOS only)  
###
onCameraARHitTestTypeScript
    {    
      "hitTestResults": [ 
        [ARHitTestResult1], [ARHitTestResult2], ...
      ],
      "cameraOrientation": {
        position: [x, y, z],
        rotation:[x, y, z],
        forward:[x, y, z],
        up[x, y, z]
      }
    }
Type| Description  
---|---  
| If defined, a callback is invoked returning the camera position and
orientation along with a set of hit results in an array consisting of
[ARHitTestResult](viroarscene.html#arhittestresult) objects. The hit test
results correspond to the AR points found by the AR system defined by the ray
shooting from the camera direction and position. This can be used to show a
tracking plane placed in the world while the user moves or to inform the user
of the confidence of the area being looked at.  
If defined, this callback is invoked as often as possible in order to keep
with the frame rate.  
The above object structure is returned.  
[ARHitTestResult](viroarscene.html#arhittestresult) format found
[here](viroarscene.html#arhittestresult).  
`cameraOrientation` consists of position, the rotation of the camera in
degrees, and the current forward and up vectors of the camera.  
###
onCameraTransformUpdateTypeScript
    {
      cameraTransform: {    
        position : [posX, posY, posZ],
        rotation : [rotX, rotY, rotZ],
        forward : [forwardX, forwardY, forwardZ],    
        up : [upX, upY, upZ],  
      }
    }
Type| Description  
---|---  
(updateObj) => void| A callback invoked when the camera changes (at most, once
per frame).  
Returns the value as an object:  
`pos` \- position (in world coordinates) of the camera  
`rot` \- rotation (in world coordinates) of the camera in Euler angles
(degrees).  
`forward` \- the forward vector of the camera (in world coordinates  
`up` \- the up vector of the camera (in world coordinates)  
###
onClickSee [ViroNode onClick](vironode.html#onclick).
###
onClickStateSee [ViroNode onClickState](vironode.html#onclickstate).
###
onCollisionSee [ViroNode onCollision](vironode.html#oncollision).
###
onDragSee [ViroNode onDrag](vironode.html#ondrag).
###
onFuseSee [ViroNode onFuse](vironode.html#onfuse).
###
onHoverSee [ViroNode onHover](vironode.html#onhover).
###
onPinchSee [ViroNode onPinch](vironode.html#onpinch).
###
onPlatformUpdateTypeScript
    const handlePlatformUpdate = (platformInfo) => {
      const platform = platformInfo.vrPlatform;
      const headset = platformInfo.headset;
      const controller = platformInfo.controller;
    }
Type| Description  
---|---  
| Callback method set to be notified of platform specific information like
headset type or controller type.  
Example Code:  
**Supported platforms:** gvr, ovr-mobile  
**Supported Headsets:** cardboard, daydream, gearvr  
**Supported Controllers:** cardboard, daydream, gearvr  
###
onRotateSee [ViroNode onRotate](vironode.html#onrotate).
###
onScrollSee [ViroNode onScroll](vironode.html#onscroll).
###
onSwipeSee [ViroNode onSwipe](vironode.html#onswipe).
###
onTouchSee [ViroNode onTouch](vironode.html#ontouch).
###
onTrackingInitialized (deprecated)Type| Description  
---|---  
| **WARN** : This function will be deprecated in the upcoming release, in
favor of onTrackingUpdated.  
Function called when the AR system has properly initialized. The platform
maintains a right-handed coordinate system, where the origin of the system is
the user's location at the time AR tracking was initialized. The camera's
forward vector is [0, 0, -1] and up vector is [0,1,0].  
###
onTrackingUpdatedType| Description  
---|---  
Function| Invoked when the tracking state of the device changes. The tracking
state indicates how well the device is able to track its position within the
real world. Tracking state is subject to lighting conditions, the speed at
which the device is moving, and other environmental factors.  
Tracking states include:  
**TRACKING_UNAVAILABLE (1):** Tracking is unavailable: the camera's position
in the world is not known.  
**TRACKING_LIMITED (2):** Tracking is available, but the camera's position in
the world may be inaccurate and should not be used with confidence.  
**TRACKING_NORMAL (3):** Camera position tracking is providing optimal
results.  
For iOS, a possible diagnosis for limited tracking quality is provided in the
second parameter: "reason". These states include:  
**TRACKING_REASON_NONE (1):** The current tracking state is not limited.  
**TRACKING_REASON_EXCESSIVE_MOTION (2):** The device is moving too fast for
accurate position tracking.  
**TRACKING_REASON_INSUFFICIENT_FEATURES (3)** The scene visible to the camera
does not contain enough distinguishable features for optimal position
tracking.  
Sample code: (Note that we use [ViroConstants](viroconstants.html) to properly
compare different tracked states):
TypeScript
    const handleTrackingUpdated = (state, reason) => {
      if (state == ViroConstants.TRACKING_NORMAL) {
        // Show my AR Scene experience    
      } else if (state == ViroConstants.TRACKING_NONE) {
        // Prompt user to move phone around    
      }  
    }
###
postProcessEffectsType| Description  
---|---  
string[]| Specifies which post-process effects to enable. Refer to [Post-
Process Effects](viroarscene.html#post-process-effects) for more information.  
###
physicsWorldTypeScript
    interface PhysicsWorld {
      // required
      gravity: number[],
      drawBounds: boolean
    }
Type| Description  
---|---  
PhysicsWorld (see above)| Contains and processes the physics bodies of all
viro controls that have been physics enabled in this scene. Environmental
physics properties are also applied, like gravity.  
`gravity` \- A constant gravitational acceleration that is applied to all
physics body objects in this scene. It is a vector in the terms of meters per
second. Defaults to [0, -9.81, 0].  
`drawBounds` \- If true, renders the mesh representing the shape of all
physics bodies in this scene.  
###
soundRoomTypeScript
Code Example:
TypeScript
    soundRoom={{
      size: {[2,2,2]},
      wallMaterial: "acoustic_ceiling_tiles",
      ceilingMaterial: "glass_thin",
      floorMaterial: "concrete_block_coarse"
    }}
Type| Description  
---|---  
| Describes the acoustic properties of the room around the user by allowing
the developer to describe the room based on its dimensions and its surface
properties. Note: This is not supported in Cardboard iOS.  
List of soundRoom properties:  
`size` \- The 3D dimensions of the room.  
`wallMaterial` \- Sound Material for the four walls.  
`ceilingMaterial` \- Sound Material for the ceiling  
`floorMaterial` \- Sound Material for the floor  
List of Supported Sound Materials:  
`acoustic_ceiling_tiles` Acoustic ceiling tiles, absorbs most frequencies.  
`brick_bare` \- Bare brick, relatively reflective.  
`brick_painted` \- Painted brick  
`concrete_block_coarse` \- Coarse surface concrete block.  
`concrete_block_painted` \- Painted concrete block.  
`curtain_heavy` \- Heavy curtains.  
`fiber_glass_insulation` \- Fiber glass insulation.  
`glass_thin` \- Thin glass.  
`glass_thick` \- Thick glass.  
`grass` \- Grass.  
`linoleum_on_concrete` \- Linoleum on concrete.  
`marble` \- Marble.  
`metal` \- Galvanized sheet metal.  
`parquet_on_concrete` \- Wooden parquet on concrete.  
`plaster_rough` \- Rough plaster surface.  
`plaster_smooth` \- Smooth plaster surface.  
`plywood_panel` \- Plywood panel  
`polished_concrete_or_tile` \- Polished concrete or tile surface.  
`sheet_rock` \- Sheet rock  
`transparent` \- Acoustically transparent material, reflects no sound.  
`water_or_ice_surface` \- Surface of water or ice.  
`wood_ceiling` \- Wooden ceiling.  
`wood_panel` \- Wood paneling.  
###
rotationType| Description  
---|---  
[number, number, number]| The rotation of the component around it's local axis
specified as Euler angles [x, y, z]. Units for each angle are specified in
degrees.  
###
styleType| Description  
---|---  
[Styles](styles.html)| stylePropType  
###
transformBehaviorsType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.string)Put the PropType Description here.  
##
Methods###
async findCollisionsWithRayAsync(from: number[], to: number[], closest:
boolean, viroTag: string)
[](viroarscene.html#async-findcollisionswithrayasyncfrom-number-to-number-
closest-boolean-virotag-string)
This function is used to find collisions between [physics](physics.html)
bodies and a line emanating from the given `from` position to the `to`
position. Collided components have their `onCollision` callbacks invoked.
####
Parameters**from:** the origin position of the line||to|the end position of the line  
**closest:** if true, only the first object intersected by the line
(determined by closest distance to the origin) receives the `onCollision`
callback  
**viroTag:** the string tag passed to collided components' `onCollision`
callbacks
####
Returnsreturns true/false whether or not a collision was detected
###
async findCollisionsWithShapeAsync(from: number[], to: number[], shapeString:
string, shapeParam: object, viroTag: string)
[](viroarscene.html#async-findcollisionswithshapeasyncfrom-number-to-number-
shapestring-string-shapeparam-object-virotag-string)
This function is used to find collisions between [physics](physics.html)
bodies and the given shape moving from the given `from` position to the `to`
position. Collided components have their `onCollision` callbacks invoked.
If the `from` and `to` positions are the same, then this function invokes the
`onCollision` callbacks of all components within the given shape.
####
Parameters**from:** the origin position of the line  
**to:** the end position of the line  
**shapeString:** the name of the shape to use in this test  
**shapeParam:** the configuration of the shape used in this collision test  
**viroTag:** the string tag passed to collided components' `onCollision`
callbacks
####
Returnstrue/false whether or not a collision was detected|
###
async getCameraOrientationAsync()This function is used to fetch the current Camera's orientation.
####
Returnsan object that contains the camera's `position`, `rotation`, `forward` vector
and `up` vector as number arrays
###
async performARHitTestWithRay(ray: number[])This function performs a AR system-backed hit test with the given ray from the
camera's position outward.
####
returnsreturns an array of [ARHitTestResult](viroarscene.html#arhittestresult)
corresponding to the AR points found by the AR system along the ray.
###
async performARHitTestWithPosition(position: number[])This function performs an AR system-backed hit test with the ray from the
camera to the given position.
####
Returnsreturns an array of [ARHitTestResult](viroarscene.html#arhittestresult)
corresponding to the AR points found by the AR system along the ray.
###
async performARHitTestWithPoint(x: number, y: number)This function performs an AR system-backed hit test with the given 2D screen
coordinates in pixels. You may need to scale the x and y position by the pixel
ratio to get the correct result:
For example:
TypeScript
    performARHitTestWithPoint(evt.nativeEvent.locationX * PixelRatio.get(), evt.nativeEvent.locationX * PixelRatio.get()) 
####
Returnsreturns an array of [ARHitTestResult](viroarscene.html#arhittestresult)
corresponding to the AR points found by the AR system along the ray.
##
ARHitTestResultThese are the individual objects in the array of ARHitTestResults returned by
the two `performARHitTest...` functions.
JavaScript
    interface ArHitTestResult {
      type: string,
      transform: {
        position: number[],
        rotation: number[],
        scale: number[]
      }
    }
Key| Type| Description  
---|---|---  
type| "ExistingPlaneUsingExtent" | "ExistingPlane" | "EstimatedHorizontalPlane" | "FeaturePoint"| The type of point returned.  
transform| object| The transform of the point. Contains the following keys:
`position`, `rotation`, `scale` as arrays of numbers.  
##
AnchorThis is the object given to the developer through the `onAnchorFound`,
`onAnchorUpdated` and `onAnchorRemoved` callback functions.
Key| Value  
---|---  
anchorId| **string** Id of the anchor  
type| **string** type of the anchor  
position| **arrayOf(number)** Position of the anchor in world coordinates.  
rotation| **arrayOf(number)** Rotation of the rotation of the anchor in
degrees.  
center ([ViroARPlane](viroarplane.html) only)| **arrayOf(number)** Center of
the plane relative to the plane's position.  
alignment ([ViroARPlane](viroarplane.html) only)| **string** The plane
alignment, one of the following values:"horizontal" \- iOS
only"HorizontalDownwards" \- Android only"HorizontalUpwards" \- Android
only"NonHorizontal" \- Android only  
width ([ViroARPlane](viroarplane.html) only)| **number** Current width of the
attached plane  
height ([ViroARPlane](viroarplane.html) only)| **number** Current height of
the attached plane  
vertices| **arrayOf(arrayOf(number))** An array of 3D points representing the
vertices along the boundary of a polygonal plane for thisViroARPlane. Although
the contents of this property consist of 3D points, the represented polygonal
plane is always two-dimensional, and is always positioned in only the x and z
axis. This points are always placed relative to the ViroARPlane's center
transform.  
trackingMethod ([ViroARImageMarker](viroarimagemarker.html) & Android only)|
**Android only**** String**The current tracking method used to keep track of
the Image Marker Anchor. It can be one of the following values:"notTracking"
\- image marker hasn't yet been found"tracking" \- image marker is actively
being tracked"lastKnownPose" \- image marker isn't currently being tracked but
instead rendered based on its last known pose  
##
Post-Process EffectsEffect| Description  
---|---  
grayscale| An effect where the resulting image is in black and white.  
sepia| An effect where the resulting image has a dark reddish-brown pigment
color effect on it.  
sincity| A sin-city like effect where the resulting image is in black and
white, except for places where there is saturated red colors.  
baralleldistortion| A fish-eye-like effect where the fish eye lens distortion
becomes more pronounce towards the center of the image.  
pincushiondistortion| A cushioning effect where the resulting image is
"pinched" into the center.  
thermalvision| A coloring effect where the resulting image gives of a "radiant
heat" look from a thermal sensor.  
crosshatch| An effect where the resulting image is made up of tiny crossed
lines that recreates the scene.  
pixelated| An effect where the resulting image is pixelized.  
__Updated over 3 years ago