import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router";
import ItemList from "./ItemList";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // selector
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            🛒 Your Cart
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow transition"
            >
              Clear Cart
            </button>
          )}
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Your cart is empty 🛍️</p>
            <p className="text-gray-400 text-sm mt-2">
              <Link
                className="hover:text-amber-400 transition-colors duration-300"
                to="/"
              >
                Browse restaurants and add something delicious!
              </Link>
            </p>
          </div>
        ) : (
          <>
            <ItemList items={cartItems} showRemoveButton={true} />

            <div className="mt-8 flex justify-between items-center border-t pt-4">
              <p className="text-lg font-semibold text-gray-800">
                Total Items:{" "}
                <span className="text-amber-600">{cartItems.length}</span>
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition">
                Proceed to Checkout →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
