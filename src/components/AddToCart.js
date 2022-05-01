const AddToCart = ({ product, addProductToCart }) => {
  return (
    <button className="add-to-cart" onClick={() => addProductToCart(product)}>
      Add to cart
    </button>
  );
};

export default AddToCart;
