const Card = ({ product }) => {
  return (
    <div className="card">
      <img alt={product.name} src={require(`../assets/${product.fileName}`)} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Card;
