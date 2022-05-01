import "./styles/app.css";
import Header from "./components/Header";
import RouteSwtich from "./RouteSwitch";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

const makeProduct = (productName) => {
  const getFileName = (name) => {
    return `${name.split(" ").join("_").toLowerCase()}.png`;
  };

  return {
    name: productName,
    fileName: getFileName(productName),
  };
};

const App = () => {
  const [productList, setProductList] = useState([
    makeProduct("Bridge 4 Baseball Cap"),
    makeProduct("Bridge 4 Patch"),
    makeProduct("Bridge 4 T Shirt"),
    makeProduct("Final Empire Map Poster"),
    makeProduct("Journey Before Destination T Shirt"),
    makeProduct("Life Before Death T Shirt"),
    makeProduct("Roshar Map Poster"),
    makeProduct("Strength Before Weakness T Shirt"),
  ]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <RouteSwtich productList={productList} />
      </BrowserRouter>
    </div>
  );
};

export default App;
