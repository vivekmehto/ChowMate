import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ info }) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } =
    info;

  return (
    <div className="restaurant-card w-64 bg-white rounded-xl overflow-hidden shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-xl cursor-pointer m-4 flex flex-col">
      <img
        className="res-img w-full h-40 object-cover border-b border-gray-200"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name text-lg font-semibold text-gray-800 m-4">
        {name}
      </h3>
      <h4 className="text-gray-600 m-4">
        {cuisines?.join(", ") || "Cuisines not available"}
      </h4>
      <h4 className="text-gray-600 m-4">{avgRating} ★</h4>
      <h4 className="text-gray-600 m-4">{costForTwo}</h4>
      <h4 className="text-gray-600 m-4">
        {sla?.slaString || "Delivery info unavailable"}
      </h4>
    </div>
  );
};

export const promotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-2 left-2 px-3 py-1 rounded-2xl bg-black text-white text-xs font-semibold">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;
