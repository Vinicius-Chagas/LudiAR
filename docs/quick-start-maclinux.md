🚧Using Windows?Find
instructions at Quick Start
(Windows) Quick start guide to get you setup and
developing AR/VR applications in 10 mins! (No Xcode or Android Studio
required) Prerequisites AR (iOS)  OSX computer or Linux
computer iOS Device with A9 chip or higher and running iOS 11 or
higher.  AR (Android)  OSX/Linux computer An
ARCore supported device  VR 
OSX or Linux computer Recent Android or iOS Device (Android
requirements: Android 5.0+ w/ gyroscope support and OpenGl ES 3.0, iOS
requirements: iOS 9.0+) Cardboard headset (you can find some QR codes
here)  1a. [OSX
ONLY] Install Dependencies - Homebrew, Node and Watchman Our recommended way of installing the dependencies on
OSX is to use Homebrew, but you can use whatever you want as long as both
node and watchman are installed and in your PATH.
Install Homebrew by running the following command in your terminal:
Shell/usr/bin/ruby -e &quot;$(curl -fsSL
https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
 Install Node by running the following command in
your terminal: Shellbrew install node
 Install Watchman by running the following command
in your terminal: Shellbrew install watchman
 1b. [LINUX
ONLY] Install Dependencies - Node and Watchman
Use your local package manager to install node and watchman Common Linux
Flavors (you may need to sudo before each command): Ubuntu, Mint,
Debian, etc apt-get install node apt-get install watchman
 Fedora, RHEL, CentOS, etc  yum install node yum
install watchman  2\. Install React Native Command Line
Interface Install React Native CLI by
running the following command in your terminal: Shellnpm install -g react-native-cli 
3\. Install ViroReact Command Line
Interface Now install the ViroReact CLI
by running the following command in your terminal: Textnpm install -g react-viro-cli 
4\. Generate ViroSample
project In your terminal, navigate to where you want to create
your ViroReact project, run: Textreact-viro init ViroSample --verbose
 Terminal should say: &quot;Installing react-viro
package from npm...&quot;. The installation may take a couple mins, so proceed
to the next step while it completes.  🚧Using Yarn?If you&#x27;re using yarn, then run
the two following commands to install the node_modules cd ViroSample
yarn
install 5\. Download the Viro Media Testbed
App Install the Viro Media app from the app store on
your device. The app is free. iOS Viro Media App Android Viro Media App 🚧If you&#x27;re using Android AR...The first time
you start AR, you&#x27;ll be prompted to download the ARCore
APK.Google&#x27;s ARCore, and consequently, Viro, only works on the
following devices. 6\. NPM Start From the root of your project, run
the command: npm start to start the packager server. 7\. Open Hello World in
Testbed App  Open the Viro Media App on your iOS or Android
device.  Tap on the menu icon in the top left and tap on &quot;Enter
Testbed&quot;.  Find your ngrok url (https://xxxxxx.ngrok.io)
which is printed at the top of the terminal window where you ran npm start. Enter
that into the empty text field on the Testbed screen (xxxxxx.ngrok.io) and
press &quot;Go&quot;.  ❗️Known Issue for possible Red Screen ErrorIf you
get a red screen when trying hello world that references &quot;babel-preset-
react-native&quot;, this is a known issue with React Native -&gt; https://github.com/facebook/react-native/issues/18962To
Resolve:Open your package.json file located under [Your Project Name].
Open it with your text editor.Change &quot;babel-preset-react-
native&quot;: &quot;5.0.0&quot;,To &quot;babel-preset-react-
native&quot;: &quot;4.0.0&quot;,Terminate the npm start process. Then run
npm
install from your project directory. Once installation has completed,
run &#x27;npm start&#x27; again and restart/reload your testbed
app. 📘NGROK
ISSUESIf you do not see the ngrok address in your terminal, open a
new tab, navigate to your workspace and then run ./node_modules/react-
viro/bin/run_ngrok.shOr, from your browser, navigate
to:http://localhost:4040/statusIf ngrok isn&#x27;t already
running, you can start it by running the follow command in your terminal
(anywhere should work):ngrok http 8081 9\. View Hello World in
Testbed App Android users will see a 360 degree photo of a beach
with the text &quot;Hello World!&quot; in front of you. iOS users will see a
menu screen &quot;Choose Your Desired Experience&quot; with 2 options: AR or
VR. Tap VR to get to the 360 beach Hello World scene.  If
you tap on AR, you will be taken to HelloWorldSceneAR.js and see text that
says &quot;Initializing...&quot; and then changes to &quot;Hello World&quot;.
🚧Having issues?If
you are having issues loading either scene, try shaking the device until a
development menu appears and hit &quot;Reload&quot;, double-check that the
ngrok URL entered was correct or try using your computer&#x27;s local IP
address (your phone will need to be on the same network).If you&#x27;re
still having issues, we encourage you to contact us through the Issues or
Support links at the top of the documentation.
Congratulations, you now have ViroReact set up and
running! Next
Steps/Other Resources  Want to learn more about ViroReact? Check out
our tutorials:   Tutorial VR or Tutorial AR where we go through how to modify the
Hello World Scenes.  AR Tutorial Blog Posts  How to build an
interactive AR app in 5 mins w/ React Native &amp; Viro AR How to build AR Portals in 5
mins w/ React Native &amp; Viro AR Add Snapchat-like AR Lenses to
any app w/ Viro AR in React Native How to use Particles
to enhance your AR app using ARKit &amp; React Native  VR
Tutorial Blog Posts  Powered by Viro:
Product Showcase Powered by Viro: VR
Media Player   New to React Native? Check out
the React Native Tutorial which goes over
some basic concepts of React Native which we leverage. Check out our
code samples on Github to see what else you can build with ViroReact -&gt; Viro
Github " style="margin-left:31px" class="rm-Markdown markdown-
body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
> ## 🚧
>
> Using Windows?
>
> Find instructions at [Quick Start (Windows)](quick-start-windows.html)
Quick start guide to get you setup and developing AR/VR applications in 10
mins! (No Xcode or Android Studio required)
##
PrerequisitesAR (iOS)
  1. OSX computer or Linux computer
  2. iOS Device with A9 chip or higher and running iOS 11 or higher.
AR (Android)
  1. OSX/Linux computer
  2. An [ARCore supported device](https://developers.google.com/ar/discover/#supported_devices)
VR
  1. OSX or Linux computer
  2. Recent Android or iOS Device (Android requirements: Android 5.0+ w/ gyroscope support and OpenGl ES 3.0, iOS requirements: iOS 9.0+)
  3. Cardboard headset (you can find some QR codes [here](http://www.hypergridbusiness.com/faq/vr-headset-qr-codes/))
##
1a. **[OSX ONLY]** Install Dependencies - Homebrew, Node and Watchman
[](quick-start-maclinux.html#1a-osx-only-install-dependencies---homebrew-node-
and-watchman)
Our recommended way of installing the dependencies on OSX is to use Homebrew,
but you can use whatever you want as long as both `node` and `watchman` are
installed and in your PATH.
Install Homebrew by running the following command in your terminal:
Shell
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
Install Node by running the following command in your terminal:
Shell
    brew install node
Install Watchman by running the following command in your terminal:
Shell
    brew install watchman
##
1b. **[LINUX ONLY]** Install Dependencies - Node and Watchman
[](quick-start-maclinux.html#1b-linux-only-install-dependencies---node-and-
watchman)
Use your local package manager to install `node` and `watchman`
Common Linux Flavors (you may need to `sudo` before each command):
**Ubuntu, Mint, Debian, etc**
    apt-get install node
    apt-get install watchman
**Fedora, RHEL, CentOS, etc**
    yum install node
    yum install watchman
##
2\. Install React Native Command Line InterfaceInstall React Native CLI by running the following command in your terminal:
Shell
    npm install -g react-native-cli
##
3\. Install ViroReact Command Line InterfaceNow install the ViroReact CLI by running the following command in your
terminal:
Text
    npm install -g react-viro-cli
##
4\. Generate ViroSample projectIn your terminal, navigate to where you want to create your ViroReact project,
run:
Text
    react-viro init ViroSample --verbose
Terminal should say: "Installing react-viro package from npm...". The
installation may take a couple mins, so proceed to the next step while it
completes.
> ## 🚧
>
> Using Yarn?
>
> If you're using yarn, then run the two following commands to install the
> `node_modules`  
>  `cd ViroSample`  
>  `yarn install`
##
5\. Download the Viro Media Testbed AppInstall the Viro Media app from the app store on your device. The app is free.
**iOS**  
[Viro Media App](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8)
**Android**  
[Viro Media
App](https://play.google.com/store/apps/details?id=com.viromedia.viromedia)
> ## 🚧
>
> If you're using Android AR...
>
> The first time you start AR, you'll be prompted to download the ARCore APK.
>
> Google's ARCore, and consequently, Viro, only works on the following
> [devices](https://developers.google.com/ar/discover/#supported_devices).
##
6\. NPM StartFrom the root of your project, run the command: `npm start` to start the
packager server.
##
7\. Open Hello World in Testbed App  1. Open the Viro Media App on your iOS or Android device. 
  2. Tap on the menu icon in the top left and tap on "Enter Testbed". 
  3. Find your ngrok url () which is printed at the top of the terminal window where you ran `npm start`. Enter that into the empty text field on the Testbed screen (xxxxxx.ngrok.io) and press "Go".
> ## ❗️
>
> Known Issue for possible Red Screen Error
>
> If you get a red screen when trying hello world that references "babel-
> preset-react-native", this is a known issue with React Native ->
> 
>
> To Resolve:
>
> Open your package.json file located under [Your Project Name]. Open it with
> your text editor.
>
> Change  
>  "babel-preset-react-native": "5.0.0",
>
> To  
>  "babel-preset-react-native": "4.0.0",
>
> Terminate the `npm start` process. Then run `npm install` from your project
> directory. Once installation has completed, run 'npm start' again and
> restart/reload your testbed app.
> ## 📘
>
> NGROK ISSUES
>
> If you do not see the ngrok address in your terminal, open a new tab,
> navigate to your workspace and then run
>
> `./node_modules/react-viro/bin/run_ngrok.sh`
>
> Or, from your browser, navigate to:
>
> http://localhost:4040/status
>
> If ngrok isn't already running, you can start it by running the follow
> command in your terminal (anywhere should work):
>
> `ngrok http 8081`
##
9\. View Hello World in Testbed AppAndroid users will see a 360 degree photo of a beach with the text "Hello
World!" in front of you. iOS users will see a menu screen "Choose Your Desired
Experience" with 2 options: AR or VR. Tap VR to get to the 360 beach Hello
World scene.
![2560](https://files.readme.io/cc52570-HelloWorld.png)
If you tap on AR, you will be taken to HelloWorldSceneAR.js and see text that
says "Initializing..." and then changes to "Hello World".
![1242](https://files.readme.io/e864b48-IMG_2931.PNG)
> ## 🚧
>
> Having issues?
>
> If you are having issues loading either scene, try shaking the device until
> a development menu appears and hit "Reload", double-check that the ngrok URL
> entered was correct or try using your computer's local IP address (your
> phone will need to be on the same network).
>
> If you're still having issues, we encourage you to contact us through the
> Issues or Support links at the top of the documentation.
**Congratulations, you now have ViroReact set up and running!**
#
Next Steps/Other Resources  1. Want to learn more about ViroReact? Check out our tutorials:
  * [Tutorial VR](https://viro-community.readme.io/docs/tutorial) or [Tutorial AR](tutorial-ar.html) where we go through how to modify the Hello World Scenes.
AR Tutorial Blog Posts
  * [How to build an interactive AR app in 5 mins w/ React Native & Viro AR](https://blog.viromedia.com/how-to-build-an-interactive-ar-app-in-5-mins-w-react-native-viro-ar-e420147e1612)
  * [How to build AR Portals in 5 mins w/ React Native & Viro AR](https://blog.viromedia.com/how-to-build-ar-portals-in-5-mins-w-react-native-viro-ar-b939850def94)
  * [Add Snapchat-like AR Lenses to any app w/ Viro AR in React Native](https://blog.viromedia.com/add-snapchat-ar-lenses-to-any-app-w-react-native-viro-ar-9d4053769782)
  * [How to use Particles to enhance your AR app using ARKit & React Native](https://blog.viromedia.com/how-to-use-particles-to-enhance-your-ar-app-using-arkit-react-native-6c55c0278028)
VR Tutorial Blog Posts
  * [Powered by Viro: Product Showcase](https://blog.viromedia.com/powered-by-viro-product-showcase-fbbb906f91df)
  * [Powered by Viro: VR Media Player](https://blog.viromedia.com/powered-by-viro-vr-media-player-75ec91156c76)
  2. New to React Native? Check out the React Native [Tutorial](https://facebook.github.io/react-native/docs/tutorial.html) which goes over some basic concepts of React Native which we leverage.
  3. Check out our code samples on Github to see what else you can build with ViroReact -> [Viro Github](https://github.com/viromedia/viro)
  * [__Table of Contents](quick-start-maclinux.html#)
  *     *       * [Prerequisites](quick-start-maclinux.html#prerequisites)
      * [1a. **OSX ONLY** Install Dependencies - Homebrew, Node and Watchman](quick-start-maclinux.html#1a-osx-only-install-dependencies---homebrew-node-and-watchman)
      * [1b. **LINUX ONLY** Install Dependencies - Node and Watchman](quick-start-maclinux.html#1b-linux-only-install-dependencies---node-and-watchman)
      * [2\. Install React Native Command Line Interface](quick-start-maclinux.html#2-install-react-native-command-line-interface)
      * [3\. Install ViroReact Command Line Interface](quick-start-maclinux.html#3-install-viroreact-command-line-interface)
      * [4\. Generate ViroSample project](quick-start-maclinux.html#4-generate-virosample-project)
      * [5\. Download the Viro Media Testbed App](quick-start-maclinux.html#5-download-the-viro-media-testbed-app)
      * [6\. NPM Start](quick-start-maclinux.html#6-npm-start)
      * [7\. Open Hello World in Testbed App](quick-start-maclinux.html#7-open-hello-world-in-testbed-app)
      * [9\. View Hello World in Testbed App](quick-start-maclinux.html#9-view-hello-world-in-testbed-app)
    * [Next Steps/Other Resources](quick-start-maclinux.html#next-stepsother-resources)