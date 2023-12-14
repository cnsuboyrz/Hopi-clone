import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ForYouCard from "../../components/Campaigns/ForYouCard";
import { useTranslation } from "react-i18next";
export default function AllCampaingsScreen() {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "campaigns");
    onSnapshot(usersQuery, (snapshot) => {
      let cards = [];
      snapshot.forEach((doc) => {
        cards.push(doc.data());
        // console.log(doc.data());
      });
      setLoading(false);
      setImages(cards);
      // console.log(cards);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.cardsContainer}>
        {images.map((item, index) => (
          <ForYouCard
            key={item.id}
            item={item}
            title={t(`allcampaigns.contents.${index}.title`)}
            subtitle={t(`allcampaigns.contents.${index}.subtitles`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexWrap: "wrap", // İçerik sırasında wrap yap
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
