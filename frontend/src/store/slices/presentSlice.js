import { createSlice } from '@reduxjs/toolkit';
import { getPresents } from '../asyncThunk/getPresents';
import { receivePresent } from '../asyncThunk/receivePresent';
import { sendPresent } from '../asyncThunk/sendPresent';

const initialState = {
  presents: [],
  status: null,
  error: null,
};

const presentSlice = createSlice({
  name: 'presents',
  initialState,
  reducers: {
    cleanPresents(state) {
      state.presents = [];
      state.status = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    // getPresents
    builder.addCase(getPresents.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getPresents.fulfilled, (state, action) => {
      console.log('presentSlice', action.payload);
      state.presents = action.payload;
      state.status = 'fulfilled';
    });
    builder.addCase(getPresents.rejected, (state, action) => {
      state.error = action.payload;
    });

    // sendPresent
    builder.addCase(sendPresent.fulfilled, (state, action) => {
      console.log('presentSlice', action.payload);
      state.presents.find(
        (present) => present.id === action.payload.presentId
      ).send = true;
    });

    // receivePresent
    builder.addCase(receivePresent.fulfilled, (state, action) => {
      state.presents.find(
        (present) => present.id === action.payload.presentId
      ).received = true;
    });
  },
});

export default presentSlice.reducer;
export const { cleanPresents } = presentSlice.actions;
