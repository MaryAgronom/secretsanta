import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
// хранилище слайсов
const rootReducer = combineReducers({ 
    user: userSlice,
    
 });

export const store = configureStore({reducer: rootReducer});