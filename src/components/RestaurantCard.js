import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ info }) => {
  console.log("here is res data " + info);
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
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} </h4>
      {/* <h4>User : {loggedInUser} </h4> */}
    </div>
  );
};

export default RestaurantCard;
