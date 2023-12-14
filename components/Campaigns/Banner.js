import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
export default function Banner() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "banners");
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
  const handleImageClick = () => {
    Linking.openURL("https://www.dalin.com/");
  };

  return (
    <View style={styles.container}>
      {images.map((item, index) => (
        <TouchableOpacity
          style={styles.cardContainer}
          key={index}
          onPress={handleImageClick}
        >
          <Image source={{ uri: item.image }} style={styles.banner} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "90%",
    height: 100,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 30,
  },
});
