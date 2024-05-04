import { useEffect,useState } from "react";
import "./product-photo.css";
import PropTypes from "prop-types";
import Arrow from "../../../../public/assets/icons/arrow.svg";

const photoList = [
  { id: 1, imgUrl: "../assets/image/sneakers-first.png", alt: "first" },
  { id: 2, imgUrl: "../assets/image/sneakers-second.png", alt: "second" },
  { id: 3, imgUrl: "../assets/image/sneakers-three.png", alt: "three" },
  { id: 4, imgUrl: "../assets/image/sneakers-four.png", alt: "four" },
];
export const ProductPhoto = ({setIsModalActive}) => {
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
    <div className="product-photo">
      <button
            className="photo-arrow photo-arrow-left"
            onClick={() => setIsCount(isCount - 1)}
          >
            <Arrow />
          </button>
      <button
            className="photo-arrow photo-arrow-right"
            onClick={() => setIsCount(isCount + 1)}
          >
            <Arrow />
          </button>
      <div className="product-photo_main" onClick={()=>setIsModalActive(true)}>
        <img src={isActive.imgUrl} alt="product photo" />
      </div>
      <div className="product-photo_list">
        {photoList.map((item) => {
          const { id, imgUrl, alt } = item;
          return (
            <div
              key={id}
              onClick={() => setIsActive({ id, imgUrl })}
              className={isActive.id == id ? "product-photo--active" : ""}
            >
              <img src={imgUrl} alt={alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
ProductPhoto.propTypes = {
  setIsModalActive: PropTypes.func,
};