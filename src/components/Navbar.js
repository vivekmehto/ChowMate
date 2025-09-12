import { useState } from "react";

const Navbar = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button
          className="login-btn"
          onClick={() => {
            loginBtn === "Login" ? setloginBtn("Logout") : setloginBtn("Login");
          }}
        >
          {loginBtn}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
