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
        <div className="desc">{props.desc}</div>
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
