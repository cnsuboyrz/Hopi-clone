import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const SearchBox = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SearchScreen"); // 'TargetScreen', hedef ekranın adı olmalı
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="black" />
          <Text>{props.plcText}</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default SearchBox;
const styles = StyleSheet.create({
  container: {
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
