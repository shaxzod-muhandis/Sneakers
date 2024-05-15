import PropTypes from "prop-types";
import Clear from "../../../public/assets/icons/clear.svg";
import "./popup.css";
import { Context } from "../../App";
import { useContext } from "react";
export const Popup = ({getCount}) => {
  const {isCount,setIsCount} =useContext(Context)
  const removeItem = () => {
    setIsCount(0);
  };
  return (
    <div className={getCount == 1 ? "active" : "popup"}>
      <div className="title">
        <h3>Cart</h3>
      </div>
      <div>
        <p
          className={
            isCount == 0 ? "cart-description--active" : "cart-description"
          }
        >
          Your cart is empty.
        </p>
        <div className={isCount > 0 ? "wrapper-active" : "wrapper"}>
          <div className="info">
            <img
              src="../../public/assets/image/sneakers-first.png"
              alt=""
              className="productPhoto"
            />
            <div className="text">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {isCount}{" "}
                <span className="sum">${125.0 * isCount}.00</span>
              </p>
            </div>
            <span className="clear-btn">
              <Clear onClick={removeItem} />
            </span>
          </div>
          <button className="checkout-btn" onClick={removeItem}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
Popup.propTypes = {
  getCount: PropTypes.number,
};
