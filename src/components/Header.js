import Navbar from "./Navbar";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>ChowMate 🍲♟️</h1>
          </Link>
        </div>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
