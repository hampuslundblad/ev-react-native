# Step 0: Getting Started

> **Note**: Step 0,1,2 are mostly boilerplate from the react-native boilerplate however they explain well how to setup and start the application.

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

# Step 1.5: Setup

Run the following command to install the dependencies.

```bash
npm install
```

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
npm run test
```

# Linting

To run the linter use the following commands.

```bash
npm run lint
```

# Thoughts on used external packages

**_Tanstack query_** Tanstack query claims to have full react native support and I'm most familiar with tanstack query and therefore decided to use it for this project as well. It's possible to only use axios or node fetch, however tanstack query provides a lot of nice functionality such as caching and easy retrieval if a query is in a loading state or error state.

**_reactotron_** This one was needed for checking the network logs since react-native debugger currently doesn't support it but it seems like a feature that's being worked on. Ideally the config etc shouldn't be loaded in a production environment.

# Other thoughts

- The "Go back to search button" on the BookDetailsScreen is superfluous but it just highlights how one can use navigation instead of the built in header.

- It's a slight anti-pattern to have files named xxxScreen.tsx in the /screens/ folder. However it helps me easier discern between screens and components.

- It's not optimal to handle the error messages within the useBooks hook. Instead they should be broken out perhaps to a seperate component or json file if translations are used.

- The tests would need some cleanup, for example createTestProps is duplicated on both screen tests,

- The testing could be further expanded by e2e tests using something like Detox. This app is rather simple and therefore jest is fine here, however with larger applications the amount of mocking and extra working required to test more complicated features then and e2e framework would be better.

- The styling of the app is very simple, however to I couldn't spend too much time on that aspect.

# Known issues

- I encountered a bug where on the ios app, when I searched no result or notification showed up. It seems to happen when you disconnect from the internet and then reconnect again. Cached results shows up but not new ones even though you're connected to the internet. I have been unable to resolve the bug.
