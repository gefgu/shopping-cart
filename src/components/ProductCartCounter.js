const ProductCartCounter = ({
  product,
  updateProductQuantityInCart,
  cartList,
}) => {
  const productInCart = cartList.find((elem) => elem.product === product);
  console.log(productInCart);

  return (
    <div>
      <button
        onClick={() => {
          updateProductQuantityInCart(product, productInCart.quantity - 1);
        }}
      >
        -
      </button>
      <input type="text" value={productInCart.quantity} readOnly />
      <button
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
