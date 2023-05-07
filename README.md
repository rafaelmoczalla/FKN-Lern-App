# FKN Lern App
## Local Development
### Ubuntu 22.04 Prerequisits
Install dependencies
```bash
sudo apt update
sudo apt upgrade
sudo apt install build-essentials nodejs npm openjdk-11-jdk-headless unzip
sudo npm install --global yarn
sudo npm install -g n
sudo n 16.20.0
sudo yarn global add sharp-cli
```

Create new SDK folder for Android & install an SDK.
```bash
echo "export PATH=\$PATH:\$HOME/SDKs/cmdline-tools/bin"
echo "export ANDROID_HOME=\$HOME/SDKs/android-sdk"
echo "export PATH=\$PATH:$ANDROID_HOME/tools:\$ANDROID_HOME/platform-tools"
source $HOME/.bashrc
cd $HOME
mkdir SDK
mkdir SDK/android-sdk
wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip
unzip commandlinetools-linux-9477386_latest.zip
sdkmanager --sdk_root=$HOME/SDK/android-sdk "platform-tools" "platforms;android-33"
sdkmanager --install "ndk;21.3.6528147"
```

### Quickstart
The `App.tsx` file is the main file of the app where the magic happens.

Initially you need to install the dependencies of the package with the following command.
```bash
yarn install
```

You can run the app locally in your web browser.
```bash
yarn web
```

When you make any changes to the `App.tsx` the changes are applied immediately and you see them in the web broswer without rebuilding.

### Android
To build the app use Expo with the following command
```bash
yarn androidBuild
```

Run the app by first starting an adb server on windows and connect in WSL. Afterwards you can deploy and run the app as usual. Make sure that the android smart phone is in developer mode and connected via usb. Make sure to set the `EXPO_ANDROID_KEYSTORE_PASSWORD`, `EXPO_ANDROID_KEY_PASSWORD`, `EXPO_USERNAME` and `EXPO_PASSWORD` environment variables.
```bash
adb tcpip 5555
adb connect [ip device]:5555
yarn androidBuild
yarn androidAPK
asb install ./out/swimmingPoolFilter.apk
```
For windows you can use this [version](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) of adb that has a binary ready to execute.

To publish the app you can also use Expo & now the following command
```bash
yarn androidSubmit
```

### iOS
Make plugins working by adding an empty `libs.podspec` to the ios folder after `yarn prebuild` to fix a bug in the `expo-module-scripts` dependency.

## Heroku Stuff
### Setup
This project uses the node.js and static buildpacks from Heroku.
```bash
heroku buildpacks:set heroku/nodejs --app=berlin-indoor-swimming-filter
heroku buildpacks:add heroku-community/static --app=berlin-indoor-swimming-filter
```

### Show Logs
The option `--tail` sends continuous logging to the terminal. For one shot logs remove this option.
```bash
heroku logs --tail --app=berlin-indoor-swimming-backend
```

### Restart
After a new version of the server was deployed to github you need to restart the app.
```bash
heroku restart --app=berlin-indoor-swimming-filter
```