import { StyleSheet, Text, SafeAreaView, TextInput, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, changeEmail } from "./AuthSlice";
import { useTranslation } from "react-i18next";
export default function EmailScreen({ navigation }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const handleContinue = () => {
    console.log("EmailScreen.js: handleContinue: email:", email);
    navigation.navigate("PasswordScreen"); // Email'i parametre olarak iletiyoruz
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <Text style={styles.headertitle}>{t("email.title")}</Text>
        <Text style={styles.expln}>{t("email.subtitle")}</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          onChangeText={(item) => dispatch(changeEmail(item))}
          autoCapitalize="none"
        />
      </View>
      <Button
        title={t("email.button")}
        buttonStyle={{
          backgroundColor: "#E95793",
          width: 300,
          height: 50,
          borderRadius: 10,
          alignSelf: "center",
          marginBottom: 20,
        }}
        titleStyle={{ color: "white" }}
        onPress={handleContinue}
        icon={{
          name: "right",
          size: 15,
          color: "white",
          type: "antdesign",
        }}
        iconRight={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    padding: 10,
  },
  expln: {
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 10,
  },
  headertitle: {
    fontSize: 40,
    fontWeight: "400",
    marginBottom: 10,
  },
});
