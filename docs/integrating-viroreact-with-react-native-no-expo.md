Linking (You must do this - we
do not support auto-linking) If you&#x27;re unsure about which
file to edit or where to put specified the lines, we have added links to how
this is done in our starter-kit repo. iOS Linking (You
must do this - we do not yet support auto-
linking) ❗️iOS Simulators are currently not supportedAR
does not work on iOS simulators. If you are getting an error that
looks like: ARWorldTrackingConfiguration setAutoFocusEnabled:
unrecognised, that is expected. There is not any camera support for the
iOS Simulator.See running-on-device in the official react-native
docs. 1\. Add
the following lines to your ios/Podfile below use_react_native!(:path =&gt;
config[&quot;reactNativePath&quot;]): YAMLpod &#x27;ViroReact&#x27;, :path =&gt;
&#x27;../node_modules/@reactvision/react-viro/ios/&#x27; pod
&#x27;ViroKit&#x27;, :path =&gt; &#x27;../node_modules/@reactvision/react-
viro/ios/dist/ViroRenderer/&#x27;   See this example 2\. Install the iOS native pods by
running: console$ npx pod-install
 or inside the ios directory... console$ pod install 
3\. If you are going to be doing any AR
then you will need to request permissions for using the camera in the ios/APP_NAME/info.plist by adding the following: XML &lt;key&gt;NSCameraUsageDescription&lt;/key&gt;
&lt;string&gt;The camera is needed for AR functionality&lt;/string&gt;
 The string can be more appropriate to the needs of
