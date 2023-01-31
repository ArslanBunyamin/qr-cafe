import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faBasketShopping,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import ProductsPage from "./ProductsPage.jsx";
import Cart from "./Cart.jsx";

function Home(props) {
  const addDocToFirestore = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Masalar", "Masa-" + props.masaNo), {
      siparis: "{çay:2}",
      tarih: new Date().toLocaleString(),
    });
  };

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="home">
      <div className="cafeName">Kafe Marsyas</div>
      {showCart ? <Cart /> : <ProductsPage />}
      <div className="bottomNavBar">
        <div className="button">
          <FontAwesomeIcon
            style={{
              fontSize: "24px",
              marginRight: "8px",
            }}
            icon={faPersonRunning}
          />
          Garson çağır
        </div>
        <div
          className="button"
          onClick={(e) => {
            e.preventDefault();
            setShowCart((statement) => !statement);
          }}
        >
          {showCart ? (
            <FontAwesomeIcon
              style={{ fontSize: "20px", marginRight: "8px" }}
              icon={faAlignLeft}
            />
          ) : (
            <FontAwesomeIcon
              style={{ fontSize: "20px", marginRight: "8px" }}
              icon={faBasketShopping}
            />
          )}
          {showCart ? "Ana menü" : "Sepetim"}
        </div>
      </div>
    </div>
  );
}

export default Home;
