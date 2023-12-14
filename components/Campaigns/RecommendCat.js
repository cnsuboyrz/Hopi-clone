import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Image } from "react-native";

export default function RecommendCat() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "categoriesImg");
    onSnapshot(usersQuery, (snapshot) => {
      let categoryList = [];
      snapshot.forEach((doc) => {
        categoryList.push(doc.data());
        // console.log(doc.data());
      });
      setLoading(false);
      setCategories(categoryList);
    });
  }, []);
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>Sevebileceğin Kategoriler</Text>
      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: categories[0]?.url }}
            style={styles.mainImage}
          />
          <Text style={styles.overlayText}>{categories[0]?.name}</Text>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: categories[1]?.url }}
              style={styles.subImage}
            />
            <Text style={styles.overlayText}>{categories[1]?.name}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: categories[2]?.url }}
              style={styles.subImage}
            />
            <Text style={styles.overlayText}>{categories[2]?.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "darkslategray",
  },
  cardContainer: {
    backgroundColor: "white",
    width: screenWidth - 30,
    height: "auto",
    padding: 10,
    margin: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  rowContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    position: "relative",
    borderRadius: 5,
  },
  subImage: {
    width: (screenWidth * 2) / 5 - 30,
    height: 115,
    borderRadius: 5,
    marginLeft: 10,
  },
  mainImage: {
    width: (screenWidth * 3) / 5 - 30,
    height: 250,
    borderRadius: 5,
  },
  overlayText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    padding: 5,
    color: "darkslategray",
    fontSize: 20,
    fontWeight: "bold",
  },

  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
