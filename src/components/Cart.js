import ProductCartCounter from "./ProductCartCounter";

const Cart = ({ cartList, updateProductQuantityInCart }) => {
  const costTotal = cartList.reduce(
    (prev, curr) => curr.product.price * curr.quantity + prev,
    0
  );

  return (
    <div>
      {cartList.map((element) => {
        const product = element.product;
        const quantity = element.quantity;

        return (
          <div className="cart-item" key={product.id}>
            <div className="left">
              <img
                alt={product.name}
                src={require(`../assets/${product.fileName}`)}
              />
              <ProductCartCounter
                product={product}
                updateProductQuantityInCart={updateProductQuantityInCart}
                cartList={cartList}
              />
            </div>
            <div className="price-container">
              <p>Unit Price: ${product.price}</p>
              <p>Total: ${product.price * quantity}</p>
            </div>
          </div>
        );
      })}
      <p>Total Cost: ${costTotal}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
