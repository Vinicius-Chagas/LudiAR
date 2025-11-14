The ViroController is also notified of all events that occur within the
scene, with the exception of hover. Thus, include this controller in your
scene if you would like to register to be always notified of such events. You
can also toggle certain UI expects of the controller as well, such as reticle
or daydream visibility. Example use: JavaScript&lt;ViroController
reticleVisibility={true} controllerVisibility={true}
onClick={this._onClickListenerForAllEvents} /&gt; 
Props controllerVisibility TypeDescriptionbooleanFlag for
displaying the daydream controller. True by default. Note: this only
applies to Daydream headsets. onClick
See ViroNode onClick. onClickState See ViroNode onClickState. onControllerStatus TypeDescription(status) =&gt; voidCalled when
the status of the controller has changed. This is only triggered for wireless
controllers, else the return value would always be
&quot;Connected&quot;.Unknown (1): The controller
state is being initialized and is not yet known.Connecting
(2): The controller is currently scanning and attempting to connect
to your device or phone.Connected (3): The
controller is connected to your device.Disconnected
(4): The controller has disconnected from your
device.Error (5): The controller has encountered an
internal error and is currently unusable. This is usually triggered upon
initialization. onDrag See ViroNode
onDrag. onFuse
See ViroNode onFuse. onHover See ViroNode
onHover. onPinch
See ViroNode onPinch. onRotate See ViroNode
onRotate. onScroll
See ViroNode onScroll. onSwipe See ViroNode
onSwipe. onTouch
See ViroNode onTouch. reticleVisibility TypeDescriptionbooleanFlag for
displaying the reticle. True by
default. Methods setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] });  getControllerForwardAsync() An async function
used to retrieve the forward vector of the current controller used to interact
with the 3D scene.For example, grabbing the async could look like this:
JavaScriptthis.controllerRef.getControllerForwardAsync().then((forward)=&gt;{
// Do stuff with forward vector array }); "
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
UI Control through which the user interacts with the 3D world, enabled by
default. In daydream, this would represent the daydream controller and it's
laser pointer. In cardboard ios, cardboard Android and GearVR, the controller
is effectively the reticle.
The ViroController is also notified of all events that occur within the scene,
with the exception of hover. Thus, include this controller in your scene if
you would like to register to be always notified of such events. You can also
toggle certain UI expects of the controller as well, such as reticle or
daydream visibility.
######
Example use:JavaScript
##
Props###
controllerVisibilityType| Description  
---|---  
boolean| Flag for _displaying_ the daydream controller. True by default. Note:
this only applies to Daydream headsets.  
###
onClickSee [ViroNode onClick](vironode.html#onclick).
###
onClickStateSee [ViroNode onClickState](vironode.html#onclickstate).
###
onControllerStatusType| Description  
---|---  
(status) => void| Called when the status of the controller has changed. This
is only triggered for wireless controllers, else the return value would always
be "Connected".  
**Unknown (1):** The controller state is being initialized and is not yet
known.  
**Connecting (2):** The controller is currently scanning and attempting to
connect to your device or phone.  
**Connected (3):** The controller is connected to your device.  
**Disconnected (4):** The controller has disconnected from your device.  
**Error (5):** The controller has encountered an internal error and is
currently unusable. This is usually triggered upon initialization.  
###
onDragSee [ViroNode onDrag](vironode.html#ondrag).
###
onFuseSee [ViroNode onFuse](vironode.html#onfuse).
###
onHoverSee [ViroNode onHover](vironode.html#onhover).
###
onPinchSee [ViroNode onPinch](vironode.html#onpinch).
###
onRotateSee [ViroNode onRotate](vironode.html#onrotate).
###
onScrollSee [ViroNode onScroll](vironode.html#onscroll).
###
onSwipeSee [ViroNode onSwipe](vironode.html#onswipe).
###
onTouchSee [ViroNode onTouch](vironode.html#ontouch).
###
reticleVisibilityType| Description  
---|---  
boolean| Flag for _displaying_ the reticle. True by default.  
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
###
getControllerForwardAsync()An async function used to retrieve the forward vector of the current
controller used to interact with the 3D scene.For example, grabbing the async
could look like this:
JavaScript
    this.controllerRef.getControllerForwardAsync().then((forward)=>{
    // Do stuff with forward vector array
    });
__Updated over 3 years ago