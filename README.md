# React Native VR Player Example
This example following instruction from [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) and additional instruction below to get it able to run on iOS and Android device.

## Installation

### Install OmniVirt SDK
```bash
$ yarn add omnivirt-react-native-sdk --save

$ react-native link omnivirt-react-native-sensors
$ react-native link omnivirt-react-native-webview
```
### Import VRPlayer
```javascript
import {VRPlayer, Feature, Mode, Quality} from "omnivirt-react-native-sdk"
```
### Add VRPlayer
```javascript
<VRPlayer ref="vrPlayer" />
```
### Load Content
Please thr following code in componentDidMount().
```javascript
this.refs.vrPlayer.load(CONTENT_ID)
```
Please change CONTENT_ID into your creative id, for example: 24.
### Listen to onExpanded and onCollapsed
```javascript
<VRPlayer ref="vrPlayer"
          onExpanded={this.handleOnExpanded.bind(this)}
          onCollapsed={this.handleOnCollapsed.bind(this)} />
```
Adding the following to your components:
```javascript
handleOnExpanded(player) {
  this.setState({
    isPlayerInFullscreenMode: true
  })
}
handleOnCollapsed(player) {
  this.setState({
    isPlayerInFullscreenMode: false
  })
}
```
You have to manage expand and collapse by yourself.

## Running Example
### Install Module Dependencies
```bash
$ yarn install
```
### Replace YOUR_USERNAME
There is a "local.properties" file under "android" folder. Open it with your text editor and replace YOUR_USERNAME into your username.
### Run On iOS
```bash
$ react-native run-ios
```
You can open an xcode project from "ios" folder (OmniVirtReactNativeExample.xcodeproj) to deploy it on your iOS device.

### Run On Android
```bash
$ yarn run android-linux
```
These will deploy on your Android device.

## Additional Instruction From [Awesome Tutorial](https://facebook.github.io/react-native/docs/getting-started.html)

Create a file named **local.properties** in "android" folder. Don't forget to replace YOUR_USERNAME into your username.
```
sdk.dir = /Users/YOUR_USERNAME/Library/Android/sdk
```
Then add a missing directory:
```
mkdir android/app/src/main/assets
```
placing them in scripts part of package.json
```
"android-linux": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"
```
