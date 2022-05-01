import Card from "./Card";
import "../styles/productList.css";

const ProductList = ({ productList, addProductToCart, cartList }) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <Card
          product={product}
          key={product.id}
          addProductToCart={addProductToCart}
          cartList={cartList}
        />
      ))}
    </div>
  );
};

export default ProductList;
