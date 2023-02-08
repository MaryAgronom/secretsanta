import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWish = createAsyncThunk(
  'user/addWish',
  async (item, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:5005/user/wish',
        data: item,
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
