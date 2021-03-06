import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = ({ cartSize }) => {
  return (
    <div className="header">
      <h1>FakeStore</h1>
      <nav>
        <Link to="">Home</Link>
        <Link to="products">Products</Link>
        <Link to="cart">
          Cart
          {cartSize > 0 ? <sup className="cart-size">{cartSize}</sup> : ""}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
