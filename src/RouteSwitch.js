import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = ({ productList, addProductToCart, cartList, updateProductQuantityInCart }) => {
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
            updateProductQuantityInCart={updateProductQuantityInCart}
          />
        }
      />
    </Routes>
  );
};

export default RouteSwtich;
