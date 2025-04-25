import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';

export const store = configureStore({
  reducer: {
    shop: shopReducer,    // All state managed under 'shop'
    // Future reducers (e.g., user: userReducer)
  },
});