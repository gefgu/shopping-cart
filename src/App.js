import "./styles/app.css";
import Header from "./components/Header";
import RouteSwtich from "./RouteSwitch";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <RouteSwtich />
      </BrowserRouter>
    </div>
  );
};

export default App;
