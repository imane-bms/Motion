import { configureStore } from "@reduxjs/toolkit";
import statsSlice from "./slices/statsSlice";

export const store = configureStore({
  reducer: {
    stats: statsSlice,
  },
});
