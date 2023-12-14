import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
export default function MyCardsCard() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.cardImage}
        source={require("../../assets/img/mastercard.png")}
      />
      <View style={styles.addCardContainer}>
        <Text style={styles.headerText}>
          {t("mywallet.mycards.content.title")}
        </Text>
        <Text style={styles.explText}>
          {t("mywallet.mycards.content.expl")}
        </Text>
        <View style={styles.addCard}>
          <Fontisto name="mastercard" size={24} color="deepskyblue" />
          <Text style={styles.cardText}>{t("mywallet.mycards.button")}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: "90%",
    height: 140,
    resizeMode: "contain",
    marginTop: 15,
    marginBottom: 25,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  addCardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%",
    color: "darkslategray",
  },
  explText: {
    fontSize: 11,
    textAlign: "left",
    width: "100%",
    marginBottom: 20,
  },
  addCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "deepskyblue",
    borderWidth: 2,
    borderRadius: 16,

    borderStyle: "dashed",
    height: 80,
    width: "98%",
    marginBottom: 20,
  },
  cardText: {
    color: "deepskyblue",
    fontWeight: "bold",
    marginLeft: 25,
  },
});
