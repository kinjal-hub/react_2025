import  ResturantCard from './ResturantCard';
import { useEffect, useState } from 'react';
// import resList from '../utils/Data';
import Shimmer from './Shimmer';
import { SWIGGY_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [serchText, setSerchText] = useState("");
    console.log("Body rendered");

    useEffect(() => {
      fetchdata();
    }, []);
    
    const fetchdata = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        console.log(json);
       
    };

    if(listOfRestaurants === 0)
    {
        return (<Shimmer/>);
    }
    
    return <div  className="filter">
            <div  className="search">
                <input
                type="text"
                className="search-box"
                value={serchText}
                onChange={ (e) => {
                    setSerchText(e.target.value);
                }} />
                <button  onClick={ () => {
                    console.log(serchText);
                    const filteredRestuarant =listOfRestaurants.filter(
                        (restaurants)=>restaurants.info.name.includes(serchText) 
                    );
                    setListOfRestaurants(filteredRestuarant);
                }} 
                >
                Search
                </button> <button className="filter-btn" onClick={ () => {
                  const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                  setListOfRestaurants(filteredList);//updating the state
        }}>
            Top Rated Resturant
        </button>
      </div>
        <div className="res-container">
            {       
                    listOfRestaurants.map((restaurant,index) => (
                    <Link
                    key={restaurant.info.id}
                    to={"/restaurants/" + restaurant.info.id}
                    >
                    <ResturantCard  resdata={restaurant}/>
                    </Link>
                ))
            }
        </div>
    </div>
}

export default Body;