import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = ({
  productList,
  addProductToCart,
  cartList,
  updateProductQuantityInCart,
}) => {
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
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default RouteSwtich;
