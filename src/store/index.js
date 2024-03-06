import { configureStore } from "@reduxjs/toolkit";
// import statsReducer from "./slices/statsSlice";
// import profileReducer from "./slices/profileSlice";
import userReducer from './slices/userSlice'

// export const store = configureStore({
//   reducer: {
//     stats: statsReducer,
//     profile: profileReducer,
//   },
// });

const store = configureStore({
  reducer: {
      user: userReducer,
  }
})

export default store
