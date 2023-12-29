import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import preferenceSlice from "./preferenceSlice";

export default configureStore({
  reducer: { product: productSlice, preference: preferenceSlice },
});
