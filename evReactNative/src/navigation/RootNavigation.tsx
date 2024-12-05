import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import NetworkStatus from "../components/NetworkStatus";
import BookDetailsScreen from "../screens/BookDetailsScreen";
import SearchBooksScreen from "../screens/SearchBooksScreen";
import { StackParamList } from "../types/routes";

interface rootNavigationProps {}

const Stack = createNativeStackNavigator<StackParamList>();

const RootNavigation: FC<rootNavigationProps> = ({}) => {
  return (
    <NavigationContainer>
      <NetworkStatus />
      <Stack.Navigator
        initialRouteName="SearchBooks"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SearchBooks" component={SearchBooksScreen} />
        <Stack.Screen name="BookDetails" component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
