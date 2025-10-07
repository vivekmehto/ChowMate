import { CDN_URL } from "../utils/constants";

const ItemList = ({ items = [] }) => {
  if (!items || items.length === 0)
    return <p className="text-gray-500 italic text-sm">No items available.</p>;

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => {
        const info = item?.card?.info || {};
        const price = info.price || info.defaultPrice || 0;

        return (
          <div
            key={info.id}
            className="flex justify-between items-start py-5 hover:bg-gray-50 transition-all duration-200"
          >
            {/* Left section: item details */}
            <div className="flex-1 pr-4 text-left">
              <h4 className="text-lg font-semibold text-gray-800">
                {info.name}
              </h4>
              <p className="text-gray-700 font-medium mt-1">
                ₹{(price / 100).toFixed(2)}
              </p>
              {info.description && (
                <p className="text-gray-500 text-sm mt-2 leading-snug">
                  {info.description}
                </p>
              )}
            </div>

            {/* Right section: image + button */}
            {info.imageId && (
              <div className="relative w-28 h-24 flex-shrink-0">
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
                <button className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white border border-gray-300 text-green-600 font-semibold text-sm px-4 py-1 rounded-md shadow hover:bg-green-50 transition">
                  ADD +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
