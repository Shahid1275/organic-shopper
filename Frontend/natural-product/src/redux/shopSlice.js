
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// Hardcoded country data
const countryData = 
 [
  { 
    country: "Pakistan", 
    currency: "PKR", 
    currencyName: "pkr", 
    language: "English", 
    conversionRate: 200.00
  },
  { 
    country: "United States", 
    currency: "USD", 
    currencyName: "US Dollar", 
    language: "English", 
    conversionRate: 1 
  },
  { 
    country: "China", 
    currency: "CNY", 
    currencyName: "Chinese Yuan", 
    language: "Mandarin", 
    conversionRate: 2.23 
  },
  { 
    country: "Japan", 
    currency: "JPY", 
    currencyName: "Japanese Yen", 
    language: "Japanese", 
    conversionRate: 120.34 
  },
  { 
    country: "Germany", 
    currency: "EUR", 
    currencyName: "Euro", 
    language: "German", 
    conversionRate: 0.63 
  },
  { 
    country: "United Kingdom", 
    currency: "GBP", 
    currencyName: "British Pound", 
    language: "English", 
    conversionRate: 0.59 
  },
  { 
    country: "India", 
    currency: "INR", 
    currencyName: "Indian Rupee", 
    language: "Hindi", 
    conversionRate: 53.45 
  },
  { 
    country: "France", 
    currency: "EUR", 
    currencyName: "Euro", 
    language: "French", 
    conversionRate: 0.73 
  },
  { 
    country: "Brazil", 
    currency: "BRL", 
    currencyName: "Brazilian Real", 
    language: "Portuguese", 
    conversionRate: 3.45 
  },
  { 
    country: "Italy", 
    currency: "EUR", 
    currencyName: "Euro", 
    language: "Italian", 
    conversionRate: 0.63 
  },
  { 
    country: "Canada", 
    currency: "CAD", 
    currencyName: "Canadian Dollar", 
    language: "English/French", 
    conversionRate: 1.00 
  },
  { 
    country: "South Korea", 
    currency: "KRW", 
    currencyName: "South Korean Won", 
    language: "Korean", 
    conversionRate: 120.50 
  },
  { 
    country: "Russia", 
    currency: "RUB", 
    currencyName: "Russian Ruble", 
    language: "Russian", 
    conversionRate: 60.50 
  },
  { 
    country: "Australia", 
    currency: "AUD", 
    currencyName: "Australian Dollar", 
    language: "English", 
    conversionRate: 1.00 
  },
  { 
    country: "Mexico", 
    currency: "MXN", 
    currencyName: "Mexican Peso", 
    language: "Spanish", 
    conversionRate: 10.20 
  },
  { 
    country: "Indonesia", 
    currency: "IDR", 
    currencyName: "Indonesian Rupiah", 
    language: "Indonesian", 
    conversionRate: 162.00 
  },
  { 
    country: "Netherlands", 
    currency: "EUR", 
    currencyName: "Euro", 
    language: "Dutch", 
    conversionRate: 0.73 
  },
  { 
    country: "Saudi Arabia", 
    currency: "SAR", 
    currencyName: "Saudi Riyal", 
    language: "Arabic", 
    conversionRate: 2.75 
  },
  { 
    country: "Turkey", 
    currency: "TRY", 
    currencyName: "Turkish Lira", 
    language: "Turkish", 
    conversionRate: 30.70 
  },
  { 
    country: "Switzerland", 
    currency: "CHF", 
    currencyName: "Swiss Franc", 
    language: "German/French/Italian", 
    conversionRate: 0.80 
  },
  { 
    country: "United Arab Emirates", 
    currency: "AED", 
    currencyName: "UAE Dirham", 
    language: "Arabic", 
    conversionRate: 2.07 
  }
 ];

