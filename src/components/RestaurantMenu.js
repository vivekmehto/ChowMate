import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import defaultImage from "../assets/default-restaurantImage.avif";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);

  // Extract restaurant info
  const restaurantInfo = resInfo?.cards?.find((c) => c?.card?.card?.info)?.card
    ?.card?.info;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    sla,
    cloudinaryImageId,
  } = restaurantInfo || {};

  // Extract menu items
  const menuCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories =
    menuCards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  console.log(categories);
  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-gray-50 rounded-xl shadow-md text-center">
      {/* Restaurant Info */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-6">
        <img
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg object-cover shadow-md"
          alt={name}
          src={
            cloudinaryImageId &&
            !cloudinaryImageId.includes("rng/md/carousel/production/")
              ? CDN_URL + cloudinaryImageId
              : defaultImage
          }
          onError={(e) => (e.target.src = defaultImage)}
        />
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          {cuisines?.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">{cuisines.join(", ")}</p>
          )}
          <p className="text-sm text-gray-600 mt-2">
            ⭐ {avgRating} • {costForTwoMessage}
          </p>
          <p className="text-sm text-gray-500">{sla?.slaString}</p>
        </div>
      </div>

      {/* Menu Section */}
      {categories.length === 0 ? (
        <p className="text-gray-500">No menu data available</p>
      ) : (
        <ul className="space-y-3">
          {categories.map((item, index) => (
            <RestaurantCategory
              key={item?.card?.card.title}
              data={item?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
