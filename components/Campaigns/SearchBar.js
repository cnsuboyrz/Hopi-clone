import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const SearchBar = (props) => {
  return (
    <View style={styles.barcontainer}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder={props.plcText} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  barcontainer: {
    flexDirection: "row",
    padding: 16,
    marginTop: 8,
    alignItems: "center",
  },
  hello: {
    flex: 1,
    fontSize: 18,
    color: "#5C3DBB",
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    borderColor: "#E8E8E8",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 6,
    paddingLeft: 16,
    paddingVertical: 12,
    gap: 8,
  },
});
