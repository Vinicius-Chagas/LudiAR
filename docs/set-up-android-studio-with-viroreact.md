Prerequisites 🚧Have you run through the Prerequisites guide?Run
through steps on the Prerequisites guide before beginning this guide.
1\. Project Structure If you&#x27;ve completed the
Quick Start guide, you should be set up and the HelloWorld project works on
the Viro Media App. Your workspace should look similar to the following:
ShellViroSample/├── App.js├── android├── app.json├── bin├──
index.android.js├── index.ios.js├── index.js├── ios├── js├── node_modules├──
package.json├── metro.config.js├── rn-cli.config.js├── setup-ide.sh
 📘What each file/directory is for App.js - the
main Javascript file containing the logic for the application android -
the directory containing the Android source app.json - miscellaneous
React Native property file bin - contains various scripts
index.android.js - legacy file that points to App.js to launch your
application for Android index.ios.js - legacy file that points to App.js
to launch your application for iOS index.js - entry file that points to
the main application in App.js ios - directory containing the iOS
source js - directory containing the Javascript source node_modules -
directory containing all the node modules as specified by the package.json
file package.json - file that tells node what modules are required
metro.config.js - file that configures the React Native CLI / React
Native&#x27;s metro bundler (we use it to whitelist new file extension for the
packager server)  rn-cli.config.js - (LEGACY; used by older React Native
bundler. This older config file would be removed in a subsequent version of
react-viro) file that configures the React Native CLI (we use it to whitelist
new file extensions for the packager server). * setup-ide.sh - script used to
automatically set up Xcode and Android Studio from scratch.
 2a. [OSX/Linux ONLY] Run
