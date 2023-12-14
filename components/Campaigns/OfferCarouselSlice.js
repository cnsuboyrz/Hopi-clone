import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../services/firebase.js";

export const fetchUrls = createAsyncThunk("files/fetchUrls", async () => {
  const offersDir = ref(storage, "offers");
  const res = await listAll(offersDir);
  const urls = await Promise.all(
    res.items.map(async (itemRef) => getDownloadURL(itemRef))
  );
  return urls;
});

const initialState = {
  urls: [],
  status: "idle", // 'loading', 'succeeded', 'failed' gibi durumları ekleyebilirsiniz
  error: null,
};

const offerCarouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUrls.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUrls.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        state.urls = action.payload;
      })
      .addCase(fetchUrls.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUrls = (state) => state.carousel.urls;
export const selectStatus = (state) => state.carousel.status;
export const selectError = (state) => state.carousels.error;

export default offerCarouselSlice;
