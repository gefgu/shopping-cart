import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="message">
        <h3>BEST ONLINE STORE OF THE YEAR</h3>
        <h2>Buy the best Cosmere products</h2>
        <Link to="products">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
