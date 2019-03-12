# React Native VR Player Example
This example was following an instruction from [React Native Getting Started - Awesome Tutorial](https://facebook.github.io/react-native/docs/getting-started.html) and also used an additional instruction below to get it ran on iOS and Android device.

## Additional Instruction Of [Awesome Tutorial](https://facebook.github.io/react-native/docs/getting-started.html)

Create a file named **local.properties** in "android" folder. Don't forget to replace YOUR_USERNAME into your username.
```
sdk.dir = /Users/YOUR_USERNAME/Library/Android/sdk
```
Then add a missing directory:
```
mkdir android/app/src/main/assets
```
placing this in scripts part of package.json
```
"android-linux": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"
```
[Adding OmniVirt VRPlayer](https://github.com/OmniVirt/OmniVirt-React-Native-SDK)

## Running Example
### Install Dependencies
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

