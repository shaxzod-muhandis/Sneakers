import { useState } from "react";
import PropTypes from "prop-types";
import Cart from "../../../public/assets/icons/cart.svg";
import NavBtn from "../../../public/assets/icons/nav-btn.svg";
import "./header.css";
import { Popup } from "../Popup/Popup";

const navList = [
  { id: 1, text: "Collections", link: "#!" },
  { id: 2, text: "Men", link: "#!" },
  { id: 3, text: "Women", link: "#!" },
  { id: 4, text: "About", link: "#!" },
  { id: 5, text: "Contact", link: "#!" },
];

export const Header = ({ isCount, setIsCount ,setIsNavModalActive}) => {
  const [dataId, setDataId] = useState(1);
  const [getCount, setGetIsCount] = useState(0);

  return (
    <header className="header">
      <div className="headerLogo">
          <span className="navBtn" onClick={()=>{setIsNavModalActive(true),setGetIsCount(0)}}><NavBtn/></span>
      <a href="#!">
        <img src="../../public/assets/icons/logo.svg" alt="logo" />
      </a>
      </div>
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
              setGetIsCount(getCount >= 1 ? getCount - 1 : getCount + 1)
            }
          >
            <Cart />
          </div>
        ) : (
          <span data-count={isCount}>
            <div
              className="cart-wrap"
              onClick={() =>
                setGetIsCount(getCount >= 1 ? getCount - 1 : getCount + 1)
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
        <Popup setSum={isCount} isCount={getCount} setIsCount={setIsCount} />
      </div>
    </header>
  );
};
Header.propTypes = {
  isCount: PropTypes.number,
  setIsCount: PropTypes.func,
  setIsNavModalActive:PropTypes.func,
  setIsModalActive:PropTypes.func
};
