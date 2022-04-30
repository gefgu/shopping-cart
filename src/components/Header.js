import "../styles/header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeStore</h1>
      <nav>
        <div>Home</div>
        <div>Products</div>
        <div>Cart</div>
      </nav>
    </div>
  );
};

export default Header;
