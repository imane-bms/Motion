import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./slices/statsSlice";
import profileReducer from "./slices/profileSlice";
import userReducer from './slices/userSlice'
import postsReducer from './slices/postSlice'

const store = configureStore({
  reducer: {
      user: userReducer,
      stats: statsReducer,
      profile: profileReducer,
      posts: postsReducer,
      
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  setLoggedInViaForm: (state, action) => {
    state.loggedInViaForm = action.payload;
  },
})

export default store
