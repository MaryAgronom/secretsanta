import { createAsyncThunk } from '@reduxjs/toolkit';

export const checkStatus = createAsyncThunk(
  'status/checkStatus',
  async (link, { dispatch, rejectWithValue }) => {
    try {
      console.log('GET STATUS FETCH', link)
      const response = await fetch(`http://localhost:5005/cabinet/status/${link}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',

        },
        credentials: 'include',
      });

      const data = await response.json()
      console.log('getCabinet AFTER FETCH', data);

      return data;
    } catch (err) {
      console.log('VISHLA OSHIBKA', link)
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
