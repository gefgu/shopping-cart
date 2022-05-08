import "../styles/productCartCounter.css";

const ProductCartCounter = ({
  product,
  updateProductQuantityInCart,
  cartList,
}) => {
  const productInCart = cartList.find((elem) => elem.product === product);

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    updateProductQuantityInCart(product, newValue);
  };

  const handleLoseOfFocus = () => {
    const value = productInCart.quantity;

    if (+value <= 0 || value === "") {
      updateProductQuantityInCart(product, 0, true);
      return;
    }

    updateProductQuantityInCart(product, +value);
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (/^[a-z]$/i.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="counter">
      <button
        className="minus"
        onClick={() => {
          updateProductQuantityInCart(product, productInCart.quantity - 1);
        }}
        onBlur={handleLoseOfFocus}
      >
        -
      </button>
      <input
        type="number"
        name="counter"
        value={productInCart.quantity}
        onChange={handleInputChange}
        onBlur={handleLoseOfFocus}
        onKeyDown={handleKeyPress}
        className="counter-value"
      />
      <button
        className="plus"
        onClick={() => {
          updateProductQuantityInCart(product, productInCart.quantity + 1);
        }}
        onBlur={handleLoseOfFocus}
      >
        +
      </button>
    </div>
  );
};

export default ProductCartCounter;
