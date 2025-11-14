The source asset accepts both local and remote resources. To
use a local resource, use the require function as shown: JavaScript&lt;Viro360Image
source={require(&#x27;res/360_park.html&#x27;)} /&gt;
 In debug builds, local resources are pulled from
your running package server. In release builds, local resources are bundled
with your application.  To use a remote resource, simply set the
source URI, as in the following example: JavaScript&lt;Viro360Image
source={{uri:&quot;https://www.mywebsite.com/360_park.jpg&quot;}} /&gt;
 🚧Asset naming guidelines The package server
and asset bundler will not properly serve assets that have spaces, hyphens,
parenthesis, or other symbols in their name.2. Assets with the same name but
different extensions will not work on Android. Provide each asset a unique
name.  Supported Assets The following assets are
supported out of the box by React Native, meaning they will be bundled with
your application in release mode, and vended by your package server in debug
mode. Image formats: &#x27;jpg&#x27;,
&#x27;jpeg&#x27;, &#x27;png&#x27;, &#x27;gif&#x27; Video
formats: &#x27;m4v&#x27;, &#x27;mov&#x27;, &#x27;mp4&#x27;,
&#x27;mpeg&#x27;, &#x27;mpg&#x27;, &#x27;webm&#x27; Audio
formats: &#x27;aac&#x27;, &#x27;aiff&#x27;, &#x27;caf&#x27;,
&#x27;m4a&#x27;, &#x27;mp3&#x27;, &#x27;wav&#x27; In addition, Viro
adds support for 3D object assets: 3D Object formats:
obj, mtl, vrx (Viro Custom 3d model format), gltf, glb, bin, arobject
📘Viro adds support for these
formats only for projects created through the react-viro-cli script. For
projects not created with this script, these formats must be added manually,
as per the next section. Adding Asset Types to React
Native 🚧Case
SensitivityAsset types are case sensitive! For example,
&#x27;JPG&#x27; is not supported as an extension by default, while
&#x27;jpg&#x27; is. To add additional asset types, edit
(or create if it does not exist) the metro.config.js file at your
project&#x27;s root (the folder where node_modules is contained). In this
file, edit assetExts to return the additional asset types you would
like to include. JavaScript// Learn more
https://docs.expo.io/guides/customizing-metro const { getDefaultConfig } =
require(&quot;metro-config&quot;); module.exports = (async () =&gt; { const {
resolver: { assetExts }, } = await getDefaultConfig(); return { transformer: {
getTransformOptions: async () =&gt; ({ transform: { experimentalImportSupport:
false, inlineRequires: true, }, }), }, resolver: { assetExts: [ ...assetExts,
&quot;obj&quot;, &quot;mtl&quot;, &quot;mp3&quot;, &quot;JPG&quot;,
&quot;vrx&quot;, &quot;hdr&quot;, &quot;gltf&quot;, &quot;glb&quot;,
&quot;bin&quot;, &quot;arobject&quot;, &quot;gif&quot;, ], }, }; })();
 Adding Asset
Types to Expo The only difference between this configuration and the
react native configuration is the getDefaultConfig comes from expo in the expo
config. JavaScript// Learn more
https://docs.expo.io/guides/customizing-metro const { getDefaultConfig } =
require(&quot;expo/metro-config&quot;); module.exports = (async () =&gt; {
const { resolver: { assetExts }, } = await getDefaultConfig(__dirname); return
{ transformer: { getTransformOptions: async () =&gt; ({ transform: {
experimentalImportSupport: false, inlineRequires: true, }, }), }, resolver: {
assetExts: [ ...assetExts, &quot;obj&quot;, &quot;mtl&quot;, &quot;mp3&quot;,
&quot;JPG&quot;, &quot;vrx&quot;, &quot;hdr&quot;, &quot;gltf&quot;,
&quot;glb&quot;, &quot;bin&quot;, &quot;arobject&quot;, &quot;gif&quot;, ], },
}; })(); " style="margin-left:31px" class="rm-
Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-
testid="RDMD">
Assets are text or binary resources that are needed for your app. These
include images, textures, sounds, videos, and more. For the vast majority of
components, including ``, ``, ``, and more,
the asset to be used is specified via the `source` attribute.
The `source` asset accepts both local and remote resources. To use a local
resource, use the `require` function as shown:
JavaScript
In debug builds, local resources are pulled from your running package server.
In release builds, local resources are bundled with your application.
To use a remote resource, simply set the `source` URI, as in the following
example:
JavaScript
> ## 🚧
>
> Asset naming guidelines
>
>   1. The package server and asset bundler will not properly serve assets
> that have spaces, hyphens, parenthesis, or other symbols in their name.2.
> Assets with the same name but different extensions will not work on Android.
> Provide each asset a unique name.
>
##
Supported AssetsThe following assets are supported out of the box by React Native, meaning
they will be bundled with your application in release mode, and vended by your
package server in debug mode.
**Image formats** : 'jpg', 'jpeg', 'png', 'gif'  
**Video formats** : 'm4v', 'mov', 'mp4', 'mpeg', 'mpg', 'webm'  
**Audio formats** : 'aac', 'aiff', 'caf', 'm4a', 'mp3', 'wav'
In addition, Viro adds support for 3D object assets:
**3D Object formats** : obj, mtl, vrx (Viro Custom 3d model format), gltf,
glb, bin, arobject
> ## 📘
>
> Viro adds support for these formats only for projects created through the
> react-viro-cli script. For projects not created with this script, these
> formats must be added manually, as per the next section.
##
Adding Asset Types to React Native> ## 🚧
>
> Case Sensitivity
>
> Asset types are case sensitive! For example, 'JPG' is not supported as an
> extension by default, while 'jpg' is.
To add additional asset types, edit (or create if it does not exist) the
metro.config.js file at your project's root (the folder where node_modules is
contained). In this file, edit `assetExts` to return the additional asset
types you would like to include.
JavaScript
    const { getDefaultConfig } = require("metro-config");
    module.exports = (async () => {
      const {
        resolver: { assetExts },
      } = await getDefaultConfig();
      return {
        transformer: {
          getTransformOptions: async () => ({
            transform: {
              experimentalImportSupport: false,
              inlineRequires: true,
            },
          }),
        },
        resolver: {
          assetExts: [
            ...assetExts,
            "obj",
            "mtl",
            "mp3",
            "JPG",
            "vrx",
            "hdr",
            "gltf",
            "glb",
            "bin",
            "arobject",
            "gif",
          ],
        },
      };
    })();
##
Adding Asset Types to ExpoThe only difference between this configuration and the react native
configuration is the getDefaultConfig comes from expo in the expo config.
JavaScript
    const { getDefaultConfig } = require("expo/metro-config");
    module.exports = (async () => {
      const {
        resolver: { assetExts },
      } = await getDefaultConfig(__dirname);
      return {
        transformer: {
          getTransformOptions: async () => ({
            transform: {
              experimentalImportSupport: false,
              inlineRequires: true,
            },
          }),
        },
        resolver: {
          assetExts: [
            ...assetExts,
            "obj",
            "mtl",
            "mp3",
            "JPG",
            "vrx",
            "hdr",
            "gltf",
            "glb",
            "bin",
            "arobject",
            "gif",
          ],
        },
      };
    })();
  * [__Table of Contents](assets.html#)
  *     * [Supported Assets](assets.html#supported-assets)
    * [Adding Asset Types to React Native](assets.html#adding-asset-types-to-react-native)
    * [Adding Asset Types to Expo](assets.html#adding-asset-types-to-expo)