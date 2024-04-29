import { useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductInfo } from "./components/Product/ProductInfo/ProductInfo";
import { ProductPhoto } from "./components/Product/ProductPhoto/ProductPhoto";

import "./style/main.css";
function App() {
  const [isCount, setIsCount] = useState(0);
  return (
    <div className="container">
      <Header isCount={isCount} />
      <main className="product">
        <ProductPhoto />
        <ProductInfo setIsCount={setIsCount} />
      </main>
    </div>
  );
}
export default App;
