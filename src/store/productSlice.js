import { createSlice } from "@reduxjs/toolkit";
import { products } from "./data";

const getCategoryProducts = (products, category) =>
  products.filter((product) => product.category === +category);

const getPriceProducts = (products, price) =>
  products.filter((product) => product.price <= +price);

const getCompanyProducts = (products, company) =>
  products.filter((product) => company.includes(product.company));

const computeProductList = (state, company, price, category) => {
  let products = [];
  if (company.length === 0 && !price && !category) {
    // when all are empty
    products = state.products;
  } else if (company.length === 0 && !price && category) {
    // only category
    products = getCategoryProducts(state.products, category);
  } else if (company.length === 0 && price && !category) {
    // only price
    products = getPriceProducts(state.products, price);
  } else if (company.length > 0 && !price && !category) {
    // only company
    products = getCompanyProducts(state.products, company);
  } else if (company.length === 0 && price && category) {
    // only category + price
    products = getPriceProducts(
      getCategoryProducts(state.products, category),
      price
    );
  } else if (company.length > 0 && !price && category) {
    // only category + company
    products = getCompanyProducts(
      getCategoryProducts(state.products, category),
      company
    );
  } else if (company.length > 0 && price && !category) {
    // only company + price
    products = getCompanyProducts(
      getPriceProducts(state.products, price),
      company
    );
  } else if (company.length > 0 && price && category) {
    // only category + price + company
    const categoryProducts = getCategoryProducts(state.products, category);
    const priceProducts = getPriceProducts(categoryProducts, price);
    products = getCompanyProducts(priceProducts, company);
  }
  return products;
};
export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    updatedProducts: [],
    category: 0,
    price: 0,
    company: [],
  },
  reducers: {
    getProductsByCategory: (state, action) => {
      const { categoryId } = action.payload;
      let updatedProductList = computeProductList(
        state,
        state.company,
        state.price,
        categoryId
      );

      state.updatedProducts = updatedProductList;
      state.category = categoryId;
    },
    getProductsByPrice: (state, action) => {
      const { price } = action.payload;
      let updatedProductList = computeProductList(
        state,
        state.company,
        price,
        state.category
      );

      state.updatedProducts = updatedProductList;
      state.price = price;
    },
    getProductsByCompanies: (state, action) => {
      const { companyIds } = action.payload;

      let updatedProductList = computeProductList(
        state,
        companyIds,
        state.price,
        state.category
      );

      state.updatedProducts = updatedProductList;
      state.company = companyIds;
    },
    resetProducts: (state) => {
      state.products = products;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getProductsByCategory,
  getProductsByPrice,
  getProductsByCompanies,
  resetProducts,
} = productSlice.actions;

export default productSlice.reducer;
