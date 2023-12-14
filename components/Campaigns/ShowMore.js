import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
export default function ShowMore() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handlePress = () => {
    console.log("pressed");
    navigation.navigate("AllCampaigns"); // 'TargetScreen', hedef ekranın adı olmalı
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.moreContaienr}>
        <Text style={styles.more}>{t("home.showmore.button")}</Text>
        <AntDesign name="right" size={16} color="black" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  moreContaienr: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    alignSelf: "center",
    width: 160,
    height: 30,
  },
  more: {
    color: "darkslategray",
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
