import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../consts';

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async (userInfo, { rejectWithValue }) => {
    try {
      await axios({
        method: 'put',
        url: API + '/user',
        data: userInfo,
        withCredentials: true,
      });
      console.log('updateUserInfo');
      return true;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

// добавить новую инфу
