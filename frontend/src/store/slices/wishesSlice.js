import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishes: [],
  status: null,
  error: null,
};

const wishesSlice = createSlice({
  name: 'wishes',
  initialState,
  reducers: {},
});

export default wishesSlice.reducer;
export const {} = wishesSlice.actions;
