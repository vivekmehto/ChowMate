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
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const onlineStatus = useOnlineStatus();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(RES_API);
      const json = await res.json();

      const newRestaurants =
        json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      if (newRestaurants?.[3]?.info) {
        newRestaurants[3].info.cloudinaryImageId =
          "27a03c452c983d1b90f36faa2cbc0b0a";
      }

      setListOfRestaurants(newRestaurants);
      setFilteredRestaurants(newRestaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setListOfRestaurants([]);
      setFilteredRestaurants([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const { userName, setuserName } = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <h1 className="text-center text-red-600 mt-10 text-lg font-semibold">
          You are offline — check your internet connection.
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6">
        <Shimmer />
      </div>
    );
  }
  const handleSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setFilteredRestaurants(listOfRestaurants);
      return;
    }

    const filtered = listOfRestaurants.filter((res) => {
      const info = res?.info || {};
      const name = String(info.name || "").toLowerCase();
      const cuisines = Array.isArray(info.cuisines)
        ? info.cuisines.join(" ").toLowerCase()
        : String(info.cuisines || "").toLowerCase();
      const tags = String(
        info?.tags ||
          info?.aggregatedDiscountInfo?.description ||
          info?.locality ||
          ""
      ).toLowerCase();

      return name.includes(q) || cuisines.includes(q) || tags.includes(q);
    });

    setFilteredRestaurants(filtered);
  };

  const handleReset = () => {
    setQuery("");
    setFilteredRestaurants(listOfRestaurants);
  };

  const handleClearQuery = () => setQuery("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex-1">
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                  />
                </svg>
              </span>

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                placeholder="Type here..."
                className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Search restaurants"
                data-testid="searchInput"
              />
            </div>

            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-900 transition"
              data-testid="searchButton"
            >
              Search
            </button>

            <button
              onClick={handleReset}
              className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              data-testid="resetButton"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length === 0 ? (
          <div className="col-span-full py-14 rounded-xl border border-dashed border-gray-200 text-center">
            <h3 className="text-lg font-semibold text-gray-700">
              No restaurants found
            </h3>
            {query ? (
              <p className="mt-2 text-sm text-gray-500">
                Try a different keyword or{" "}
                <button
                  onClick={handleReset}
                  className="underline text-indigo-600"
                >
                  reset
                </button>
                .
              </p>
            ) : (
              <p className="mt-2 text-sm text-gray-500">
                No restaurants to show.
              </p>
            )}
          </div>
        ) : (
          filteredRestaurants.map((res) => {
            const id = res?.info?.id;
            return (
              <Link
                key={id}
                to={"/restaurants/" + id}
                className="block transform hover:-translate-y-1 transition"
              >
                <div className="relative">
                  {res?.info?.promoted && (
                    <div className="absolute -top-2 -left-2 z-10 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-br-lg shadow">
                      PROMOTED
                    </div>
                  )}

                  {/* keep your RestaurantCard component as-is; container gives a subtle card feel */}
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden">
                    <RestaurantCard {...res} />
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
