import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = ({ productList, addProductToCart, cartList }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <ProductList
            productList={productList}
            addProductToCart={addProductToCart}
            cartList={cartList}
          />
        }
      />
    </Routes>
  );
};

export default RouteSwtich;
