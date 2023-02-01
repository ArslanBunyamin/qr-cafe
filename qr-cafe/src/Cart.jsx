import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Cart(props) {
  const siparis = useSelector((state) => state.siparis);
  const urunListesi = useSelector((state) => state.urunListesi);
  let toplamTutar = 0;
  for (let i in siparis) {
    toplamTutar += siparis[i] * urunListesi[i].price;
  }
  let siparisList = [];
  for (let id in siparis) {
    siparisList.push([id, siparis[id]]);
  }

  const addDocToFirestore = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Masalar", "Masa-" + props.masaNo), {
      siparis: siparis,
      tarih: new Date().toLocaleString(),
      toplamTutar: toplamTutar,
    });
  };

  return (
    <div className="cart">
      <div className="header">
        <div className="headerText">{"Sepet Tutarı: " + toplamTutar}₺</div>
        <div className="confirmCont">
          <div className="button clearCart">
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                marginRight: "8px",
              }}
              icon={faXmark}
            />
            Sepeti sil
          </div>
          <div className="button confirmCart" onClick={addDocToFirestore}>
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
                marginRight: "8px",
              }}
              icon={faCheck}
            />
            Siparişi onayla
          </div>
        </div>
      </div>
      <div className="orders">
        {siparisList.map((list, i) => {
          const id = list[0];
          const amount = list[1];
          if (amount == 0) {
            return;
          }
          return (
            <Product
              productId={id}
              amount={amount}
              totalPrice={urunListesi[id].price * amount}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
