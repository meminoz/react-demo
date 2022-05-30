import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  users: [],
};

export const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      state.users = action.payload.users;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = counterSlice.actions;

export default counterSlice;
