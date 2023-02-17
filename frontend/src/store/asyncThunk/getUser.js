import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:5005/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json()
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
