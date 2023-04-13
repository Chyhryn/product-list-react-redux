import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";

// const productsInitialState = [
// ];

const productsInitialState = { products: [], isLoading: false, error: null };
const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,
  extraReducers: {
    [fetchProducts.pending](state, _) {
      state.isLoading = true;
    },
    [fetchProducts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchProducts.fulfilled](state, action) {
      state.isLoading = false;
      state.products = action.payload;
      state.error = null;
    },
  },
});

export const productsReducer = productsSlice.reducer;
