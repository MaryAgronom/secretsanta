import { createAsyncThunk } from '@reduxjs/toolkit';

export const acceptInvite = createAsyncThunk(
  'user/acceptInvite',
  async ({inputs, link}, { dispatch, rejectWithValue }) => {
    console.log('here')
    try {
      console.log('in invite thunk')
      const response = await fetch(`http://localhost:5005/registration/${link}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });

      const data = await response.json()
      // console.log('res', res);
      console.log('INVITE DATA', data);
      return data;
     
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
