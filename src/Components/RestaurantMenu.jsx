import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

 const fetchMenu = async () => {
  try {
    const data = await fetch('https://dummyjson.com/recipes/' + resId);
    console.log(data);
    
    const json = await data?.json();
    console.log(json);
    console.log('came here');

    // Change from json?.data to map the root fields correctly:
    setResInfo(json); 
  } catch (error) {
    console.error("Failed to fetch recipe menu data:", error);
  }
};
  
  if (resInfo === null) return <Shimmer />;
  
  const { name, cuisines,prepTimeMinutes,servings,image} =
  resInfo;
    

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img
        className="res-menu-logo"
        alt="res-logo"
        src={image}
      />
      <p>
        {cuisines?.join(" , ")} - prepTimeMinutes:{prepTimeMinutes} - servings:{servings}
      </p>
      <h3>Ingredients Needed:</h3>
      <ul>
        {resInfo?.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;