Camera Tracking The Viro platform supports development of
6 degrees-of-freedom (6DOF) AR experiences which means that the platform
responds to the user&#x27;s rotation and position as they move about the world
by moving the camera. The platform maintains the same right-handed coordinate
system as it does in VR, in that the camera is initially at [0,0,0] with a
forward vector of [0, 0, -1] and up vector of [0,1,0]  When the user first enters the AR experience,
the camera will remain at [0,0,0] while underlying AR system gets its bearing.
After a few moments, the camera tracking will complete, the developer should
receive the onTrackingInitialized callback in , and the camera should now track the user&#x27;s
movements around their world. Anchor Detection The primary way to add virtual
content to the real-world is to listen for anchors detected by the AR system.
Anchors are things like vertical or horizontal planes, or images (like posters
or markers) found in the real world. For information on attaching content to
images, see Image Recognition.
This guide describes the two methods of adding content to detected planes,
through . Automatic
Anchoring
To enable automatic anchoring, provide minHeight and minWidth
properties to the  component. Embed within the component
(as children) the content you&#x27;d like to display when the plane is
detected. When the AR system finds a plane that matches the given
dimensions, the  will anchor to the real world plane, and
its child components will be made visible. Those components will be in the
coordinate system of the plane. Any updates to the real-world plane will be
given to the developer through the onAnchorFound, onAnchorUpdated, and onAnchorRemoved
callback functions on ViroARScene. The
example below, for example, will display a box when a plane of at least 0.5
meters width and height is detected. JavaScript&lt;ViroARPlane minHeight={.5}
minWidth={.5} alignment={&quot;Horizontal&quot;}&gt; &lt;ViroBox position={[0,
.25, 0]} scale={[.5, .5, .5]} /&gt; &lt;/ViroARPlane&gt;
 Manual Anchoring Manual anchoring lets the
developer specifically choose a plane to use by listening for all incoming
anchors, instead of having the platform choose the first available plane that
matches declared requirements.  To listen for detected anchors,
implement the onAnchorFound, onAnchorUpdated and onAnchorRemoved listeners to the ViroARScene component. Upon finding a suitable
anchor, set the anchorId property of the plane in your render function
that you would like to fix to that anchor.  JavaScript&lt;ViroARPlane
anchorId={foundAnchor.anchorId}&gt; &lt;ViroBox position={[0, .25, 0]}
scale={[.5, .5, .5]} /&gt; &lt;/ViroARPlane&gt; "
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
When you use a [](viroarscene.html), the first thing you'll notice is the
camera feed rendered as the background. That camera background represents the
real world. Viro enables you to fuse virtual objects and UI with that real
world. You accomplish this with tracking and anchors.
##
Camera TrackingThe Viro platform supports development of 6 degrees-of-freedom (6DOF) AR
experiences which means that the platform responds to the user's rotation and
position as they move about the world by moving the camera. The platform
maintains the same right-handed coordinate system as it does in VR, in that
the camera is initially at `[0,0,0]` with a forward vector of `[0, 0, -1]` and
up vector of `[0,1,0]`
![607](https://files.readme.io/2b217fb-camera.png)
When the user first enters the AR experience, the camera will remain at
[0,0,0] while underlying AR system gets its bearing. After a few moments, the
camera tracking will complete, the developer should receive the
`onTrackingInitialized` callback in [](viroarscene.html), and the camera
should now track the user's movements around their world.
##
Anchor DetectionThe primary way to add virtual content to the real-world is to listen for
anchors detected by the AR system. Anchors are things like vertical or
horizontal planes, or images (like posters or markers) found in the real
world. For information on attaching content to images, see [Image
Recognition](https://viro-community.readme.io/docs/ar-image-recognition). This
guide describes the two methods of adding content to detected planes, through
[](viroarplane.html).
##
Automatic AnchoringTo enable automatic anchoring, provide `minHeight` and `minWidth` properties
to the [](viroarplane.html) component. Embed within the component (as
children) the content you'd like to display when the plane is detected.
When the AR system finds a plane that matches the given dimensions, the
[](viroarplane.html) will anchor to the real world plane, and its child
components will be made visible. Those components will be in the coordinate
system of the plane. Any updates to the real-world plane will be given to the
developer through the `onAnchorFound`, `onAnchorUpdated`, and
`onAnchorRemoved` callback functions on [ViroARScene](viroarscene.html).
The example below, for example, will display a box when a plane of at least
0.5 meters width and height is detected.
JavaScript
##
Manual AnchoringManual anchoring lets the developer specifically choose a plane to use by
listening for all incoming anchors, instead of having the platform choose the
first available plane that matches declared requirements.
To listen for detected anchors, implement the `onAnchorFound`,
`onAnchorUpdated` and `onAnchorRemoved` listeners to the
[ViroARScene](viroarscene.html) component. Upon finding a suitable anchor, set
the `anchorId` property of the plane in your render function that you would
like to fix to that anchor.
JavaScript
__Updated over 3 years ago