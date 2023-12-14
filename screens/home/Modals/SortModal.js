import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
export default function SortModal({ navigation, route }) {
  const receivedProducts = route.params?.receivedProducts || [];
  const { t } = useTranslation();
  const lowestHandler = () => {
    navigation.navigate("ProductsTabNavigator", {
      screen: "ProductsScreen",
      params: {
        receivedProducts: receivedProducts.sort((a, b) => a.price - b.price),
      },
    });
  };
  const highestHandler = () => {
    navigation.navigate("ProductsTabNavigator", {
      screen: "ProductsScreen",
      params: {
        receivedProducts: receivedProducts.sort((a, b) => b.price - a.price),
      },
    });
  };
  const latestHandler = () => {
    navigation.navigate("ProductsTabNavigator", {
      screen: "ProductsScreen",
      params: {
        receivedProducts: receivedProducts.sort(
          (a, b) => b.createDate - a.createDate
        ),
      },
    });
  };

  return (
    <View>
      <View style={styles.rowContainer}>
        <Text>{t("sort.suggested")}</Text>
      </View>
      <Pressable onPress={lowestHandler}>
        <View style={[styles.rowContainer]}>
          <Text>{t("sort.lowtohigh")}</Text>
        </View>
      </Pressable>
      <Pressable onPress={highestHandler}>
        <View style={styles.rowContainer}>
          <Text>{t("sort.hightolow")}</Text>
        </View>
      </Pressable>
      <Pressable onPress={latestHandler}>
        <View style={styles.rowContainer}>
          <Text>{t("sort.newest")}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 15,
    height: 70,
    backgroundColor: "white",
  },
});
