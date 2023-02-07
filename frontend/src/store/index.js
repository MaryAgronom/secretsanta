import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import wishesSlice from './slices/wishesSlice';
// хранилище слайсов
const rootReducer = combineReducers({
  user: userSlice,
  // wishes: wishesSlice,
});

export const store = configureStore({ reducer: rootReducer });
