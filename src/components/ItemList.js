import ItemCard from "./ItemCard";

const ItemList = ({ items = [], showRemoveButton = false }) => {
  if (!items || items.length === 0)
    return <p className="text-gray-500 italic text-sm">No items available.</p>;
  // console.log([0].card.info.id);
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => {
        return (
          <ItemCard
            showRemoveButton={showRemoveButton}
            key={item?.card?.info.id}
            item={item}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
