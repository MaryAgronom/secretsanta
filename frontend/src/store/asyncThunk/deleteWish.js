import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../consts';

export const deleteWish = createAsyncThunk(
  'user/deleteWish',
  async (wish, { dispatch, rejectWithValue }) => {
    try {
      await axios({
        method: 'delete',
        url: API + '/user/wish',
        data: wish,
        withCredentials: true,
      });
      console.log('deleteWish', wish);
      return wish;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
