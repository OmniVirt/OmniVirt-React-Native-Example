# React Native VR Player Example
This example following instruction from [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) and additional instruction below to get it able to run on iOS and Android device.

## Installation

### Install Yarn
[Yarn](https://yarnpkg.com/en/docs) is a new package manager for JavaScript — a fast, reliable, and secure alternative npm client.
```bash
$ brew install yarn
```
Following with this command:
```bash
$ yarn install
```
### Replace YOUR_USERNAME
There is a file named "android/local.properties". Open and replace YOUR_USERNAME into your username.
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

## Additional Instruction From Awesome Tutorial

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
