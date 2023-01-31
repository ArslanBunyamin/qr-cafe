import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function Cart() {
  const siparis = useSelector((state) => state.siparis);
  const urunListesi = useSelector((state) => state.urunListesi);
  let siparisList = [];
  for (let id in siparis) {
    siparisList.push([id, siparis[id]]);
  }

  return (
    <div className="cart">
      <div className="header">Sepetim</div>
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
