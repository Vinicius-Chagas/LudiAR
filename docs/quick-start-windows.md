Install Node and the React
Native CLI Go to the React Native Getting Started guide,
switch to the Building Projects with Native Code tab and
follow the steps in the first two sections under Installing
Dependencies (Node, Python2, JDK and The
React Native CLI). Note: you do not need
Android Studio/Xcode to use the testbed application. Create a new React Native project
Open Powershell and navigate to where you want to create the ViroReact
project and run the command  Shellreact-native init ViroSample --version=0.59.3
 This will create a React Native project in the
ViroSample directory. ❗️If you get the Error: MSBUILD : error MSB3428: Could not
load the Visual C++ component &quot;VCBuild.exe&quot;.Install the
windows-
build-tools package through npm: npm install --global --production windows-
build-toolsThen delete the ViroSample directory and re-run the
react-
native init command.See this GitHub link for more information. Add a Dependency on React
Viro Run the following commands in Powershell Shellcd ViroSample npm install -S -E @viro-community/react-
viro  Copy Files
from React Viro Copy the files from node_modules\react-
viro\bin\files\javascript\\* to the root of your directory. This
should override the index.js and App.js files and add metro.config.js, rn-cli.config.js
and a js/ directory to your ViroSample project. Download/Update the Viro
Media App Install the Viro Media app from the app store on your
device. The app is free. iOS Viro Media App Android Viro Media App 🚧If you&#x27;re developing with ARCore...You will
need to install the ARCore 1.5 APK from the Google Play store. The Viro Media
testbed app should prompt you to download ARCore 1.5 if you do not have it on
your device already. Start
Your Packager Server In Powershell, at the root of your new ViroReact project,
run &quot;npm start&quot; which should start the React Native packager
server. Note: Make sure your computer and phone are on the same
network Using the Testbed App  Open the Viro Media
App on your phone Pull out the left panel and select &quot;Enter
Testbed&quot; Find the local IP address of your computer (one way is
to open another Powershell window and run &quot;ipconfig&quot; and look for
the IPv4 Address). type in your local IP address and hit
&quot;Go&quot;. You should now be in a 360 degree photo of a beach
with the text &quot;Hello World!&quot; in front of you. If not, then try
shaking the device until a development menu appears and hit &quot;Reload&quot;
and double-check that the local IP address entered was correct. 
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
Media Player    New to React Native? Check
out the React Native Tutorial which goes over some basic concepts of React
Native which we leverage.   Check out our code samples on
Github to see what else you can build with ViroReact -&gt; Viro
Github  " style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
> ## 🚧
>
> Using a Mac or Linux laptop/desktop?
>
> Find instructions at [Quick Start (Mac/Linux)](quick-start-maclinux.html)
#
Install Node and the React Native CLIGo to the [**React Native Getting Started**](https://facebook.github.io/react-
native/docs/getting-started.html) guide, switch to the **Building Projects
with Native Code** tab and follow the steps in the first two sections under
**Installing Dependencies** (**Node, Python2, JDK** and **The React Native
CLI**).
Note: you do **not** need Android Studio/Xcode to use the testbed application.
#
Create a new React Native projectOpen Powershell and navigate to where you want to create the ViroReact project
and run the command
Shell
    react-native init ViroSample --version=0.59.3
This will create a React Native project in the ViroSample directory.
> ## ❗️
>
> If you get the Error: MSBUILD : error MSB3428: Could not load the Visual C++
> component "VCBuild.exe".
>
> Install the `windows-build-tools` package through npm:  
>  `npm install --global --production windows-build-tools`
>
> Then delete the `ViroSample` directory and re-run the `react-native init`
> command.
>
> See this GitHub
> [link](https://github.com/viromedia/viro/issues/126#issuecomment-354891531)
> for more information.
#
Add a Dependency on React ViroRun the following commands in Powershell
Shell
    cd ViroSample
    npm install -S -E @viro-community/react-viro
#
Copy Files from React ViroCopy the files from `node_modules\react-viro\bin\files\javascript\*` to the
root of your directory.
This should override the `index.js` and `App.js` files and add
`metro.config.js`, `rn-cli.config.js` and a `js/` directory to your ViroSample
project.
#
Download/Update the Viro Media AppInstall the Viro Media app from the app store on your device. The app is free.
**iOS**  
[Viro Media App](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8)
**Android**  
[Viro Media
App](https://play.google.com/store/apps/details?id=com.viromedia.viromedia)
> ## 🚧
>
> If you're developing with ARCore...
>
> You will need to install the ARCore 1.5 APK from the Google Play store. The
> Viro Media testbed app should prompt you to download ARCore 1.5 if you do
> not have it on your device already.
#
Start Your Packager ServerIn Powershell, at the root of your new ViroReact project, run "npm start"
which should start the React Native packager server.
**Note: Make sure your computer and phone are on the same network**
#
Using the Testbed App  1. Open the Viro Media App on your phone
  2. Pull out the left panel and select "Enter Testbed"
  3. Find the local IP address of your computer (one way is to open another Powershell window and run "ipconfig" and look for the IPv4 Address).
  4. type in your local IP address and hit "Go".
  5. You should now be in a 360 degree photo of a beach with the text "Hello World!" in front of you. If not, then try shaking the device until a development menu appears and hit "Reload" and double-check that the local IP address entered was correct.
![2560](https://files.readme.io/eb830ca-HelloWorld.png)
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
  2. New to React Native? Check out the React Native [Tutorial](https://reactnative.dev/docs/getting-started) which goes over some basic concepts of React Native which we leverage.
  3. Check out our code samples on Github to see what else you can build with ViroReact -> [Viro Github](https://github.com/ViroCommunity/viro)
  * [__Table of Contents](quick-start-windows.html#)
  *     * [Install Node and the React Native CLI](quick-start-windows.html#install-node-and-the-react-native-cli)
    * [Create a new React Native project](quick-start-windows.html#create-a-new-react-native-project)
    * [Add a Dependency on React Viro](quick-start-windows.html#add-a-dependency-on-react-viro)
    * [Copy Files from React Viro](quick-start-windows.html#copy-files-from-react-viro)
    * [Download/Update the Viro Media App](quick-start-windows.html#downloadupdate-the-viro-media-app)
    * [Start Your Packager Server](quick-start-windows.html#start-your-packager-server)
    * [Using the Testbed App](quick-start-windows.html#using-the-testbed-app)
    * [Next Steps/Other Resources](quick-start-windows.html#next-stepsother-resources)