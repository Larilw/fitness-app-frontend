import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Welcome from "./layouts/Welcome";
import CompleteAccount from "./layouts/CompleteAccount";
import Login from "./layouts/Login";
import ScaleConnection from "./layouts/ScaleConnection";
import WeightData from "./layouts/WeightData";
import CreateChallenge from "./layouts/CreateChallenge";
import Home from "./layouts/Home";
import ChallengeInfo from "./layouts/ChallengeInfo";
import ChallengeRecords from "./layouts/ChallengeRecords";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompleteAccount"
          component={CompleteAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScaleConnection"
          component={ScaleConnection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightData"
          component={WeightData}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateChallenge"
          component={CreateChallenge}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChallengeInfo"
          component={ChallengeInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChallengeRecords"
          component={ChallengeRecords}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
