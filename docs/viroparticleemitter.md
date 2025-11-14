Example use: JavaScript&lt;ViroParticleEmitter position={[0, 4.5, 0]} duration={2000}
visible={true} delay={0} run={true} loop={true} fixedToEmitter={true} image={{
source: require(&quot;./res/particle_snow.png&quot;), height: 0.1, width: 0.1,
bloomThreshold: 1.0 }} spawnBehavior={{ particleLifetime: [4000, 4000],
emissionRatePerSecond: [150, 200], spawnVolume: { shape: &quot;box&quot;,
params: [20, 1, 20], spawnOnSurface: false }, maxParticles: 800 }}
particleAppearance={{ opacity: { initialRange: [0, 0], factor:
&quot;time&quot;, interpolation: [ { endValue: 0.5, interval: [0, 500] }, {
endValue: 1.0, interval: [4000, 5000] } ] }, rotation: { initialRange: [0,
360], factor: &quot;time&quot;, interpolation: [{ endValue: 1080, interval:
[0, 5000] },] }, scale: { initialRange: [ [5, 5, 5], [10, 10, 10] ], factor:
&quot;time&quot;, interpolation: [ { endValue: [3, 3, 3], interval: [0, 4000]
}, { endValue: [0, 0, 0], interval: [4000, 5000] } ] }, }} particlePhysics={{
velocity: { initialRange: [ [-2, -.5, 0], [2, -3.5, 0] ] } }} /&gt;
 Props image (*r required) TypeDescriptionPropTypes.shape({ source
: PropTypes.oneOfType([ PropTypes.shape({ uri: PropTypes.string }),
PropTypes.number ]).isRequired, height: PropTypes.number, width:
PropTypes.number, bloomThreshold: PropTypes.number, })Image data used
to represent the visual look of individual quad particles produced by this
Particle Emitter.|SubProp|Description||:------|:----------:||source| The image
source, a remote URL or a local file resource. PNG and JPG images
accepted.||height|The height of an individual quad particle in 3D space.
Default value is 1.||width|The width of an individual quad particle in 3D
space. Default value is 1.||bloomThreshold| The luminance brightness threshold
that must be crossed before bloom effects are applied to the particles. Set
this attribute to 0.0 to always make particles bloom, or to a value &gt; 0.0
and &lt; 1.0. Defaults to -1 (no
bloom).| delay TypeDescriptionPropTypes.numberThe delay in milliseconds to
apply before this emitter starts a new emission cycle. Particles are produced
during each emission cycle. duration
TypeDescriptionPropTypes.numberThe length of an emitter&#x27;s
emission cycle in milliseconds. fixedToEmitter TypeDescriptionPropTypes.boolWhen moving particles, the fixedToEmitter property controls the reference point to
use when computing the particle&#x27;s appearance and movement. When true,
Viro uses the emitter&#x27;s current position; when false, Viro uses each
particle&#x27;s individual spawn location. Under fixedToEmitter = false,
particles are not &quot;locked&quot; to the emitter; they can float away. For
example, smoke particles from a moving train would continue floating upward
from the location they were spawned. Under fixedToEmitter = true, the smoke
particles would be &quot;locked&quot; to the train&#x27;s emitter: they would
always move with the train in reference to the emitter&#x27;s
location. loop TypeDescriptionPropTypes.boolTrue if the emitter should restart
emitting particles at the end of each emission cycle, after the
delay. onTransformUpdate TypeDescriptionPropTypes.funcA
function that is invoked when the component moves. Provides an array of
numbers representing the component&#x27;s position in world
coordinates. particleAppearance TypeDescriptionsee Particle Appearance A
collection of properties defining the appearance of individual particles over
the course of their lifetime (color, scale, opacity,
rotation). particlePhysics TypeDescriptionsee Particle Physics A collection of
properties defining the movement behavior of individual particles over the
course of their lifetime, like velocity and
acceleration. position TypeDescriptionPropTypes.arrayOf(PropTypes.number)Cartesian
position in 3D space, stored as [x, y,
z]. rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)The rotation
of the container around its local axis specified as Euler angles [x, y, z].
Units for each angle are specified in
degrees. rotationPivot TypeDescriptionPropTypes.arrayOf(PropTypes.number) Cartesian
position in [x,y,z] about which rotation is applied relative to the
component&#x27;s position. run TypeDescriptionPropTypes.boolIf
true, this emitter will start emitting particles. Can be set to false to pause
particle emission. scale TypeDescriptionPropTypes.arrayOf(PropTypes.number)The scale of
the all particles contained within this emitter in 3D space, specified as
[x,y,z]. A scale of 1 represents the current size of the container. A scale
value of &lt; 1 will make the container proportionally smaller while a value
&gt;1 will make the container proportionally bigger along the specified
axis. scalePivot TypeDescriptionPropTypes.arrayOf(PropTypes.number) Cartesian
position in [x,y,z] from which scale is applied relative to the
component&#x27;s position. spawnBehavior TypeDescriptionsee Spawn Behavior A collection of properties
defining the spawning behavior of this emitter, like how fast particles spawn,
how many to spawn, and when to spawn.
visible
TypeDescriptionPropTypes.boolFalse if the container should be
hidden. By default the container is visible and this value is
true. renderingOrder TypeDescriptionPropTypes.numberThis determines the order in
which this Node is rendered relative to other Nodes. Nodes with greater
rendering orders are rendered last. The default rendering order is zero. For
example, setting a Node&#x27;s rendering order to -1 will cause the Node to be
rendered before all Nodes with rendering orders greater than or equal to
0. rotation TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description
here. scale TypeDescriptionPropTypes.arrayOf(PropTypes.number)Put the PropType Description
here. transformBehaviors TypeDescriptionPropTypes.arrayOf(PropTypes.string)Put the PropType Description
here. width TypeDescriptionPropTypes.numberPut the PropType
Description here. volume TypeDescriptionPropTypes.numberPut the PropType
Description here. visible TypeDescriptionPropTypes.boolPut the PropType
Description here. Spawn
Behavior SubPropKeyPropTypeemissionRatePerSecond PropTypes.arrayOf(PropTypes.number) The total
number of particles this emitter spawns in a second. This value is chosen at
random from the given [min, max] range array, and is in addition to the other
emission parameters.emissionRatePerMeter PropTypes.arrayOf(PropTypes.number) The total
number of particles this emitter spawns per meter travelled. This value is
chosen at random from the given [min, max] range array, and is in addition to
the other emission parameters.particleLifetime PropTypes.arrayOf(PropTypes.number) The lifetime
of a particle in milliseconds.maxParticles PropTypes.number The maximum number of
live particles that can exist at any moment from this emitter. This
includes particles that have been created by the emissionRatePerSecond,
emissionRatePerMeter, and emissionBurst parameters. When the cap is reached,
new particles will only be spawned as existing particles die
off.emissionBurst
PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.shape({
time: PropTypes.number, min: PropTypes.number, max: PropTypes.number, cycles:
PropTypes.number, cooldownPeriod: PropTypes.number, }), PropTypes.shape({
distance: PropTypes.number, min: PropTypes.number, max: PropTypes.number,
cycles: PropTypes.number, cooldownDistance: PropTypes.number, }) An
array of parameters controlling how this emitter spawns particles in bursts,
if any. Bursts can be scheduled to occur at certain times, or after a certain
distance travelled by the
emitter.|SubProp|Description||:------|:----------:||time or distance| Time in
milliseconds, at which to emit this burst of particles. This time is set in
reference to the start of the emission cycle of this emitter. Can also be in
terms of distance travelled, in meters.||min| The minimum number of particles
to burst.||max| The maximum number of particles to burst.||cycles| The number
of times to loop and repeat this burst. ||cooldownPeriod| The cool down /
waiting duration between cycles before the emitter spawns another burst of
particles.|spawnVolume PropTypes.shape({ shape: PropTypes.string, params:
PropTypes.arrayOf(PropTypes.number), spawnOnSurface:PropTypes.bool })
The shape of the volume within which to spawn particles, and the parameters
that describe that volume. If spawnOnSurface is true, particles will spawn on
the surface of the volume, instead of within the volume. Note that particles
will be uniformly distributed throughout the volume.|Spawn Volume| Accepted
Params||:------|:----------:||Box| [width, height, and length] ||Sphere| A
single float describing a radius parameter for a perfect sphere, or a vector
representing the [x, y, z] length of an
ellipsoid. Particle Appearance SubPropKeyPropTypeopacity PropTypes.shape({ initialRange:
PropTypes.arrayOf(PropTypes.number), factor:
PropTypes.oneOf([&quot;time&quot;, &quot;distance&quot;]), interpolation:
PropTypes.arrayOf(PropTypes.shape({ interval:
PropTypes.arrayOf(PropTypes.number), endValue: PropTypes.number, }))
Collection of parameters controlling the opacity of individual particles over
time. You can see code examples here
.|SubProp|Description||:------|:----------:||initialRange|
The [min, max] range array within which to initialize a randomized opacity for
particles to start of with.||factor| The unit of reference
against which to interpolate your visual property values, can be either time
or distance.||interpolation| An array of data points, each
containing an endValue and an interpolation interval, thereby
&quot;charting&quot; the behavior of this property over the lifetime of the
particle.|scale
PropTypes.shape({ initialRange:
PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), factor:
PropTypes.oneOf([&quot;time&quot;, &quot;distance&quot;]), interpolation:
PropTypes.arrayOf(PropTypes.shape({ interval:
PropTypes.arrayOf(PropTypes.number), endValue:
PropTypes.arrayOf(PropTypes.number), })) Collection of parameters
controlling scaling behavior of individual particles over time. You can see
code examples here 
.|SubProp|Description||:------|:----------:||initialRange|
The [min, max] range array within which to initialize a randomized opacity for
particles to start of with. Here, min and max are vectors, as particles are
scaled in 3d space.||factor| The unit of reference against
which to interpolate your visual property values, can be either time or
distance.||interpolation| An array of data points, each
containing an endValue and an interpolation interval, thereby
&quot;charting&quot; the behavior of this property over the lifetime of the
particle.|rotation
PropTypes.shape({ initialRange:
PropTypes.arrayOf(PropTypes.number), factor:
PropTypes.oneOf([&quot;time&quot;, &quot;distance&quot;]), interpolation:
PropTypes.arrayOf(PropTypes.shape({ interval:
PropTypes.arrayOf(PropTypes.number), endValue: PropTypes.number, }))
Collection of parameters controlling the rotation of individual particles over
time. You can see code examples here 
.|SubProp|Description||:------|:----------:||initialRange|
The [min, max] range array defining the interval of initial rotation values
for each particle. Min and max are floats. Rotation is performed on the
quad&#x27;s Z axis, and are then billboarded to the
user.||factor| The unit of reference against which to
interpolate visual property values, can be either time or
distance.||interpolation| An array of data points, each
containing an endValue and an interpolation interval, thereby
&quot;charting&quot; the behavior of this property over the lifetime of the
particle.|color
PropTypes.shape({ initialRange:
PropTypes.arrayOf(ColorPropType), factor: PropTypes.oneOf([&quot;time&quot;,
&quot;distance&quot;]), interpolation: PropTypes.arrayOf(PropTypes.shape({
interval: PropTypes.arrayOf(PropTypes.number), endValue: ColorPropType,
})) Collection of parameters controlling the color of individual
particles over time. You can see code examples here  .Valid color formats are:
 &#x27;#f0f&#x27; (#rgb)  &#x27;#f0fc&#x27; (#rgba) 
&#x27;#ff00ff&#x27; (#rrggbb)  &#x27;#ff00ff00&#x27; (#rrggbbaa) 
&#x27;rgb(255, 255, 255)&#x27;  &#x27;rgba(255, 255, 255, 1.0)&#x27; 
&#x27;hsl(360, 100%, 100%)&#x27;  &#x27;hsla(360, 100%, 100%, 1.0)&#x27;
 &#x27;transparent&#x27;  &#x27;red&#x27; * 0xff00ff00
(0xrrggbbaa)|SubProp|Description||:------|:----------:||initialRange|
The [min, max] range within which to initialize each particle&#x27;s
color.||factor| The unit of reference against which to
interpolate your visual property values, can be either time or
distance.||interpolation| An array of data points, each
containing an endValue and an interpolation interval, thereby
&quot;charting&quot; the behavior of this property over the lifetime of the
particle.| Particle
Physics SubPropKeyPropTypevelocity PropTypes.shape({ initialRange:
PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)) }) The range
of values defining a particle&#x27;s initial velocity.acceleration PropTypes.shape({ initialRange:
PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)) }) The range
of values a particle spawns with as it&#x27;s initial
acceleration.|SubProp|Description||:------|:----------:||initialRange|
The range of values defining a particle&#x27;s acceleration.explosiveImpulse PropTypes.shape({ impulse: PropTypes.number,
position: PropTypes.arrayOf(PropTypes.number), decelerationPeriod:
PropTypes.number, }) Collection of properties describing the velocity
/ and acceleration behavior of emitted particles to achieve an explosive
effect.|SubProp|Description||:------|:----------:||Impulse|
Describes the magnitude of the explosive force to apply to all
particles.||Position| The vector location from which said
explosion detonates (local to the emitter). The closer the particles are to
the detonation location, the stronger the impulse explosion
force.||decelerationPeriod| Is the timeframe within which the
particles will decelerate against the explosion&#x27;s directional velocity to
0 m/s.| Methods async
getBoundingBoxAsync()Async function that returns the component&#x27;s bounding box in
world coordinates.Returns a Promise that will be completed with the following object:{ `boundingBox` : {
`minX` : number, `maxX` : number, `minY` : number, `maxY` : number, `minZ` :
number, `maxZ` : number }} setNativeProps(nativeProps) A wrapper function
around the native component&#x27;s setNativeProps which allow users to set
values on the native component without changing state/setting props and re-
rendering. Refer to the React Native documentation on Direct Manipulation for more information. ParameterTypeDescriptionnativePropsobjectan object where the keys
are the properties to set and the values are the values to
set JavaScriptcomponentRef.setNativeProps({ position:
[0, 0, -1] }); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
A ViroParticleEmitter is a particle factory that creates, contains, and
recycles a pool of quad particles to create a particle effect. See the
[Particle Effect](http://docs.viromedia.com/v2.0.0/docs/particle-effects)
guide for more information.
######
Example use:JavaScript
##
Props###
image (*r required)Type| Description  
---|---  
| **PropTypes.shape({ source : PropTypes.oneOfType([ PropTypes.shape({ uri:
PropTypes.string }), PropTypes.number ]).isRequired, height: PropTypes.number,
width: PropTypes.number, bloomThreshold: PropTypes.number, })** Image data
used to represent the visual look of individual quad particles produced by
this Particle Emitter.|SubProp|Description||:------|:----------:||source| The
image source, a remote URL or a local file resource. PNG and JPG images
accepted.||height|The height of an individual quad particle in 3D space.
Default value is 1.||width|The width of an individual quad particle in 3D
space. Default value is 1.||bloomThreshold| The luminance brightness threshold
that must be crossed before bloom effects are applied to the particles. Set
this attribute to 0.0 to always make particles bloom, or to a value > 0.0 and
1 will make the container
proportionally bigger along the specified axis.  
###
scalePivotType| Description  
---|---  
| **PropTypes.arrayOf(PropTypes.number)** Cartesian position in [x,y,z] from
which scale is applied relative to the component's position.  
###
spawnBehaviorType| Description  
---|---  
| **see[Spawn Behavior](particle-effects.html#spawn-rates) **A collection of
properties defining the spawning behavior of this emitter, like how fast
particles spawn, how many to spawn, and when to spawn.  
###
visibleType| Description  
---|---  
| **PropTypes.bool** False if the container should be hidden. By default the
container is visible and this value is true.  
###
renderingOrderType| Description  
---|---  
| **PropTypes.number** This determines the order in which this Node is
rendered relative to other Nodes. Nodes with greater rendering orders are
rendered last. The default rendering order is zero. For example, setting a
Node's rendering order to -1 will cause the Node to be rendered before all
Nodes with rendering orders greater than or equal to 0.  
###
rotationType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
###
scaleType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.number)Put the PropType Description here.  
###
transformBehaviorsType| Description  
---|---  
| PropTypes.arrayOf(PropTypes.string)Put the PropType Description here.  
###
widthType| Description  
---|---  
| PropTypes.numberPut the PropType Description here.  
###
volumeType| Description  
---|---  
| PropTypes.numberPut the PropType Description here.  
###
visibleType| Description  
---|---  
| PropTypes.boolPut the PropType Description here.  
##
Spawn BehaviorSubPropKey| PropType  
---|---  
**emissionRatePerSecond** | **PropTypes.arrayOf(PropTypes.number)** The total number of particles this emitter spawns in a second. This value is chosen at random from the given [min, max] range array, and is in addition to the other emission parameters.  
**emissionRatePerMeter** | **PropTypes.arrayOf(PropTypes.number)** The total number of particles this emitter spawns per meter travelled. This value is chosen at random from the given [min, max] range array, and is in addition to the other emission parameters.  
**particleLifetime** | **PropTypes.arrayOf(PropTypes.number)** The lifetime of a particle in milliseconds.  
**maxParticles** | **PropTypes.number** The maximum number of _live_ particles that can exist at any moment from this emitter. This includes particles that have been created by the emissionRatePerSecond, emissionRatePerMeter, and emissionBurst parameters. When the cap is reached, new particles will only be spawned as existing particles die off.  
**emissionBurst** | **PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.shape({ time: PropTypes.number, min: PropTypes.number, max: PropTypes.number, cycles: PropTypes.number, cooldownPeriod: PropTypes.number, }), PropTypes.shape({ distance: PropTypes.number, min: PropTypes.number, max: PropTypes.number, cycles: PropTypes.number, cooldownDistance: PropTypes.number, })** An array of parameters controlling how this emitter spawns particles in bursts, if any. Bursts can be scheduled to occur at certain times, or after a certain distance travelled by the emitter.|SubProp|Description||:------|:----------:||time or distance| Time in milliseconds, at which to emit this burst of particles. This time is set in reference to the start of the emission cycle of this emitter. Can also be in terms of distance travelled, in meters.||min| The minimum number of particles to burst.||max| The maximum number of particles to burst.||cycles| The number of times to loop and repeat this burst. ||cooldownPeriod| The cool down / waiting duration between cycles before the emitter spawns another burst of particles.|  
**spawnVolume** | **PropTypes.shape({ shape: PropTypes.string, params: PropTypes.arrayOf(PropTypes.number), spawnOnSurface:PropTypes.bool })** The shape of the volume within which to spawn particles, and the parameters that describe that volume. If spawnOnSurface is true, particles will spawn on the surface of the volume, instead of within the volume. Note that particles will be uniformly distributed throughout the volume.|Spawn Volume| Accepted Params||:------|:----------:||Box| [width, height, and length] ||Sphere| A single float describing a radius parameter for a perfect sphere, or a vector representing the [x, y, z] length of an ellipsoid.  
##
Particle AppearanceSubPropKey| PropType  
---|---  
**opacity** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(PropTypes.number), factor: PropTypes.oneOf([ "time", "distance"]), interpolation: PropTypes.arrayOf(PropTypes.shape({ interval: PropTypes.arrayOf(PropTypes.number), endValue: PropTypes.number, }))** Collection of parameters controlling the opacity of individual particles over time. You can see code examples **[here](particle-effects.html) ** .|SubProp|Description||:------|:----------:||**initialRange** | The [min, max] range array within which to initialize a randomized opacity for particles to start of with.||**factor** | The unit of reference against which to interpolate your visual property values, can be either time or distance.||**interpolation** | An array of data points, each containing an endValue and an interpolation interval, thereby "charting" the behavior of this property over the lifetime of the particle.|  
**scale** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)), factor: PropTypes.oneOf([ "time", "distance"]), interpolation: PropTypes.arrayOf(PropTypes.shape({ interval: PropTypes.arrayOf(PropTypes.number), endValue: PropTypes.arrayOf(PropTypes.number), }))** Collection of parameters controlling scaling behavior of individual particles over time. You can see code examples **[here](particle-effects.html) ** .|SubProp|Description||:------|:----------:||**initialRange** | The [min, max] range array within which to initialize a randomized opacity for particles to start of with. Here, min and max are vectors, as particles are scaled in 3d space.||**factor** | The unit of reference against which to interpolate your visual property values, can be either time or distance.||**interpolation** | An array of data points, each containing an endValue and an interpolation interval, thereby "charting" the behavior of this property over the lifetime of the particle.|  
**rotation** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(PropTypes.number), factor: PropTypes.oneOf([ "time", "distance"]), interpolation: PropTypes.arrayOf(PropTypes.shape({ interval: PropTypes.arrayOf(PropTypes.number), endValue: PropTypes.number, }))** Collection of parameters controlling the rotation of individual particles over time. You can see code examples **[here](http://docs.viromedia.com/v2.0.0/docs/viroparticleemitter#section-example-use-) ** .|SubProp|Description||:------|:----------:||**initialRange** | The [min, max] range array defining the interval of initial rotation values for each particle. Min and max are floats. Rotation is performed on the quad's Z axis, and are then billboarded to the user.||**factor** | The unit of reference against which to interpolate visual property values, can be either time or distance.||**interpolation** | An array of data points, each containing an endValue and an interpolation interval, thereby "charting" the behavior of this property over the lifetime of the particle.|  
**color** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(ColorPropType), factor: PropTypes.oneOf([ "time", "distance"]), interpolation: PropTypes.arrayOf(PropTypes.shape({ interval: PropTypes.arrayOf(PropTypes.number), endValue: ColorPropType, }))** Collection of parameters controlling the color of individual particles over time. You can see code examples **[here](http://docs.viromedia.com/v2.0.0/docs/viroparticleemitter#section-example-use-) ** .Valid color formats are: _ '#f0f' (#rgb) _ '#f0fc' (#rgba) _ '#ff00ff' (#rrggbb) _ '#ff00ff00' (#rrggbbaa) _ 'rgb(255, 255, 255)' _ 'rgba(255, 255, 255, 1.0)' _ 'hsl(360, 100%, 100%)' _ 'hsla(360, 100%, 100%, 1.0)' _ 'transparent' _ 'red' * 0xff00ff00 (0xrrggbbaa)|SubProp|Description||:------|:----------:||**initialRange** | The [min, max] range within which to initialize each particle's color.||**factor** | The unit of reference against which to interpolate your visual property values, can be either time or distance.||**interpolation** | An array of data points, each containing an endValue and an interpolation interval, thereby "charting" the behavior of this property over the lifetime of the particle.|  
##
Particle PhysicsSubPropKey| PropType  
---|---  
**velocity** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)) })** The range of values defining a particle's initial velocity.  
**acceleration** | **PropTypes.shape({ initialRange: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)) })** The range of values a particle spawns with as it's initial acceleration.|SubProp|Description||:------|:----------:||**initialRange** | The range of values defining a particle's acceleration.  
**explosiveImpulse** | **PropTypes.shape({ impulse: PropTypes.number, position: PropTypes.arrayOf(PropTypes.number), decelerationPeriod: PropTypes.number, })** Collection of properties describing the velocity / and acceleration behavior of emitted particles to achieve an explosive effect.|SubProp|Description||:------|:----------:||**Impulse** | Describes the magnitude of the explosive force to apply to all particles.||**Position** | The vector location from which said explosion detonates (local to the emitter). The closer the particles are to the detonation location, the stronger the impulse explosion force.||**decelerationPeriod** | Is the timeframe within which the particles will decelerate against the explosion's directional velocity to 0 m/s.|  
##
Methodsasync getBoundingBoxAsync()  
---  
[Async](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/async_function) function that
returns the component's bounding box in world coordinates.Returns a
[Promise](https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be
completed with the following object:`{ `boundingBox` : { `minX` : number,
`maxX` : number, `minY` : number, `maxY` : number, `minZ` : number, `maxZ` :
number }}`  
###
setNativeProps(nativeProps)A wrapper function around the native component's setNativeProps which allow
users to set values on the native component without changing state/setting
props and re-rendering. Refer to the React Native documentation on [Direct
Manipulation](https://facebook.github.io/react-native/docs/direct-
manipulation.html) for more information.
Parameter| Type| Description  
---|---|---  
nativeProps| object| an object where the keys are the properties to set and
the values are the values to set  
JavaScript
    componentRef.setNativeProps({ position: [0, 0, -1] });
__Updated over 3 years ago