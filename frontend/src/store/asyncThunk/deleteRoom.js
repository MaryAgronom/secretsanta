import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteRoom = createAsyncThunk(
  'cabinet/deleteRoom',
  async (link, { dispatch, rejectWithValue }) => {
    console.log('DELETE START')
    try {
      console.log('in delete thunk', link)
      const response = await fetch(`http://localhost:5005/cabinet/${link}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',

      });

      const data = await response.json()

      console.log('DELETE ROOM', data);
      return data;
     
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
