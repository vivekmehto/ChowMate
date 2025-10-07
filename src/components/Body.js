import { useEffect, useState } from "react";
import RestaurantCard, { promotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = promotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 mt-10 text-lg font-semibold">
        You are offline. Check your internet connection
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center">
      {listOfRestaurants.map((res) => (
        <Link
          key={res.info.id}
          to={"/restaurants/" + res.info.id}
          className="m-4"
        >
          {" "}
          {res?.info?.promoted ? (
            <RestaurantCardPromoted {...res} />
          ) : (
            <RestaurantCard {...res} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Body;
