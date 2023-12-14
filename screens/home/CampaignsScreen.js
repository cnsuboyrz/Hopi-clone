import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import OfferCarousel from "../../components/Campaigns/OfferCarousel";
import SearchBox from "../../components/Campaigns/SearchBox";
import AllForYou from "../../components/Campaigns/AllForYou";
import Banner from "../../components/Campaigns/Banner";
import ShowMore from "../../components/Campaigns/ShowMore";
import { useTranslation } from "react-i18next";
export default function CampaignsScreen() {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <SearchBox plcText={t("home.searchbar.placeholder")} />
      <OfferCarousel />
      <AllForYou></AllForYou>
      <Banner></Banner>
      <ShowMore></ShowMore>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 60,
  },
});
