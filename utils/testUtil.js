import React from "react";
import { render } from "@testing-library/react-native";
import { Provider } from "react-redux";

import { setupStore } from "../services/store";
import { NavigationContainer } from "@react-navigation/native";
import Router from "../routes/Router";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
