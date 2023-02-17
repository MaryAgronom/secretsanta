import { createAsyncThunk } from '@reduxjs/toolkit';

export const deleteRoom = createAsyncThunk(
  'user/deleteRoom',
  async (link, { dispatch, rejectWithValue }) => {
    console.log('DELETE START')
    try {
      console.log('in delete thunk', link)
      const response = await fetch(`http://localhost:5005/user/cabinet/${link}`, {
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
