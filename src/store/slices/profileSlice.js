import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  location: "",
  phone_number: "",
  about: "",
  password: "",
  things_user_likes: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateprofile(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export const selectProfile = (state) => state.profile;
export const { updateprofile } = profileSlice.actions;
export default profileSlice.reducer;
