import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = ({ productList }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={<ProductList productList={productList} />}
      />
    </Routes>
  );
};

export default RouteSwtich;
