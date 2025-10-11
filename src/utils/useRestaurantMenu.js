import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Call Netlify function
        const response = await fetch(
          `/.netlify/functions/fetchMenu?restaurantId=${resId}`
        );

        if (!response.ok) throw new Error(`HTTP Error ${response.status}`);

        const json = await response.json();
        setResInfo(json.data);
        setError(null);
      } catch (err) {
        console.error("❌ Error fetching restaurant menu:", err);
        setError(err.message);
        setResInfo(null);
      }
    };

    fetchMenu();
  }, [resId]);

  return { resInfo, error };
};

export default useRestaurantMenu;
