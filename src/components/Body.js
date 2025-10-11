import { useContext, useEffect, useState } from "react";
import RestaurantCard, { promotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = promotedLabel(RestaurantCard);
  const { userName, setuserName } = useContext(UserContext);

  // Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Failed to fetch restaurants:", err);
    }
  };

  // Online/offline check
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 mt-10 text-lg font-semibold">
        You are offline. Check your internet connection ⚠️
      </h1>
    );

  // Shimmer loading
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  // Filter function
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  // Reset search
  const handleClearSearch = () => {
    setSearchText("");
    setFilteredRestaurants(listOfRestaurants);
  };

  return (
    <div className="max-w-8xl mx-auto p-8">
      {/* User Name Input */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <label className="font-medium text-gray-700">User Name:</label>
        <input
          className="border border-gray-400 rounded-md p-2 w-48 sm:w-64 text-center focus:ring focus:ring-green-300 focus:outline-none"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const query = e.target.value.toLowerCase();
            setFilteredRestaurants(
              listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(query)
              )
            );
          }}
          className="border border-gray-400 rounded-md p-2 w-72 sm:w-96 text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Search
          </button>
          <button
            onClick={handleClearSearch}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium hover:bg-gray-300 transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((res) => (
            <Link
              key={res.info.id}
              to={`/restaurants/${res.info.id}`}
              className="m-4"
            >
              {res?.info?.promoted ? (
                <RestaurantCardPromoted {...res} />
              ) : (
                <RestaurantCard {...res} />
              )}
            </Link>
          ))
        ) : (
          <h2 className="text-gray-500 font-semibold mt-10">
            No restaurants found matching “{searchText}”
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
