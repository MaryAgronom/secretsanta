import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../consts';

export const receivePresent = createAsyncThunk(
  'presents/receivePresent',
  async (presentId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: 'put',
        url: API + '/user/presents/received',
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
