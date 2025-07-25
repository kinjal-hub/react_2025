
// import { useState } from "react";
import ItemList from "./ItemList";

const RestuarantCategory = ({data, showItems, setShowIndex, dummy}) => {
    // const [ showItems, setShowItems ] = useState(false);
    const handleClick = () => {
        setShowIndex();
    };

    return(
    <div>
        {/* {header} */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
            </span>
            <span>🔽</span>
            </div>
            
        {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
        
    </div>
    );
}

export default RestuarantCategory;