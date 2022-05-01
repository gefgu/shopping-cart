import "../styles/card.css";
import AddToCart from "./AddToCart";
import ProductCartCounter from "./ProductCartCounter";

const Card = ({
  product,
  addProductToCart,
  cartList,
  updateProductQuantityInCart,
}) => {
  const productIsInCart = () => {
    return cartList.find((element) => element.product === product);
  };

  return (
    <div className="card">
      <img alt={product.name} src={require(`../assets/${product.fileName}`)} />
      <div className="text">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        {productIsInCart() ? (
          <ProductCartCounter
            product={product}
            updateProductQuantityInCart={updateProductQuantityInCart}
            cartList={cartList}
          />
        ) : (
          <AddToCart product={product} addProductToCart={addProductToCart} />
        )}
      </div>
    </div>
  );
};

export default Card;
