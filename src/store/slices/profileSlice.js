import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  location: "",
  phone: "",
  about: "",
  password: "",
  hobbies: [],
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
