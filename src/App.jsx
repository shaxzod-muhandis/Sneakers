import { Header } from "./components/Header/Header";
import { ProductInfo } from "./components/Product/ProductInfo/ProductInfo";
import { ProductPhoto } from "./components/Product/ProductPhoto/ProductPhoto";

import "./style/main.css";
function App() {
  return (
    <div className="container">
      <Header />
      <main className="product">
        <ProductPhoto />
        <ProductInfo />
      </main>
    </div>
  );
}
export default App;
