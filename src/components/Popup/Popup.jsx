import PropTypes from "prop-types";
import Clear from "../../../public/assets/icons/clear.svg";
import "./popup.css";

export const Popup = ({ setSum,isActive}) => {
  return (
    <div className={isActive ==1?"active":"popup"}>
      <div className="title">
        <h3>Cart</h3>
      </div>
      <div>
        <p className={setSum==0?"cart-description--active":"cart-description"}>Your cart is empty.</p>
        <div className={setSum>0?"wrapper-active":"wrapper"}>
          <div className="info">
            <img
              src="../../public/assets/image/sneakers-first.png"
              alt=""
              className="productPhoto"
            />
            <div className="text">
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {setSum}{" "}
                <span className="sum">${125.0 * setSum}.00</span>
              </p>
            </div> 
            <Clear />
          </div>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};
Popup.propTypes = {
  setSum: PropTypes.number,
  isActive: PropTypes.number
};

