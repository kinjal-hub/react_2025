import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
useEffect(() => {
  fetchMenu();
},[]);

const fetchMenu = async() => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await  data.json();
    console.log(json);
    setResInfo(json.data);
};

  return resInfo === null ? (
    <Shimmer />
  ) : (
   <div className="menu">
    <h1>Name</h1>
    <h2>Menu</h2>
    <ul>
        <li>Birayani</li>
        <li>Burgers</li>
        <li>Diet  coke</li>
    </ul>
     </div>
    );
};

export default ResturantMenu;