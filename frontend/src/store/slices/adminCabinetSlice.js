import { createSlice } from '@reduxjs/toolkit';
import { deleteRoom } from '../asyncThunk/deleteRoom';
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
      const { id, title, description, isShuffled, Users } =
        action.payload;
        state.id = id;
      state.title = title;
      state.description = description;
      state.isShuffled = isShuffled;
      state.delete = false;
      
      state.Users = Users;
      
      // state.adminRooms = adminRooms;
      // state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getCabinet.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

    // DELETE CABINET

    builder.addCase(deleteRoom.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      console.log('DELete slice', action.payload);
      state.delete = action.payload.deleted
      // const { id, title, description, isShuffled, Users } =
      //   action.payload;
        state.id = null;
      state.id = null;
      state.title = '';
      state.description = '';
      state.isShuffled = false;
      
      state.Users = [];
      
      // state.adminRooms = adminRooms;
      // state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(deleteRoom.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

  },
});

export default adminCabinetSlice.reducer;
export const {} = adminCabinetSlice.actions;
