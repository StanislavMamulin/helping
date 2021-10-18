import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import modalReducer from './modalSlice';
import eventSlice from './eventSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    event: eventSlice,
  },
});
