import Card from "./Card";

const ProductList = ({ productList }) => {
  return (
    <div>
      <h2>Products</h2>
      {productList.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
};

export default ProductList;
