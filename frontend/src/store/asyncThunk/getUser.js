import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch('http://localhost:5005/user', {
        method: 'GET',
        credentials: 'include',
      });
      // {id, name,surname}
      const data = await res.json();
      console.log('getUser thunk', data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
