import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminCabinetSlice from './slices/adminCabinetSlice';
import presentSlice from './slices/presentSlice';
import shuffleSlice from './slices/shuffleSlice';
import userSlice from './slices/userSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  cabinet: adminCabinetSlice,
  shuffle: shuffleSlice,
  presents: presentSlice,
});

export const store = configureStore({ reducer: rootReducer });
