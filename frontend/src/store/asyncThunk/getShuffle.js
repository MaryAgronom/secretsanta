import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShuffle = createAsyncThunk(
  'user/shuffle',
  async ({input, users, id}, { dispatch, rejectWithValue }) => {
    try {
      const { info } = await axios({
        method: 'post',
        url: 'http://localhost:5005/shuffle',
        data: {input, users, id},
        withCredentials: true,
      });
      return info;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
