import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../../components/Campaigns/SearchBar";
import BrandCards from "../../components/Brands/BrandCards";
import { useTranslation } from "react-i18next";
export default function BrandsScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <SearchBar plcText={t("brands.search.placeholder")} />
      <View style={styles.rowContainer}>
        <Text>{t("brands.title")}</Text>
        <Text>6 {t("brands.number")}</Text>
      </View>
      <BrandCards></BrandCards>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
