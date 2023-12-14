import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useTranslation } from "react-i18next";
export default function CategoryCards() {
  //   const fetchCategories = async () => {
  //     const querySnapshot = collection(db, "categoriesImg");
  //     onSnapshot(querySnapshot, (snapshot) => {
  //       let categoriesList = [];
  //       snapshot.forEach((doc) => {
  //         categoriesList.push(doc.data());
  //       });
  //       return categoriesList;
  //     });

  //     return categories;
  //   }; const { t } = useTranslation();
  const { t } = useTranslation();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "categoriesImg");
    onSnapshot(usersQuery, (snapshot) => {
      let categoryList = [];
      snapshot.forEach((doc) => {
        categoryList.push(doc.data());
        // console.log(doc.data());
      });
      setLoading(false);
      setCategories(categoryList);
    });
  }, []);
  console.log(categories);

  const renderItem = ({ item, index }) => (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.overlayText}>
            {t(`category.contents.${index}.title`)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    margin: 10,
  },
  imageContainer: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
  },
  image: {
    width: 180,
    height: 130,
    borderRadius: 8,
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
    padding: 5,
    width: 140,
  },
  overlayText: {
    color: "darkslategray",
    fontSize: 20,
    fontWeight: "bold",
  },
});
