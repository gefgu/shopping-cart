import "../styles/card.css";
import AddToCart from "./AddToCart";
import ProductCartCounter from "./ProductCartCounter";

const Card = ({ product, addProductToCart, cartList }) => {
  const productIsInCart = () => {
    cartList.forEach((e) => console.log(e));
    return cartList.find((element) => element.product === product);
  };

  return (
    <div className="card">
      <img alt={product.name} src={require(`../assets/${product.fileName}`)} />
      <div className="text">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        {productIsInCart() ? (
          <ProductCartCounter />
        ) : (
          <AddToCart product={product} addProductToCart={addProductToCart} />
        )}
      </div>
    </div>
  );
};

export default Card;
