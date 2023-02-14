import { createSlice } from '@reduxjs/toolkit';
import { addWish } from '../asyncThunk/addWish';
import { deleteWish } from '../asyncThunk/deleteWish';
import { getUser } from '../asyncThunk/getUser';
import { logoutUser } from '../asyncThunk/logoutUser';
import { acceptInvite } from '../asyncThunk/acceptInvite'
import { deleteRoom } from '../asyncThunk/deleteRoom';
import { addCabinet } from '../asyncThunk/addCabinet';

const initialState = {
  id: null,
  login: false,
  name: '',
  surname: '',
  userInfo: null,
  wishes: [],
  adminRooms: [],
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAddress(state, action) {
      state.userInfo.address = action.payload;
    },
    changeSize(state, action) {
      state.userInfo.size = action.payload;
    },
    changeAllergy(state, action) {
      state.userInfo.allergy = action.payload;
    },
  },
  extraReducers: (builder) => {
    // pending
    builder.addCase(getUser.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log('user slice', action.payload);
      const { id, name, surname, Wishes, adminRooms, userInfo } =
        action.payload;
      state.id = id;
      state.name = name;
      state.login = true;
      state.surname = surname;
      state.wishes = Wishes;
      state.adminRooms = adminRooms;
      state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });

    //rejected
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });
    // pending
    builder.addCase(logoutUser.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      console.log('logout slice', action.payload);
      state.id = null;
      state.name = '';
      state.login = false;
      state.surname = '';

      state.status = 'fulfilled';
    });
    // add wish
    builder.addCase(addWish.fulfilled, (state, action) => {
      console.log(action.payload);
      state.wishes.push(action.payload);
    });

    // delete wish
    builder.addCase(deleteWish.fulfilled, (state, action) => {
      state.wishes = state.wishes.filter(
        (wish) => wish.id !== action.payload.id
      );
    });
    // ACCEPT INVITE
    //rejected
    builder.addCase(acceptInvite.rejected, (state, action) => {
      state.error = action.payload;
      state.status = 'rejected';
    });
    // pending
    builder.addCase(acceptInvite.pending, (state) => {
      console.log('ACCEPT LOAD',)
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(acceptInvite.fulfilled, (state, action) => {
      console.log('invite slice', action.payload);
      state.invite = action.payload.created
      // state.name = '';
      // state.login = false;
      // state.surname = '';

      state.status = 'fulfilled';
    });

    // CREATE cabinet
    builder.addCase(addCabinet.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(addCabinet.fulfilled, (state, action) => {
      console.log('ADD slice', action.payload);
      // state.delete = action.payload.deleted;
      const { id, title, description, isShuffled } =
        action.payload;
        console.log('ADDD CABINET', action.payload)
      state.adminRooms.push(action.payload)
      // state.id = null;
      // state.title = '';
      // state.description = '';
      // state.isShuffled = false;

      // state.Users = [];

      // state.adminRooms = adminRooms;
      // state.userInfo = userInfo;
      state.status = 'fulfilled';
    });

    //rejected
    builder.addCase(addCabinet.rejected, (state, action) => {
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
      // state.delete = action.payload.deleted;
      // const { id, title, description, isShuffled, Users } =
      //   action.payload;
      console.log('DELETE ID', action.payload.id)
      state.adminRooms = state.adminRooms.filter(
        (room) => room.id !== action.payload.findRoom.id
      );
      // state.id = null;
      // state.id = null;
      // state.title = '';
      // state.description = '';
      // state.isShuffled = false;

      // state.Users = [];

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

export default userSlice.reducer;
export const { changeAddress, changeSize, changeAllergy } = userSlice.actions;
