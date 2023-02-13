import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getShuffle = createAsyncThunk(
  'user/getShuffle',
  async ({input, users, id}, { dispatch, rejectWithValue }) => {
    try {
      const { data }  = await axios({
        method: 'post',
        url: 'http://localhost:5005/shuffle',
        data: {input, users, id},
        withCredentials: true,
      });
      console.log('INFO===', data)
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
