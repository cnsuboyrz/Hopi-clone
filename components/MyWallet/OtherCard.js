import { StyleSheet, Image, View } from "react-native";
import React from "react";

export default function OtherCard() {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.cardImage}
        source={require("../../assets/img/othercards.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    width: 350,
    height: 220,
    resizeMode: "cover",
    borderRadius: 30,
  },
  imageContainer: {
    marginTop: 55,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
});
