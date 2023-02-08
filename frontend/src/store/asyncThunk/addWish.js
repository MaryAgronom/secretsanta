import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk(
  'user/addWish',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://localhost:5005/user/wish', {
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
