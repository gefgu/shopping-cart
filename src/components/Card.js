const Card = ({ product }) => {
  return (
    <div className="card">
      <img alt={product.name} src={require(`../assets/${product.fileName}`)} />
      <p>{product.name}</p>
    </div>
  );
};

export default Card;
