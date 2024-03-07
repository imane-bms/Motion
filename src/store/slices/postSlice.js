import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserAxios from '../../axios';

// Асинхронный thunk для загрузки постов
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ search = '', limit = 10, offset = 0 }) => {
    const response = await UserAxios.get(`/social/posts/?search=${search}&limit=${limit}&offset=${offset}`);
    return response.data;
  }
);

// Slice для постов
export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;