import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
export default function PrckCard() {
  const { t } = useTranslation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topContainer}>
        <View>
          <Text
            style={{
              color: "lightgray",
              fontWeight: "bold",
            }}
          >
            {t("mywallet.prckcard.title")}
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              marginTop: 10,
            }}
          >
            3.950,00
          </Text>
        </View>
        <View style={styles.ring}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            3.950,00
          </Text>
          <Text
            style={{
              color: "lightgray",
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            {t("mywallet.prckcard.paracık")}
          </Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.balanceinfo}>
          <Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "deeppink",
                fontSize: 16,
              }}
            >
              0,00
            </Text>{" "}
            <Text
              style={{
                fontWeight: "bold",
                color: "lightgray",
              }}
            >
              {" "}
              {t("mywallet.prckcard.paracık")}
            </Text>
          </Text>
          <Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "dodgerblue",
                fontSize: 16,
              }}
            >
              3.950,00
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "lightgray",
              }}
            >
              {" "}
              {t("mywallet.prckcard.gift")}
            </Text>
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "lightgreen",
              fontSize: 16,
            }}
          >
            0,00
            <Text
              style={{
                fontWeight: "bold",
                color: "lightgray",
                fontSize: 14,
              }}
            >
              {" "}
              {t("mywallet.prckcard.fuel")}
            </Text>
          </Text>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    height: 240,
    borderRadius: 20,
    margin: 30,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 16 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 7,
  },
  ring: {
    borderWidth: 6,
    borderColor: "dodgerblue",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 10,
    width: 100,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  balanceinfo: {
    justifyContent: "space-between",
    gap: 12,
    marginTop: 10,
  },
});
