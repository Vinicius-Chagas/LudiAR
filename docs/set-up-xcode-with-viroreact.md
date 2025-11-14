Prerequisites 🚧Have you run through the Prerequisites guide?Run
through steps 1-4 on the Prerequisites guide before beginning this guide.
1\. Install Xcode Install Xcode 10 through the Appstore here. ❗️To develop using XCode, you will need a paid Apple Developer
account.If you do not have an account, use the Viro Media Testbed
App by following the instructions at Using the Testbed
App. 2\. Install Ruby Ensure you have at least Ruby 2.2
installed, you can check this by running ruby -v. If you have an older
version, follow the instructions here based on your OS/package manager/ruby
manager: https://www.ruby-
lang.org/en/documentation/installation/ 3\. Install CocoaPods We use CocoaPods to manage
our dependencies on iOS. Run the following in your terminal and input
computer password if needed: gem install cocoapods 📘If you already have CocoaPods installed,
you should still run pod repo update in order to ensure your manifest is
updated with the latest package versions.This could take a while as the
command performs a git pull of the entire CocoaPods manifest
repository. 4\. Run setup-ide.sh
script In the terminal,
navigate to the root of your project (not your iOS project,
but ViroReact project) and run the following command: ./setup-ide.sh
--ios Which will set up the project to work with Viro.
🚧If your app doesn&#x27;t
support use_frameworks! in Cocoapods...Read this page
Integrating w/o use_frameworks!
(Cocoapods) 5\. Create and add your Apple account to
Xcode First, we need to open Xcode. To do so,
open a new terminal window and navigate to the ios directory in your project and
run: Shellopen ViroSample.xcworkspace
 Your workspace should now be open in Xcode.
