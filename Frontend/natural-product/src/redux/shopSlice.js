import { createSlice } from '@reduxjs/toolkit';
import { products } from '../assets/assets';

// Initial state structure
const initialState = {
  products: products,       // Your product data
  currency: '$',           // Currency symbol
  delivery_Fee: 10,        // Delivery cost
  // Future states can be added here (e.g., cart, userData)
};

export const shopSlice = createSlice({
  name: 'shop',           // Slice name (used in Redux DevTools)
  initialState,           // Default state
  reducers: {             
    // Add functions here to modify state
    // Example:
    // updateCurrency: (state, action) => {
    //   state.currency = action.payload;
    // }
  },
});

// Export actions (for dispatching)
// export const { updateCurrency } = shopSlice.actions;

// Export reducer (for store configuration)
export default shopSlice.reducer;