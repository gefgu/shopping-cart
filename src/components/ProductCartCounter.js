import "../styles/productCartCounter.css";

const ProductCartCounter = ({
  product,
  updateProductQuantityInCart,
  cartList,
}) => {
  const productInCart = cartList.find((elem) => elem.product === product);

  return (
    <div className="counter">
      <button
        className="minus"
        onClick={() => {
          updateProductQuantityInCart(product, productInCart.quantity - 1);
        }}
      >
        -
      </button>
      <input
        type="text"
        value={productInCart.quantity}
        readOnly
        className="counter-value"
      />
      <button
        className="plus"
        onClick={() => {
          updateProductQuantityInCart(product, productInCart.quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductCartCounter;
