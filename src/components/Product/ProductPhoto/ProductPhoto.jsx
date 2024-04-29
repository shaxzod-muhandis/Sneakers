import { useState } from "react";
import "./product-photo.css";

const photoList = [
  { id: 1, imgUrl: "../assets/image/sneakers-first.png", alt: "first" },
  { id: 2, imgUrl: "../assets/image/sneakers-second.png", alt: "second" },
  { id: 3, imgUrl: "../assets/image/sneakers-three.png", alt: "three" },
  { id: 4, imgUrl: "../assets/image/sneakers-four.png", alt: "four" },
];
export const ProductPhoto = () => {
  const [isActive, setIsActive] = useState({
    id: 1,
    imgUrl: "../assets/image/sneakers-first.png",
  });
  return (
    <div className="product-photo">
      <div className="product-photo_main">
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
