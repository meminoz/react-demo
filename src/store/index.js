import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./ui-slice";

const store = configureStore({
  reducer: { counters: counterSlice.reducer },
});
export default store;
