import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CampaignsScreen from "../screens/home/CampaignsScreen";
import AllCampaingsScreen from "../screens/home/AllCampaingsScreen";
import SearchScreen from "../screens/home/SearchScreen";
import ProductsTabNavigator from "./ProductsTabNavigator";
import SortModal from "../screens/home/Modals/SortModal";
import FilterModalNavigator from "./FilterModalNavigator";
import { useTranslation } from "react-i18next";
const Stack = createNativeStackNavigator();
export default function CampaignsNavigator() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Campaign"
        options={{ headerShown: false }}
        component={CampaignsScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,

          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="AllCampaigns"
        component={AllCampaingsScreen}
        options={{
          headerTitle: t("allcampaigns.title"),
          headerBackTitleVisible: false,
          headerShadowVisible: false,

          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="ProductsTabNavigator"
        component={ProductsTabNavigator}
        options={{
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,

          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="FilterModalNavigator"
        component={FilterModalNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="SortModal" component={SortModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