your app. See an example
here. 4\. You&#x27;re done! You can now run
npx
react-native ios. Remember, if you are
using AR, you need to run on a real
device. Android Linking
(You must do this - we do not yet support auto-
linking) ❗️We currently do not support the Android
EmulatorWe have this support in our backlog and will address it
soon. 1\. In your android/build.gradle Bump the
minimum SDK version to at least 24, and the gradle plugin to at least 4.1.1: Groovybuildscript{ ext{ ...
minSdkVersion = 24 ... } ... dependencies{
classpath(&#x27;com.android.tools.build:gradle:4.1.1&#x27;) } }
  See an example here.
2\.
In your android/app/build.gradle Add the following lines to the
dependencies section: Groovydependencies { implementation
fileTree(dir: &quot;libs&quot;, include: [&quot;*.jar&quot;]) //noinspection
GradleDynamicVersion implementation &quot;com.facebook.react:react-
native:+&quot; // From node_modules // Add these lines implementation
project(&#x27;:gvr_common&#x27;) implementation
project(&#x27;:arcore_client&#x27;) implementation project(path:
&#x27;:react_viro&#x27;) implementation project(path:
&#x27;:viro_renderer&#x27;) implementation
&#x27;androidx.media3:media3-exoplayer:1.1.1&#x27; implementation
&#x27;androidx.media3:media3-exoplayer-dash:1.1.1&#x27; implementation
&#x27;androidx.media3:media3-exoplayer-hls:1.1.1&#x27; implementation
&#x27;androidx.media3:media3-exoplayer-smoothstreaming:1.1.1&#x27;
implementation &#x27;com.google.protobuf.nano:protobuf-javanano:3.1.0&#x27;
  See an example
here. 3\. In your android/settings.gradle Add the following lines to the
end: Groovyinclude
&#x27;:react_viro&#x27;, &#x27;:arcore_client&#x27;, &#x27;:gvr_common&#x27;,
&#x27;:viro_renderer&#x27; project(&#x27;:arcore_client&#x27;).projectDir =
new File(&#x27;../node_modules/@reactvision/react-
viro/android/arcore_client&#x27;) project(&#x27;:gvr_common&#x27;).projectDir
= new File(&#x27;../node_modules/@reactvision/react-
viro/android/gvr_common&#x27;) project(&#x27;:viro_renderer&#x27;).projectDir
= new File(&#x27;../node_modules/@reactvision/react-
viro/android/viro_renderer&#x27;) project(&#x27;:react_viro&#x27;).projectDir
= new File(&#x27;../node_modules/@reactvision/react-
viro/android/react_viro&#x27;)   See an example
here. 4\. In your
android/gradle/wrapper/gradle-wrapper.properties set the
distributionUrl to at least 6.5: propertiesdistributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip
  See an example here. 5\. Now add the Viro
package to your MainApplication:
📘Viro works with both Kotlin and
Java.If your React Native application has a android/app/src/main/java/.../MainApplication.kt file,
follow ONLY the instructions for Kotlin.If your React
Native application has a android/app/src/main/java/.../MainApplication.java file,
follow ONLY the instructions for Java. Kotlin Add the following line to the end of the import
list: kotlinimport
com.viromedia.bridge.ReactViroPackage  Add the
imported package inside the getPackages method: Kotlinoverride fun getPackages():
List&lt;ReactPackage&gt; = PackageList(this).packages.apply { // Packages that
cannot be autolinked yet can be added manually here, for example: //
add(MyReactNativePackage())
add(ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf(&quot;AR&quot;))) }
override fun getJSMainModuleName(): String = &quot;index&quot; override fun
getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG override val
isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED override
val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED }
 You can replace the string AR with one of the
following depending on your needs: GVR, OVR_MOBILE, AR.  See a Kotlin example here. Java Add the following line to the end of the import
list: Javaimport
com.viromedia.bridge.ReactViroPackage;  Add the
imported package inside the getPackages method: Java@Override protected List&lt;ReactPackage&gt;
getPackages() { @SuppressWarnings(&quot;UnnecessaryLocalVariable&quot;)
List&lt;ReactPackage&gt; packages = new PackageList(this).getPackages(); //
Add this line packages.add(new
ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf(&quot;AR&quot;)));
return packages; }  See a Java example here. You can replace the string AR with one
of the following depending on your needs: GVR, OVR_MOBILE, AR. 6\. In your android/app/src/main/AndroidManifest.xml: For
AR Ensure the &lt;manifest&gt;
has the tools namespace schema: XML&lt;manifest ...
xmlns:tools=&quot;http://schemas.android.com/tools&quot; ...&gt;
 Add the following line to the &lt;application&gt; node, this enables ARCore: XML&lt;meta-data android:name=&quot;com.google.ar.core&quot;
android:value=&quot;optional&quot; /&gt; 
Note: If you want to restrict your app to ARCore-only devices, set
the android:value to &quot;required&quot; Add the
camera permission to the &lt;manifest&gt; node below other permissions: XML&lt;uses-permission
android:name=&quot;android.permission.CAMERA&quot; /&gt;
 There are quite a few other camera-related
permissions and features you might also want to specify, depending on your
app: XML&lt;!-- You may need these if
doing any screen recording from within the app --&gt; &lt;uses-permission
android:name=&quot;android.permission.READ_EXTERNAL_STORAGE&quot;/&gt;
&lt;uses-permission
android:name=&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;/&gt;
&lt;!-- Other camera related features --&gt; &lt;uses-feature
android:name=&quot;android.hardware.camera&quot; /&gt; &lt;uses-feature
android:name=&quot;android.hardware.camera.autofocus&quot;
android:required=&quot;false&quot; tools:replace=&quot;required&quot;/&gt;
&lt;!-- Specifying OpenGL verison or requirements --&gt; &lt;uses-feature
android:glEsVersion=&quot;0x00030000&quot; android:required=&quot;false&quot;
tools:node=&quot;remove&quot; tools:replace=&quot;required&quot; /&gt; &lt;!--
Usage of accelerometer and gyroscope --&gt; &lt;uses-feature
android:name=&quot;android.hardware.sensor.accelerometer&quot;
android:required=&quot;false&quot; tools:replace=&quot;required&quot; /&gt;
&lt;uses-feature android:name=&quot;android.hardware.sensor.gyroscope&quot;
android:required=&quot;false&quot; tools:replace=&quot;required&quot; /&gt;
 For VR If your app supports Cardboard or Daydream, you
should add them as a category to the intent-filter in your activity:
XML&lt;intent-filter&gt; &lt;action
android:name=&quot;android.intent.action.MAIN&quot; /&gt; &lt;category
android:name=&quot;android.intent.category.LAUNCHER&quot; /&gt; &lt;!-- Add
the following line for cardboard --&gt; &lt;category
android:name=&quot;com.google.intent.category.CARDBOARD&quot; /&gt; &lt;!--
Add the following line for daydream --&gt; &lt;category
android:name=&quot;com.google.intent.category.DAYDREAM&quot; /&gt;
&lt;/intent-filter&gt;  To support GearVR, you
need to add the following under the &lt;application&gt; node: XML&lt;meta-data
android:name=&quot;com.samsung.android.vr.application.mode&quot;
android:value=&quot;vr_only&quot;/&gt;  For API level 30 or
above  If you are targetting API Level 30 or above, make sure to
add the following lines to the &lt;manifest&gt;: XML&lt;queries&gt; &lt;package
android:name=&quot;com.google.ar.core&quot; /&gt; &lt;/queries&gt;
 Optional - when
debugging Add the following line as an attribute on the &lt;application&gt; node. This should only used when
debugging and is not recommended for production (you may want to inject the
value using manifestPlaceholders set for specific
build types). XML&lt;application
android:usesCleartextTraffic=&quot;true&quot; ... 
See an example here. This example is for AR only. 7\. You&#x27;re
done! You can now run npx react-native run-android to upload the app to your
device."
style="margin-left:31px" class="rm-Markdown markdown-body rm-Markdown
markdown-body ng-non-bindable" data-testid="RDMD">
Below are the instructions you should follow when integrating ViroReact into
your React Native app if you _**are not**_ using Expo.
##
Linking (You _must_ do this - we do not support auto-linking)
[](integrating-viroreact-with-react-native-no-expo.html#linking-you-must-do-
this---we-do-not-support-auto-linking)
If you're unsure about which file to edit or where to put specified the lines,
we have added links to how this is done in our [starter-
kit](https://github.com/ViroCommunity/starter-kit) repo.
###
iOS Linking (You **_must_** do this - we do not yet support auto-linking)
[](integrating-viroreact-with-react-native-no-expo.html#ios-linking-you-must-
do-this---we-do-not-yet-support-auto-linking)
> ## ❗️
>
> iOS Simulators are currently not supported
>
> AR _does not work on iOS simulators_. If you are getting an error that looks
> like: `ARWorldTrackingConfiguration setAutoFocusEnabled: unrecognised`, that
> is expected. There is not any camera support for the iOS Simulator.
>
> See [running-on-device](https://reactnative.dev/docs/running-on-device) in
> the official react-native docs.
####
1\. Add the following lines to your `ios/Podfile` below
`use_react_native!(:path => config["reactNativePath"])`:
[](integrating-viroreact-with-react-native-no-expo.html#1-add-the-following-
lines-to-your-iospodfile-below-use_react_nativepath--configreactnativepath)
YAML
    pod 'ViroReact', :path => '../node_modules/@reactvision/react-viro/ios/'
    pod 'ViroKit', :path => '../node_modules/@reactvision/react-viro/ios/dist/ViroRenderer/'
See this [example](https://github.com/ViroCommunity/starter-
kit/blob/master/ios/Podfile)
####
2\. Install the iOS native pods by running:
[](integrating-viroreact-with-react-native-no-expo.html#2-install-the-ios-
native-pods-by-running)
console
    $ npx pod-install
or inside the `ios` directory...
console
    $ pod install
####
3\. If you are going to be doing any AR then you will need to request
permissions for using the camera in the `ios/APP_NAME/info.plist` by adding
the following:
[](integrating-viroreact-with-react-native-no-expo.html#3-if-you-are-going-to-
be-doing-any-ar-then-you-will-need-to-request-permissions-for-using-the-
camera-in-the-iosapp_nameinfoplist-by-adding-the-following)
XML
        NSCameraUsageDescription
        The camera is needed for AR functionality
The `string` can be more appropriate to the needs of your app.
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/ios/myviroapp/Info.plist#L40) here.
####
4\. You're done! You can now run `npx react-native ios`.
[](integrating-viroreact-with-react-native-no-expo.html#4-youre-done-you-can-
now-run-npx-react-native-ios)
Remember, if you are using AR, you _need to run on a[real
device](https://reactnative.dev/docs/running-on-device)_.
###
Android Linking (You **_must_** do this - we do not yet support auto-linking)
[](integrating-viroreact-with-react-native-no-expo.html#android-linking-you-
must-do-this---we-do-not-yet-support-auto-linking)
> ## ❗️
>
> We currently do not support the Android Emulator
>
> We have this support in our backlog and will address it soon.
####
1\. In your `android/build.gradle` Bump the minimum SDK version to at least
`24`, and the gradle plugin to at least `4.1.1`:
[](integrating-viroreact-with-react-native-no-expo.html#1-in-your-
androidbuildgradle-bump-the-minimum-sdk-version-to-at-least-24-and-the-gradle-
plugin-to-at-least-411)
Groovy
    buildscript{
      ext{
        ...
        minSdkVersion = 24
        ...
      }
      ...
      dependencies{
        classpath('com.android.tools.build:gradle:4.1.1')
      }
    }
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/android/build.gradle) here.
####
2\. In your `android/app/build.gradle` Add the following lines to the
dependencies section:
[](integrating-viroreact-with-react-native-no-expo.html#2-in-your-
androidappbuildgradle-add-the-following-lines-to-the-dependencies-section)
Groovy
    dependencies {
      implementation fileTree(dir: "libs", include: ["*.jar"])
      //noinspection GradleDynamicVersion
      implementation "com.facebook.react:react-native:+"  // From node_modules
      // Add these lines
      implementation project(':gvr_common')
      implementation project(':arcore_client')
      implementation project(path: ':react_viro')
      implementation project(path: ':viro_renderer')
      implementation 'androidx.media3:media3-exoplayer:1.1.1'
      implementation 'androidx.media3:media3-exoplayer-dash:1.1.1'
      implementation 'androidx.media3:media3-exoplayer-hls:1.1.1'
      implementation 'androidx.media3:media3-exoplayer-smoothstreaming:1.1.1'
      implementation 'com.google.protobuf.nano:protobuf-javanano:3.1.0'
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/android/app/build.gradle) here.
####
3\. In your `android/settings.gradle` Add the following lines to the end:
[](integrating-viroreact-with-react-native-no-expo.html#3-in-your-
androidsettingsgradle-add-the-following-lines-to-the-end)
Groovy
    include ':react_viro', ':arcore_client', ':gvr_common', ':viro_renderer'
    project(':arcore_client').projectDir = new File('../node_modules/@reactvision/react-viro/android/arcore_client')
    project(':gvr_common').projectDir = new File('../node_modules/@reactvision/react-viro/android/gvr_common')
    project(':viro_renderer').projectDir = new File('../node_modules/@reactvision/react-viro/android/viro_renderer')
    project(':react_viro').projectDir = new File('../node_modules/@reactvision/react-viro/android/react_viro')
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/android/settings.gradle) here.
####
4\. In your `android/gradle/wrapper/gradle-wrapper.properties` set the
`distributionUrl` to at least 6.5:
[](integrating-viroreact-with-react-native-no-expo.html#4-in-your-
androidgradlewrappergradle-wrapperproperties-set-the-distributionurl-to-at-
least-65)
properties
    distributionUrl=https\://services.gradle.org/distributions/gradle-6.5-bin.zip
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/android/gradle/wrapper/gradle-wrapper.properties) here.
####
5\. Now add the Viro package to your `MainApplication`:
[](integrating-viroreact-with-react-native-no-expo.html#5-now-add-the-viro-
package-to-your-mainapplication)
> ## 📘
>
> Viro works with both Kotlin and Java.
>
> If your React Native application has a
> `android/app/src/main/java/.../MainApplication.kt` file, follow **ONLY** the
> instructions for Kotlin.
>
> If your React Native application has a
> `android/app/src/main/java/.../MainApplication.java` file, follow **ONLY**
> the instructions for Java.
#####
KotlinAdd the following line to the end of the import list:
kotlin
    import com.viromedia.bridge.ReactViroPackage
Add the imported package inside the `getPackages` method:
Kotlin
    override fun getPackages(): List =
      PackageList(this).packages.apply {
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // add(MyReactNativePackage())
        add(ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf("AR")))
      }
      override fun getJSMainModuleName(): String = "index"
      override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG
      override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
      override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
    }
You can replace the string `AR` with one of the following depending on your
needs: `GVR`, `OVR_MOBILE`, `AR`.
See a Kotlin [example](https://github.com/NativeVision/starter-
kit/blob/0db229a0cc4bf69340af70bae350c8e82be55a24/android/app/src/main/java/com/virostarterkit/MainApplication.kt)
here.
#####
JavaAdd the following line to the end of the import list:
Java
    import com.viromedia.bridge.ReactViroPackage;
Add the imported package inside the `getPackages` method:
Java
    @Override
    protected List getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List packages = new PackageList(this).getPackages();
      // Add this line
      packages.add(new ReactViroPackage(ReactViroPackage.ViroPlatform.valueOf("AR")));
      return packages;
    }
See a Java [example](https://github.com/NativeVision/starter-
kit/blob/7e654f0f5877e52a715b4fd9a0457e4aca87537b/android/app/src/main/java/com/myviroapp/MainApplication.java)
here.
You can replace the string `AR` with one of the following depending on your
needs: `GVR`, `OVR_MOBILE`, `AR`.
####
6\. In your `android/app/src/main/AndroidManifest.xml`:
[](integrating-viroreact-with-react-native-no-expo.html#6-in-your-
androidappsrcmainandroidmanifestxml)
#####
**For AR**Ensure the `` has the `tools` namespace schema:
XML
Add the following line to the `` node, this enables ARCore:
XML
_Note_ : If you want to restrict your app to ARCore-only devices, set the
`android:value` to `"required"`
Add the camera permission to the `` node below other permissions:
XML
There are quite a few other camera-related permissions and features you might
also want to specify, depending on your app:
XML
#####
**For VR**If your app supports Cardboard or Daydream, you should add them as a category
to the `intent-filter` in your activity:
XML
To support GearVR, you need to add the following under the ``
node:
XML
#####
**For API level 30 or above**
[](integrating-viroreact-with-react-native-no-expo.html#for-api-level-30-or-
above)
If you are targetting API Level 30 or above, make sure to add the following
lines to the ``:
XML
#####
**Optional - when debugging**
[](integrating-viroreact-with-react-native-no-expo.html#optional---when-
debugging)
Add the following line as an attribute on the `` node. This
should only used when debugging and is not recommended for production (you may
want to inject the value using
[manifestPlaceholders](https://developer.android.com/studio/build/manifest-
build-variables) set for specific [build
types](https://developer.android.com/studio/build/build-variants)).
XML
    <application
        android:usesCleartextTraffic="true"
        ...
See an [example](https://github.com/ViroCommunity/starter-
kit/blob/master/android/app/src/main/AndroidManifest.xml) here. This example
is for AR only.
####
7\. You're done! You can now run `npx react-native run-android` to upload the
app to your device.
[](integrating-viroreact-with-react-native-no-expo.html#7-youre-done-you-can-
now-run-npx-react-native-run-android-to-upload-the-app-to-your-device)
__Updated about 1 month ago