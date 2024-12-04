# Step 0: Getting Started

**Note** Step 0,1,2 are mostly boilerplate from the react-native boilerplate however they explain well how to setup and start the application.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android
```

### For iOS

```bash
# using npm
npm run ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Testing

Jest is used for unit testing, run the following command to run all tests.

```bash
npm run start
```

# Thoughts on used external packages

**_Tanstack query_** I'm most familiar with tanstack query and therefore decided to use it for this project as well. Other alternatives would have been axios or node fetch however tanstack query provides a lot of nice functionality such as caching and easy retrieval if a query is in a loading state or error state. Given more time this would be possible to implement myself.

**_reactotron_** This one was needed for checking the network logs since react-native debugger currently doesn't support it but it seems like a feature that's being worked on. Ideally the config etc shouldn't be loaded in a production environment.
