import { createSlice } from '@reduxjs/toolkit';
import { products } from '../assets/assets';

const initialState = {
  products: products,
  currency: '$',
  delivery_Fee: 10,
  search: '',              // Add search state here
  showSearch: false        // Add showSearch state here
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
    // Add other reducers as needed
  },
});

// Export actions
export const { setSearch, setShowSearch } = shopSlice.actions;

// Export reducer
export default shopSlice.reducer;