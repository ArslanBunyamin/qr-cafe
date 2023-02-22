import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faWorm, faXmark } from "@fortawesome/free-solid-svg-icons";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { reset } from "./reduxFiles/siparisSlice.js";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const siparisiOnayla = async () => {
    const confirmed = document.querySelector(".confirmed");
    const confirmCart = document.querySelector(".confirmCart");
    confirmed.textContent = "Sipariş onaylandı";
    confirmCart.style.background = "green";
    confirmCart.style.color = "#ddd";
    await updateDoc(doc(db, "Masalar", "masa" + props.masaNo), {
      siparisFisi: {
        siparis: siparis,
        tarih: new Date().toLocaleString(),
        toplamTutar: toplamTutar,
      },
    });
    setTimeout(() => {
      navigate("/");
      sepetiTemizle();
    }, 200);
  };
  const sepetiTemizle = () => {
    for (let id in siparis) {
      dispatch(reset(id));
    }
  };

  return (
    <div className="cart">
      <div className="header">
        {toplamTutar == 0 ? null : (
          <div className="headerText">{"Sepet Tutarı: " + toplamTutar}₺</div>
        )}
        {toplamTutar == 0 ? (
          <div style={{ padding: "8px 0", fontSize: "1rem" }}>Sepet Boş</div>
        ) : (
          <div className="confirmCont">
            <div className="button clearCart" onClick={sepetiTemizle}>
              <FontAwesomeIcon
                style={{
                  fontSize: "20px",
                  marginRight: "8px",
                }}
                icon={faXmark}
              />
              Sepeti sil
            </div>
            <div className="button confirmCart" onClick={siparisiOnayla}>
              <FontAwesomeIcon
                style={{
                  fontSize: "20px",
                  marginRight: "8px",
                }}
                icon={faCheck}
              />
              <div className="confirmed">siparişi onayla</div>
            </div>
          </div>
        )}
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
        {toplamTutar == 0 ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faWorm}
              style={{
                width: "100%",
                fontSize: "3rem",
                color: "crimson",
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Cart;
