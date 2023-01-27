import React from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./Products.jsx";

function Home(props) {
  const addDocToFirestore = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "Masalar", "Masa-" + props.masaNo), {
      siparis: "{çay:2}",
      tarih: new Date().toLocaleString(),
    });
  };

  return (
    <div className="home">
      <div className="cafeName">Kafe Marsyas</div>
      <Products />
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
        <div className="button">
          <FontAwesomeIcon
            style={{ fontSize: "20px", marginRight: "8px" }}
            icon={faBasketShopping}
          />
          Sepete git
        </div>
      </div>
    </div>
  );
}

export default Home;
