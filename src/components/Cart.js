import ProductCartCounter from "./ProductCartCounter";
import "../styles/cart.css";

const Cart = ({ cartList, updateProductQuantityInCart }) => {
  const costTotal = cartList.reduce(
    (prev, curr) => curr.product.price * curr.quantity + prev,
    0
  );

  return (
    <div className="cart">
      <div className="cart-list">
        {cartList.map((element) => {
          const product = element.product;
          const quantity = element.quantity;

          return (
            <article className="cart-item" key={product.id}>
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
              <div className="description">
                <p className="product-name">{product.name}</p>
                <p>Unit Price: ${product.price}</p>
                <p>Total: ${product.price * quantity}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="pay-section">
        <p className="total-cost">Total Cost: ${costTotal}</p>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
