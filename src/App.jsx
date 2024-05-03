import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductInfo } from "./components/Product/ProductInfo/ProductInfo";
import { ProductPhoto } from "./components/Product/ProductPhoto/ProductPhoto";

import "./style/main.css";
import { Modal } from "./components/Modal/Modal";
function App() {
  const [isCount, setIsCount] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <div className="container">
      {isModalActive && <Modal setIsModalActive={setIsModalActive} />}
      <Header isCount={isCount} setIsCount={setIsCount} />
      <main className="product">
        <div onClick={() => setIsModalActive(!isModalActive)}>
          <ProductPhoto />
        </div>
        <ProductInfo setIsCount={setIsCount} isCount={isCount} />
      </main>
    </div>
  );
}
export default App;
