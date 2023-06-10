import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Welcome from "./layouts/Welcome";
import CompleteAccount from "./layouts/CompleteAccount";
import Login from "./layouts/Login";
import ScaleConnection from "./layouts/ScaleConnection";
import WeightData from "./layouts/WeightData";
import CreateChallenge from "./layouts/CreateChallenge";
import Home from "./layouts/Home";
import ChallengeInfo from "./layouts/ChallengeInfo";
import ChallengeRecords from "./layouts/ChallengeRecords";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{ backgroundColor: "black" }}
      activeColor="white"
    >
      <Tab.Screen
        name="HomeTab"
        component={Home} //Home Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ScaleConnectionTab"
        component={ScaleConnection}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="scale-bathroom"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreateChallengeTab"
        component={CreateChallenge}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="text-box-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LogoutTab"
        component={CreateChallenge}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightData"
          component={WeightData}
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
        <Stack.Screen
          name="ScaleConnection"
          component={ScaleConnection}
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
