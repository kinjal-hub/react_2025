import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items, dummy }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // dispatch  the  items
        dispatch(addItem(item));
    }

return(
<div>
   {items.map((item) => (
    <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left">    
        
        <div className="w-9/12">
        <div className="py-2">
            <span className="text-bold">{item.card.info.name}</span>
            <span> - ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
        </div>
        <p className="text-xs">
            {item.card.info.description}
        </p>
        </div>
        <div className="w-3/12 p-4">
        <div className="absolute">
            <button className="p-2 bg-white shadow-lg m-auto" onClick={() => handleAddItem(item)}> Add+ </button>
        </div>
        <img alt= "/" src={CDN_URL+item.card.info.imageId} className="w-24 flex justify-items-end" />
        </div>
        
        </div>

   ))}
</div>
);
};

export default  ItemList;