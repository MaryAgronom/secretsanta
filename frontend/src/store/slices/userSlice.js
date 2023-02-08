import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../asyncThunk/getUser';
import { logoutUser } from '../asyncThunk/logoutUser'

const initialState = {
  id: null,
  login: false,
  name: '',
  surname: '',
  wishes: [],
  status: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // pending
    builder.addCase(getUser.pending, (state) => {
      state.status = 'loading';
    });

    // fulfilled
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log('user slice', action.payload);
      const { id, name, surname } = action.payload;
      state.id = id;
      state.name = name;
      state.login = true;
      state.surname = surname;

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
      // const { id, name, surname } = action.payload;
      state.id = null;
      state.name = '';
      state.login = false;
      state.surname = '';

      state.status = 'fulfilled';
    });

  },
});

export default userSlice.reducer;
export const {} = userSlice.actions;
