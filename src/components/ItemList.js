import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 text-left flex flex-col-reverse justify-between md:flex-row"
        >
          
          <div className="w-full md:w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">{item.card.info.name}</span>
              <span className="font-medium">
                {" "} - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          
          <div className="w-full md:w-3/12 flex flex-col items-center md:items-end mb-4 md:mb-0">
            <div className="relative">
              <img
                alt={item.card.info.name}
                src={CDN_URL + item.card.info.imageId}
                className="w-32 h-24 md:w-28 md:h-24 object-cover rounded-lg shadow-sm"
              />
              <button
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 p-2 px-6 bg-white text-green-600 font-bold shadow-lg rounded-md border border-gray-200 hover:bg-gray-100 transition-all"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
