# cordova-restart-on-crash
Restart an Android / Cordova app on crash

## Scope

This plugin is designed for Android environments, including tablets, phones, and Android TV. Some Amazon FireOS devices (Tablet, Fire TV) may also be supported.

It leverages multiple methods to attempt to restart an app automatically when an unhandled exception results in a program crash. Useful for long-lived apps (such as digital signage, and kiosks).

## Supported Platforms

| Platform  | Android 6 | Android 7 | Android 8 | Android 9 | Android 10 |
| ----------------- | --------- | --------- | --------- | --------- | ---------- |
| Android Phone  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |
| Android Tablet  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x: |
| Android TV  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Fire Tablet | :heavy_check_mark: | :heavy_check_mark: |   |   |   |
| Fire TV | :question: | :question: | :question: | :question: | :question: |

## Install

You can install this plugin from source, with the cordova command 

```
cordova plugin add https://github.com/Meeting-Room-365/cordova-restart-on-crash.git
```

## Setup

To activate the plugin, you should use the following method to set the Custom Exception Handler to automatically restart the app on crash, after your app is initialized (typically after `deviceready`).

```
restartappplugin.setCustomExceptionHandler()
```

## Notes

This plugin requires Phonegap CLI 8.0.0 or later. If using PhoneGap Build, you can set this preference in your Config.xml via:

```
<preference name="phonegap-version" value="cli-8.0.0" />
```
