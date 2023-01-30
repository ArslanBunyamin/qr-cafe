import React from "react";
import Product from "./Product";
import latte from "./images/latte.jpg";
import cappuccino from "./images/cappuccino.jpg";
import americano from "./images/americano.jpg";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const urunListesi = useSelector((state) => state.urunListesi);
  const dispatch = useDispatch();

  return (
    <div className="mainn">
      <div className="categories">
        <a href="#kahve" className="category">
          Kahve
        </a>
        <a href="#tatli" className="category">
          Tatlı
        </a>
        <a href="#cay" className="category">
          Çay
        </a>
        <a href="#soguklar" className="category">
          Soğuk İçecek
        </a>
        <a href="#" className="category">
          Soğuk İçecek
        </a>
        <a href="#" className="category">
          Soğuk İçecek
        </a>
      </div>
      <div className="products">
        <div className="grid" id="kahve">
          <Product amount={0} productId={0} />
          <Product amount={0} productId={1} />
          <Product amount={0} productId={2} />
        </div>
        <div className="grid" id="tatli">
          <Product amount={0} productId={3} />
        </div>
        <div className="grid" id="cay"></div>
        <div className="grid" id="soguklar"></div>
      </div>
    </div>
  );
}

export default Products;
