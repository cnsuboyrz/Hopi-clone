import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import ForYouCard from "./ForYouCard";

export default function AllForYou() {
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
    <View style={styles.container}>
      <Text style={styles.textfor}>{t("app.title")}</Text>
      <View style={styles.cardsContainer}>
        {images.slice(0, 4).map((item, index) => (
          <ForYouCard
            key={item.id}
            item={item}
            title={t(`home.allforyou.contents.${index}.title`)}
            subtitle={t(`home.allforyou.contents.${index}.subtitles`)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#fff",
  },
  textfor: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardsContainer: {
    flexWrap: "wrap", // İçerik sırasında wrap yap
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
