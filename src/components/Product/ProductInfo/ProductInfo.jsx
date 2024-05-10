import PropTypes from "prop-types";

import Cart from "../../../../public/assets/icons/cart.svg";

import "./product-info.css";
import { useState } from "react";

export const ProductInfo = ({setIsCount }) => {
  const [addToCard, setAddToCard] = useState(0);
  function addToCardFun() {
    setIsCount(addToCard);
    setAddToCard(0)
  }
  return (
    <div className="product-info">
      <h3 className="product-info_company">Sneaker Company</h3>
      <h1 className="product-info_title">Fall Limited Edition Sneakers</h1>
      <p className="product-info_description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="product-info_price">
        <p>
          $125.00 <span>50%</span>
        </p>
        <s>$250.00</s>
      </div>
      <div className="btn-container">
        <div className="counter-btn">
          <button
            onClick={() =>
              setAddToCard(addToCard > 0 ? addToCard - 1 : addToCard)
            }
          >
            -
          </button>
          <p>{addToCard}</p>
          <button onClick={() => setAddToCard(addToCard + 1)}>+</button>
        </div>
        <button className="add-btn" onClick={addToCardFun}>
          <Cart />
          Add to cart
        </button>
      </div>
    </div>
  );
};

ProductInfo.propTypes = {
  isCount: PropTypes.number,
  setIsCount: PropTypes.func,
};
