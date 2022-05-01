import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = ({ productList, addProductToCart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <ProductList
            productList={productList}
            addProductToCart={addProductToCart}
          />
        }
      />
    </Routes>
  );
};

export default RouteSwtich;
