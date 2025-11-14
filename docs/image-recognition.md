Image Targets Image targets are the reference images that Viro will
recognize and track. For example, if you provide an image target of a Tesla
logo, then every time your application encounters a Tesla logo you can get a
callback; and in that callback, you can create virtual UI about the logo. An
example of this is below:  Image targets in Viro are represented by ViroARTrackingTargets. You can construct
these targets out of any image (JPG, PNG, etc.). To start searching for the
logos, add a  component to your &lt;ViroARScene&gt; or to any &lt;ViroNode&gt;. When Viro
detects the image in the user&#x27;s world, the content of the &lt;ViroARImageMarker&gt; will be rendered. The &lt;ViroARImageMarker&gt; will be continually tracked and
will stay synchronized with the detected image. Below is an example of simple
usage: JavaScript// In your render
function, add an image marker that references the target &lt;ViroARScene&gt;
&lt;ViroARImageMarker target={&quot;targetOne&quot;}&gt; &lt;ViroBox
position={[0, .25, 0]} scale={[.5, .5, .5]} /&gt; &lt;/ViroARImageMarker&gt;
&lt;/ViroARScene&gt; // Outside of the render function, register the target
ViroARTrackingTargets.createTargets({ &quot;targetOne&quot;: { source:
require(&#x27;res/targetOne.html&#x27;), orientation: &quot;Up&quot;,
physicalWidth: 0.1 // real world width in meters }, });
 In the more complex example below, we do this
with a &quot;Black Panther&quot; movie poster. Upon detecting the poster, we
load a 3D object representing the Black Panther, and make him jump out of the
poster. JavaScript// In your render
function: &lt;ViroARScene&gt; &lt;ViroAmbientLight color=&quot;#ffffff&quot;
intensity={200} /&gt; &lt;ViroARImageMarker target={&quot;poster&quot;}
onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}&gt;
&lt;ViroNode position={[0, -.1, 0]} scale={[0, 0, 0]} rotation={[-90, 0, 0]}
dragType=&quot;FixedToWorld&quot; onDrag={() =&gt; { }} animation={{ name:
&quot;scaleModel&quot;, run: this.state.playAnim }}&gt; &lt;Viro3DObject
onLoadEnd={this._onModelLoad}
source={require(&#x27;./res/blackpanther/object_bpanther_anim.vrx&#x27;)}
position={[0, -1.45, 0]} scale={[.9, .9, .9]} animation={{ name:
&quot;01&quot;, run: true, loop: false, onFinish: this._onFinish }}
type=&quot;VRX&quot; /&gt; &lt;/ViroNode&gt; &lt;/ViroARImageMarker&gt;
&lt;/ViroARScene&gt; //Outside the render function:
ViroARTrackingTargets.createTargets({ &quot;poster&quot;: { source:
require(&#x27;res/blackpanther.html&#x27;), orientation: &quot;Up&quot;,
physicalWidth: 0.6096 // real world width in meters } });
 The full code for this sample is contained in the
Viro Samples
repository. The final result will look like this:  Continuous Image Tracking (iOS 12
Only) ARKit 2.0 introduced a new API that enables
continuous Image Tracking instead of simply image detection. This enables your
marker to be tracked and followed smoothly as the user moves it around. 
This is exposed in ViroARSceneNavigator&#x27;s new
numberOfTrackedImages property which takes in a number of
images that should be tracked concurrently. For example, if this number is set
to 3, then the first 3 images visible in a scene will be tracked. Even if
there are 5 total ViroARImageMarkers only the first 3 will be tracked, if one
marker leaves the view, then an untracked marker will then be tracked. Keep in
mind that this number should be kept low as the higher the number, the worse
the performance. Image Target Quality Google has released a tool
(for OSX and Windows) to check the quality of Image Targets, check it out on
their website here: https://developers.google.com/ar/develop/c/augmented-
images/arcoreimg This tool provides a good baseline for Image
Recognition on both iOS and Android" style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
Image recognition is a key component of AR: it enables you to _interpret_ the
real world and _respond_ to it accordingly. This guide provides an overview of
Viro's image recognition capabilities.
##
Image TargetsImage targets are the reference images that Viro will recognize and track. For
example, if you provide an image target of a Tesla logo, then every time your
application encounters a Tesla logo you can get a callback; and in that
callback, you can create virtual UI about the logo. An example of this is
below:
![600](https://files.readme.io/3269a8e-viro_car_marker_demo.gif)
Image targets in Viro are represented by
[ViroARTrackingTargets](viroartrackingtargets.html). You can construct these
targets out of any image (JPG, PNG, etc.). To start searching for the logos,
add a [](viroarimagemarker.html) component to your `` or to any
``. When Viro detects the image in the user's world, the content of
the `` will be rendered. The `` will be
continually tracked and will stay synchronized with the detected image. Below
is an example of simple usage:
JavaScript
    // In your render function, add an image marker that references the target
    // Outside of the render function, register the target
    ViroARTrackingTargets.createTargets({
      "targetOne": {
        source: require('res/targetOne.html'),
        orientation: "Up",
        physicalWidth: 0.1 // real world width in meters  
      },
    });
In the more complex example below, we do this with a "Black Panther" movie
poster. Upon detecting the poster, we load a 3D object representing the Black
Panther, and make him jump out of the poster.
JavaScript
    // In your render function:
           { }}
            animation={{
              name: "scaleModel",
              run: this.state.playAnim
            }}>
    //Outside the render function:
    ViroARTrackingTargets.createTargets({
      "poster": {
        source: require('res/blackpanther.html'),
        orientation: "Up",
        physicalWidth: 0.6096 // real world width in meters
      }
    });
The full code for this sample is contained in the [Viro
Samples](https://github.com/ViroCommunity/ar-
demos/tree/master/js/ARPosterDemo) repository. The final result will look like
this:
![600](https://files.readme.io/f56f163-viro_black_panther_marker_demo.gif)
##
Continuous Image Tracking (iOS 12 Only)ARKit 2.0 introduced a new API that enables continuous Image Tracking instead
of simply image detection. This enables your marker to be tracked and followed
smoothly as the user moves it around.
This is exposed in [ViroARSceneNavigator's](viroarscenenavigator.html) new
**numberOfTrackedImages** property which takes in a number of images that
should be tracked concurrently. For example, if this number is set to 3, then
the first 3 images visible in a scene will be tracked. Even if there are 5
total ViroARImageMarkers only the first 3 will be tracked, if one marker
leaves the view, then an untracked marker will then be tracked. Keep in mind
that this number should be kept low as the higher the number, the worse the
performance.
##
Image Target QualityGoogle has released a tool (for OSX and Windows) to check the quality of Image
Targets, check it out on their website here:
This tool provides a good baseline for Image Recognition on both iOS and
Android
 __Updated over 3 years ago