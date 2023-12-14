import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PrckCard from "../../components/MyWallet/PrckCard";
import HopiPayTab from "./HopiPayTab";
import MyCardsTab from "./MyCardsTab";
import OtherCardsTab from "./OtherCardsTab";
import { useTranslation } from "react-i18next";
const Tab = createMaterialTopTabNavigator();
export default function MyWalletScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <PrckCard />
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIndicator: () => null,
          headerShadowVisible: false,
          tabBarLabel: ({ focused, color, size }) => {
            const bckColor = focused ? "#00CC00" : "white";
            const txtColor = focused ? "white" : "black";
            if (route?.name === "Hopi Pay") {
              var tabname = "Hopi Pay";
            } else if (route?.name === "Kartlarım") {
              var tabname = t("mywallet.mycards.title");
            } else if (route?.name === "Diğer Kartlarım") {
              var tabname = t("mywallet.othercards.title");
            }
            return (
              <View style={[styles.tabbar, { backgroundColor: bckColor }]}>
                <Text style={{ color: txtColor }}>{tabname}</Text>
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Hopi Pay" component={HopiPayTab} />
        <Tab.Screen name="Kartlarım" component={MyCardsTab} />
        <Tab.Screen name="Diğer Kartlarım" component={OtherCardsTab} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    width: 120,
  },
});
