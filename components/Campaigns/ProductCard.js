import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
export default function ProductCard({ item, index }) {
  return (
    <View key={index} style={styles.cardContainer}>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <AntDesign
          name="heart"
          size={24}
          color="white"
          style={styles.hearticon}
        />
        <BlurView intensity={80} tint="light" style={styles.blurContainer}>
          <Text style={styles.brand} numberOfLines={2}>
            {item.subtitle}
          </Text>
        </BlurView>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.price}</Text>
        <AntDesign name="pluscircle" size={32} color="deeppink" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "stretch",
    shadowColor: "#000",
    width: 180,
    height: 260,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    margin: 12,
    shadowOpacity: 0.3,
    shadowRadius: 5, // iOS'te gölge
    elevation: 5, // Android'de gölge
  },
  container: {
    flexWrap: "wrap", // İçerik sırasında wrap yap
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: 180,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    position: "relative",
  },
  hearticon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  blurContainer: {
    position: "absolute",
    bottom: 0,
    height: 50,
    width: 180,
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 10,
    overflow: "hidden",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "deeppink",
  },
  textContainer: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "deeppink",
  },
  brand: {
    fontSize: 14,
    fontWeight: "bold",
    color: "darkslategray",
  },
});
