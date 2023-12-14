import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
export default function FilterModal({ navigation, route }) {
  const receivedProducts = route.params?.receivedProducts || [];
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.rowContainer}>
        <Text>{t("filter.category")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={[styles.rowContainer]}>
        <Text>{t("filter.gender")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={styles.rowContainer}>
        <Text>{t("filter.shop")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={styles.rowContainer}>
        <Text>{t("filter.size")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={styles.rowContainer}>
        <Text>{t("filter.price")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <View style={styles.rowContainer}>
        <Text>{t("filter.color")}</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate("BrandsFilter", {
            receivedProducts: receivedProducts,
          })
        }
      >
        <View style={styles.rowContainer}>
          <Text>{t("filter.brand")}</Text>
          <AntDesign name="right" size={24} color="black" />
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
