import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./ui-slice";

export const store = configureStore({
  reducer:
   { counter: counterSlice },
});
