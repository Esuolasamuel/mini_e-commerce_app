import { createSlice } from "@reduxjs/toolkit"
import { fetchAllProducts, fetchAProduct } from "./actions";
import { saveState } from "./localStorage";

const initialState = {
  products: [],
  product: {},
  cart:  [],
  error: null,
  fetchLoading: false,
  productLoading: false,
  fetchError: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image, category } = action.payload;
      const existingItem = state.cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart = [...state.cart, { id, title, price, image, category, quantity: 1 }];
        saveState(state.cart);
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter(item => item.id !== idToRemove);
      saveState(state.cart);
    },
    incrementQuantity: (state, action) => {
      const idToIncrement = action.payload;
      const item = state.cart.find(item => item.id === idToIncrement);
      if (item) {
        item.quantity += 1;
      }
      saveState(state.cart);
    },
    decrementQuantity: (state, action) => {
      const idToDecrement = action.payload;
      const item = state.cart.find(item => item.id === idToDecrement);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(cartItem => cartItem.id !== idToDecrement)
        }
      }
      saveState(state.cart);
    }
  },
  extraReducers: (builder) => { 
        builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.fetchLoading = false;
        state.products = action.payload;
        state.cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      })
      .addCase(fetchAProduct.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(fetchAProduct.fulfilled, (state, action) => {
        state.productLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
            state.fetchError = action.error.message;
    })
  }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;