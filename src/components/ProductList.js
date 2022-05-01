import Card from "./Card";
import "../styles/productList.css";

const ProductList = ({
  productList,
  addProductToCart,
  cartList,
  updateProductQuantityInCart,
}) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <Card
          product={product}
          key={product.id}
          addProductToCart={addProductToCart}
          cartList={cartList}
          updateProductQuantityInCart={updateProductQuantityInCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
