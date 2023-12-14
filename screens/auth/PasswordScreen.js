import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmail,
  selectPassword,
  changePassword,
  loginAsync,
  selectStatus,
  selectError,
} from "./AuthSlice";
import { useTranslation } from "react-i18next";
export default function PasswordScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const { t } = useTranslation();
  const handleLogin = () => {
    dispatch(loginAsync({ email, password }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.inputContainer}>
        <Text style={styles.headertitle}>{t("password.title")}</Text>
        <Text style={styles.expln}>{t("password.subtitle")}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(item) => dispatch(changePassword(item))}
          secureTextEntry
        />
      </View>
      <Button
        title={t("password.button")}
        buttonStyle={{
          backgroundColor: "#E95793",
          width: 300,
          height: 50,
          borderRadius: 10,
          alignSelf: "center",
          marginBottom: 20,
        }}
        titleStyle={{ color: "white" }}
        onPress={handleLogin}
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
