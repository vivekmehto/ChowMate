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
  const [activeFilter, setActiveFilter] = useState("");

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = promotedLabel(RestaurantCard);
  const { userName, setuserName } = useContext(UserContext);

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

  // --- Search ---
  const handleSearch = () => {
    const filtered = listOfRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setActiveFilter(""); // Reset filter if searching
  };

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredRestaurants(listOfRestaurants);
    setActiveFilter("");
  };

  // --- Filter buttons ---
  const handleFilter = (type) => {
    let filtered = [];
    setActiveFilter(type);

    if (type === "topRated") {
      filtered = listOfRestaurants.filter((res) => res?.info?.avgRating >= 4.3);
    } else if (type === "fastDelivery") {
      filtered = listOfRestaurants.filter(
        (res) => parseInt(res?.info?.sla?.deliveryTime) <= 30
      );
    } else if (type === "budget") {
      filtered = listOfRestaurants.filter(
        (res) => parseInt(res?.info?.costForTwo?.replace(/[^\d]/g, "")) <= 300
      );
    } else {
      filtered = listOfRestaurants;
    }

    setFilteredRestaurants(filtered);
  };

  // --- Offline state ---
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-red-500 mt-10 text-lg font-semibold">
        You are offline. Check your internet connection ⚠️
      </h1>
    );

  // --- Loading shimmer ---
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className=" mx-auto p-6">
      {/* USER NAME */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <label className="font-medium text-gray-700">User Name:</label>
        <input
          className="border border-gray-400 rounded-md p-2 w-48 sm:w-64 text-center focus:ring focus:ring-green-300 focus:outline-none"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>

      {/* SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-72 sm:w-96 text-gray-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSearch}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-indigo-600 transition"
          >
            Search
          </button>
          <button
            onClick={handleClearSearch}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md font-medium shadow hover:bg-gray-200 transition"
          >
            Clear
          </button>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => handleFilter("topRated")}
          className={`px-4 py-2 rounded-full border font-medium shadow ${
            activeFilter === "topRated"
              ? "bg-indigo-500 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
          } transition`}
        >
          ⭐ Top Rated
        </button>
        <button
          onClick={() => handleFilter("fastDelivery")}
          className={`px-4 py-2 rounded-full border font-medium shadow ${
            activeFilter === "fastDelivery"
              ? "bg-indigo-500 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
          } transition`}
        >
          ⚡ Fast Delivery
        </button>
        <button
          onClick={() => handleFilter("budget")}
          className={`px-4 py-2 rounded-full border font-medium shadow ${
            activeFilter === "budget"
              ? "bg-indigo-500 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
          } transition`}
        >
          💸 Budget Friendly
        </button>
        <button
          onClick={() => handleFilter("")}
          className={`px-4 py-2 rounded-full border font-medium shadow ${
            activeFilter === ""
              ? "bg-indigo-500 text-white border-indigo-600"
              : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-50"
          } transition`}
        >
          🔁 Reset
        </button>
      </div>

      {/* RESTAURANTS */}
      <div className="flex flex-wrap justify-center gap-4">
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
          <h2 className="text-gray-500 font-semibold mt-10 text-center">
            No restaurants found matching “{searchText}”
          </h2>
        )}
      </div>
    </div>
  );
};

export default Body;
