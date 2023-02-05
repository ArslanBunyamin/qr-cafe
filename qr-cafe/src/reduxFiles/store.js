import { configureStore } from "@reduxjs/toolkit";
import urunListesiReducer from "./urunListesiSlice";
import siparisReducer from "./siparisSlice";
import currentUserReducer from "./currentUserSlice";

export default configureStore({
  reducer: {
    urunListesi: urunListesiReducer,
    siparis: siparisReducer,
    currentUser: currentUserReducer,
  },
});
