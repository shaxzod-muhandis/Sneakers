import "./product-photo.css";

export const ProductPhoto = () => {
  return (
    <div className="product-photo">
      <div className="product-photo_main">
        <img src="../assets/image/sneakers-first.png" alt="first" />
      </div>
      <div className="product-photo_list">
        <img src="../assets/image/sneakers-first.png" alt="first" />
        <img src="../assets/image/sneakers-second.png" alt="second" />
        <img src="../assets/image/sneakers-three.png" alt="three" />
        <img src="../assets/image/sneakers-four.png" alt="four" />
      </div>
    </div>
  );
};
