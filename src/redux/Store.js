import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/product-slice"; // Import the reducer, not the slice itself

const store = configureStore({
  reducer: {
    product: productReducer, // Use the reducer here
  },
});

export default store;
