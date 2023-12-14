// campaignsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, onSnapshot, collection } from "../../services/firebase";

export const fetchCampaigns = createAsyncThunk(
  "campaigns/fetchCampaigns",
  async () => {
    const usersQuery = collection(db, "campaigns");
    const snapshot = await onSnapshot(usersQuery);
    const cards = snapshot.docs.map((doc) => doc.data());
    return cards;
  }
);

const campaignsSlice = createSlice({
  name: "campaigns",
  initialState: {
    images: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state) => {
        state.loading = false;
        state.images = [];
      });
  },
});

export const selectImages = (state) => state.campaigns.images;
export const selectLoading = (state) => state.campaigns.loading;

export default campaignsSlice.reducer;
