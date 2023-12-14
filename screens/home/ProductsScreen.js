import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import ProductCard from "../../components/Campaigns/ProductCard";
import { useIsFocused } from "@react-navigation/native";
import ProductsBar from "../../components/Campaigns/ProductsBar";
export default function ProductsScreen({ navigation, route }) {
  const receivedProducts = route.params?.receivedProducts || [];

  const isFocused = useIsFocused();

  console.log("isfocused", isFocused);
  console.log("received", receivedProducts);

  return (
    <View style={styles.container}>
      {isFocused ? (
        <FlatList
          ListHeaderComponent={
            <ProductsBar navigation={navigation} items={receivedProducts} />
          }
          data={receivedProducts}
          renderItem={({ item, index }) => (
            <ProductCard item={item} index={index} />
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
