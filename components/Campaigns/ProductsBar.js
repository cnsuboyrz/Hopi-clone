import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
export default function ProductsBar({ navigation, route, items }) {
  const { t } = useTranslation();
  return (
    <View style={styles.bar}>
      <Text>
        {items.length} {t("productbar.numeral")}
      </Text>
      <View style={styles.filterContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("SortModal", {
              receivedProducts: items,
            })
          }
        >
          <View style={styles.sortContainer}>
            <Text>{t("productbar.sort")}</Text>
            <MaterialCommunityIcons
              name="sort-ascending"
              size={24}
              color="black"
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("FilterModalNavigator", {
              screen: "FilterModal",
              params: {
                receivedProducts: items,
              },
            })
          }
        >
          <View style={styles.sortContainer}>
            <Text>{t("productbar.filter")}</Text>
            <AntDesign name="filter" size={24} color="black" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
});
