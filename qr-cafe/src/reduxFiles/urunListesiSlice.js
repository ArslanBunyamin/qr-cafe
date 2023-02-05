import { createSlice } from "@reduxjs/toolkit";
import latte from "../images/latte.jpg";
import cappuccino from "../images/cappuccino.jpg";
import americano from "../images/americano.jpg";
import cupcake from "../images/cupcake.jpg";

export const urunListesiSlice = createSlice({
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
});

export default urunListesiSlice.reducer;
