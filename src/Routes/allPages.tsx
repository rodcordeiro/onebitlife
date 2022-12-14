import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import StartPage from "../Pages/Start";
import AppExplanationPage from "../Pages/AppExplanation";

const Stack = createNativeStackNavigator();

export default function AllPagesNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="AppExplanationPage" component={AppExplanationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

