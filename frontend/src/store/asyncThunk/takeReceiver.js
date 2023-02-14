import { createAsyncThunk } from '@reduxjs/toolkit';

export const takeReceiver = createAsyncThunk(
  'cabinet/takeReceiver',
  async (link, { dispatch, rejectWithValue }) => {
    try {
      console.log('Take receiver FETCH', link)
      const response = await fetch(`http://localhost:5005/shuffle/${link}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await response.json()
      console.log('takeReceiver AFTER FETCH', data);
      return data;
    } catch (err) {
      console.log('VISHLA OSHIBKA', link)
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
