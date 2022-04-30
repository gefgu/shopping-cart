import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="message">
        <h3>BEST ONLINE STORE OF THE YEAR</h3>
        <h2>Buy the best nature products</h2>
        <button>Shop now</button>
      </div>

      <div className="footer">
        Photo by{" "}
        <a href="https://unsplash.com/@masterwalter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Jan Walter Luigi
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default Home;
