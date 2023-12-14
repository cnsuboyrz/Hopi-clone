import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BrandsScreen from "../screens/home/BrandsScreen";
import BrandMapScreen from "../screens/home/BrandMapScreen";

const Stack = createNativeStackNavigator();
export default function BrandsNavigator() {
  return (
    <Stack.Navigator screenOptions={({ route, navigation }) => ({})}>
      <Stack.Screen
        name="BrandsScreen"
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
          headerShadowVisible: false,

          headerTintColor: "black",
        }}
        component={BrandsScreen}
      />
      <Stack.Screen
        name="BrandMapScreen"
        options={({ route }) => ({ title: route.params.title })}
        component={BrandMapScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
