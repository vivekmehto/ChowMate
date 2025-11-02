import { useContext, useEffect, useState } from "react";
import RestaurantCard, { promotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

    // console.log(json);

    const newRestaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    newRestaurants[3].info.cloudinaryImageId =
      "27a03c452c983d1b90f36faa2cbc0b0a";

    setListOfRestaurants(newRestaurants);

    // console.log(
    //   json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };

  const { userName, setuserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 mt-10 text-lg font-semibold">
        You are offline. Check your internet connection
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="  m-4 p-4 flex items-center justify-center">
        <label> User Name: </label>
        <input
          className="border border-black p-2"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>
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
    </div>
  );
};

export default Body;
