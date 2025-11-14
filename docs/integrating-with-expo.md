🚧ViroReact does NOT work with Expo GoYou must use a development client or expo prebuild to run an application using ViroReact. After installing the package, add the config plugin to the plugins array of your app.json or app.config.js. Then rebuild your app as described in the &quot;Adding custom native code&quot; guide. In your app.json plugins array: JSON{ ... &quot;plugins&quot;: [&quot;@reactvision/react-viro&quot;] }  Android Options Using GVR, OVR_MOBILE, and/or AR on android The default option is [&quot;AR&quot;, &quot;GVR&quot;].  In order to change the XR mode on android, you can configure the plugin as follows: Using one other option JSON{ ... &quot;plugins&quot;: [ [ &quot;@reactvision/react-viro&quot;, { &quot;android&quot;: { xRMode: &quot;GVR&quot; // or &quot;AR&quot; or &quot;OVR_MOBILE&quot; } } ] ], }  Using multiple options JSON{ ... &quot;plugins&quot;: [ [ &quot;@reactvision/react-viro&quot;, { &quot;android&quot;: { xRMode: [&quot;GVR&quot;, &quot;AR&quot;, &quot;OVR_MOBILE&quot;] } } ] ], }  You will also need to configure the android AppManifest.xml with some extra properties for this to work correctly. 1\. Generate the android folder Bashexpo prebuild --clean -p android --no-install  2\. Modify AppManifest.xml Add the code found under step 6 of the &quot;For VR&quot; step of the Install Android guide to your AppManifest.xml. For VR  If your app supports Cardboard or Daydream, you should add them as a category to the intent-filter in your activity:  XML&lt;intent-filter&gt; &lt;action android:name=&quot;android.intent.action.MAIN&quot; /&gt; &lt;category android:name=&quot;android.intent.category.LAUNCHER&quot; /&gt; &lt;!-- Add the following line for cardboard --&gt; &lt;category android:name=&quot;com.google.intent.category.CARDBOARD&quot; /&gt; &lt;!-- Add the following line for daydream --&gt; &lt;category android:name=&quot;com.google.intent.category.DAYDREAM&quot; /&gt; &lt;/intent-filter&gt;   To support GearVR, you need to add the following under the &lt;application&gt; node:  XML&lt;meta-data android:name=&quot;com.samsung.android.vr.application.mode&quot; android:value=&quot;vr_only&quot;/&gt;  For API level 30 or above If you are targetting API Level 30 or above, make sure to add the following lines to the &lt;manifest&gt;: XML&lt;queries&gt; &lt;package android:name=&quot;com.google.ar.core&quot; /&gt; &lt;/queries&gt;  iOS options There are 4 InfoPlist strings that are required for applications using Viro. ViroReact provides app.config level configuration for these InfoPlist strings and defaults for expo projects. json{ ... &quot;plugins&quot;: [ [ &quot;@reactvision/react-viro&quot;, { &quot;ios&quot;: { &quot;cameraUsagePermission&quot;: &quot;$(PRODUCT_NAME) uses your camera for AR experiences. This is a custom InfoPlist string!&quot;, &quot;microphoneUsagePermission&quot;: &quot;$(PRODUCT_NAME) uses your microphone for AR experiences. This is a custom InfoPlist string!&quot;, &quot;photosPermission&quot;: &quot;$(PRODUCT_NAME) would like to read photos for AR experiences. This is a custom InfoPlist string!&quot;, &quot;savephotosPermission&quot;: &quot;$(PRODUCT_NAME) would like to save photos to your library during AR experiences. This is a custom InfoPlist string!&quot; } } ] ], }  Running your expo app iOS expo run:ios will generate the ios/ folder and will run pod install in the project. Bashexpo run:ios -d &lt;device id | device name&gt;  Android Bashexpo run:android " style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
##
Installation instructions> ## 🚧
>
> ViroReact does NOT work with Expo Go
>
> You must use a [development
> client](https://docs.expo.dev/develop/development-builds/introduction/) or
> [expo prebuild](https://docs.expo.dev/workflow/prebuild/) to run an
> application using ViroReact.
After installing the package, add the [config
plugin](https://docs.expo.io/guides/config-plugins/) to the
[`plugins`](https://docs.expo.io/versions/latest/config/app/#plugins) array of
your `app.json` or `app.config.js`. Then rebuild your app as described in the
["Adding custom native code"](https://docs.expo.io/workflow/customizing/)
guide.
In your app.json `plugins` array:
JSON
    {
      ... 
      "plugins": ["@reactvision/react-viro"]
    }
###
Android Options####
Using GVR, OVR_MOBILE, and/or AR on androidThe default option is `["AR", "GVR"]`.
In order to change the XR mode on android, you can configure the plugin as
follows:
#####
Using one other optionJSON
    {
     ...
     "plugins": [
        [
          "@reactvision/react-viro",
          {
            "android": {
            	xRMode: "GVR" // or "AR" or "OVR_MOBILE"
            }
          }
        ]
      ],
    }
#####
Using multiple optionsJSON
    {
     ...
     "plugins": [
        [
          "@reactvision/react-viro",
          {
            "android": {
            	xRMode: ["GVR", "AR", "OVR_MOBILE"]
            }
          }
        ]
      ],
    }
You will also need to configure the android AppManifest.xml with some extra
properties for this to work correctly.
####
1\. Generate the android folderBash
    expo prebuild --clean -p android --no-install
####
2\. Modify AppManifest.xmlAdd the code found under step 6 of the "For VR" step of the [Install
Android](https://github.com/ViroCommunity/viro/blob/main/readmes/INSTALL_ANDROID.md#for-
vr) guide to your AppManifest.xml.
####
For VR  * If your app supports Cardboard or Daydream, you should add them as a category to the `intent-filter` in your activity:
XML
  * To support GearVR, you need to add the following under the `` node:
XML
####
For API level 30 or aboveIf you are targetting API Level 30 or above, make sure to add the following
lines to the ``:
XML
###
iOS optionsThere are 4 InfoPlist strings that are required for applications using Viro.
ViroReact provides `app.config` level configuration for these InfoPlist
strings and defaults for expo projects.
json
    {
     ...
     "plugins": [
        [
          "@reactvision/react-viro",
          {
            "ios": {
            	"cameraUsagePermission": "$(PRODUCT_NAME) uses your camera for AR experiences. This is a custom InfoPlist string!",
              "microphoneUsagePermission": "$(PRODUCT_NAME) uses your microphone for AR experiences. This is a custom InfoPlist string!",
              "photosPermission": "$(PRODUCT_NAME) would like to read photos for AR experiences. This is a custom InfoPlist string!",
              "savephotosPermission": "$(PRODUCT_NAME) would like to save photos to your library during AR experiences. This is a custom InfoPlist string!"
            }
          }
        ]
      ],
    }
##
Running your expo app####
iOS`expo run:ios` will generate the ios/ folder and will run `pod install` in the
project.
Bash
    expo run:ios -d 
####
AndroidBash
    expo run:android
__Updated about 1 month ago