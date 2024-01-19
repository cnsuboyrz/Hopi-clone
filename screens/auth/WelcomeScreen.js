import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { useTranslation } from "react-i18next";
export default function WelcomeScreen({ navigation }) {
  const { t } = useTranslation();
  const handleContinue = () => {
    navigation.navigate("EmailScreen");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/welcome-background.png")} // Arka plan resminizin yolu
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.welcometext}>{t("welcome.title")}</Text>
            <Text style={styles.text}>{t("welcome.subtitle")}</Text>
          </View>
          <Button
            title={t("welcome.button")}
            buttonStyle={{
              backgroundColor: "#E95793",
              width: 300,
              height: 50,
              borderRadius: 10,
              marginTop: 200,
            }}
            titleStyle={{ color: "white" }}
            onPress={handleContinue}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  welcometext: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#DA0C81",
  },
  text: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
