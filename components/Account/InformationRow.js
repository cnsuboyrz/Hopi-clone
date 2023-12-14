import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function InformationRow(props) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.leftGroup}>
        <FontAwesome
          name={props.iconName}
          size={24}
          color="darkslategray"
        ></FontAwesome>
        <Text style={styles.infoTitle}>{props.title}</Text>
      </View>
      <View style={styles.rightGroup}>
        {props.title === "Bildirimlerim" ? (
          <View style={styles.notifyNumber}>
            <Text style={{ color: "white" }}>7</Text>
          </View>
        ) : null}
        <AntDesign name="right" size={24} color="darkslategray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  leftGroup: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  rightGroup: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  infoTitle: {
    fontSize: 16,
    color: "darkslategray",
  },
  notifyNumber: {
    backgroundColor: "deepskyblue",
    borderRadius: 5,
    width: 15,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
});
