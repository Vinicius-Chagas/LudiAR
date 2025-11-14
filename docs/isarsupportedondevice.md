async
isARSupportedOnDevice() Example Use: To take advantage of this utility, simply
import ViroUtils on top of your scene and create an alias to the function like
below: typescriptimport {
ViroUtils } from &#x27;@reactvision/react-viro&#x27;; try { const result =
await isARSupportedOnDevice(); console.log(result.isARSupported); } catch
(err) { console.error(err); } " style="margin-
left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-
bindable" data-testid="RDMD">
We provide a helpful utility module `isARSupportedOnDevice` to enable our
developers to check their app users' device for compatibility to support their
AR experiences conditionally. This way app developers can check and render
appropriate views depending on whether the device is supported by the
underlying AR system.
###
async isARSupportedOnDevice()#####
Example Use:To take advantage of this utility, simply import ViroUtils on top of your
scene and create an alias to the function like below:
typescript
    import {  ViroUtils } from '@reactvision/react-viro';
    try {
      const result = await isARSupportedOnDevice();
      console.log(result.isARSupported);
    } catch (err) {
      console.error(err);
    }
__Updated over 1 year ago