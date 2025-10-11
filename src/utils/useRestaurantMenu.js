import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(
          "Restaurant Info:",
          json.data?.cards?.[2]?.card?.card?.info
        );
        console.log(
          "First Menu Item:",
          json.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
            ?.card?.card?.itemCards?.[0]?.card?.info
        );

        setResInfo(json.data);
      } catch (error) {
        console.error("Error fetching restaurant menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);
  return resInfo;
};

export default useRestaurantMenu;
