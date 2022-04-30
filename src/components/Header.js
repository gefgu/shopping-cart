import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeStore</h1>
      <nav>
        <Link to="">Home</Link>
        <Link to="products">Products</Link>
        <div>Cart</div>
      </nav>
    </div>
  );
};

export default Header;
