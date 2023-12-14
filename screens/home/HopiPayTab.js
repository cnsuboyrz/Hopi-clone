import { StyleSheet, Image, View } from "react-native";
import React from "react";
import HopiPayCard from "../../components/MyWallet/HopiPayCard";

export default function HopiPayTab() {
  return (
    <View style={styles.container}>
      <HopiPayCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
