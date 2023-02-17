import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCabinet = createAsyncThunk(
  'cabinet/getCabinet',
  async (link, { dispatch, rejectWithValue }) => {
    try {
      console.log('GET CABINET FETCH', link)
      const response = await fetch(`http://localhost:5005/cabinet/${link}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Headers':'http://localhost:5005',
        },
        credentials: 'include',
      });

      const data = await response.json()
      console.log('getCabinet AFTER FETCH', data);

      // const { data } = await axios.get(`http://localhost:5005/cabinet/${link}`, {
      //   withCredentials: true,
      // });
      return data;
    } catch (err) {
      console.log('VISHLA OSHIBKA', link)
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
