import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../../consts';

export const getPresents = createAsyncThunk(
  'presents/getPresents',
  async (_, {}) => {
    try {
      const { data } = await axios({
        method: 'get',
        url: API + '/user/presents',
        withCredentials: true,
      });
      console.log('get presents thunk', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
