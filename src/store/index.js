import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./slice";

const store = configureStore({
  reducer: {
    addSlice,
  },
});

export default store;
