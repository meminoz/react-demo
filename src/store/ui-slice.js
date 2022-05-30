import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: 0,
  names: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fetchUser: async (state, action) => {
      const respose = await axios.get(
        `https://randomuser.me/api/?results=${2}`
      );

      state.names = respose.data.results;
      console.log(state.names)
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fetchUser } =
  counterSlice.actions;

export default counterSlice.reducer;
