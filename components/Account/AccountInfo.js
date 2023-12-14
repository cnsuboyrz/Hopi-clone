import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function AccountInfo() {
  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" size={100} color="lightgray" />
      <Text style={styles.username}>Kek Börek</Text>
      <AntDesign name="edit" size={20} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    color: "darkslategray",
  },
});
