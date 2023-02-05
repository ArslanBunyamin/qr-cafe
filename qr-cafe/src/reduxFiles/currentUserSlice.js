import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: { sifre: "lol" },
  reducers: {
    setPassword: (state, password) => {
      state["sifre"] = password.payload;
    },
  },
});

export const { setPassword } = currentUserSlice.actions;
export default currentUserSlice.reducer;
