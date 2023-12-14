// bannersSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, onSnapshot, collection } from "../../services/firebase";

export const fetchBanners = createAsyncThunk(
  "banners/fetchBanners",
  async () => {
    const bannersQuery = collection(db, "banners");
    const snapshot = await onSnapshot(bannersQuery);
    const banners = snapshot.docs.map((doc) => doc.data());
    return banners;
  }
);

const bannersSlice = createSlice({
  name: "banners",
  initialState: {
    images: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchBanners.rejected, (state) => {
        state.loading = false;
        state.images = [];
      });
  },
});

export const selectBanners = (state) => state.banners.images;
export const selectBannersLoading = (state) => state.banners.loading;

export default bannersSlice.reducer;
