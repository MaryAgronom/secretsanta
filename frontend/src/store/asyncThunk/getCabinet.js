import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCabinet = createAsyncThunk(
  'user/getCabinet',
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:5005/cabinet/${id}`, {
        withCredentials: true,
      });
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
