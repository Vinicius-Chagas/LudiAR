Viro provides the following traditional UI controls:  ViroImage: display images, remote or local ViroQuad: touchpoint for interactivity ViroText: display text, with powerful formatting
options ViroSpinner: traditional indeterminate
progress indicator ViroVideo:
stream video, remote or local, onto a 2D surface  Each of these
components supports a wide variety of Events, and have specific
properties that all documented in their individual reference guides linked
above. To place these controls in your scene, set their position attribute
and add them to a &lt;ViroNode&gt;. However, since placing controls
absolutely in this manner can often be tedious and time-consuming, we also
implement Flexbox, a familiar and powerful way to layout your UI. Flexbox Layouts The flexbox algorithm is used in CSS to
layout 2D components. A good overview of flexbox in CSS can be found here. Much like React Native, Viro supports a subset of flexbox layout properties. Like React Native,
the Viro platform also supports flexbox. This allows you to
create components like menus, content panels, and other 2D layouts easily.
Using Flexbox in Viro To use Flexbox in Viro, you
need to use a &lt;ViroFlexView&gt;. A &lt;ViroFlexView&gt; is a container
object that allows you to create 2D Panels that anchor in 3D space. The
components that are allowed to be children of a &lt;ViroFlexView&gt; are &lt;ViroText&gt;, &lt;ViroImage&gt;, &lt;ViroVideo&gt;,
&lt;ViroButton&gt;, &lt;ViroSpinner&gt;, and &lt;ViroFlexView&gt; itself.  Let&#x27;s start with
a simple example: JavaScript&lt;ViroFlexView
style={{ flexDirection: &#x27;row&#x27;, padding: .1 }} width={5.0}
height={5.0} position={[-5.0, 0.0, -2.0]} rotation={[0, 45, 0]} &gt;
&lt;ViroImage source={require(&#x27;res/myImage1.html&#x27;)} style={{flex:
.5}} /&gt; &lt;ViroImage source={require(&#x27;res/myImage2.html&#x27;)}
style={{flex: .5}} /&gt; &lt;/ViroFlexView&gt; 
The result of the above code is a simple row of 2 images aligned side by
side. The &lt;ViroFlexView&gt; above has a style property, which defines
the layout of the children. In this example we are telling the &lt;ViroFlexView&gt; to align its children in a row by
setting flexDirection:row. We also indicate that each child should
have a padding of 0.1. The &lt;ViroImage&gt; children also have style
properties. In this example, they use the flex property to indicate how large
they should be within the container. In this case the value for both images is
0.5, so each ends up taking half the space of the container.  This
example only touches the most basic Flexbox properties. A list of all layout
properties can be found here. Advanced Example Let&#x27;s say you want to create
something more complex, that has an image in the top row and two images
aligned side by side in the bottom row. This would involve nested &lt;ViroFlexView&gt; containers. The example below
demonstrates how to accomplish this in render(): JavaScript//... render code that has
&lt;ViroScene&gt;, etc. &lt;ViroFlexView style={{ flexDirection:
&#x27;column&#x27;, padding: .1}} width={5.0} height={5.0} position={[-5.0,
0.0, -2.0]} rotation={[0, 45, 0]} &gt; &lt;ViroImage
source={require(&#x27;res/topImage.html&#x27;)} style={{flex: .5}} /&gt;
&lt;ViroFlexView style={{ flex: .5, flexDirection: &#x27;row&#x27; }}&gt;
&lt;ViroImage source={require(&#x27;res/myImage1.html&#x27;)} style={{flex:
.5}} /&gt; &lt;ViroImage source={require(&#x27;res/myImage2.html&#x27;)}
style={{flex: .5}} /&gt; &lt;/ViroFlexView&gt; &lt;/ViroFlexView&gt; //...
whatever other views we have!!   From the example
above, you can see we added a nested &lt;ViroFlexView&gt; that changes the
flexDirection of the children to row and adds padding. You can
nest as many &lt;ViroFlexView&gt; containers as you wish.  Note
that the outermost &lt;ViroFlexView&gt; is the only element that has a
position and rotation property. Position, rotation and scale props are
only respected with the outermost &lt;ViroFlexView&gt;. These
properties anchor the 2D panel in 3D space. Check out our Code Samples for more examples on how to use
Flexbox to create 2D UI in VR." style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
Viro scenes are 3D environments, but often it's useful to display 2D content.
2D content provides a simple mechanism to provide information to the user,
through text and images, or to expose targets for interactivity, like buttons.
Viro provides the following traditional UI controls:
  * [ViroImage](viroimage.html): display images, remote or local
  * [ViroQuad](virobutton.html): touchpoint for interactivity
  * [ViroText](https://viro-community.readme.io/docs/virotext2): display text, with powerful formatting options
  * [ViroSpinner](virospinner.html): traditional indeterminate progress indicator
  * [ViroVideo](https://viro-community.readme.io/docs/virovideo-2-compare): stream video, remote or local, onto a 2D surface
Each of these components supports a wide variety of [Events](https://viro-
community.readme.io/docs/events), and have specific properties that all
documented in their individual reference guides linked above.
To place these controls in your scene, set their `position` attribute and add
them to a ``. However, since placing controls absolutely in this
manner can often be tedious and time-consuming, we also implement Flexbox, a
familiar and powerful way to layout your UI.
##
Flexbox LayoutsThe flexbox algorithm is used in CSS to layout 2D components. A good overview
of flexbox in CSS can be found [here](https://css-
tricks.com/snippets/css/a-guide-to-flexbox/). Much like React Native, Viro
supports a subset of [flexbox layout
properties](https://facebook.github.io/react-native/docs/layout-props.html).
Like React Native, the Viro platform also supports
[flexbox](https://facebook.github.io/react-native/docs/flexbox.html). This
allows you to create components like menus, content panels, and other 2D
layouts easily.
##
Using Flexbox in ViroTo use Flexbox in Viro, you need to use a ``. A ``
is a container object that allows you to create 2D Panels that anchor in 3D
space. The components that are allowed to be children of a ``
are ``, ``, ``, ``,
``, and `` itself.
Let's start with a simple example:
JavaScript
The result of the above code is a simple row of 2 images aligned side by side.
The `` above has a `style` property, which defines the layout of
the children. In this example we are telling the `` to align its
children in a row by setting `flexDirection:row`. We also indicate that each
child should have a padding of 0.1.
The `` children also have style properties. In this example, they
use the `flex` property to indicate how large they should be within the
container. In this case the value for both images is 0.5, so each ends up
taking half the space of the container.
This example only touches the most basic Flexbox properties. A list of all
layout properties can be found [here](https://facebook.github.io/react-
native/docs/layout-props.html).
##
Advanced ExampleLet's say you want to create something more complex, that has an image in the
top row and two images aligned side by side in the bottom row. This would
involve nested `` containers. The example below demonstrates how
to accomplish this in `render()`:
JavaScript
    //... render code that has , etc.  
    //... whatever other views we have!!
From the example above, you can see we added a nested `` that
changes the `flexDirection` of the children to `row` and adds padding. You can
nest as many `` containers as you wish.
Note that the outermost `` is the only element that has a
`position` and `rotation` property. `Position`, `rotation` and `scale` props
are _only_ respected with the outermost ``. These properties
anchor the 2D panel in 3D space.
Check out our [Code Samples](code-samples.html) for more examples on how to
use Flexbox to create 2D UI in VR.
__Updated over 3 years ago