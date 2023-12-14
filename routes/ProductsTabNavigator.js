import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import ProductsScreen from "../screens/home/ProductsScreen";
import AllCampaingsScreen from "../screens/home/AllCampaingsScreen";
import { useTranslation } from "react-i18next";
const Tab = createMaterialTopTabNavigator();
export default function ProductsTabNavigator({ route }) {
  const receivedProducts = route.params.products;
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIndicator: () => null,
        headerShadowVisible: false,
        tabBarLabel: ({ focused, color, size }) => {
          const bckColor = focused ? "#DA0C81" : "white";
          const txtColor = focused ? "white" : "black";
          if (route?.name === "Ürünler") {
            var tabname = t("product.producttab");
          } else if (route?.name === "Kampanyalar") {
            var tabname = t("product.campaigntab");
          }
          return (
            <View style={[styles.tabbar, { backgroundColor: bckColor }]}>
              <Text style={{ color: txtColor }}>{tabname}</Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Ürünler"
        component={ProductsScreen}
        initialParams={{ receivedProducts: receivedProducts }}
      />
      <Tab.Screen name="Kampanyalar" component={AllCampaingsScreen} />
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
