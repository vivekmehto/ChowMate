import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav>
      <ul className="flex gap-5 items-center">
        <li>
          Online Status:{" "}
          <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
            {onlineStatus ? "🟢" : "🔴"}
          </span>
        </li>
        <li>
          <Link
            className="hover:text-amber-400 transition-colors duration-300"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-400 transition-colors duration-300"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-400 transition-colors duration-300"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-400 transition-colors duration-300"
            to="/cart"
          >
            Cart {cartItems.length}
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-amber-400 transition-colors duration-300"
            to="/grocery"
          >
            Grocery
          </Link>
        </li>
        <button
          className="ml-4 px-4 py-1 bg-amber-400 text-gray-900 font-semibold rounded-md hover:bg-amber-500 transition-colors duration-300"
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
