import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
export default function BrandCards() {
  const navigation = useNavigation();
  const [brands, setBrannds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [brandLoc, setBrandLoc] = useState({});
  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "brandsImg");
    onSnapshot(usersQuery, (snapshot) => {
      let brandsList = [];
      snapshot.forEach((doc) => {
        brandsList.push(doc.data());
        // console.log(doc.data());
      });
      setLoading(false);
      setBrannds(brandsList);
    });
  }, []);

  const fetchBrandLocation = async (title) => {
    try {
      const brandsRef = collection(db, "brandsLocation");
      const q = query(brandsRef, where("markaAdi", "==", title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Sadece bir doküman beklediğinizden emin olun
        const doc = querySnapshot.docs[0];
        const getdata = doc.data();

        return getdata;
      } else {
        console.log("Belirtilen markaAdi'na sahip bir doküman bulunamadı.");
      }
    } catch (error) {
      console.error("Veri getirme hatası:", error);
    }
  };

  //   console.log(categories);
  const pressHandler = async (title) => {
    try {
      console.log(title);
      const locationObj = await fetchBrandLocation(title);

      navigation.navigate("BrandMapScreen", {
        title: title,
        locationObj: locationObj,
      });
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => pressHandler(item.title)}
      >
        <Image source={{ uri: item.url }} style={styles.image} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={brands}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    margin: 10,
  },
  imageContainer: {
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "#000",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: "contain",
  },
});
