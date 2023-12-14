import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WelcomeCards() {
  return (
    <View style={styles.cardsContainer}>
      <View style={[styles.cardContainer, styles.helloContainer]}>
        <Text>☀️</Text>
        <Text style={{ fontWeight: "bold", color: "darkslategray" }}>
          Merhaba
        </Text>
        <Text style={{ fontWeight: "bold", color: "darkslategray" }}>
          Keksk
        </Text>
      </View>
      <View style={[styles.cardContainer, styles.moneyInfoContainer]}>
        <Text style={{ fontWeight: "900", color: "#FFC436", fontSize: 16 }}>
          201.50 Paracık'ın var.
        </Text>
        <Text style={{ fontWeight: "200", fontSize: 12 }}>
          1 Paracık = 1 TL değerinde kullanabilirsin.
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#B4B4B3",
            width: 110,
          }}
        >
          <Text style={{ fontSize: 14 }}>Paracıklarıma Git</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginHorizontal: 10,
  },
  cardContainer: {
    height: 130,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "column",
  },
  helloContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: "25%",
  },
  moneyInfoContainer: {
    justifyContent: "space-between",
    width: "70%",
  },
});
