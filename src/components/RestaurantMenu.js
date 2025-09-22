import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

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

  const itemCards =
    menuCards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards ||
    [];

  return (
    <div className="restaurant-menu">
      {/* Restaurant Info */}
      <div className="restaurant-header">
        <img
          className="restaurant-img"
          alt={name}
          src={CDN_URL + cloudinaryImageId}
        />
        <div className="restaurant-details">
          <h2 className="restaurant-name">{name}</h2>
          {cuisines?.length > 0 && (
            <p className="restaurant-cuisines">{cuisines.join(", ")}</p>
          )}
          <p>
            ⭐ {avgRating} • {costForTwoMessage}
          </p>
          <p>{sla?.slaString}</p>
        </div>
      </div>

      {/* Menu Section */}
      <h2 className="menu-title">Menu</h2>
      <ul className="menu-list">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            {item.card.info.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
