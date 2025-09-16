import { useEffect, useState } from "react";
import { CDN_URL, MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    // console.log(json.data.cards[2].card.card.info);

    setResInfo(json.data);

    console.log(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards?.[0]?.card?.info
    );
  };
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

  //   const { itemCards } =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const menuCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards =
    menuCards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards ||
    [];

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <div className="restaurant-menu">
        <img
          className="res-img"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="res-name">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{sla.slaString} </h4>

        <h1>MENU</h1>

        <p>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
