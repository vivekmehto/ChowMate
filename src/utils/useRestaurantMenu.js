import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`/.netlify/functions/fetchMenu?resId=${resId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();

        setResInfo(json.data);
      } catch (err) {
        console.error("❌ Error fetching restaurant menu:", err);
        setError(err.message);
      }
    };
    fetchMenu();
  }, [resId]);

  return { resInfo, error };
};

export default useRestaurantMenu;
