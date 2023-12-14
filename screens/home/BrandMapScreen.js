import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../services/firebase";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import useLocation from "../../hooks/useLocation";
import { AntDesign } from "@expo/vector-icons";
export default function BrandMapScreen({ navigation, route }) {
  const title = route.params.title;
  const locationObj = route.params.locationObj;
  const location = useLocation();
  const cleanedLocationObj = {
    ...locationObj,
    Adres: locationObj["Adres"], // 'latitude ' -> 'latitude'
    yerAdi: locationObj["yerAdi"], // 'latitude ' -> 'latitude'
    telefon: locationObj["telefon"], // 'longitude ' -> 'longitude'
    calismaSaatleri: locationObj["calismaSaatleri"], // 'latitude ' -> 'latitude'
    markaAdi: locationObj["markaAdi "], // 'longitude ' -> 'longitude'
    latitude: locationObj["latitude "], // 'latitude ' -> 'latitude'
    longitude: locationObj["longitude "], // 'longitude ' -> 'longitude'
  };
  console.log(cleanedLocationObj);
  const initialRegion = location
    ? {
        latitude: location ? location.coords.latitude : 41.0082,
        longitude: location ? location.coords.longitude : 28.9784,
        //zoom değerleri
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }
    : null;

  const coordinate = initialRegion
    ? {
        latitude: initialRegion.latitude,
        longitude: initialRegion.longitude,
      }
    : null;

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {coordinate && (
          <Marker
            coordinate={coordinate}
            title="İstanbul"
            description="Türkiye'nin en güzel şehri"
          >
            <Image
              source={require("../../assets/img/rec.png")}
              style={{ width: 30, height: 30 }}
              resizeMode="contain"
            />
          </Marker>
        )}

        <Marker
          coordinate={{
            latitude: cleanedLocationObj.latitude,
            longitude: cleanedLocationObj.longitude,
          }}
          title="{marker.title}"
          description="{marker.description}"
        >
          <Image
            source={require("../../assets/img/locationpin.png")}
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
      <View style={styles.infoBox}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
          {cleanedLocationObj.yerAdi}
        </Text>
        <Text style={styles.text}>
          <Entypo name="location-pin" size={16} color="white" />{" "}
          {cleanedLocationObj.Adres}
        </Text>
        <Text style={styles.text}>
          <Entypo name="phone" size={16} color="white" />
          {"  "}
          {cleanedLocationObj.Telefon}
        </Text>
        <Text style={styles.text}>
          <AntDesign name="clockcircle" size={16} color="white" />
          {"  "}
          {cleanedLocationObj.calismaSaatleri}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoBox: {
    position: "absolute",
    bottom: 70,
    backgroundColor: "rgba(0, 195, 255, 0.8)",
    width: "100%",
    height: 160,
    padding: 10,
    gap: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});
