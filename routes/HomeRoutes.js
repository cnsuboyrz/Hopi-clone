import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CampaignsScreen from "../screens/home/CampaignsScreen";
import CategoriesTabNavigator from "./CategoiresTabNavigator";
import ShoppingScreen from "../screens/home/ShoppingScreen";
import { Ionicons } from "@expo/vector-icons";
import MyWalletScreen from "../screens/home/MyWalletScreen";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { getAuth, signOut } from "firebase/auth";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase";
import { useEffect, useState } from "react";
import CampaignsNavigator from "./CampaignsNavigator";
import { useTranslation } from "react-i18next";
const Tab = createBottomTabNavigator();
const HomeRoutes = ({ navigation, route }) => {
  const { t } = useTranslation();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Çıkış yapıldı.");
      })
      .catch((error) => {
        console.error("Çıkış yapılırken bir hata oluştu:", error);
      });
  };
  const [logoUrl, setLogoUrl] = useState(null);
  const logoImgRef = ref(storage, "icons/hopi.png");

  useEffect(() => {
    getDownloadURL(logoImgRef).then((url) => {
      setLogoUrl(url);
    });
  }, []);

  return (
    <>
      <StatusBar style="auto"></StatusBar>

      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarStyle: { position: "absolute" },

          tabBarBackground: () => (
            <BlurView
              tint="light"
              intensity={70}
              style={StyleSheet.absoluteFill}
            />
          ),
          headerShadowVisible: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "gray",
          headerTransparent: route.name === "Shopping" ? true : false,
          headerTitle: () => (
            <TouchableOpacity onPress={handleLogout}>
              <Image
                style={{ width: 100, height: 100, resizeMode: "contain" }}
                source={{ uri: logoUrl }}
              />
            </TouchableOpacity>
          ),
          headerRight: () =>
            route.name === "Shopping" ? (
              <View style={styles.iconContainers}>
                <Ionicons name="cart" size={30} color="white" />
                <Ionicons name="qr-code-outline" size={30} color="white" />
              </View>
            ) : (
              <View style={styles.iconContainers}>
                <Ionicons name="cart" size={30} color="black" />
                <Ionicons name="qr-code-outline" size={30} color="black" />
              </View>
            ),
          headerLeft: () => (
            <View style={styles.userIcon}>
              <View style={styles.notifications}>
                <Text style={styles.notificationText}>9+</Text>
              </View>
              <AntDesign name="user" size={24} color="black" />
            </View>
          ),
          headerTitleStyle: {
            fontSize: 22,
          },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            const currentColor = focused ? "#DA0C81" : "darkslategray";
            if (route.name === "Campaigns") {
              focused
                ? (iconName = "pricetags")
                : (iconName = "pricetags-outline");
            } else if (route.name === "CategoriesTab") {
              focused ? (iconName = "grid") : (iconName = "grid-outline");
            } else if (route.name === "Shopping") {
              return <Entypo name="shop" size={24} color={currentColor} />;
            } else if (route.name === "MyWallet") {
              focused ? (iconName = "wallet") : (iconName = "wallet-outline");
            }

            return (
              <Ionicons name={iconName} size={size} color={currentColor} />
            );
          },
        })}
      >
        <Tab.Screen
          name="Campaigns"
          component={CampaignsNavigator}
          options={{ tabBarLabel: t("navbar.campaigns.label") }}
        />
        <Tab.Screen
          name="CategoriesTab"
          component={CategoriesTabNavigator}
          options={{
            tabBarLabel: t("navbar.categories.label"),
          }}
        />
        <Tab.Screen
          name="Shopping"
          options={{
            tabBarLabel: t("navbar.shopping.label"),
          }}
          component={ShoppingScreen}
        />
        <Tab.Screen
          name="MyWallet"
          component={MyWalletScreen}
          options={{
            tabBarLabel: t("navbar.mywallet.label"),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
export default HomeRoutes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  userIcon: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "#F5F5F5",
    position: "relative",
  },
  notifications: {
    position: "absolute",
    top: -4,
    right: -1,
    backgroundColor: "#DA0C81",
    padding: 2,
    borderRadius: 50,
  },
  notificationText: {
    color: "white",
    fontSize: 10,
  },
  iconContainers: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginRight: 10,
  },
});
