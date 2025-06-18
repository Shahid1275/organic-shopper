import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// Hardcoded country data
const countryData = [
  {
    country: "Pakistan",
    currency: "PKR",
    currencyName: "pkr",
    language: "English",
    conversionRate: 200.0,
    currencySymbol: "₨",
  },
  {
    country: "United States",
    currency: "$",
    currencyName: "US Dollar",
    language: "English",
    conversionRate: 1,
    currencySymbol: "$",
  },
  {
    country: "China",
    currency: "CNY",
    currencyName: "Chinese Yuan",
    language: "Mandarin",
    conversionRate: 2.23,
    currencySymbol: "¥",
  },
  {
    country: "Japan",
    currency: "JPY",
    currencyName: "Japanese Yen",
    language: "Japanese",
    conversionRate: 120.34,
    currencySymbol: "¥",
  },
  {
    country: "Germany",
    currency: "EUR",
    currencyName: "Euro",
    language: "German",
    conversionRate: 0.63,
    currencySymbol: "€",
  },
  {
    country: "United Kingdom",
    currency: "GBP",
    currencyName: "British Pound",
    language: "English",
    conversionRate: 0.59,
    currencySymbol: "£",
  },
  {
    country: "India",
    currency: "INR",
    currencyName: "Indian Rupee",
    language: "Hindi",
    conversionRate: 53.45,
    currencySymbol: "₹",
  },
  {
    country: "France",
    currency: "EUR",
    currencyName: "Euro",
    language: "French",
    conversionRate: 0.73,
    currencySymbol: "€",
  },
  {
    country: "Brazil",
    currency: "BRL",
    currencyName: "Brazilian Real",
    language: "Portuguese",
    conversionRate: 3.45,
    currencySymbol: "R$",
  },
  {
    country: "Italy",
    currency: "EUR",
    currencyName: "Euro",
    language: "Italian",
    conversionRate: 0.63,
    currencySymbol: "€",
  },
  {
    country: "Canada",
    currency: "CAD",
    currencyName: "Canadian Dollar",
    language: "English/French",
    conversionRate: 1.0,
    currencySymbol: "$",
  },
  {
    country: "South Korea",
    currency: "KRW",
    currencyName: "South Korean Won",
    language: "Korean",
    conversionRate: 120.5,
    currencySymbol: "₩",
  },
];

