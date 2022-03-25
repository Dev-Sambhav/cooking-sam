import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// import styles
import "./Navbar.css";

// import component
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("red")}>
        <Link to="/" className="brand">
          <h1>Cooking Sam</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
};

export default Navbar;
