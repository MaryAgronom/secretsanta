import { createSlice } from '@reduxjs/toolkit';
import { checkStatus } from '../asyncThunk/checkStatus';
import { getShuffle } from '../asyncThunk/getShuffle';

const initialState = {
  users: [],
  error: null,
  status: null,
};

const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    // SHUFFLE
    // pending
    builder.addCase(checkStatus.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(checkStatus.fulfilled, (state, action) => {
      console.log('STATIS slice', action.payload);
      state.users = action.payload;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(checkStatus.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });
  },
});

export default statusSlice.reducer;
export const { } = statusSlice.actions;