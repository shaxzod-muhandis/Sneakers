import { createContext, useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductInfo } from "./components/Product/ProductInfo/ProductInfo";
import { ProductPhoto } from "./components/Product/ProductPhoto/ProductPhoto";
import { Modal } from "./components/Modal/Modal";
import { NavModal } from "./components/NavModal/NavModal";
import "./style/main.css";
export const Context  =createContext(null)
function App() {
  const [isCount, setIsCount] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isNavModalActive, setIsNavModalActive] = useState(false);
  return (
    <Context.Provider value={{isCount,setIsCount}} >
    <div className="container">
      {isModalActive && <Modal setIsModalActive={setIsModalActive} />}
      {isNavModalActive && <NavModal setIsNavModalActive={setIsNavModalActive} />}
      <Header isCount={isCount}setIsNavModalActive={setIsNavModalActive}/>
      <main className="product">
        <div>
          <ProductPhoto setIsModalActive={setIsModalActive}/>
        </div>
        <ProductInfo setIsCount={setIsCount}  />
      </main>
    </div>
    </Context.Provider>
  );
}
export default App;
