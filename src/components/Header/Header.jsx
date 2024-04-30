import { useState } from "react";
import PropTypes from "prop-types";
import Cart from "../../../public/assets/icons/cart.svg";
import "./header.css";
import { Popup } from "../Popup/Popup";

const navList = [
  { id: 1, text: "Collections", link: "#!" },
  { id: 2, text: "Men", link: "#!" },
  { id: 3, text: "Women", link: "#!" },
  { id: 4, text: "About", link: "#!" },
  { id: 5, text: "Contact", link: "#!" },
];

export const Header = ({ isCount }) => {
  const [dataId, setDataId] = useState(1);
  const [getCount, setIsCount] = useState(0);
  console.log(isCount);
  return (
    <header className="header">
      <a href="#!">
        <img src="../../public/assets/icons/logo.svg" alt="logo" />
      </a>
      <nav className="nav">
        <ul className="nav-list">
          {navList.map((element) => {
            const { id, text, link } = element;
            return (
              <li
                key={id}
                className={dataId == id ? "nav-list--active" : ""}
                onClick={() => setDataId(id)}
              >
                <a href={link}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="user-box">
        {isCount == 0 ? (
          <div
            className="cart-wrap"
            onClick={() =>
              setIsCount(getCount >= 1 ? getCount - 1 : getCount + 1)
            }
          >
            <Cart />
          </div>
        ) : (
          <span data-count={isCount}>
            <div
              className="cart-wrap"
              onClick={() =>
                setIsCount(getCount >= 1 ? getCount - 1 : getCount + 1)
              }
            >
              <Cart />
            </div>
          </span>
        )}

        <img
          src="../../public/assets/image/user.png"
          alt="user photo"
          className="user-photo"
        />
        <Popup setSum={isCount} isActive={getCount} />
      </div>
    </header>
  );
};
Header.propTypes = {
  isCount: PropTypes.number,
};
