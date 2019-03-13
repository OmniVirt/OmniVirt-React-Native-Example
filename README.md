# React Native VR Player Example
This example was following an instruction from [React Native Getting Started - Awesome Tutorial](https://facebook.github.io/react-native/docs/getting-started.html) and also used an additional instruction below to get it ran on iOS and Android device.

## Additional Instruction From [Awesome Tutorial](https://facebook.github.io/react-native/docs/getting-started.html)

Create a file named **local.properties** in **android** folder by using the following content. Don't forget to replace YOUR_USERNAME into your username.
```
sdk.dir = /Users/YOUR_USERNAME/Library/Android/sdk
```
Then add a missing directory:
```
mkdir android/app/src/main/assets
```
Place this in scripts part of **package.json**:
```
"android-linux": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android"
```
[Adding OmniVirt VRPlayer Documentation](https://github.com/OmniVirt/OmniVirt-React-Native-SDK)

## Running Example
### Install Prerequisite Tools
Please install [Android Studio](https://developer.android.com/studio) and [XCode](https://itunes.apple.com/th/app/xcode/id497799835?mt=12). Don't forget to install Xcode Command Line Tools by using the following command:
```bash
xcode-select --install
```
### Install Dependencies
Go to your cloned project and run:
```bash
$ yarn install
```
### Create local.properties
Create a file named **local.properties** in **android** folder by using the following content. Don't forget to replace YOUR_USERNAME into your username.
```
sdk.dir = /Users/YOUR_USERNAME/Library/Android/sdk
```
### Run on iOS
```bash
$ react-native run-ios
```
You can open an xcode project from **ios** folder (OmniVirtReactNativeExample.xcodeproj) to deploy it on your iOS device.

### Run on Android
```bash
$ yarn run android-linux
```
These will deploy on your Android device.

