import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmailScreen from "../screens/auth/EmailScreen";
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import PasswordScreen from "../screens/auth/PasswordScreen";

const Stack = createNativeStackNavigator();
const AuthRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="Welcome"
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailScreen"
        component={EmailScreen}
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTransparent: true,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;

const styles = StyleSheet.create({});
