import React from "react";
import Product from "./Product";
import latte1 from "./images/latte.jpg";
import cappuccino from "./images/cappuccino.jpg";
import americano from "./images/americano.jpg";

function Products() {
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
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Latte"
            price="45"
            img={latte1}
          />
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Cappuccino"
            price="55"
            img={cappuccino}
          />
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Americano"
            price="32"
            img={americano}
          />
        </div>
        <div className="grid" id="tatli">
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Latte"
            price="45"
            img={latte1}
          />
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Cappuccino"
            price="55"
            img={cappuccino}
          />
          <Product
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Americano"
            price="32"
            img={americano}
          />
        </div>
        <div className="grid" id="cay"></div>
        <div className="grid" id="soguklar"></div>
      </div>
    </div>
  );
}

export default Products;
