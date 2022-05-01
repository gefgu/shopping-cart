import Card from "./Card";
import "../styles/productList.css"

const ProductList = ({ productList }) => {
  return (
    <div className="product-list">
      {productList.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