setup-
ide.sh Script In a terminal window, navigate to your Viro project root
(not Android project root) and run the following:
./setup-
ide.sh android This will set up the Android project to work with
Viro. 2b.[Windows
ONLY] For Windows use our Windows Setup Diff file to modify your Android gradle
and manifest files. 3\. Android Studio Android Studio is the IDE
(Integrated Developer Environment) used for Android development and we will
need it to run and test your Viro React application.  Install a recent version of the
JDK Android Studio requires a recent version of the JDK. If
you don&#x27;t have one installed, install one from here Install Android
Studio Download and install Android Studio from here. Configuring
Android Studio Ensure that Android Studio is configured with at least
the following:  Google APIs Android SDK Platform 28
Sources for Android 28  by selecting Custom installation
while installing Android Studio or by installing them from the SDK Manager
under Preferences -&gt; Appearance &amp; Behavior -&gt; System Settings
-&gt; Android SDK 🚧Building AR/ARCore With Android StudioBecause of
existing issues with AR Core, please ensure that you have disabled instant run in Android
Studio before building your application! 4\. Open your project in
Android Studio Open Android Studio, if you see a
welcome screen, select Open an existing Android Studio project, otherwise open
the project with File -&gt; Open. When the file
explorer menu appears navigate to your Project location and open the android/build.gradle file 📘Android EmulatorViro currently does not support
development with the Android Emulator. You will need to develop with your
device to use the Viro platform, at this time. 5\. Enable
Developer Mode on Android Device  Enable Developer Mode on your Android device
Enable USB Debugging within the
Developer Menu  6\. Run the
Application  Connect your device to your computer via USB.
When a pop-up appears asking to &quot;Allow USB Debugging?&quot;, select
&quot;OK&quot;. In your terminal, run this command adb reverse tcp:8081
tcp:8081 which will reverse tether your device to your development
machine. (Note: the adb command can be found under platform-tools wherever your
sdk is installed, it&#x27;s recommended that you add this to your
environment&#x27;s $PATH variable.). Run &#x27;npm start&#x27; from
the project root directory to start the package server Ensure the
target to the left of the green run button is set to &quot;app&quot; and tap
on the green run button (see image below).   Run the application and you should see the
Hello World scene. Congratulations, you now have Viro set up
and running!  Additional
Platforms On Android, we support 3 VR Platforms: Google
Daydream, Samsung/Oculus GearVR and Google Cardboard. For the Viro Platform
however, we only have 2 build flavors:   GVR - for Google Daydream
and Cardboard OVR_MOBILE - for Samsung/Oculus GearVR.  From Android Studio One way to toggle between the
builds is to expand the Build Variants panel on the left edge of your Android
Studio window and select either gvrDebug and ovrDebug.  From the command
line Another
way to build your native app is from the command line. Since Viro was built
with the goal of working like any other React Native package, you can take
advantage of the React Native CLI to build, package and deploy your
application to your device. From the command line, you can run this
command with one of the variants from your project&#x27;s root directory:
react-
native run-android --variant=&lt;gvrDebug|ovrDebug&gt; to build
your app for a selected variant. Next Steps Check out our Tutorial if
you haven&#x27;t yet gone through it! Problems with
installation? Need extra help? Post your issue here." style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
> ## ❗️
>
> Android Emulator NOT supported
>
> ViroReact doesn't currently support the Android Emulator
#
Prerequisites> ## 🚧
>
> Have you run through the Prerequisites guide?
>
> Run through steps on the [Prerequisites](prerequisites.html) guide before
> beginning this guide.
#
1\. Project StructureIf you've completed the Quick Start guide, you should be set up and the
HelloWorld project works on the Viro Media App. Your workspace should look
similar to the following:
Shell
    ViroSample/├── App.js├── android├── app.json├── bin├── index.android.js├── index.ios.js├── index.js├── ios├── js├── node_modules├── package.json├── metro.config.js├── rn-cli.config.js├── setup-ide.sh
> ## 📘
>
> What each file/directory is for
>
>   * App.js - the main Javascript file containing the logic for the
> application _android - the directory containing the Android source_ app.json
> - miscellaneous React Native property file _bin - contains various scripts_
> index.android.js - legacy file that points to App.js to launch your
> application for Android _index.ios.js - legacy file that points to App.js to
> launch your application for iOS_ index.js - entry file that points to the
> main application in App.js _ios - directory containing the iOS source_ js -
> directory containing the Javascript source _node_modules - directory
> containing all the node modules as specified by the package.json file_
> package.json - file that tells node what modules are required
> _metro.config.js - file that configures the React Native CLI / React Native
> 's metro bundler (we use it to whitelist new file extension for the packager
> server) _ rn-cli.config.js - (LEGACY; used by older React Native bundler.
> This older config file would be removed in a subsequent version of react-
> viro) file that configures the React Native CLI (we use it to whitelist new
> file extensions for the packager server). * setup-ide.sh - script used to
> automatically set up Xcode and Android Studio from scratch.
>
#
2a. **[OSX/Linux ONLY]** Run `setup-ide.sh` Script
[](set-up-android-studio-with-viroreact.html#2a-osxlinux-only-run-setup-idesh-
script)
In a terminal window, navigate to your Viro project root (**not** Android
project root) and run the following:
`./setup-ide.sh android`
This will set up the Android project to work with Viro.
#
2b.**[Windows ONLY]**For Windows use our [Windows Setup
Diff](https://gist.github.com/manbod/5a7f7d0511ff4b4c7f78086ee4706932) file to
modify your Android gradle and manifest files.
#
3\. Android StudioAndroid Studio is the IDE (Integrated Developer Environment) used for Android
development and we will need it to run and test your Viro React application.
##
Install a recent version of the JDK
[](set-up-android-studio-with-viroreact.html#install-a-recent-version-of-the-
jdk)
Android Studio requires a recent version of the JDK. If you don't have one
installed, install one from
[here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
##
Install Android StudioDownload and install Android Studio from
[here](https://developer.android.com/studio/install.html).
##
Configuring Android StudioEnsure that Android Studio is configured with at least the following:
  * Google APIs
  * Android SDK Platform 28
  * Sources for Android 28
by selecting Custom installation while installing Android Studio or by
installing them from the SDK Manager under `Preferences -> Appearance &
Behavior -> System Settings -> Android SDK`
> ## 🚧
>
> Building AR/ARCore With Android Studio
>
> Because of [existing issues with AR Core](https://github.com/google-
> ar/arcore-android-sdk/issues/130), please ensure that you have [disabled
> instant run in Android
> Studio](https://stackoverflow.com/questions/35168753/instant-run-in-android-
> studio-2-0-how-to-turn-off) before building your application!
#
4\. Open your project in Android Studio
[](set-up-android-studio-with-viroreact.html#4-open-your-project-in-android-
studio)
Open Android Studio, if you see a welcome screen, select `Open an existing
Android Studio project`, otherwise open the project with **File - > Open**.
When the file explorer menu appears navigate to your Project location and open
the `android/build.gradle` file
> ## 📘
>
> Android Emulator
>
> Viro currently does not support development with the Android Emulator. You
> will need to develop with your device to use the Viro platform, at this
> time.
#
5\. Enable Developer Mode on Android Device
[](set-up-android-studio-with-viroreact.html#5-enable-developer-mode-on-
android-device)
  1. [Enable Developer Mode](https://developer.android.com/studio/debug/dev-options.html#enable) on your Android device
  2. [Enable USB Debugging](https://developer.android.com/studio/debug/dev-options.html#debugging) within the Developer Menu
#
6\. Run the Application  1. Connect your device to your computer via USB. When a pop-up appears asking to "Allow USB Debugging?", select "OK".
  2. In your terminal, run this command `adb reverse tcp:8081 tcp:8081` which will reverse tether your device to your development machine. (Note: the `adb` command can be found under `platform-tools` wherever your sdk is installed, it's recommended that you add this to your environment's $PATH variable.).
  3. Run 'npm start' from the project root directory to start the package server
  4. Ensure the target to the left of the green run button is set to "app" and tap on the green run button (see image below).
![561](https://files.readme.io/21908dc-btn_play.jpg)
Run the application and you should see the Hello World scene.
**Congratulations, you now have Viro set up and running!**
![180](https://files.readme.io/b07d6b0-viro_smile.gif)
#
Additional PlatformsOn Android, we support 3 VR Platforms: Google Daydream, Samsung/Oculus GearVR
and Google Cardboard. For the Viro Platform however, we only have 2 build
flavors:
  * GVR - for Google Daydream and Cardboard
  * OVR_MOBILE - for Samsung/Oculus GearVR.
##
From Android StudioOne way to toggle between the builds is to expand the `Build Variants` panel
on the left edge of your Android Studio window and select either `gvrDebug`
and `ovrDebug`.
![235](https://files.readme.io/a4615d0-btn_build_variants.jpg)
##
From the command lineAnother way to build your native app is from the command line. Since Viro was
built with the goal of working like any other React Native package, you can
take advantage of the React Native CLI to build, package and deploy your
application to your device.
From the command line, you can run this command with one of the variants from
your project's root directory:
`react-native run-android --variant=`
to build your app for a selected variant.
#
Next StepsCheck out our [Tutorial](https://viro-community.readme.io/docs/tutorial) if
you haven't yet gone through it!
**Problems with installation? Need extra help? Post your
issue[here](http://stackoverflow.com/search?q=react+viro).**
  * [__Table of Contents](set-up-android-studio-with-viroreact.html#)
  *     * [Prerequisites](set-up-android-studio-with-viroreact.html#prerequisites)
    * [1\. Project Structure](set-up-android-studio-with-viroreact.html#1-project-structure)
    * [2a. **OSX/Linux ONLY** Run `setup-ide.sh` Script](set-up-android-studio-with-viroreact.html#2a-osxlinux-only-run-setup-idesh-script)
    * [2b.**Windows ONLY**](set-up-android-studio-with-viroreact.html#2bwindows-only)
    * [3\. Android Studio](set-up-android-studio-with-viroreact.html#3-android-studio)
      * [Install a recent version of the JDK](set-up-android-studio-with-viroreact.html#install-a-recent-version-of-the-jdk)
      * [Install Android Studio](set-up-android-studio-with-viroreact.html#install-android-studio)
      * [Configuring Android Studio](set-up-android-studio-with-viroreact.html#configuring-android-studio)
    * [4\. Open your project in Android Studio](set-up-android-studio-with-viroreact.html#4-open-your-project-in-android-studio)
    * [5\. Enable Developer Mode on Android Device](set-up-android-studio-with-viroreact.html#5-enable-developer-mode-on-android-device)
    * [6\. Run the Application](set-up-android-studio-with-viroreact.html#6-run-the-application)
    * [Additional Platforms](set-up-android-studio-with-viroreact.html#additional-platforms)
      * [From Android Studio](set-up-android-studio-with-viroreact.html#from-android-studio)
      * [From the command line](set-up-android-studio-with-viroreact.html#from-the-command-line)
    * [Next Steps](set-up-android-studio-with-viroreact.html#next-steps)