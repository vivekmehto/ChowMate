import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const toggleItems = () => {
    setShowIndex();
  };
  if (!data) return null;

  return (
    <div className="border rounded-lg bg-white shadow-sm mb-4 p-4 text-left">
      {/* Category Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleItems}
      >
        <h3 className="text-lg font-semibold text-gray-800">{data.title}</h3>
        <span className="text-gray-600 text-lg transition-transform duration-300">
          {showItems ? "🔼" : "🔽"}
        </span>
      </div>

      {/* Item List */}
      {showItems && (
        <div className="mt-3 border-t border-gray-100 pt-2">
          <ItemList items={data?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
