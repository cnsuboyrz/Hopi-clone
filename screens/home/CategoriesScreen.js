import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryCards from "../../components/Categoires/CategoryCards";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <CategoryCards></CategoryCards>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
