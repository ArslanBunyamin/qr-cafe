import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reduxFiles/siparisSlice";

function Product(props) {
  const urunListesi = useSelector((state) => state.urunListesi);
  const urun = urunListesi[props.productId];
  const siparis = useSelector((state) => state.siparis);
  const dispatch = useDispatch();

  const added = () => {
    return (
      <div className="minusAmountWrapper">
        <div className="amount">{siparis[props.productId]}</div>
        <div
          className="minus"
          onClick={() => dispatch(decrement(props.productId))}
        >
          <FontAwesomeIcon icon={faMinus} />
        </div>
      </div>
    );
  };

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
            onClick={() => dispatch(increment(props.productId))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {siparis[props.productId] == 0 ? null : added()}
        </div>
      </div>
    </div>
  );
}

export default Product;
