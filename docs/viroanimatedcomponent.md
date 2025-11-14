❗️ViroAnimatedComponent is
DEPRECATED in Viro 2.0.0+Use the animation property on the individual
components.Refer to the Develop Animation guide for
more information. A ViroAnimatedComponent contains as a
child a component on which it is set to animate. A ViroAnimatedComponent can
have only 1 child to animate. See our Animation Guide for
more information on animation. Example use: JavaScript&lt;ViroAnimatedComponent
animation=&quot;rotateAroundYAxis&quot; delay={1000} loop={true}
onStart={this._onStart} onFinish={this._onFinish} run={true} &gt;
&lt;Viro3DObject source={require(&quot;./res/skeleton.obj&quot;)}
position={[-0.0, -5.5, -1.15]} materials={[&quot;skeleton&quot;]} /&gt;
&lt;/ViroAnimatedComponent&gt;;  Props Optional Props PropKeyPropTypeanimationPropTypes.stringThe name of the
animation.delayPropTypes.numberThe delay in milliseconds to
apply before executing the specified animation.loopPropTypes.boolTrue if the animation should loop.
Set to false by default.onFinishPropTypes.funcCallback invoked when the animation
has finished. If loop is set to true, this is invoked every time the animation
loops.onStartPropTypes.funcCallback invoked when the animation
has started. If loop is set to true, this is invoked every time the animation
loops.runPropTypes.boolSet to true to start
the animation. If you set to false, this will pause the animation. The default
value is true." style="margin-left:31px"
class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable"
data-testid="RDMD">
> ## ❗️
>
> DEPRECATED
>
> This component has been deprecated. The documentation will not be updated
> and may be inaccurate. This component will be removed in a future release.
> ## ❗️
>
> ViroAnimatedComponent is DEPRECATED in Viro 2.0.0+
>
> Use the `animation` property on the individual components.
>
> Refer to the Develop [Animation](animation.html) guide for more information.
A ViroAnimatedComponent contains as a child a component on which it is set to
animate. A ViroAnimatedComponent can have only 1 child to animate. See our
[Animation Guide](animation.html) for more information on animation.
######
Example use:JavaScript
    ;
##
Props##
Optional PropsPropKey| PropType  
---|---  
**animation**| **PropTypes.string** The name of the animation.  
**delay**| **PropTypes.number** The delay in milliseconds to apply before
executing the specified animation.  
**loop**| **PropTypes.bool** True if the animation should loop. Set to false
by default.  
**onFinish**| **PropTypes.func** Callback invoked when the animation has
finished. If loop is set to true, this is invoked every time the animation
loops.  
**onStart**| **PropTypes.func** Callback invoked when the animation has
started. If loop is set to true, this is invoked every time the animation
loops.  
**run**| **PropTypes.bool** Set to true to start the animation. If you set to
false, this will pause the animation. The default value is true.  
__Updated over 3 years ago