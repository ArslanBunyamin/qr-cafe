import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { useSelector } from "react-redux";

function Product(props) {
  const [amount, setAmount] = useState(props.amount);
  const urunListesi = useSelector((state) => state.urunListesi);
  const urun = urunListesi[props.productId];

  return (
    <div className="product">
      <div className="img">
        <div className="namePriceCont">
          <div className="name">{urun.name}</div>
          <div className="price">{urun.price}₺</div>
        </div>
        <img src={urun.photo} />
      </div>
      <div className="descCont">
        <div className="desc">
          {urun.desc}
          {props.totalPrice ? (
            <div className="totalPrice"> {props.totalPrice}₺</div>
          ) : null}
        </div>
        <div className="amountContainer">
          <div
            className="plus"
            onClick={() => {
              setAmount((amount) => amount + 1);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div className="minusAmountWrapper">
            <div className="amount">{amount}</div>
            <div
              className="minus"
              onClick={() => {
                setAmount((amount) => (amount == 0 ? amount : amount - 1));
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
