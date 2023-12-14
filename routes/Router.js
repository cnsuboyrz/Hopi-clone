import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./HomeRoutes";
import AuthRoutes from "./AuthRoutes";
import { auth } from "../services/firebase";
import { useEffect, useRef, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const Router = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        console.log("Kullanıcı yok");
      }
    });
  }, []);

  if (loading) return <Text style={{ fontSize: 20 }}>Loading</Text>;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="HomeRoutes" component={HomeRoutes} />
        ) : (
          <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
