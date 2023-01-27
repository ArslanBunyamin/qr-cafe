import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";

function Product(props) {
  const [amount, setAmount] = useState(0);
  return (
    <div className="product">
      <div className="img">
        <div className="namePriceCont">
          <div className="name">{props.name}</div>
          <div className="price">{props.price}₺</div>
        </div>
        <img src={props.img} />
      </div>
      <div className="descCont">
        <div className="desc">
          İçinizi ısıtacak sıcak mı sıcak, tatlı bir latte.
        </div>
        <div className="amountContainer">
          <div className="minusAmountWrapper">
            <div
              className="minus"
              onClick={(amount) => {
                amount - 1;
              }}
            >
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <div className="amount">{amount}</div>
          </div>
          <div
            className="plus"
            onClick={(amount) => {
              amount + 1;
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
