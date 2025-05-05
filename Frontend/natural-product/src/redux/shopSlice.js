import { createSlice } from '@reduxjs/toolkit';
import { products } from '../assets/assets';

const initialState = {
  products: products,
  currency: '$',
  delivery_Fee: 10,
  search: '',
  showSearch: false,
  cartItems: {}, // Cart items stored as { itemId: { size: quantity } }
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
    addToCart: (state, action) => {
      const { itemId, size } = action.payload;
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = {};
      }
      if (state.cartItems[itemId][size]) {
        state.cartItems[itemId][size] += 1;
      } else {
        state.cartItems[itemId][size] = 1;
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, size, quantity } = action.payload;
      if (state.cartItems[itemId] && state.cartItems[itemId][size]) {
        if (quantity <= 0) {
          // Remove the size if quantity is 0 or less
          delete state.cartItems[itemId][size];
          // Remove the item if no sizes left
          if (Object.keys(state.cartItems[itemId]).length === 0) {
            delete state.cartItems[itemId];
          }
        } else {
          state.cartItems[itemId][size] = quantity;
        }
      }
    },
    removeFromCart: (state, action) => {
      const { itemId, size } = action.payload;
      if (state.cartItems[itemId] && state.cartItems[itemId][size]) {
        delete state.cartItems[itemId][size];
        // Remove the item if no sizes left
        if (Object.keys(state.cartItems[itemId]).length === 0) {
          delete state.cartItems[itemId];
        }
      }
    }
  },
});

// Export actions
export const { setSearch, setShowSearch, addToCart, updateQuantity, removeFromCart } = shopSlice.actions;

// Export reducer
export default shopSlice.reducer;