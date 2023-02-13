import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const acceptInvite = createAsyncThunk(
  'user/acceptInvite',
  async ({inputs, link}, { dispatch, rejectWithValue }) => {
    console.log('here')
    try {
      console.log('in invite thunk')
      const {data} = await fetch(`http://localhost:5005/registration/${link}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(inputs),
      });
      // const { data }  = await axios({
      //   method: 'post',
      //   url: `http://localhost:5005/registration/${link}`,
      //   data: {inputs},
      //   withCredentials: true,
      // });
      console.log('INVITE DATA', data);
      return data;
     
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
