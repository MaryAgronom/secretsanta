import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../consts';

export const sendPresent = createAsyncThunk(
  'presents/sendPresent',
  async (presentId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'put',
        url: API + '/user/presents',
        data: presentId,
        withCredentials: true,
      });
      return presentId;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
