# cordova-restart-on-crash
Restart an Android / Cordova app on crash

## Scope

This plugin is designed for Android environments, including tablets, phones, and Android TV. It leverages multiple methods to attempt to restart an app automatically when an unhandled exception results in a program crash. Useful for long-lived apps (such as digital signage, and kiosks).

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

This plugin requires Phonegap CLI 8.0.0 or later.
