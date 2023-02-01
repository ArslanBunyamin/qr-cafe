import React, { useState } from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faBasketShopping,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import ProductsPage from "./ProductsPage.jsx";
import Cart from "./Cart.jsx";
import { useSelector } from "react-redux";

function Home(props) {
  const urunListesi = useSelector((state) => state.urunListesi);
  const siparis = useSelector((state) => state.siparis);
  let toplamTutar = 0;
  for (let i in siparis) {
    toplamTutar += siparis[i] * urunListesi[i].price;
  }

  const [showCart, setShowCart] = useState(false);

  return (
    <div className="home">
      <div className="cafeName">Kafe Marsyas</div>
      {showCart ? <Cart masaNo={props.masaNo} /> : <ProductsPage />}
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
          {showCart ? (
            "Ana menü"
          ) : (
            <div className="cartCont">
              <div>Sepetim</div>
              {toplamTutar == 0 ? null : (
                <div className="toplamTutar">{"\n" + toplamTutar}₺</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
