import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem, decreaseItem } from "../utils/cartSlice";

const ItemCard = ({ item, showRemoveButton = false }) => {
  const dispatch = useDispatch();

  const info = item?.card?.info || {};
  const price = info.price || info.defaultPrice || 0;

  const handleAddItem = () => {
    dispatch(addItem(item));
  };

  const handleDecreaseItem = () => {
    dispatch(decreaseItem(info.id));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(info.id));
  };

  return (
    <div
      key={info.id}
      className="flex justify-between items-start py-5 hover:bg-gray-50 transition-all duration-200 border-b border-gray-200"
    >
      {/* Left section: item details */}
      <div className="flex-1 pr-4 text-left">
        <h4 className="text-lg font-semibold text-gray-800">{info.name}</h4>
        <p className="text-gray-700 font-medium mt-1">
          ₹{(price / 100).toFixed(2)}
        </p>
        {item.quantity && (
          <p className="text-gray-600 text-sm mt-1">Qty: {item.quantity}</p>
        )}
        {info.description && (
          <p className="text-gray-500 text-sm mt-2 leading-snug">
            {info.description}
          </p>
        )}
      </div>

      {/* Right section: image + buttons */}
      {info.imageId && (
        <div className="relative w-28 h-24 flex-shrink-0">
          <img
            src={CDN_URL + info.imageId}
            alt={info.name}
            className="w-full h-full object-cover rounded-lg shadow-sm"
          />

          <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 flex gap-2">
            <button
              onClick={handleDecreaseItem}
              className="bg-white border border-gray-300 text-yellow-600 font-semibold text-sm px-3 py-1 rounded-md shadow hover:bg-yellow-50 transition"
            >
              −
            </button>

            <button
              onClick={handleAddItem}
              className="bg-white border border-gray-300 text-green-600 font-semibold text-sm px-3 py-1 rounded-md shadow hover:bg-green-50 transition"
            >
              +
            </button>

            {showRemoveButton && (
              <button
                onClick={handleRemoveItem}
                className="bg-white border border-gray-300 text-red-500 font-semibold text-sm px-3 py-1 rounded-md shadow hover:bg-red-50 transition"
              >
                ❌
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
