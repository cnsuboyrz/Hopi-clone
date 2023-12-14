import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";
import { Button } from "react-native-elements";
import { useTranslation } from "react-i18next";
export default function BrandsFilter({ navigation, route }) {
  const { t } = useTranslation();
  const receivedProducts = route.params?.receivedProducts || [];
  const brandsSet = new Set();
  const [filteredProducts, setFilteredProducts] = useState([]);
  receivedProducts.forEach((item) => {
    if (item.brandName) {
      brandsSet.add(item.brandName);
    }
  });

  const brands = Array.from(brandsSet);
  console.log("brandfilter", brands);
  const radioButtons = useMemo(
    () =>
      brands.map((brand, index) => ({
        id: brand,
        label: brand,
        value: brand,
      })),
    [brands]
  );

  const [selected, setSelected] = useState();
  console.log("selected", selected);

  useEffect(() => {
    if (selected) {
      const filtered = receivedProducts.filter(
        (item) => item.brandName === selected
      );
      setFilteredProducts(filtered);
    }
  }, [selected]);

  const brandsHandler = () => {
    navigation.navigate("ProductsTabNavigator", {
      screen: "ProductsScreen",
      params: {
        receivedProducts: filteredProducts,
      },
    });
  };
  console.log("filtered", filteredProducts);

  return (
    <View style={styles.container}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelected}
        selectedId={selected}
        containerStyle={styles.columnContainer}
        descriptionStyle={{ fontSize: 32 }}
      />
      <Button
        title={t("filter.brands.button")}
        buttonStyle={{
          backgroundColor: "deeppink",
          width: 300,
          height: 50,
          borderRadius: 10,
          marginTop: 200,
          alignSelf: "center",
        }}
        titleStyle={{ color: "white" }}
        onPress={brandsHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
