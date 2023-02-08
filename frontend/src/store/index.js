import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminCabinetSlice from './slices/adminCabinetSlice';
import userSlice from './slices/userSlice';
import wishesSlice from './slices/wishesSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  // wishes: wishesSlice,
  cabinet: adminCabinetSlice,
});

export const store = configureStore({ reducer: rootReducer });
