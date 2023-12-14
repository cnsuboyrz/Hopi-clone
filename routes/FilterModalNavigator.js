import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FilterModal from "../screens/home/Modals/FilterModal";
import BrandsFilter from "../screens/home/Modals/BrandsFilter";
const Stack = createNativeStackNavigator();
export default function FilterModalNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="FilterModal"
          options={{ headerShown: false, headerTitle: "" }}
          component={FilterModal}
        />
        <Stack.Screen
          name="BrandsFilter"
          component={BrandsFilter}
          options={{
            headerTitle: "",
            headerBackTitleVisible: false,
            headerShadowVisible: false,

            headerTintColor: "black",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
