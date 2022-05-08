import "../styles/productCartCounter.css";

const ProductCartCounter = ({
  product,
  updateProductQuantityInCart,
  cartList,
}) => {
  const productInCart = cartList.find((elem) => elem.product === product);

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    if (newValue === "") return;

    updateProductQuantityInCart(product, newValue);
  };

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
        type="number"
        name="counter"
        value={productInCart.quantity}
        onChange={handleInputChange}
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
