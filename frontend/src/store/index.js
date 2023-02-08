import { combineReducers, configureStore } from '@reduxjs/toolkit';
import adminCabinetSlice from './slices/adminCabinetSlice';
import userSlice from './slices/userSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  cabinet: adminCabinetSlice,

});

export const store = configureStore({ reducer: rootReducer });
