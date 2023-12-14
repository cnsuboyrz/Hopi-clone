import { Image, StyleSheet, View, Dimensions } from "react-native";
import { useState } from "react";

const CarouselCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "stretch",
          borderRadius: 20,
        }}
      />
    </View>
  );
};

export default CarouselCard;
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    height: 280,
    alignItems: "center",
    justifyContent: "center",
    width: screenWidth - 30,
    marginHorizontal: 15,
    backgroundColor: "white",
  },
});
