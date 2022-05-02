import ProductCartCounter from "./ProductCartCounter";
import "../styles/cart.css";

const Cart = ({ cartList, updateProductQuantityInCart }) => {
  const costTotal = cartList.reduce(
    (prev, curr) => curr.product.price * curr.quantity + prev,
    0
  );

  return (
    <div>
      <div className="cart-list">
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
              <div className="description">
                <p className="product-name">{product.name}</p>
                <p>Unit Price: ${product.price}</p>
                <p>Total: ${product.price * quantity}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p>Total Cost: ${costTotal}</p>
      <button>Checkout</button>
    </div>
  );
};

export default Cart;
