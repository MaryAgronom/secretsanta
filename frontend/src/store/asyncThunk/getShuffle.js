import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShuffle = createAsyncThunk(
  'user/shuffle',
  async ({input, users}, { dispatch, rejectWithValue }) => {
    try {
      const { info } = await axios({
        method: 'post',
        url: 'http://localhost:5005/shuffle',
        data: {input, users},
        withCredentials: true,
      });
      return info;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