export const fetchProducts = createAsyncThunk(
  'shop/fetchProducts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`); // Changed to /list (public)
      return response.data; // { success: true, products: [...] }
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(`Error fetching products at ${new Date().toISOString()}: ${errorMessage}`);
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchBestSellers = createAsyncThunk(
  'shop/fetchBestSellers',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`); // Changed to /list (public)
      const products = response.data.products || [];
      const bestSellers = products.filter(product => product.bestseller === true);
      return bestSellers;
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(`Error fetching best sellers at ${new Date().toISOString()}: ${errorMessage}`);
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchLatestProducts = createAsyncThunk(
  'shop/fetchLatestProducts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`); // Changed to /list (public)
      const products = response.data.products || [];
      // Sort by date (newest first) and take the top 8
      const latestProducts = products
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8);
      return latestProducts;
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(`Error fetching latest products at ${new Date().toISOString()}: ${errorMessage}`);
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  products: [],
  bestSellers: [],
  latestProducts: [],
  countries: countryData,
  currency: localStorage.getItem('currency') || 'USD',
  language: localStorage.getItem('language') || 'English',
  country: localStorage.getItem('country') || 'United States',
  delivery_Fee: 10,
  search: '',
  showSearch: false,
  cartItems: {},
  backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000',
  loading: false,
  bestSellersLoading: false,
  latestProductsLoading: false,
  error: null,
  bestSellersError: null,
  latestProductsError: null,
  conversionRates: countryData.reduce((acc, curr) => ({ ...acc, [curr.currency]: curr.conversionRate }), { USD: 1 }),
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
    setCountry: (state, action) => {
      const selected = state.countries.find(c => c.country === action.payload) || state.countries[0];
      state.country = selected.country;
      state.currency = selected.currency;
      state.language = selected.language;
      localStorage.setItem('country', state.country);
      localStorage.setItem('currency', state.currency);
      localStorage.setItem('language', state.language);
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem('currency', action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload.products) ? action.payload.products : [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.products = [];
      })
      // Fetch best sellers
      .addCase(fetchBestSellers.pending, (state) => {
        state.bestSellersLoading = true;
        state.bestSellersError = null;
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.bestSellersLoading = false;
        state.bestSellers = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchBestSellers.rejected, (state, action) => {
        state.bestSellersLoading = false;
        state.bestSellersError = action.payload;
        state.bestSellers = [];
      })
      // Fetch latest products
      .addCase(fetchLatestProducts.pending, (state) => {
        state.latestProductsLoading = true;
        state.latestProductsError = null;
      })
      .addCase(fetchLatestProducts.fulfilled, (state, action) => {
        state.latestProductsLoading = false;
        state.latestProducts = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchLatestProducts.rejected, (state, action) => {
        state.latestProductsLoading = false;
        state.latestProductsError = action.payload;
        state.latestProducts = [];
      });
  },
});

export const getCartAmount = (state) => {
  let cartTotal = 0;
  const { cartItems, products = [], delivery_Fee, currency, conversionRates } = state.shop;
  const isCartEmpty = Object.keys(cartItems).length === 0;
  const baseCurrency = 'USD';

  // Convert delivery fee to selected currency
  const convertedDeliveryFee = delivery_Fee * (conversionRates[currency] || 1);

  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);
    if (product && product.price) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        const priceObj = product.price[size];
        if (priceObj && typeof priceObj === 'object' && quantity > 0) {
          const priceValue = Number(priceObj.value || priceObj.display || 0);
          const convertedPrice = priceValue * (conversionRates[currency] || 1);
          cartTotal += convertedPrice * quantity;
        } else {
          console.warn(`Invalid price format for product ID ${itemId}, size ${size}:`, priceObj);
        }
      }
    } else {
      console.warn(`Product not found or no price for ID ${itemId}`);
    }
  }

  const grandTotal = isCartEmpty ? 0 : cartTotal + convertedDeliveryFee;

  return {
    cartTotal: isNaN(cartTotal) ? 0 : parseFloat(cartTotal.toFixed(2)),
    delivery_Fee: isNaN(convertedDeliveryFee) ? 0 : parseFloat(convertedDeliveryFee.toFixed(2)),
    grandTotal: isNaN(grandTotal) ? 0 : parseFloat(grandTotal.toFixed(2)),
    conversionRate: conversionRates[currency] || 1,
  };
};

export const {
  setSearch,
  setShowSearch,
  addToCart,
  updateQuantity,
  removeFromCart,
  setCountry,
  setCurrency,
  setLanguage,
} = shopSlice.actions;

export default shopSlice.reducer;