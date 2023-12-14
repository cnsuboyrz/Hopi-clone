import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyCardsCard from "../../components/MyWallet/MyCardsCard";

export default function MyCardsTab() {
  return (
    <View style={styles.container}>
      <MyCardsCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
