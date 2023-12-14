import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../screens/auth/AuthSlice.js";
import offerCarouselSlice from "../components/Campaigns/OfferCarouselSlice.js";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    carousel: offerCarouselSlice.reducer,
  },
});

export default store;
