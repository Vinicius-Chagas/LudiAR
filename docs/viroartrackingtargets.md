Before using an AR tracking component, a ViroARTrackingTarget should be created and referenced by name in the component itself. Components that use ViroARTrackingTargets: ViroARImageMarker and ViroARObjectMarker  Example use: JavaScriptViroARTrackingTargets.createTargets({ &quot;ben&quot;: { source: require(&#x27;res/ben.png&#x27;), orientation: &quot;Up&quot;, physicalWidth: 0.157, // real world width in meters type: &#x27;Image&#x27; }, &quot;targetOne&quot;: { source: require(&#x27;res/targetOne.png&#x27;), orientation: &quot;Up&quot;, physicalWidth: 0.25, // real world width in meters type: &#x27;Image&#x27; } });  Methods static createTargets(targets:{[key:string]: any}) DescriptionThis function creates the targets specified by the given targets object with the properties specified below under Image Target Properties. static deleteTarget(targetName) DescriptionThis function takes the name of one registered target and deletes it. Types of Targets Image Targets Image targets should be used with ViroARImageMarkers and they specify the properties of a given image. Object Targets Object targets should be used with ViroARObjectMarker and they specify the properties of a given object. ViroTrackingTarget source TypeDescriptionImageSourcePropTypeThe source of the image to find. An asset can be loaded by using require() or { uri: &#x27;https://example.com/your-image.png&#x27; } orientation TypeDescription&#x27;Up&#x27; | &#x27;Down&#x27; | &#x27;Left&#x27; | &#x27;Right&#x27;Determines the orientation of the source image. physicalWidth TypeDescriptionnumberThe width of the image in the real world in meters. type TypeDescription&#x27;Image&#x27; | &#x27;Object&#x27;Determines the type of tracking target." style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
ViroARTrackingTargets contain the information required for AR tracking
components such as [ViroARImageMarker](viroarimagemarker.html) to work
properly.
Before using an AR tracking component, a `ViroARTrackingTarget` should be
created and referenced by name in the component itself.
Components that use `ViroARTrackingTargets`:
[ViroARImageMarker](viroarimagemarker.html) and
[ViroARObjectMarker](viroarobjectmarker.html)
######
Example use:JavaScript
    ViroARTrackingTargets.createTargets({
      "ben": {
        source: require('res/ben.png'),
        orientation: "Up",
        physicalWidth: 0.157, // real world width in meters  
        type: 'Image'
      },
      "targetOne": {
        source: require('res/targetOne.png'),
        orientation: "Up",
        physicalWidth: 0.25, // real world width in meters
        type: 'Image'
      }
    });
##
Methods###
static createTargets(targets:{[key:string]: any})Description  
---  
This function creates the targets specified by the given targets object with
the properties specified below under [Image Target
Properties](viroartrackingtargets.html#types-of-targets).  
###
static deleteTarget(targetName)Description  
---  
This function takes the name of one registered target and deletes it.  
##
Types of Targets##
Image TargetsImage targets should be used with [ViroARImageMarkers](viroarimagemarker.html)
and they specify the properties of a given image.
##
Object TargetsObject targets should be used with
[ViroARObjectMarker](viroarobjectmarker.html) and they specify the properties
of a given object.
##
ViroTrackingTarget###
sourceType| Description  
---|---  
[ImageSourcePropType](https://reactnative.dev/docs/image#source)| The source
of the image to find. An asset can be loaded by using `require()` or `{ uri:
'https://example.com/your-image.png' }`  
###
orientationType| Description  
---|---  
'Up' | 'Down' | 'Left' | 'Right'| Determines the orientation of the source image.  
###
physicalWidthType| Description  
---|---  
number| The width of the image in the real world in meters.  
###
typeType| Description  
---|---  
'Image' | 'Object'| Determines the type of tracking target.  
__Updated over 3 years ago