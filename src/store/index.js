import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./slices/statsSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    stats: statsReducer,
    profile: profileReducer,
  },
});
