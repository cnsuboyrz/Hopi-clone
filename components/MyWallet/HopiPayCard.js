import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
export default function HopiPayCard() {
  const { t } = useTranslation();
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.hopiIcon}
        source={require("../../assets/img/hopipay.png")}
      />
      <View
        style={{
          width: 220,
        }}
      >
        <Text
          numberOfLines={3}
          style={{
            fontSize: 12,
          }}
        >
          {t("mywallet.hopipaycard.content")}
        </Text>
      </View>
      <View style={styles.createBox}>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 16,
          }}
        >
          {t("mywallet.hopipaycard.button")}
        </Text>
        <AntDesign name="right" size={24} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    justifyContent: "space-between",
    height: 220,
    borderRadius: 20,
    margin: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 16 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 7,
  },
  hopiIcon: {
    width: 160,

    height: 60,
    resizeMode: "stretch",
  },
  createBox: {
    backgroundColor: "#00CC00",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 150,
  },
});
