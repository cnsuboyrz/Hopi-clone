import { configureStore } from "@reduxjs/toolkit";
import authSlice, { loginAsync, selectEmail } from "./AuthSlice";

describe("AuthSlice tests", () => {
  let store;

  beforeEach(() => {
    store = configureStore({ reducer: { auth: authSlice } });
  });

  it("should update email correctly", () => {
    store.dispatch({ type: "auth/changeEmail", payload: "test@example.com" });
    expect(selectEmail(store.getState())).toEqual("test@example.com");
  });

  it("handles loginAsync", async () => {
    const mockCredentials = {
      email: "test@example.com",
      password: "password123",
    };
    await store.dispatch(loginAsync(mockCredentials));

    const state = store.getState().auth;
    expect(state.status).toEqual("succeeded");
  });
});