export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(
        `Error fetching products at ${new Date().toISOString()}: ${errorMessage}`
      );
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchBestSellers = createAsyncThunk(
  "shop/fetchBestSellers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`);
      const products = response.data.products || [];
      const bestSellers = products.filter(
        (product) => product.bestseller === true
      );
      return bestSellers;
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(
        `Error fetching best sellers at ${new Date().toISOString()}: ${errorMessage}`
      );
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchLatestProducts = createAsyncThunk(
  "shop/fetchLatestProducts",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { backendUrl } = getState().shop;
      const response = await axios.get(`${backendUrl}/api/product/list`);
      const products = response.data.products || [];
      const latestProducts = products
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8);
      return latestProducts;
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.message;
      toast.error(
        `Error fetching latest products at ${new Date().toISOString()}: ${errorMessage}`
      );
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchUserCart = createAsyncThunk(
  "shop/fetchUserCart",
  async (userId, { getState, rejectWithValue }) => {
    try {
      if (!userId) {
        throw new Error("User ID is required to fetch cart");
      }

      const { backendUrl, token } = getState().shop;
      if (!token) {
        throw new Error("Authentication token is missing");
      }

      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        { userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return response.data.cartData || {};
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(
        `Error fetching cart at ${new Date().toISOString()}: ${errorMessage}`
      );
      return rejectWithValue(errorMessage);
    }
  }
);

export const addToCart = createAsyncThunk(
  "shop/addToCart",
  async ({ itemId, size, userId }, { getState, rejectWithValue, dispatch }) => {
    try {
      if (!itemId || !size || !userId) {
        throw new Error("Please ensure a product, size, and user are selected");
      }

      const { backendUrl, token } = getState().shop;
      if (!token) {
        throw new Error("Please log in to add items to your cart");
      }

      const currentQuantity = getState().shop.cartItems[itemId]?.[size] || 0;
      dispatch(
        shopSlice.actions.updateLocalCart({
          itemId,
          size,
          quantity: currentQuantity + 1,
        })
      );

      const response = await axios.post(
        `${backendUrl}/api/cart/add`,
        { itemId, userId, size },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to add item to cart");
      }

      await dispatch(fetchUserCart(userId)).unwrap();

      toast.success("Item added to cart!");
      return { itemId, size, userId };
    } catch (error) {
      const currentQuantity = getState().shop.cartItems[itemId]?.[size] || 0;
      if (currentQuantity > 0) {
        dispatch(
          shopSlice.actions.updateLocalCart({
            itemId,
            size,
            quantity: currentQuantity - 1,
          })
        );
      }

      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateCartQuantity = createAsyncThunk(
  "shop/updateCartQuantity",
  async (
    { itemId, size, quantity, userId },
    { getState, rejectWithValue, dispatch }
  ) => {
    try {
      if (!itemId || !size || quantity === undefined || !userId) {
        throw new Error("Please ensure all required fields are provided");
      }

      const { backendUrl, token } = getState().shop;
      if (!token) {
        throw new Error("Please log in to update your cart");
      }

      const currentQuantity = getState().shop.cartItems[itemId]?.[size] || 0;
      if (quantity === currentQuantity) return; // Avoid unnecessary updates

      dispatch(
        shopSlice.actions.updateLocalCart({
          itemId,
          size,
          quantity,
        })
      );

      const response = await axios.post(
        `${backendUrl}/api/cart/update`,
        { itemId, userId, size, quantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to update cart");
      }

      await dispatch(fetchUserCart(userId)).unwrap();

      return { itemId, size, quantity };
    } catch (error) {
      const currentQuantity = getState().shop.cartItems[itemId]?.[size] || 0;
      dispatch(
        shopSlice.actions.updateLocalCart({
          itemId,
          size,
          quantity: currentQuantity,
        })
      );

      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "shop/removeFromCart",
  async ({ itemId, size, userId }, { getState, rejectWithValue, dispatch }) => {
    try {
      if (!itemId || !size || !userId) {
        throw new Error("Please ensure all required fields are provided");
      }

      const { backendUrl, token } = getState().shop;
      if (!token) {
        throw new Error("Please log in to remove items from your cart");
      }

      dispatch(
        shopSlice.actions.updateLocalCart({
          itemId,
          size,
          quantity: 0,
        })
      );

      const response = await axios.post(
        `${backendUrl}/api/cart/remove`,
        { itemId, userId, size },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to remove item from cart");
      }

      await dispatch(fetchUserCart(userId)).unwrap();

      toast.success("Item removed from cart!");
      return { itemId, size };
    } catch (error) {
      const currentQuantity = getState().shop.cartItems[itemId]?.[size] || 0;
      dispatch(
        shopSlice.actions.updateLocalCart({
          itemId,
          size,
          quantity: currentQuantity,
        })
      );

      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const clearUserCart = createAsyncThunk(
  "shop/clearUserCart",
  async (userId, { getState, rejectWithValue, dispatch }) => {
    try {
      if (!userId) {
        throw new Error("User ID is required to clear cart");
      }

      const { backendUrl, token } = getState().shop;
      if (!token) {
        throw new Error("Please log in to clear your cart");
      }

      const response = await axios.post(
        `${backendUrl}/api/cart/clear`,
        { userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to clear cart");
      }

      await dispatch(fetchUserCart(userId)).unwrap();

      toast.success("Cart cleared successfully!");
      return {};
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  products: [],
  bestSellers: [],
  latestProducts: [],
  countries: countryData,
  currency: localStorage.getItem("currency") || "$",
  language: localStorage.getItem("language") || "English",
  country: localStorage.getItem("country") || "United States",
  delivery_Fee: 10,
  search: "",
  showSearch: false,
  cartItems: {},
  backendUrl: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000",
  loading: false,
  token: localStorage.getItem("token") || "",
  bestSellersLoading: false,
  latestProductsLoading: false,
  error: null,
  bestSellersError: null,
  latestProductsError: null,
  addToCartLoading: false,
  addToCartError: null,
  fetchCartLoading: false,
  fetchCartError: null,
  conversionRates: countryData.reduce(
    (acc, curr) => ({ ...acc, [curr.currency]: curr.conversionRate }),
    { USD: 1 }
  ),
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
    updateLocalCart: (state, action) => {
      const { itemId, size, quantity } = action.payload;

      if (quantity <= 0) {
        if (state.cartItems[itemId]) {
          delete state.cartItems[itemId][size];
          if (Object.keys(state.cartItems[itemId]).length === 0) {
            delete state.cartItems[itemId];
          }
        }
      } else {
        if (!state.cartItems[itemId]) {
          state.cartItems[itemId] = {};
        }
        state.cartItems[itemId][size] = quantity;
      }
    },
    setCountry: (state, action) => {
      const selected =
        state.countries.find((c) => c.country === action.payload) ||
        state.countries[0];
      state.country = selected.country;
      state.currency = selected.currency;
      state.language = selected.language;
      localStorage.setItem("country", state.country);
      localStorage.setItem("currency", state.currency);
      localStorage.setItem("language", state.language);
    },
    setCurrency: (state, action) => {
      state.currency = action.payload;
      localStorage.setItem("currency", action.payload);
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("language", action.payload);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    clearLocalCart: (state) => {
      state.cartItems = {};
    },
    clearCart: (state) => {
      state.cartItems = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = Array.isArray(action.payload.products)
          ? action.payload.products
          : [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.products = [];
      })
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
      .addCase(fetchLatestProducts.pending, (state) => {
        state.latestProductsLoading = true;
        state.latestProductsError = null;
      })
      .addCase(fetchLatestProducts.fulfilled, (state, action) => {
        state.latestProductsLoading = false;
        state.latestProducts = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(fetchLatestProducts.rejected, (state, action) => {
        state.latestProductsLoading = false;
        state.latestProductsError = action.payload;
        state.latestProducts = [];
      })
      .addCase(fetchUserCart.pending, (state) => {
        state.fetchCartLoading = true;
        state.fetchCartError = null;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.fetchCartLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.fetchCartLoading = false;
        state.fetchCartError = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.addToCartLoading = true;
        state.addToCartError = null;
      })
      .addCase(addToCart.fulfilled, (state) => {
        state.addToCartLoading = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = action.payload;
      })
      .addCase(updateCartQuantity.pending, (state) => {
        state.addToCartLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state) => {
        state.addToCartLoading = false;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.addToCartLoading = true;
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        state.addToCartLoading = false;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = action.payload;
      })
      .addCase(clearUserCart.pending, (state) => {
        state.addToCartLoading = true;
      })
      .addCase(clearUserCart.fulfilled, (state) => {
        state.addToCartLoading = false;
        state.cartItems = {};
      })
      .addCase(clearUserCart.rejected, (state, action) => {
        state.addToCartLoading = false;
        state.addToCartError = action.payload;
      });
  },
});

// Selectors
export const getCartAmount = (state) => {
  let cartTotal = 0;
  const {
    cartItems,
    products = [],
    delivery_Fee,
    currency,
    conversionRates,
  } = state.shop;
  const isCartEmpty = Object.keys(cartItems).length === 0;

  const convertedDeliveryFee = delivery_Fee * (conversionRates[currency] || 1);

  for (const itemId in cartItems) {
    const product = products.find((p) => p._id === itemId);
    if (product && product.price) {
      for (const size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];
        const priceObj = product.price[size];
        if (priceObj && typeof priceObj === "object" && quantity > 0) {
          const priceValue = Number(priceObj.value || priceObj.display || 0);
          const convertedPrice = priceValue * (conversionRates[currency] || 1);
          cartTotal += convertedPrice * quantity;
        } else {
          console.warn(
            `Invalid price format for product ID ${itemId}, size ${size}:`,
            priceObj
          );
        }
      }
    } else {
      console.warn(`Product not found or no price for ID ${itemId}`);
    }
  }

  const grandTotal = isCartEmpty ? 0 : cartTotal + convertedDeliveryFee;

  return {
    cartTotal: isNaN(cartTotal) ? 0 : parseFloat(cartTotal.toFixed(2)),
    delivery_Fee:
      isCartEmpty || isNaN(convertedDeliveryFee)
        ? 0
        : parseFloat(convertedDeliveryFee.toFixed(2)),
    grandTotal: isNaN(grandTotal) ? 0 : parseFloat(grandTotal.toFixed(2)),
    conversionRate: conversionRates[currency] || 1,
  };
};

export const getCartItemCount = (state) => {
  let count = 0;
  for (const itemId in state.shop.cartItems) {
    for (const size in state.shop.cartItems[itemId]) {
      count += state.shop.cartItems[itemId][size];
    }
  }
  return count;
};

export const {
  setSearch,
  setShowSearch,
  updateLocalCart,
  setCountry,
  setToken,
  setCurrency,
  clearCart,
  setLanguage,
  clearLocalCart,
} = shopSlice.actions;

export default shopSlice.reducer;
