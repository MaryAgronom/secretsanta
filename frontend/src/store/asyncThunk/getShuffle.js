import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { changeShuffle } from '../slices/adminCabinetSlice';
import { getPresents } from './getPresents';

export const getShuffle = createAsyncThunk(
  'shuffle/getShuffle',
  async ({ input, Users, link }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:5005/shuffle',
        data: { input, users: Users, link },
        withCredentials: true,
      });
      console.log('INFO===', data);
      dispatch(changeShuffle());
      dispatch(getPresents());
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
