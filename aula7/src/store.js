import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../src/Ex3/components/slice";
import catSlice from "./Ex4/components/catSlice";
import { catApi } from "./Ex5/components/catApi";

const store = configureStore({
  reducer: {
    balance: balanceReducer,
    cats: catSlice,
    [catApi.reducerPath]: catApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catApi.middleware),
});

export default store;
