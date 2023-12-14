import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OtherCard from "../../components/MyWallet/OtherCard";
export default function OtherCardsTab() {
  return (
    <View style={styles.container}>
      <OtherCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
