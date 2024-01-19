import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import AllCampaingsScreen from "./AllCampaingsScreen";
import { Provider } from "react-redux";
import store from "./../../services/store";

jest.mock("firebase/firestore", () => ({
  collection: jest.fn(),
  onSnapshot: jest.fn((query, callback) => {
    callback({
      forEach: (func) => {
        // Mock data
        const mockCampaignData = [
          { id: "1", title: "Campaign 1" },
          { id: "2", title: "Campaign 2" },
        ];
        mockCampaignData.forEach((doc) => func({ data: () => doc }));
      },
    });
  }),
}));

describe("AllCampaingsScreen", () => {
  it("renders campaign cards", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <AllCampaingsScreen />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText("Campaign 1")).toBeTruthy();
      expect(getByText("Campaign 2")).toBeTruthy();
    });
  });
});
