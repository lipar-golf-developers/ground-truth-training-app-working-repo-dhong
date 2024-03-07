import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Auth, SessionStart, Record } from "./Screens";

const Stack = createNativeStackNavigator();

//TODO: If authenticated, automatically navigate to Session Start

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Auth} />
        <Stack.Screen name="SessionStart" component={SessionStart} />
        <Stack.Screen name="Record" component={Record} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
