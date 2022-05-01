const Card = ({ product }) => {
  return (
    <div key={product.name}>
      <p>{product.name}</p>
    </div>
  );
};

export default Card;
