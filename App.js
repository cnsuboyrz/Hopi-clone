import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import store from "./services/store";
import "./lang/i18n";
export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

const styles = StyleSheet.create({});
