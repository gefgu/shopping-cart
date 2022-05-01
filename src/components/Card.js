import "../styles/card.css";

const Card = ({ product }) => {
  return (
    <div className="card">
      <img alt={product.name} src={require(`../assets/${product.fileName}`)} />
      <div className="text">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
