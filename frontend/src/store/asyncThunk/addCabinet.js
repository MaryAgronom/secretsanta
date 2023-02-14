import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addCabinet = createAsyncThunk(
  'cabinet/addCabinet',
  async (inputs, { dispatch, rejectWithValue }) => {
    try {
      console.log('ADD CABINET FETCH', inputs)
      const res = await fetch('http://localhost:5005/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      console.log('addCabinet AFTER FETCH', data);
      return data;
    } catch (err) {
      console.log('VISHLA OSHIBKA', inputs)
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
