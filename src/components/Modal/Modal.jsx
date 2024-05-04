import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cross from "../../../public/assets/icons/cross.svg";
import Arrow from "../../../public/assets/icons/arrow.svg";
import "./modal.css";

const photoList = [
  { id: 1, imgUrl: "../assets/image/sneakers-first.png", alt: "first" },
  { id: 2, imgUrl: "../assets/image/sneakers-second.png", alt: "second" },
  { id: 3, imgUrl: "../assets/image/sneakers-three.png", alt: "three" },
  { id: 4, imgUrl: "../assets/image/sneakers-four.png", alt: "four" },
];

export const Modal = ({ setIsModalActive }) => {
  const [isCount, setIsCount] = useState(0);
  const [isActive, setIsActive] = useState({
    id: 1,
    imgUrl: "../assets/image/sneakers-first.png",
  });

  useEffect(() => {
    if (isCount < 0) {
      return setIsCount(3);
    }
    if (isCount == 4) {
      return setIsCount(0);
    }
    let changeImage = photoList[isCount];

    setIsActive(changeImage);
  }, [isCount]);

  return (
    <div className="wrapper-modal">
      <div className="modal-photo">
        <div className="modal-cross" onClick={() => setIsModalActive(false)}>
          <Cross />
        </div>
        <div className="modal-photo_main">
          <button
            className="modal-arrow modal-arrow-left"
            onClick={() => setIsCount(isCount - 1)}
          >
            <Arrow />
          </button>
          <button
            className="modal-arrow modal-arrow-right"
            onClick={() => setIsCount(isCount + 1)}
          >
            <Arrow />
          </button>
          <img src={isActive.imgUrl} alt="modal photo" />
        </div>
        <div className="modal-photo_list">
          {photoList.map((item) => {
            const { id, imgUrl, alt } = item;
            return (
              <div
                key={id}
                onClick={() => setIsActive({ id, imgUrl })}
                className={isActive.id == id ? "modal-photo--active" : ""}
              >
                <img src={imgUrl} alt={alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  setIsModalActive: PropTypes.func,
};
