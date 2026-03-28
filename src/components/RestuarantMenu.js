import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  // Destructuring data
  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
  
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
     <div className="text-center px-4 md:px-0 max-w-[800px] mx-auto min-h-screen">
    
      <h1 className="font-bold text-xl md:text-3xl my-4 md:my-8 text-gray-800">
        {name}
      </h1>
      
      <p className="font-semibold text-sm md:text-lg text-gray-600 mb-6">
        {cuisines?.join(", ")} — {costForTwoMessage}
      </p>

      
      <div className="flex flex-col gap-4">
        {categories?.map((category, index) => (
          <RestuarantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
