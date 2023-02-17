import { createSlice } from '@reduxjs/toolkit';
import { getCabinet } from '../asyncThunk/getCabinet';
import { getShuffle } from '../asyncThunk/getShuffle';
import { takeReceiver } from '../asyncThunk/takeReceiver';

const initialState = {
  Users: [],
  isShuffled: false,
  status: null,
  error: null,
  rooms: [],
};

const adminCabinetSlice = createSlice({
  name: 'cabinet',
  initialState,
  reducers: {
    cleanShuffle(state) {
      state.users = [];
      state.receiver = [];
    },
  },
  extraReducers: (builder) => {
    // pending
    builder.addCase(getCabinet.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getCabinet.fulfilled, (state, action) => {
      console.log('user slice', action.payload);
      const { id, title, description, isShuffled, Users } = action.payload;
      state.id = id;
      state.title = title;
      // state.receiver = [];
      state.description = description;
      state.isShuffled = isShuffled;
      state.delete = false;
      state.Users = Users;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getCabinet.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

    // SHUFFLE
    // pending
    builder.addCase(getShuffle.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getShuffle.fulfilled, (state, action) => {
      // const isShuffled = action.payload.reduce(function(prev, curr) {
      //   return [curr.room.isShuffled];
      // }, []);
      // console.log('REDUCER', isShuffled[0])
      console.log('getShuffle slice', action.payload);
      console.log('shuffle payload', action.payload)
      state.isShuffled = true;
      state.receiver = action.payload;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getShuffle.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

    // takeReceiver
    // pending
    builder.addCase(takeReceiver.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(takeReceiver.fulfilled, (state, action) => {
      // const isShuffled = action.payload.reduce(function(prev, curr) {
      //   return [curr.room.isShuffled];
      // }, []);
      // console.log('REDUCER', isShuffled[0])
      console.log('takeReceiver slice', action.payload);
      console.log('takeReceiver payload', action.payload)
      // state.isShuffled = true;
      state.receiver = action.payload;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(takeReceiver.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });
  },
});

export default adminCabinetSlice.reducer;
export const { cleanShuffle } = adminCabinetSlice.actions;
