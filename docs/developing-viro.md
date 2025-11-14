1\. Set up
ReactVision/viro 1.1. Clone ReactVision/viro repo Bashgit clone https://github.com/ReactVision/viro
 1.2. Install
dependencies Bashcd viro npm install  2\. Set up the Starter Kit 2.1. Clone the starter kit Bashgh repo clone ReactVision/starter-kit
 2.2. Install
dependencies Bashcd starter-kit npm install  3\. (optional) Make changes viro
Make changes to the viro folder to fix a bug, add something new, etc. 4\. Build viro Ensure that your typescript compiles by
running the build command. Bash# from viro/ npm run build  5\. Run the
&quot;prepare_release.sh&quot; script This script
will create a tarball of the files and binaries needed in the viro folder for
the dependency to work correctly. Bash# from viro/ ./prepare_release.sh
 You should have a tarball in the viro folder
called reactvision-react-viro-&lt;package.json
version&gt;.tgz. 6\. Install the
tarball Bashcd starter-kit npm install
../viro/reactvision-react-viro-&lt;package.json version&gt;.tgz
 7\. Build the starter
kit iOS If developing on ios, run pod install in the ios folder
and then run the starter kit from xCode. Android If developing on android, run npm run android
with a device connected." style="margin-left:31px" class="rm-Markdown
markdown-body rm-Markdown markdown-body ng-non-bindable" data-testid="RDMD">
#
Developing with ReactVision/viro Locally##
1\. Set up ReactVision/viro###
1.1. Clone ReactVision/viro repoBash
    git clone https://github.com/ReactVision/viro
###
1.2. Install dependenciesBash
    cd viro
    npm install
##
2\. Set up the Starter Kit###
2.1. Clone the starter kitBash
    gh repo clone ReactVision/starter-kit
###
2.2. Install dependenciesBash
    cd starter-kit
    npm install
##
3\. (optional) Make changes viroMake changes to the `viro` folder to fix a bug, add something new, etc.
##
4\. Build viroEnsure that your typescript compiles by running the build command.
Bash
    # from viro/
    npm run build
##
5\. Run the "prepare_release.sh" scriptThis script will create a tarball of the files and binaries needed in the viro
folder for the dependency to work correctly.
Bash
    # from viro/
    ./prepare_release.sh
You should have a tarball in the viro folder called `reactvision-react-
viro-.tgz`.
##
6\. Install the tarballBash
    cd starter-kit
    npm install ../viro/reactvision-react-viro-.tgz
##
7\. Build the starter kit###
iOSIf developing on ios, run `pod install` in the `ios` folder and then run the
starter kit from xCode.
###
AndroidIf developing on android, run `npm run android` with a device connected.
__Updated over 1 year ago