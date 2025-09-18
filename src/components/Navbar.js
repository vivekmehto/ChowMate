import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
