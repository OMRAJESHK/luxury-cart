import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    updatedProducts: [],
    category: 0,
  },
  reducers: {
    getProductsByCategory: (state, action) => {
      const { categoryId } = action.payload;
      const updatedProductList = state.products.filter(
        (product) => product.category === +categoryId
      );
      state.updatedProducts = categoryId ? updatedProductList : products;
      state.category = categoryId;
    },
    getProductsByPrice: (state, action) => {
      const { price } = action.payload;
      const updatedProductList = state.products.filter(
        (product) =>
          product.price <= +price && product.category === +state.category
      );
      state.updatedProducts = +state.category
        ? updatedProductList
        : products.filter((product) => product.price <= +price);
    },
    resetProducts: (state) => {
      state.products = products;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getProductsByCategory, getProductsByPrice, resetProducts } =
  productSlice.actions;

export default productSlice.reducer;
