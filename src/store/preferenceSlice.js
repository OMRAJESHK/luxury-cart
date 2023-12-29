import { createSlice } from "@reduxjs/toolkit";

export const preferenceSlice = createSlice({
  name: "preference",
  initialState: {
    wishlist: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const { productId } = action.payload;
      let updatedWishList = [];
      const indexToRemove = state.wishlist.indexOf(productId);
      if (indexToRemove !== -1) {
        updatedWishList = state.wishlist.toSpliced(indexToRemove, 1);
      } else {
        updatedWishList = [...state.wishlist, productId];
      }
      state.wishlist = updatedWishList;
    },
    resetWishlist: (state) => {
      state.wishlist = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, resetWishlist } = preferenceSlice.actions;

export default preferenceSlice.reducer;
