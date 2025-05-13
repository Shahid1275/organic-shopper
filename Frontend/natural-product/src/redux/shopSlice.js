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
          delete state.cartItems[itemId][size];
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
        if (Object.keys(state.cartItems[itemId]).length === 0) {
          delete state.cartItems[itemId];
        }
      }
    },
  },
});

// Selector to return cart totals
export const getCartAmount = (state) => {
  let cartTotal = 0;
  const { cartItems, products, delivery_Fee } = state.shop;
  const isCartEmpty = Object.keys(cartItems).length === 0;

  // Calculate cart total
  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);
    if (product && product.price) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        const priceObj = product.price[size]; // e.g., { display: '$10.00', value: 10 }
        if (priceObj && typeof priceObj === 'object' && quantity > 0) {
          const priceValue = Number(priceObj.value || priceObj.display || 0);
          cartTotal += priceValue * quantity;
        } else if (typeof product.price === 'number' || typeof product.price === 'string') {
          // Fallback for raw number/string price
          const priceValue = Number(product.price || 0);
          cartTotal += priceValue * quantity;
        } else {
          console.warn(`Invalid price format for product ID ${itemId}, size ${size}:`, priceObj);
        }
      }
    } else {
      console.warn(`Product not found or no price for ID ${itemId}`);
    }
  }

  const grandTotal = isCartEmpty ? 0 : cartTotal + delivery_Fee;

  return {
    cartTotal: isNaN(cartTotal) ? 0 : parseFloat(cartTotal.toFixed(2)),
    delivery_Fee: isCartEmpty ? 0 : delivery_Fee,
    grandTotal: isNaN(grandTotal) ? 0 : parseFloat(grandTotal.toFixed(2)),
  };
};

// Export actions
export const {
  setSearch,
  setShowSearch,
  addToCart,
  updateQuantity,
  removeFromCart,
} = shopSlice.actions;

// Export reducer
export default shopSlice.reducer;