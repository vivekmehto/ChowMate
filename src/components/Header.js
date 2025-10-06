import Navbar from "./Navbar";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-50 px-5 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-400">
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
