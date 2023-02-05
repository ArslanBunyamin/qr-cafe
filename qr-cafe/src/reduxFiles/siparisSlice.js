import { createSlice } from "@reduxjs/toolkit";

export const siparisSlice = createSlice({
  name: "siparis",
  initialState: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  },
  reducers: {
    increment: (state, index) => {
      state[index.payload] += 1;
    },
    decrement: (state, index) => {
      state[index.payload] -= state[index.payload] == 0 ? 0 : 1;
    },
    reset: (state, index) => {
      state[index.payload] = 0;
    },
  },
});

export const { increment, decrement, reset } = siparisSlice.actions;

export default siparisSlice.reducer;
