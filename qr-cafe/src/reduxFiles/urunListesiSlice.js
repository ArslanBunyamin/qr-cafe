import { createSlice } from "@reduxjs/toolkit";
import latte from "../images/latte.jpg";
import cappuccino from "../images/cappuccino.jpg";
import americano from "../images/americano.jpg";
import cupcake from "../images/cupcake.jpg";

export const urunListesiSlice = createSlice(
  {
    name: "urunListesi",
    initialState: {
      0: {
        name: "Latte",
        price: 45,
        photo: latte,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      1: {
        name: "Cappuccino",
        price: 55,
        photo: cappuccino,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      2: {
        name: "Americano",
        price: 32,
        photo: americano,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      3: {
        name: "Cupcake",
        price: 7,
        photo: cupcake,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
  }
  // reducers: {
  //   increment: (state) => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1
  //   },
  //   decrement: (state) => {
  //     state.value -= 1
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload
  //   },
  // },
);

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default urunListesiSlice.reducer;
