import { configureStore } from "@reduxjs/toolkit";
import urunListesiReducer from "./urunListesiSlice";
import siparisReducer from "./siparisSlice";

export default configureStore({
  reducer: {
    urunListesi: urunListesiReducer,
    siparis: siparisReducer,
  },
});
