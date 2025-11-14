This tutorial requires the completion of the Quick
Start. This tutorial is a step by step guide for developing a
simple AR app. Our goal by the end of this tutorial is to: 
Understand HelloWorldSceneAR.js Place a textured Box into the
world Add a Smiley Emoji to the scene Select an ARPlane
Add the emoji to the plane Add a shadow to the emoji
Make the emoji draggable Animate the box  Understanding
HelloWorldSceneAR.js Open your test project
in the Viro Media App (like you did in the Quick Start
(Mac/Linux)) and select the AR option. You should see the
following, &quot;Hello World&quot; in white overlay in your camera view:
HelloWorldAR
scene The scene you are presented with is HelloWorldSceneAR.js which is set as the initialScene on
the ViroARSceneNavigator component in the
App.js, which serves as the entry point into your app.
ViroReact is built on top of React Native and uses React Native constructs
to make it easy to create native AR applications. In addition to understanding
Javascript, you will also need to understand some basic React concepts, like
JSX, components, state, and props.  Below is the
code for HelloWorldSceneAR: JavaScriptimport React, { FC } from
&#x27;react&#x27;; import { StyleSheet } from &#x27;react-native&#x27;; import
{ ViroARScene, ViroTrackingStateConstants, ViroText } from &#x27;@viro-
community/react-viro&#x27;; const handleTrackingUpdated = ( state:
ViroTrackingState, reason: ViroTrackingReason, ) =&gt; { if (state ===
ViroTrackingStateConstants.TRACKING_NORMAL) {
console.log(&#x27;TRACKING_NORMAL&#x27;, reason); } else if (state ===
ViroTrackingStateConstants.TRACKING_UNAVAILABLE) { // Handle loss of tracking
console.log(&#x27;TRACKING_UNAVAILABLE&#x27;, reason); } else if (state ===
ViroTrackingStateConstants.TRACKING_LIMITED) { // Handle limited tracking
state console.log(&#x27;TRACKING_LIMITED&#x27;, reason); } else {
console.log(&#x27;UNKNOWN&#x27;, state, reason); } }; const HelloWorldSceneAR:
FC = () =&gt; { return ( &lt;ViroARScene
onTrackingUpdated={handleTrackingUpdated}&gt; &lt;ViroText text={&#x27;Hello
World!&#x27;} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]}
style={styles.helloWorldTextStyle} /&gt; &lt;/ViroARScene&gt; ); }; export
default () =&gt; { return ( &lt;ViroARSceneNavigator autofocus={true}
initialScene={{ scene: HelloWorldSceneAR, }} style={styles.f1} /&gt; ); };
const styles = StyleSheet.create({ f1: {flex: 1}, helloWorldTextStyle: {
fontFamily: &#x27;Arial&#x27;, fontSize: 30, color: &#x27;#ffffff&#x27;,
textAlignVertical: &#x27;center&#x27;, textAlign: &#x27;center&#x27;, }, });
 Let&#x27;s see what&#x27;s happening in the code
above... Importing Components The code begins by importing
React, StyleSheet from React Native and react-viro components
that the app will use. In this app we use ViroARScene and ViroText. JavaScript&#x27;use strict&#x27;;import React, {
Component } from &#x27;react&#x27;;import {StyleSheet} from &#x27;react-
native&#x27;;import { ViroARScene, ViroText, ViroConstants} from &#x27;react-
viro&#x27;; ...  HelloWorldSceneAR component Below the import
code, we create a functional component HelloWorldSceneAR that extends a
React Component that adheres to the react component lifecycle. Read
more about ES6 classes here and here. First we start with the constructor(). In the
constructor, we call the super()/parent constructor (in Component) and we initialize
the state. Below that, we &quot;bind&quot; this to the functions we declare in
this class so that they may reference this object. Next, we have the
render() function which determines how our scene is
displayed. It&#x27;s defined using JSX which is syntactically similar to HTML. In the section below
we go through this method in detail.  In the return statement, we
declare the top level component: ViroARScene. Every AR scene must have a ViroARScene
as its top-most element. All other components are children of ViroARScene. We
use the callback prop, onTrackingUpdated, to call our _onInitialized() function
below which sets the text to &quot;Hello World!&quot; once the tracking status
is TRACKING_NORMAL.  ViroText is declared next. It
switches between &quot;Initializing AR...&quot; and &quot;Hello World&quot;
depending on the state at a position of [0,0,-1] with the font, font size and
color specified by the style property. In our coordinate system, the viewer faces
in the negative-Z direction, so providing a Z coordinate of -1 places the
object in front of the viewer.   Declaring Styles After the render method, we declare
styles that can be used in our application. Styles generally represent layout
properties for components. In our app, we declare a style named helloWorldTextStyle that describes the font type, color,
size and alignment for our ViroText component. JavaScriptvar styles = StyleSheet.create({
helloWorldTextStyle: { fontFamily: &#x27;Arial&#x27;, fontSize: 30, color:
&#x27;#ffffff&#x27;, textAlignVertical: &#x27;center&#x27;, textAlign:
&#x27;center&#x27;, },});module.exports = HelloWorldSceneAR;
 Now that we described how our scene works,
let&#x27;s see how we can expand upon it.  Downloading Assets The first thing we need to do
is to download assets that we&#x27;ll be using for the tutorial, follow the
steps below:  Download the bundle of assets
Unzip the file and replace the res folder at &lt;path_to&gt;/ViroSample/js/.
 Adding Components
to a Scene Let&#x27;s take our current HelloWorld scene and add a 3D
Box above the &quot;Hello World&quot; text. We can do this by using the
ViroBox component. To add a box to our scene we do the
following: First we import ViroBox and ViroMaterials from react-viro so our
import statements now look like:  JavaScriptimport { ... ViroBox, ViroMaterials,}
from &#x27;react-viro&#x27;;  Next we need to add
the box to our scene. The ViroBox API Reference lets us
know what properties we can set to customize our box. Copy the
following code and add it below the ViroText component: JavaScript&lt;ViroBox position={[0, -.5, -1]}
scale={[.3, .3, .1]} materials={[&quot;grid&quot;]} /&gt;
 Customizing the ViroBox
In the above code, we set the position of the ViroBox to [0, -.5, -1] so that it
sets beneath the &quot;Hello World&quot; text. We then scale the
ViroBox by [.3, .3, .1] to make it smaller as its default
width, height, and length is 1 (meters). The
materials property allows you to set a pre-defined
material (see ViroMaterials) as a texture on the box itself. In
this example, we set a material named grid on the ViroBox which we will
define/create in the next step. Defining a
Material Before we can use a material like the aforementioned
grid, we need to define it. Since we have already import
ViroMaterials, we can simply add the following code
beneath the styles declaration. JavaScriptViroMaterials.createMaterials({ grid: {
diffuseTexture: require(&#x27;res/grid_bg.html&#x27;), },});
 As you can see, we defined a grid material
containing diffuseTexture which points to the file grid_bg.jpg in the
res directory. Two things to note here: 
The require() function is a special function provided in React
that converts a filepath into a value that the platform can use to fetch the
resource. The argument to require() is a filepath and is relative to the
location of the file (in this case both the res/ directory and the HelloWorldSceneAR.js are in the same ViroSample/js/
directory.  🚧Not finding
grid_bg.jpg?Make sure you followed the
instructions under Downloading Assets to
download and copy the assets we&#x27;ll be using in this
tutorial. Your HelloWorldSceneAR.js should look similar to the
following: JavaScript&#x27;use
strict&#x27;;import React, { Component } from &#x27;react&#x27;;import
{StyleSheet} from &#x27;react-native&#x27;;import { ViroARScene, ViroText,
ViroConstants, ViroBox, ViroMaterials,} from &#x27;react-viro&#x27;;export
default class HelloWorldSceneAR extends Component { constructor() { super();
// Set initial state here this.state = { text : &quot;Initializing AR...&quot;
}; // bind &#x27;this&#x27; to functions this._onInitialized =
this._onInitialized.bind(this); } render() { return ( &lt;ViroARScene
onTrackingUpdated={this._onInitialized} &gt; &lt;ViroText
text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]}
style={styles.helloWorldTextStyle} /&gt; &lt;ViroBox position={[0, -.5, -1]}
scale={[.3, .3, .1]} materials={[&quot;grid&quot;]} /&gt; &lt;/ViroARScene&gt;
); } _onInitialized(state, reason) { if (state ==
ViroConstants.TRACKING_NORMAL) { this.setState({ text : &quot;Hello
World!&quot; }); } else if (state == ViroConstants.TRACKING_NONE) { // Handle
loss of tracking } }}var styles = StyleSheet.create({ helloWorldTextStyle: {
fontFamily: &#x27;Arial&#x27;, fontSize: 30, color: &#x27;#ffffff&#x27;,
textAlignVertical: &#x27;center&#x27;, textAlign: &#x27;center&#x27;,
},});ViroMaterials.createMaterials({ grid: { diffuseTexture:
require(&#x27;res/grid_bg.html&#x27;), },});module.exports =
HelloWorldSceneAR;  Save your HelloWorldSceneAR.js file and reload the app. You should
now see a pink and grey cube under the Hello World text  To reload your file, simply shake your device
and a debug menu will appear, as shown below. Tap on &quot;Reload&quot; and a
screen to choose AR or VR will appear. Tap on AR and your changes will
appear.  Adding a 3D Object to the scene
Now let&#x27;s add a 3D Object to the scene. There should be a folder in
your res folder called &quot;emoji_smile&quot;. We will be
using these files to add a 3D emoji to the scene. Add new
components We first need to import the components we&#x27;ll be
using: Viro3DObject, ViroAmbientLight and ViroSpotLight. JavaScriptimport { ... Viro3DObject,
ViroAmbientLight, ViroSpotLight,} from &#x27;react-viro&#x27;;
 Next we need to add the Viro3DObject and lights to our
scene. Copy the code below and paste it below the ViroBox component within the
ViroARScene. JavaScript&lt;ViroAmbientLight
color={&quot;#aaaaaa&quot;} /&gt; &lt;ViroSpotLight innerAngle={5}
outerAngle={90} direction={[0,-1,-.2]} position={[0, 3, 1]}
color=&quot;#ffffff&quot; castsShadow={true} /&gt; &lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]}
position={[-.5, .5, -1]} scale={[.2, .2, .2]} type=&quot;VRX&quot; /&gt;
 Save your file and reload the Testbed app. You
should see the scene below. Move around if you are unable to see all the
components at first as they might be to your left.  Using ViroARPlane In an AR app, the device&#x27;s
camera is used to present a live, onscreen view of the physical world. Three-
dimensional virtual objects are superimposed over this view, creating the
illusion that they actually exist.  One method for placing objects in
the real world is by using the ViroARPlane or ViroARPlaneSelector component. When
the AR system detects a plane, ViroReact attempts to attach it to any declared
ViroARPlane components and continually keeps the virtual
plane anchored to the detected real-world plane. On the other hand, the
ViroARPlaneSelector component enables developers to allow
their users to select the plane that they want the developer to use. To
see how it works, let&#x27;s add a ViroARPlaneSelector into our scene. First, add
ViroARPlaneSelector as a new component as shown below:
JavaScriptimport { ... ViroARPlaneSelector,} from
&#x27;react-viro&#x27;;  Next add a ViroARPlaneSelector by pasting the following code into
your ViroARScene component. JavaScript&lt;ViroARPlaneSelector /&gt;
 Save your file and reload the testbed app. In
addition to the previous scene, you should now see planes appear as you move
around your room. In our real world, both the table and floor plane were
detected as shown below:  If you try &quot;selecting&quot; a plane by
tapping on it, they will simply all disappear as nothing was added within the
ViroARPlaneSelector, in the next section, we&#x27;ll show
you how to add a component to it. Add a 3D Object to the Plane
Previously, when we added our emoji to the scene, it was at a fixed
position as shown {[-.5, -.5, -1]} as shown below: JavaScript&lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]}
position={[-.5, .5, -1]} scale={[.2, .2, .2]} type=&quot;VRX&quot; /&gt;
 With AR, we often times want objects to be placed
in relation to the real world. Using the planes we identified earlier,
let&#x27;s place our emoji on a plane. First, delete the  you just
added from your js file. Then replace the Viro3DObject code above in your
HelloWorldSceneAR.js file with the code below: JavaScript&lt;ViroARPlaneSelector&gt;
&lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]} position={[0,
.5, 0]} scale={[.2, .2, .2]} type=&quot;VRX&quot;
/&gt;&lt;/ViroARPlaneSelector&gt;  Notice that we
also changed the position of the emoji to [0, .5, 0]. This is because the
emoji&#x27;s center is within the emoji itself, so to make it sit
&quot;on&quot; the plane, we need to shift it slightly above where the plane
is Save the file and reload the testbed app. Now that we have
placed the 3D Object inside the ViroARPlaneSelector, when a plane is tapped, the
emoji will be placed on the selected plane and the other ones will
disappear.  Interactions
and Animations One of the great things about AR that users can move
about their world to view and interact with objects from different angles.
Let&#x27;s add interaction to the emoji and some movement to the box.
First let&#x27;s make the emoji draggable so that it can be moved with the
drag gesture. First we need to import another component ViroNode: JavaScriptimport { ... ViroNode,} from
&#x27;react-viro&#x27;;  In the previous step, we
placed our emoji within a ViroARPlaneSelector component as shown below. JavaScript&lt;ViroARPlaneSelector&gt;
&lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]} position={[0,
.5, 0]} scale={[.2, .2, .2]} type=&quot;VRX&quot;
/&gt;&lt;/ViroARPlaneSelector&gt;  To make our
emoji drag along real-world surfaces, we need to replace ViroARPlaneSelector with a ViroNode, set the dragType to
&quot;FixedToWorld&quot;, and add an empty anonymous function to let the
platform know that we want this object to drag. Replace the above code
block with the one below: JavaScript&lt;ViroNode position={[0,-1,0]}
dragType=&quot;FixedToWorld&quot; onDrag={()=&gt;{}} &gt; &lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]} position={[0,
.5, 0]} scale={[.2, .2, .2]} type=&quot;VRX&quot; /&gt;&lt;/ViroNode&gt;
 Save your file and reload the testbed app.
The emoji should now appear in front of you and to the left. You should now
be able to touch and drag the emoji around the scene, notice how it moves
along real world surfaces. Animation Finally, let&#x27;s add some movement to the
box. First, we need to import ViroAnimations JavaScriptimport { ... ViroAnimations,} from
&#x27;react-viro&#x27;  Next, replace the ViroBox
component with the following: JavaScript&lt;ViroBox position={[0, -.5, -1]}
scale={[.3, .3, .1]} materials={[&quot;grid&quot;]} animation={{name:
&quot;rotate&quot;, run: true, loop: true}}/&gt; 
As you can see, we added a new property animation with the value {name:
&quot;rotate&quot;, run: true, loop: true}. The name refers to an
animation we will register in the next step like we did for ViroMaterials above. Find where we registered
ViroMaterials (near the bottom of the file), copy and
paste the following code below it: JavaScriptViroAnimations.registerAnimations({
rotate: { properties: { rotateY: &quot;+=90&quot; }, duration: 250, //.25
seconds },});  Save your file and reload the
testbed app. You should now see &quot;Hello World&quot;, a spinning box and be
able to drag the emoji. An example of the complete final code is posted at the
end of this tutorial.  Next Steps Continue Modifying the Scene You
should now have a basic overview for how ViroReact works. Check out our Code Samples for other example apps, or continuing
adding functionality on your own to the HelloWorldScene. For example: 
Add an animation to other objects in the scene. Look at our Animation Guide for info on how to accomplish
this. Try adding shadows and illumination to the scene. Check out the
Lighting and Materials guide for details.
 HelloWorldSceneAR Tutorial - Final
Code JavaScript&#x27;use
strict&#x27;;import React, { Component } from &#x27;react&#x27;;import
{StyleSheet} from &#x27;react-native&#x27;;import { ViroARScene, ViroText,
ViroConstants, ViroBox, ViroMaterials, Viro3DObject, ViroAmbientLight,
ViroSpotLight, ViroARPlaneSelector, ViroNode, ViroAnimations,} from
&#x27;react-viro&#x27;;export default class HelloWorldSceneAR extends
Component { constructor() { super(); // Set initial state here this.state = {
text : &quot;Initializing AR...&quot; }; // bind &#x27;this&#x27; to functions
this._onInitialized = this._onInitialized.bind(this); } render() { return (
&lt;ViroARScene onTrackingUpdated={this._onInitialized} &gt; &lt;ViroText
text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]}
style={styles.helloWorldTextStyle} /&gt; &lt;ViroBox position={[0, -.5, -1]}
scale={[.3, .3, .1]} materials={[&quot;grid&quot;]} animation={{name:
&quot;rotate&quot;, run: true, loop: true}}/&gt; &lt;ViroAmbientLight
color={&quot;#aaaaaa&quot;} /&gt; &lt;ViroSpotLight innerAngle={5}
outerAngle={90} direction={[0,-1,-.2]} position={[0, 3, 1]}
color=&quot;#ffffff&quot; castsShadow={true} /&gt; &lt;ViroNode
position={[0,-1,0]} dragType=&quot;FixedToWorld&quot; onDrag={()=&gt;{}} &gt;
&lt;Viro3DObject
source={require(&#x27;./res/emoji_smile/emoji_smile.vrx&#x27;)}
resources={[require(&#x27;res/emoji_smile/emoji_smile_diffuse.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_normal.html&#x27;),
require(&#x27;res/emoji_smile/emoji_smile_specular.html&#x27;)]} position={[0,
.5, 0]} scale={[.2, .2, .2]} type=&quot;VRX&quot; /&gt; &lt;/ViroNode&gt;
&lt;/ViroARScene&gt; ); } _onInitialized(state, reason) { if (state ==
ViroConstants.TRACKING_NORMAL) { this.setState({ text : &quot;Hello
World!&quot; }); } else if (state == ViroConstants.TRACKING_NONE) { // Handle
loss of tracking } }}var styles = StyleSheet.create({ helloWorldTextStyle: {
fontFamily: &#x27;Arial&#x27;, fontSize: 30, color: &#x27;#ffffff&#x27;,
textAlignVertical: &#x27;center&#x27;, textAlign: &#x27;center&#x27;,
},});ViroMaterials.createMaterials({ grid: { diffuseTexture:
require(&#x27;res/grid_bg.html&#x27;),
},});ViroAnimations.registerAnimations({ rotate: { properties: { rotateY:
&quot;+=90&quot; }, duration: 250, //.25 seconds },});module.exports =
HelloWorldSceneAR; " style="margin-left:31px"
class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable"
data-testid="RDMD">
> ## 🚧
>
> AR Support Devices
>
> ARKit - iOS Device with A9 chip or higher and running iOS 11 ARCore - an
> [ARCore supported
> device](https://developers.google.com/ar/discover/#supported_devices)
> running Android N.
This tutorial requires the completion of the [Quick Start](https://viro-
community.readme.io/docs/quick-start).
This tutorial is a step by step guide for developing a simple AR app. Our goal
by the end of this tutorial is to:
  1. Understand HelloWorldSceneAR.js
  2. Place a textured Box into the world
  3. Add a Smiley Emoji to the scene
  4. Select an ARPlane
  5. Add the emoji to the plane
  6. Add a shadow to the emoji
  7. Make the emoji draggable
  8. Animate the box
##
Understanding HelloWorldSceneAR.jsOpen your test project in the Viro Media App (like you did in the [Quick Start
(Mac/Linux)](https://viro-community.readme.io/docs/quick-start)) and select
the **AR** option. You should see the following, "Hello World" in white
overlay in your camera view:
![1104](https://files.readme.io/9a353c5-IMG_BAFBC32D0716-1.jpeg)
HelloWorldAR scene
The scene you are presented with is `HelloWorldSceneAR.js` which is set as the
`initialScene` on the [ViroARSceneNavigator](viroarscenenavigator.html)
component in the `App.js`, which serves as the entry point into your app.
ViroReact is built on top of React Native and uses React Native constructs to
make it easy to create native AR applications. In addition to understanding
Javascript, you will also need to understand some basic React concepts, like
[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html),
[components](https://facebook.github.io/react/docs/react-component.html),
[state](https://facebook.github.io/react-native/docs/state.html), and
[props](https://facebook.github.io/react-native/docs/props.html).
Below is the code for **HelloWorldSceneAR** :
JavaScript
    import React, { FC } from 'react';
    import { StyleSheet } from 'react-native';
    import { ViroARScene, ViroTrackingStateConstants, ViroText } from '@viro-community/react-viro';
     const handleTrackingUpdated = (
      state: ViroTrackingState,
      reason: ViroTrackingReason,
    ) => {
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        console.log('TRACKING_NORMAL', reason);
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        // Handle loss of tracking
        console.log('TRACKING_UNAVAILABLE', reason);
      } else if (state === ViroTrackingStateConstants.TRACKING_LIMITED) {
        // Handle limited tracking state
        console.log('TRACKING_LIMITED', reason);
      } else {
        console.log('UNKNOWN', state, reason);
      }
    };
    const HelloWorldSceneAR: FC = () => {
      return (
      );
    };
    export default () => {
      return (
      );
    };
    const styles = StyleSheet.create({
      f1: {flex: 1},
      helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
      },
    });
Let's see what's happening in the code above...
##
Importing ComponentsThe code begins by importing React, `StyleSheet` from React Native and react-
viro components that the app will use. In this app we use `ViroARScene` and
`ViroText`.
JavaScript
    'use strict';import React, { Component } from 'react';import {StyleSheet} from 'react-native';import {  ViroARScene,  ViroText,  ViroConstants} from 'react-viro';  ...
##
HelloWorldSceneAR componentBelow the import code, we create a functional component `HelloWorldSceneAR`
that extends a React `Component` that adheres to the [react component
lifecycle](https://facebook.github.io/react/docs/react-component.html#the-
component-lifecycle). Read more about ES6 classes
[here](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Classes) and
[here](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/).
First we start with the `constructor()`. In the constructor, we call the
`super()`/parent constructor (in `Component`) and we initialize the state.
Below that, we "bind" `this` to the functions we declare in this class so that
they may reference `this` object.
Next, we have the `render()` function which determines how our scene is
displayed. It's defined using [JSX](https://facebook.github.io/react/docs/jsx-
in-depth.html) which is syntactically similar to HTML. In the section below we
go through this method in detail.
  * In the return statement, we declare the top level component: `ViroARScene`. Every AR scene must have a `ViroARScene` as its top-most element. All other components are children of `ViroARScene`. We use the callback prop, `onTrackingUpdated`, to call our `_onInitialized()` function below which sets the text to "Hello World!" once the tracking status is `TRACKING_NORMAL`.  
  * `ViroText` is declared next. It switches between "Initializing AR..." and "Hello World" depending on the state at a position of [0,0,-1] with the font, font size and color specified by the `style` property. In our coordinate system, the viewer faces in the negative-Z direction, so providing a Z coordinate of -1 places the object in front of the viewer.  
##
Declaring StylesAfter the render method, we declare styles that can be used in our
application. Styles generally represent layout properties for components. In
our app, we declare a style named `helloWorldTextStyle` that describes the
font type, color, size and alignment for our `ViroText` component.
JavaScript
    var styles = StyleSheet.create({  helloWorldTextStyle: {    fontFamily: 'Arial',    fontSize: 30,    color: '#ffffff',    textAlignVertical: 'center',    textAlign: 'center',    },});module.exports = HelloWorldSceneAR;
Now that we described how our scene works, let's see how we can expand upon
it.
##
Downloading AssetsThe first thing we need to do is to download assets that we'll be using for
the tutorial, follow the steps below:
  * Download the bundle of [assets](https://s3-us-west-2.amazonaws.com/viro/Assets/res.zip)
  * Unzip the file and replace the `res` folder at `/ViroSample/js/`.
##
Adding Components to a SceneLet's take our current HelloWorld scene and add a 3D Box above the "Hello
World" text. We can do this by using the `ViroBox` component. To add a box to
our scene we do the following:
First we import `ViroBox` and `ViroMaterials` from `react-viro` so our import
statements now look like:
JavaScript
    import {  ...	ViroBox,  ViroMaterials,} from 'react-viro';
Next we need to add the box to our scene. The [`ViroBox` API
Reference](virobox.html) lets us know what properties we can set to customize
our box.
Copy the following code and add it below the `ViroText` component:
JavaScript
**Customizing the ViroBox**
In the above code, we set the `position` of the `ViroBox` to [0, -.5, -1] so
that it sets beneath the "Hello World" text.
We then scale the `ViroBox` by [.3, .3, .1] to make it smaller as its default
`width`, `height`, and `length` is 1 (meters).
The `materials` property allows you to set a pre-defined material (see
[ViroMaterials](https://viro-community.readme.io/docs/materials)) as a texture
on the box itself. In this example, we set a material named `grid` on the
`ViroBox` which we will define/create in the next step.
**Defining a Material**  
Before we can use a material like the aforementioned `grid`, we need to define
it. Since we have already import `ViroMaterials`, we can simply add the
following code beneath the styles declaration.
JavaScript
    ViroMaterials.createMaterials({  grid: {    diffuseTexture: require('res/grid_bg.html'),  },});
As you can see, we defined a `grid` material containing `diffuseTexture` which
points to the file `grid_bg.jpg` in the `res` directory.
Two things to note here:
  * The `require()` function is a special function provided in React that converts a filepath into a value that the platform can use to fetch the resource.
  * The argument to `require()` is a filepath and is relative to the location of the file (in this case both the `res/` directory and the `HelloWorldSceneAR.js` are in the same `ViroSample/js/` directory.
> ## 🚧
>
> Not finding `grid_bg.jpg`?
>
> Make sure you followed the instructions under [Downloading
> Assets](https://docs.viromedia.com/docs/tutorial-ar#section-downloading-
> assets) to download and copy the assets we'll be using in this tutorial.
Your `HelloWorldSceneAR.js` should look similar to the following:
JavaScript
    'use strict';import React, { Component } from 'react';import {StyleSheet} from 'react-native';import {  ViroARScene,  ViroText,  ViroConstants,  ViroBox,  ViroMaterials,} from 'react-viro';export default class HelloWorldSceneAR extends Component {  constructor() {    super();    // Set initial state here    this.state = {      text : "Initializing AR..."    };    // bind 'this' to functions    this._onInitialized = this._onInitialized.bind(this);  }  render() {    return (                                );  }  _onInitialized(state, reason) {    if (state == ViroConstants.TRACKING_NORMAL) {      this.setState({        text : "Hello World!"      });    } else if (state == ViroConstants.TRACKING_NONE) {      // Handle loss of tracking    }  }}var styles = StyleSheet.create({  helloWorldTextStyle: {    fontFamily: 'Arial',    fontSize: 30,    color: '#ffffff',    textAlignVertical: 'center',    textAlign: 'center',  },});ViroMaterials.createMaterials({  grid: {    diffuseTexture: require('res/grid_bg.html'),  },});module.exports = HelloWorldSceneAR;
Save your `HelloWorldSceneAR.js` file and reload the app. You should now see a
pink and grey cube under the Hello World text
![1242](https://files.readme.io/0019cfa-IMG_BEC77E650A4B-1.jpeg)
To reload your file, simply shake your device and a debug menu will appear, as
shown below. Tap on "Reload" and a screen to choose AR or VR will appear. Tap
on AR and your changes will appear.
![800](https://files.readme.io/51ccf4d-viro_debug_hud.jpg)
##
Adding a 3D Object to the sceneNow let's add a 3D Object to the scene. There should be a folder in your `res`
folder called "emoji_smile". We will be using these files to add a 3D emoji to
the scene.
**Add new components**  
We first need to import the components we'll be using: `Viro3DObject`,
`ViroAmbientLight` and `ViroSpotLight`.
JavaScript
    import {	...  Viro3DObject,  ViroAmbientLight,  ViroSpotLight,} from 'react-viro';
Next we need to add the `Viro3DObject` and lights to our scene. Copy the code
below and paste it below the `ViroBox` component within the `ViroARScene`.
JavaScript
Save your file and reload the Testbed app. You should see the scene below.
Move around if you are unable to see all the components at first as they might
be to your left.
![1242](https://files.readme.io/74a0078-IMG_2934.PNG)
##
Using ViroARPlaneIn an AR app, the device's camera is used to present a live, onscreen view of
the physical world. Three-dimensional virtual objects are superimposed over
this view, creating the illusion that they actually exist.
One method for placing objects in the real world is by using the `ViroARPlane`
or `ViroARPlaneSelector` component. When the AR system detects a plane,
ViroReact attempts to attach it to any declared `ViroARPlane` components and
continually keeps the virtual plane anchored to the detected real-world plane.
On the other hand, the `ViroARPlaneSelector` component enables developers to
allow their users to select the plane that they want the developer to use.
To see how it works, let's add a `ViroARPlaneSelector` into our scene. First,
add `ViroARPlaneSelector` as a new component as shown below:
JavaScript
    import {  ...  ViroARPlaneSelector,} from 'react-viro';
Next add a `ViroARPlaneSelector` by pasting the following code into your
`ViroARScene` component.
JavaScript
Save your file and reload the testbed app. In addition to the previous scene,
you should now see planes appear as you move around your room. In our real
world, both the table and floor plane were detected as shown below:
![1242](https://files.readme.io/0c2779b-IMG_805765C25B14-1.jpeg)
If you try "selecting" a plane by tapping on it, they will simply all
disappear as nothing was added within the `ViroARPlaneSelector`, in the next
section, we'll show you how to add a component to it.
##
Add a 3D Object to the PlanePreviously, when we added our emoji to the scene, it was at a fixed position
as shown {[-.5, -.5, -1]} as shown below:
JavaScript
With AR, we often times want objects to be placed in relation to the real
world. Using the planes we identified earlier, let's place our emoji on a
plane. First, delete the  you just added from your js file. Then replace the
`Viro3DObject` code above in your `HelloWorldSceneAR.js` file with the code
below:
JavaScript
Notice that we also changed the `position` of the emoji to [0, .5, 0]. This is
because the emoji's center is within the emoji itself, so to make it sit "on"
the plane, we need to shift it slightly above where the plane is
Save the file and reload the testbed app.
Now that we have placed the 3D Object inside the `ViroARPlaneSelector`, when a
plane is tapped, the emoji will be placed on the selected plane and the other
ones will disappear.
![1242](https://files.readme.io/2909904-IMG_2936.PNG)
##
Interactions and AnimationsOne of the great things about AR that users can move about their world to view
and interact with objects from different angles. Let's add interaction to the
emoji and some movement to the box.
First let's make the emoji draggable so that it can be moved with the drag
gesture. First we need to import another component `ViroNode`:
JavaScript
    import {  ...  ViroNode,} from 'react-viro';
In the previous step, we placed our emoji within a `ViroARPlaneSelector`
component as shown below.
JavaScript
To make our emoji drag along real-world surfaces, we need to replace
`ViroARPlaneSelector` with a `ViroNode`, set the `dragType` to "FixedToWorld",
and add an empty anonymous function to let the platform know that we want this
object to drag.
Replace the above code block with the one below:
JavaScript
    {}} >   
Save your file and reload the testbed app.
The emoji should now appear in front of you and to the left. You should now be
able to touch and drag the emoji around the scene, notice how it moves along
real world surfaces.
##
AnimationFinally, let's add some movement to the box. First, we need to import
`ViroAnimations`
JavaScript
    import {  ...  ViroAnimations,} from 'react-viro'
Next, replace the `ViroBox` component with the following:
JavaScript
As you can see, we added a new property `animation` with the value `{name:
"rotate", run: true, loop: true}`. The name refers to an animation we will
register in the next step like we did for [ViroMaterials](https://viro-
community.readme.io/docs/materials) above.
Find where we registered `ViroMaterials` (near the bottom of the file), copy
and paste the following code below it:
JavaScript
    ViroAnimations.registerAnimations({  rotate: {    properties: {      rotateY: "+=90"    },    duration: 250, //.25 seconds  },});
Save your file and reload the testbed app. You should now see "Hello World", a
spinning box and be able to drag the emoji. An example of the complete final
code is posted at the end of this tutorial.
![1242](https://files.readme.io/e5c8290-IMG_E4A7470BB353-1.jpeg)
##
Next Steps##
Continue Modifying the SceneYou should now have a basic overview for how ViroReact works. Check out our
[Code Samples](code-samples.html) for other example apps, or continuing adding
functionality on your own to the HelloWorldScene. For example:
  * Add an animation to other objects in the scene. Look at our [Animation Guide](animation.html) for info on how to accomplish this.
  * Try adding shadows and illumination to the scene. Check out the [Lighting and Materials](https://viro-community.readme.io/docs/3d-scene-lighting) guide for details.
##
HelloWorldSceneAR Tutorial - Final CodeJavaScript
    'use strict';import React, { Component } from 'react';import {StyleSheet} from 'react-native';import {  ViroARScene,  ViroText,  ViroConstants,  ViroBox,  ViroMaterials,  Viro3DObject,  ViroAmbientLight,  ViroSpotLight,  ViroARPlaneSelector,  ViroNode,  ViroAnimations,} from 'react-viro';export default class HelloWorldSceneAR extends Component {  constructor() {    super();    // Set initial state here    this.state = {      text : "Initializing AR..."    };    // bind 'this' to functions    this._onInitialized = this._onInitialized.bind(this);  }  render() {    return (                                              {}} >                            );  }  _onInitialized(state, reason) {    if (state == ViroConstants.TRACKING_NORMAL) {      this.setState({        text : "Hello World!"      });    } else if (state == ViroConstants.TRACKING_NONE) {      // Handle loss of tracking    }  }}var styles = StyleSheet.create({  helloWorldTextStyle: {    fontFamily: 'Arial',    fontSize: 30,    color: '#ffffff',    textAlignVertical: 'center',    textAlign: 'center',  },});ViroMaterials.createMaterials({  grid: {    diffuseTexture: require('res/grid_bg.html'),  },});ViroAnimations.registerAnimations({  rotate: {    properties: {      rotateY: "+=90"    },    duration: 250, //.25 seconds  },});module.exports = HelloWorldSceneAR;
  * [__Table of Contents](tutorial-ar.html#)
  *     * [Understanding HelloWorldSceneAR.js](tutorial-ar.html#understanding-helloworldscenearjs)
    * [Importing Components](tutorial-ar.html#importing-components)
    * [HelloWorldSceneAR component](tutorial-ar.html#helloworldscenear-component)
    * [Declaring Styles](tutorial-ar.html#declaring-styles)
    * [Downloading Assets](tutorial-ar.html#downloading-assets)
    * [Adding Components to a Scene](tutorial-ar.html#adding-components-to-a-scene)
    * [Adding a 3D Object to the scene](tutorial-ar.html#adding-a-3d-object-to-the-scene)
    * [Using ViroARPlane](tutorial-ar.html#using-viroarplane)
    * [Add a 3D Object to the Plane](tutorial-ar.html#add-a-3d-object-to-the-plane)
    * [Interactions and Animations](tutorial-ar.html#interactions-and-animations)
    * [Animation](tutorial-ar.html#animation)
    * [Next Steps](tutorial-ar.html#next-steps)
    * [Continue Modifying the Scene](tutorial-ar.html#continue-modifying-the-scene)
    * [HelloWorldSceneAR Tutorial - Final Code](tutorial-ar.html#helloworldscenear-tutorial---final-code)