import ItemList from "./ItemList";

const RestuarantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full md:w-9/12 lg:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-3 md:p-4">
        
        <div 
          className="flex justify-between items-center cursor-pointer" 
          onClick={handleClick}
        >
          <span className="font-bold text-base md:text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className={`${showItems ? 'rotate-180' : ''} transition-transform`}>
            🔽
          </span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestuarantCategory;
