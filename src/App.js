import "./styles/app.css";
import Header from "./components/Header";
import RouteSwtich from "./RouteSwitch";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
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
