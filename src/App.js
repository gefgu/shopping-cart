import "./styles/app.css";
import Header from "./components/Header";
import RouteSwtich from "./RouteSwitch";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

const makeProduct = (productName, price) => {
  const getFileName = (name) => {
    return `${name.split(" ").join("_").toLowerCase()}.png`;
  };

  return {
    name: productName,
    fileName: getFileName(productName),
    id: uniqid(),
    price,
  };
};

const App = () => {
  const [productList, setProductList] = useState([
    makeProduct("Bridge 4 Baseball Cap", 28.0),
    makeProduct("Bridge 4 Patch", 10.0),
    makeProduct("Bridge 4 T Shirt", 25.0),
    makeProduct("Final Empire Map Poster", 10.0),
    makeProduct("Journey Before Destination T Shirt", 25.0),
    makeProduct("Life Before Death T Shirt", 25.0),
    makeProduct("Roshar Map Poster", 10.0),
    makeProduct("Strength Before Weakness T Shirt", 25.0),
  ]);

  const [cartList, setCartList] = useState([]);

  const addProductToCart = (product) => {
    setCartList([...cartList, { product, quantity: 1 }]);
  };

  const updateProductQuantityInCart = (product, newQuantity) => {
    if (newQuantity < 1) {
      removeProductFromCart(product);
      return;
    }

    setCartList([
      ...cartList.map((element) => {
        if (element.product === product) {
          return { product, quantity: newQuantity };
        }
        return element;
      }),
    ]);
  };

  const removeProductFromCart = (product) => {
    let newCart = [...cartList];
    const index = cartList.findIndex((element) => element.product === product);
    newCart.splice(index, 1);
    setCartList([...newCart]);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header cartSize={cartList.length} />
        <RouteSwtich
          productList={productList}
          addProductToCart={addProductToCart}
          cartList={cartList}
          updateProductQuantityInCart={updateProductQuantityInCart}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
