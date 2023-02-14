import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminCabinetSlice from './slices/adminCabinetSlice';
import presentSlice from './slices/presentSlice';
import shuffleSlice from './slices/shuffleSlice';
import statusSlice from './slices/statusSlice';
import userSlice from './slices/userSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  cabinet: adminCabinetSlice,
  shuffle: shuffleSlice,
  presents: presentSlice,
  status: statusSlice,
});

export const store = configureStore({ reducer: rootReducer });
