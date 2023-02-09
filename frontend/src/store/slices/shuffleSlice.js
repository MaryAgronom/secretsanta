import { createSlice } from '@reduxjs/toolkit';
import { getShuffle } from '../asyncThunk/getShuffle';

const initialState = {
  
};

const shuffleSlice = createSlice({
  name: 'shuffle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(getShuffle.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getShuffle.fulfilled, (state, action) => {
      console.log('getShuffle slice', action.payload);
    //   const { title, description, Users } =
    //     action.payload;
    //   state.title = title;
    //   state.description = description;
      // state.login = true;
    //   state.Users = Users;
      // state.wishes = Wishes;
      // state.adminRooms = adminRooms;
      // state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getShuffle.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

  },
});

export default shuffleSlice.reducer;
export const {} = shuffleSlice.actions;