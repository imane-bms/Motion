import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  posts: 0,
  likes: 0,
  friends: 0,
  followers: 0,
  following: 0,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    incrementStats(state, action) {
      state[action.payload]++;
    },
    decrementStats(state, action) {
      state[action.payload]--;
    },
  },
});

export const { incrementStats, decrementStats } = statsSlice.actions;
export default statsSlice.reducer;
