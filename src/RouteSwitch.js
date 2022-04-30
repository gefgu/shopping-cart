import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

const RouteSwtich = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwtich;
