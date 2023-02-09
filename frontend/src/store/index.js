import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminCabinetSlice from './slices/adminCabinetSlice';
import shuffleSlice from './slices/shuffleSlice';
import userSlice from './slices/userSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  cabinet: adminCabinetSlice,
  shuffle: shuffleSlice,

});

export const store = configureStore({ reducer: rootReducer });
