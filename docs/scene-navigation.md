Viro displays the scene at the top of the stack. To move to a new scene,
simply push that scene onto the navigation stack. To return to the previous
scene, pop the current scene off the stack. The Scene Navigator itself can
always be retrieved for these operations via each Scene&#x27;s sceneNavigator
property. The following is a simple example. Below we have a &lt;ViroVRSceneNavigator&gt; that renders a simple initial
scene. JavaScriptimport { FirstScene }
from &#x27;./FirstScene&#x27;; import { ViroVRSceneNavigator } from
&#x27;@reactvision/viro-react&#x27; const ViroSceneNav = () =&gt; { return (
&lt;ViroVRSceneNavigator initialScene={{ scene: FirstScene }} /&gt; ) }
 When the application is launched, the scene
exported in FirstScene.js is displayed. Continuing the example, FirstScene is a
simple scene with an image, shown below.  JavaScriptimport { SecondScene } from
&#x27;./SecondScene&#x27;; export const FirstScene = (props) =&gt; { const
handleClick = () =&gt; { props.sceneNavigator.push({ scene: SecondScene }) }
return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;res/image.html&#x27;)} position={[0, 0, -5]}
onClick={handleClick} /&gt; &lt;/ViroScene&gt; ); } 
The image has a click handler handleClick() which, when pressed, pushes SecondScene
onto the stack. Notice that the Scene Navigator is always available via
props.sceneNavigator.  When SecondScene is
pushed onto the stack, it will be rendered until either another new scene is
pushed onto the stack, or until it is popped off the stack via props.sceneNavigator.pop().  Important
Note: Ensure that you do not pop the last scene on the stack, this
will result in a red screen with a &quot;Cannot pop below 0&quot; message in
development and a crash in release! Jumping In addition to pushing and popping scenes, you
can also jump between scenes. Jump is used to quickly move from
scene to scene on the navigation stack. If the scene we are jumping toward is
already on the stack, we move it to the top, displaying it to the user. If the
scene is not already in the stack, we push it to the top. Jumping is
useful for applications that frequently switch between a number of scenes.
Jumping is also optimized to be faster than doing the same via push and
pop. Note that to jump correctly, each scene requires a scene
key. The scene key identifies the scene, enabling Viro to recognize when
said scene is already on the stack so we can quickly jump to it. JavaScriptimport { SecondScene } from
&#x27;./SecondScene&#x27;; export const FirstScene = (props) =&gt; { const
handleClick = () =&gt; { props.sceneNavigator.jump(&quot;scene2&quot;,
{scene:SecondScene}); } return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;res/image.html&#x27;)} position={[0, 0, -5]}
onClick={handleClick} /&gt; &lt;/ViroScene&gt; ); } 
Replacing Finally, to simply replace the scene at the top
of the stack with a different scene, use the replace method. Replace is useful for
applications that have no need for a hierarchical scene stack, and instead
simply swap out one scene for another at the root level. JavaScriptimport { SecondScene } from
&#x27;./SecondScene&#x27;; export const FirstScene = (props) =&gt; { const
handleClick = () =&gt; { props.sceneNavigator.replace({scene:SecondScene}); }
return ( &lt;ViroScene&gt; &lt;ViroImage
source={require(&#x27;res/image.html&#x27;)} position={[0, 0, -5]}
onClick={handleClick} /&gt; &lt;/ViroScene&gt; ); } 
Passing Props from Scene
to Scene As with most mobile apps, you may also need to pass
information through different experiences, or scenes. For example, if a user
selects an item from a virtual menu to be then displayed in a newly pushed
scene, your application may need to propagate additional information related
to the selected item into the new scene. In Viro, there are 3 ways that you
can pass information through scenes. Option 1: Using
passProps If you are looking to pass static properties to your
next scene, you can use the passProps parameter within the scene
navigator. This approach is great for providing individual scenes with static,
unchanging parameters - the passProp cannot be changed once
you push a scene with that prop! (To get around that you can use option #2
below.) JavaScript// For your initial
scene, you can populate passProps as part of // the initialScene dictionary,
using the following syntax: &lt;ViroARSceneNavigator initialScene={{ scene:
InitialARScene, passProps: { displayObject: true } }} /&gt; // To Pass
properties when pushing another scene, use the following syntax:
props.sceneNavigator.jump(&quot;Shop&quot;, { scene :
require(&#x27;./Shop&#x27;), passProps: { displayObject : true } );
 Then in our InitialARScene, you should be able to
reference your value with this.props.displayObject.
Option 2: Using viroAppProps The scene navigator
object is actually passed as a prop to each scene that you have. If you are
using ViroSceneNavigator the prop is called sceneNavigator.
If you are using ViroARSceneNavigator it&#x27;s called
arSceneNavigator. The navigators have a dictionary object
called viroAppProps which you can use as global dictionary to
store and pass values across your app. This can be used to maintain
application state. JavaScript// For your initial
scene, you treat viroAppProps as a // global dictionary container with which
to pass information. &lt;ViroARSceneNavigator initialScene={{
scene:InitialARScene }} viroAppProps={{ displayObject: false }} /&gt; // To
pass information from the current scene to the next, simply // reference the
dictionary with the sceneNavigator that is passed // to each scene.
props.sceneNavigator.viroAppProps= { displayObject: true };
 Then in our InitialARScene, you should be able to
check your value with
props.sceneNavigator.viroAppProps.displayObject.
Option 3: Using Redux Generally, if you want props to
span across multiple components I recommend using Redux to manage application
state. This would mostly be the case for more involved and larger
applications, where the above two solutions would not be sufficient, and most
likely get out of hand pretty quickly the larger your application grows. See
more on Redux here"
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
The `` handles the transitions between ``
objects. It enables the 3D equivalent of a navigation stack.
Viro displays the scene at the top of the stack. To move to a new scene,
simply push that scene onto the navigation stack. To return to the previous
scene, pop the current scene off the stack. The Scene Navigator itself can
always be retrieved for these operations via each Scene's `sceneNavigator`
property.
The following is a simple example. Below we have a ``
that renders a simple initial scene.
JavaScript
    import { FirstScene } from './FirstScene';
    import { ViroVRSceneNavigator } from '@reactvision/viro-react'
    const ViroSceneNav = () => {
      return (
      )
    }
When the application is launched, the scene exported in FirstScene.js is
displayed. Continuing the example, `FirstScene` is a simple scene with an
image, shown below.
JavaScript
    import { SecondScene } from './SecondScene';
    export const FirstScene = (props) => {
      const handleClick = () => {
        props.sceneNavigator.push({ scene: SecondScene })
      }
      return (
      );  
    }
The image has a click handler `handleClick()` which, when pressed, pushes
`SecondScene` onto the stack. Notice that the Scene Navigator is always
available via `props.sceneNavigator`.
When `SecondScene` is pushed onto the stack, it will be rendered until either
another new scene is pushed onto the stack, or until it is popped off the
stack via `props.sceneNavigator.pop()`.
**Important Note:** Ensure that you do not pop the last scene on the stack,
this will result in a red screen with a "Cannot pop below 0" message in
development and a crash in release!
##
JumpingIn addition to pushing and popping scenes, you can also `jump` between scenes.
`Jump` is used to quickly move from scene to scene on the navigation stack. If
the scene we are jumping toward is already on the stack, we move it to the
top, displaying it to the user. If the scene is not already in the stack, we
push it to the top.
Jumping is useful for applications that frequently switch between a number of
scenes. Jumping is also optimized to be faster than doing the same via push
and pop.
Note that to jump correctly, each scene requires a _scene key_. The scene key
identifies the scene, enabling Viro to recognize when said scene is already on
the stack so we can quickly jump to it.
JavaScript
    import { SecondScene } from './SecondScene';
    export const FirstScene = (props) => {
      const handleClick = () => {
      	props.sceneNavigator.jump("scene2", {scene:SecondScene});
      }
      return (
      );
    }
##
ReplacingFinally, to simply replace the scene at the top of the stack with a different
scene, use the `replace` method. Replace is useful for applications that have
no need for a hierarchical scene stack, and instead simply swap out one scene
for another at the root level.
JavaScript
    import { SecondScene } from './SecondScene';
    export const FirstScene = (props) => {
      const handleClick = () => {
      	props.sceneNavigator.replace({scene:SecondScene});
      }
      return (
      );  
    }
##
Passing Props from Scene to SceneAs with most mobile apps, you may also need to pass information through
different experiences, or scenes. For example, if a user selects an item from
a virtual menu to be then displayed in a newly pushed scene, your application
may need to propagate additional information related to the selected item into
the new scene. In Viro, there are 3 ways that you can pass information through
scenes.
**Option 1: Using passProps**  
If you are looking to pass static properties to your next scene, you can use
the _passProps_ parameter within the scene navigator. This approach is great
for providing individual scenes with static, unchanging parameters - the
passProp **cannot be changed** once you push a scene with that prop! (To get
around that you can use option #2 below.)
JavaScript
    // For your initial scene, you can populate passProps as part of 
    // the initialScene dictionary, using the following syntax:
    // To Pass properties when pushing another scene, use the following syntax:
    props.sceneNavigator.jump("Shop", {    
      scene : require('./Shop'),
      passProps: { displayObject : true }
    );
Then in our InitialARScene, you should be able to reference your value with
**this.props.displayObject.**
**Option 2: Using viroAppProps**  
The scene navigator object is actually passed as a prop to each scene that you
have. If you are using ViroSceneNavigator the prop is called
**sceneNavigator**. If you are using ViroARSceneNavigator it's called
**arSceneNavigator**. The navigators have a dictionary object called
**viroAppProps** which you can use as global dictionary to store and pass
values across your app. This can be used to maintain application state.
JavaScript
    // For your initial scene, you treat viroAppProps as a 
    // global dictionary container with which to pass information.
    // To pass information from the current scene to the next, simply
    // reference the dictionary with the sceneNavigator that is passed
    // to each scene.
    props.sceneNavigator.viroAppProps= { displayObject: true };
Then in our InitialARScene, you should be able to check your value with
**props.sceneNavigator.viroAppProps.displayObject.**
**Option 3: Using Redux**  
Generally, if you want props to span across multiple components I recommend
using Redux to manage application state. This would mostly be the case for
more involved and larger applications, where the above two solutions would not
be sufficient, and most likely get out of hand pretty quickly the larger your
application grows. See more on [Redux here](https://redux.js.org/)
 __Updated over 1 year ago