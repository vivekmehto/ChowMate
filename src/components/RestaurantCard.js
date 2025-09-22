import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ info }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    info;

  return (
    <div className="restaurant-card">
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines?.join(", ") || "Cuisines not available"}</h4>
      <h4>{avgRating} ★</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString || "Delivery info unavailable"}</h4>
    </div>
  );
};

export default RestaurantCard;
