import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SearcBox from "../../components/Campaigns/SearchBox";
import { useTranslation } from "react-i18next";
export default function ShoppingScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <View style={styles.searchboxContainer}>
        <SearcBox plcText={t("shopping.search.placeholder")} />
      </View>
      <Image
        style={styles.image}
        source={require("../../assets/img/shopad.png")}
      ></Image>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.mainText}>{t("shopping.title")}</Text>
          <Text>{t("shopping.subtitle")}</Text>
        </View>
        <View style={styles.moreBox}>
          <Text style={styles.moreText}>{t("shopping.seemore.button")}</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 700,
    zIndex: -1,
  },
  searchboxContainer: {
    width: "90%",
    marginHorizontal: 20,
    marginVertical: 80,
    position: "absolute",
  },
  moreBox: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "lightgray",
    marginTop: 10,
    alignItems: "center",
    height: 60,
    paddingHorizontal: 10,
    gap: 10,
  },
  info: {
    position: "relative",
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  moreText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
