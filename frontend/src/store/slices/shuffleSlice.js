import { createSlice } from '@reduxjs/toolkit';
import { getShuffle } from '../asyncThunk/getShuffle';

const initialState = {
  receiver: [],
  error: null,
  status: null,
};

const shuffleSlice = createSlice({
  name: 'shuffle',
  initialState,
  reducers: {
    cleanShuffle(state) {
      state.users = [];
      state.isShuffled = false;
    },
  },
  extraReducers: (builder) => {
    // pending
    // builder.addCase(getShuffle.pending, (state) => {
    //   state.status = 'loading';
    // });

    // // fulfilled
    // builder.addCase(getShuffle.fulfilled, (state, action) => {
    //   // const isShuffled = action.payload.reduce(function(prev, curr) {
    //   //   return [curr.room.isShuffled];
    //   // }, []);
    //   // console.log('REDUCER', isShuffled[0])
    //   console.log('getShuffle slice', action.payload);
    //   const { receiver } = action.payload;
    //   console.log('shuffle payload', action.payload)
    //   // console.log('shuffle payload', receiver)
    //   state.users = action.payload;
    //   // state.isShuffled = isShuffled;
    //   // state.email = email;
    //   //   state.Users = Users;
    //   // state.wishes = Wishes;
    //   // state.adminRooms = adminRooms;
    //   // state.userInfo = userInfo;
    //   state.status = 'fulfilled';
    // });

    // //rejected
    // builder.addCase(getShuffle.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.status = 'rejected';
    // });
  },
});

export default shuffleSlice.reducer;
export const { cleanShuffle } = shuffleSlice.actions;
