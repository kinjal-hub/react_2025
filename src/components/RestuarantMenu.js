// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";




const ResturantMenu = () => {
    
     
    const { resId } = useParams();

    const resInfo = useResturantMenu(resId);

    const dummy = "Dummy Data"; 

    const [ showIndex, setShowIndex ] = useState();

if(resInfo === null)  return  <Shimmer />

const {name, cuisines, costForTwoMessage  } = resInfo?.cards[2]?.card?.card?.info;
 
const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
// console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
console.log(itemCards);

const categories =
resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
  (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
); 
// console.log(categories);


  return (
   <div className="text-center">
    <h1 className="font-bold text-2xl my-6">{name}</h1>
    <p className="font-bold text-lg">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>

    {categories.map((category,index) => (
      <RestuarantCategory key={category?.card?.card.title}
      data={category?.card?.card}
      showItems={index === showIndex ? true : false}
      setShowIndex={() => setShowIndex(index)}
      dummy={dummy}
      />
      ))}
     </div>
    );
};

export default ResturantMenu;