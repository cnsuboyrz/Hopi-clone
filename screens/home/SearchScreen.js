import { StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { db } from "../../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function SearchScreen() {
  const { t } = useTranslation();

  const navigation = useNavigation();
  const [searchItem, setSearchItem] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async (term) => {
    const productsRef = collection(db, "products");
    const q = query(productsRef, where("title", "==", term));
    const querySnapshot = await getDocs(q);

    const updatedProducts = [];

    querySnapshot.forEach((doc) => {
      updatedProducts.push(doc.data());
    });

    return updatedProducts;
  };

  const handleSearch = async () => {
    try {
      setProducts([]);
      const updatedProducts = await getProducts(searchItem.toLowerCase());
      setProducts(updatedProducts);

      navigation.navigate("ProductsTabNavigator", {
        products: updatedProducts,
        searchItem: searchItem,
      });
    } catch (error) {
      console.error("Arama sırasında bir hata oluştu:", error);
    }
  };

  return (
    <View>
      <View style={styles.barcontainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="search" size={24} color="black" />
          <TextInput
            placeholder={t("home.searchbar.placeholder")}
            value={searchItem}
            onChangeText={setSearchItem}
            onSubmitEditing={handleSearch}
          />
        </View>
      </View>
    </View>
  );
}
// (
//     <FlatList
//       data={products}
//       extraData={products}
//       renderItem={({ item }) => (
//         <View key={item.id}>
//           <Text>{item.title}</Text>
//         </View>
//       )}
//       keyExtractor={(item) => item.id}
//     />
//   ) : (
//     ""
//   )
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
