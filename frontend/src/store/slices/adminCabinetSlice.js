import { createSlice } from '@reduxjs/toolkit';
import { getCabinet } from '../asyncThunk/getCabinet';

const initialState = {
  
};

const adminCabinetSlice = createSlice({
  name: 'cabinet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(getCabinet.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getCabinet.fulfilled, (state, action) => {
      console.log('user slice', action.payload);
      const { title, description, Users } =
        action.payload;
      state.title = title;
      state.description = description;
      // state.login = true;
      state.Users = Users;
      // state.wishes = Wishes;
      // state.adminRooms = adminRooms;
      // state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getCabinet.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

  },
});

export default adminCabinetSlice.reducer;
export const {} = adminCabinetSlice.actions;