To add your Apple Account to Xcode follow the instructions here: https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/AddingYourAccounttoXcode/AddingYourAccounttoXcode.html
Once you add your Apple ID to Xcode, select your Project in the left
navigation panel, select your App target and under the Signing section, select
your Team.   Do the same for the &lt;ProjectName&gt;Tests target too. 6\. Run the Application Connect your device to your
development machine. Tap &quot;Trust&quot; if prompt appears on your computer
and/or device. Then, select your connected device in the top Active
Scheme dropdown menu:  Run the application and you should see the
Hello World scene. Congratulations, you now have ViroReact set
up and running! Next Steps: Check out our VR Tutorial or AR Tutorial where we
go through how to build a simple experience. 
📘Interesting in trying out ARKit
1.5 Features?Read this guide: Enable ARKit 1.5 (Beta) Features
Troubleshooting Here&#x27;s a list of known issues that
may appear during the installation process. Post here if you have an issue not listed here. Missing
node_modules Directory/Error with npm install command This is
probably because you do not have node.js installed and so, the init script failed
to run npm
install. To fix this, go to your root directory and run the below
commands: Shellnpm installcd iospod repo
updatepod install  Once you run those commands,
your project should be properly set-up. Now you can start developing!
Unable to connect to the package server... During
development, ViroReact borrows React Native&#x27;s package server which,
rather than bundle your javascript files and assets, starts a local server on
your development machine with which your development device connects to in
order to get the files it needs. If you see this error, then either your
package server isn&#x27;t running or there&#x27;s an issue with the connection
between your development machine and device. Here are a few things you
can try to resolve this issue:  The packager may not be running,
to run it, you need to run npm start from your project&#x27;s root
Try disconnecting and connecting to the network (on both device and dev
machine) Try performing a clean build and re-install of the app
You may need to disconnect your laptop from ethernet 
Problems with installation? Need extra help? Post your issue here." style="margin-left:31px" class="rm-Markdown markdown-
body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
> ## ❗️
>
> iOS Simulator NOT supported
>
> ViroReact doesn't currently support the iOS Simulator
#
Prerequisites> ## 🚧
>
> Have you run through the Prerequisites guide?
>
> Run through steps 1-4 on the [Prerequisites](prerequisites.html) guide
> before beginning this guide.
#
1\. Install XcodeInstall Xcode 10 through the Appstore
[here](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).
> ## ❗️
>
> To develop using XCode, you will need a paid Apple Developer account.
>
> If you do not have an account, use the Viro Media Testbed App by following
> the instructions at [Using the Testbed
> App](http://docs.viromedia.com/docs/develop-with-viro#section-using-the-
> testbed-app-no-xcode-required-).
#
2\. Install RubyEnsure you have at least [Ruby 2.2](https://www.ruby-lang.org/en/downloads/)
installed, you can check this by running `ruby -v`.
If you have an older version, follow the instructions here based on your
OS/package manager/ruby manager:
#
3\. Install CocoaPodsWe use CocoaPods to manage our dependencies on iOS.
Run the following in your terminal and input computer password if needed:
`gem install cocoapods`
> ## 📘
>
> If you already have CocoaPods installed, you should still run `pod repo
> update` in order to ensure your manifest is updated with the latest package
> versions.This could take a while as the command performs a git pull of the
> entire CocoaPods manifest repository.
#
4\. Run `setup-ide.sh` scriptIn the terminal, navigate to the root of your project (**not** your iOS
project, but ViroReact project) and run the following command:
`./setup-ide.sh --ios`
Which will set up the project to work with Viro.
> ## 🚧
>
> If your app doesn't support `use_frameworks!` in Cocoapods...
>
> Read this page [Integrating w/o use_frameworks! (Cocoapods)](https://viro-
> community.readme.io/docs/no_use_frameworks)
#
5\. Create and add your Apple account to Xcode
[](set-up-xcode-with-viroreact.html#5-create-and-add-your-apple-account-to-
xcode)
First, we need to open Xcode. To do so, open a new terminal window and
navigate to the `ios` directory in your project and run:
Shell
    open ViroSample.xcworkspace
Your workspace should now be open in Xcode.
To add your Apple Account to Xcode follow the instructions here:  
Once you add your Apple ID to Xcode, select your Project in the left
navigation panel, select your App target and under the Signing section, select
your Team.
![1048](https://files.readme.io/734eb0c-Screen_Shot_2016-11-16_at_12.41.15_PM.png)
Do the same for the `Tests` target too.
#
6\. Run the ApplicationConnect your device to your development machine. Tap "Trust" if prompt appears
on your computer and/or device.
Then, select your connected device in the top Active Scheme dropdown menu:
![766](https://files.readme.io/22e4f9b-select_device.png)
Run the application and you should see the Hello World scene.
**Congratulations, you now have ViroReact set up and running!**
**Next Steps:** Check out our [VR Tutorial](https://viro-
community.readme.io/docs/tutorial) or [AR Tutorial](tutorial-ar.html) where we
go through how to build a simple experience.
![180](https://files.readme.io/b07d6b0-viro_smile.gif)
> ## 📘
>
> Interesting in trying out ARKit 1.5 Features?
>
> Read this guide: [Enable ARKit 1.5 (Beta) Features](https://viro-
> community.readme.io/docs/enable-arkit-15-beta-features)
#
TroubleshootingHere's a list of known issues that may appear during the installation process.
Post [here](http://stackoverflow.com/search?q=react+viro) if you have an issue
not listed here.
**Missing node_modules Directory/Error with`npm install` command**
This is probably because you do not have `node.js` installed and so, the init
script failed to run `npm install`. To fix this, go to your root directory and
run the below commands:
Shell
    npm installcd iospod repo updatepod install
Once you run those commands, your project should be properly set-up. Now you
can start developing!
**Unable to connect to the package server...**
During development, ViroReact borrows React Native's package server which,
rather than bundle your javascript files and assets, starts a local server on
your development machine with which your development device connects to in
order to get the files it needs. If you see this error, then either your
package server isn't running or there's an issue with the connection between
your development machine and device.
Here are a few things you can try to resolve this issue:
  * The packager may not be running, to run it, you need to run `npm start` from your project's root
  * Try disconnecting and connecting to the network (on both device and dev machine)
  * Try performing a clean build and re-install of the app
  * You may need to disconnect your laptop from ethernet
Problems with installation? Need extra help? Post your issue
[here](https://github.com/viromedia/viro/issues).
  * [__Table of Contents](set-up-xcode-with-viroreact.html#)
  *     * [Prerequisites](set-up-xcode-with-viroreact.html#prerequisites)
    * [1\. Install Xcode](set-up-xcode-with-viroreact.html#1-install-xcode)
    * [2\. Install Ruby](set-up-xcode-with-viroreact.html#2-install-ruby)
    * [3\. Install CocoaPods](set-up-xcode-with-viroreact.html#3-install-cocoapods)
    * [4\. Run `setup-ide.sh` script](set-up-xcode-with-viroreact.html#4-run-setup-idesh-script)
    * [5\. Create and add your Apple account to Xcode](set-up-xcode-with-viroreact.html#5-create-and-add-your-apple-account-to-xcode)
    * [6\. Run the Application](set-up-xcode-with-viroreact.html#6-run-the-application)
    * [Troubleshooting](set-up-xcode-with-viroreact.html#troubleshooting)