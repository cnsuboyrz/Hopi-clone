import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "../screens/home/CategoriesScreen";
import BrandsScreen from "../screens/home/BrandsScreen";
import BrandsNavigator from "./BrandsNavigator";
import { useTranslation } from "react-i18next";
const Tab = createMaterialTopTabNavigator();
export default function CategoiresTabNavigator() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIndicator: () => null,
        headerShadowVisible: false,
        tabBarLabel: ({ focused, color, size }) => {
          const bckColor = focused ? "#DA0C81" : "white";
          const txtColor = focused ? "white" : "black";
          const categoryName =
            route?.name === "Kategoriler"
              ? t("categories.Kategoriler.title")
              : t("categories.Markalar.title");
          return (
            <View style={[styles.tabbar, { backgroundColor: bckColor }]}>
              <Text style={{ color: txtColor }}>{categoryName}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Kategoriler" component={CategoriesScreen} />
      <Tab.Screen name="Markalar" component={BrandsNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    width: 150,
  },
});
