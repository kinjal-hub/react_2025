import  ResturantCard from './ResturantCard';
import { useEffect, useState } from 'react';
// import resList from '../utils/Data';
import Shimmer from './Shimmer';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [serchText, setSerchText] = useState("");
    useEffect(() => {
      fetchdata();
    }, []);
    const fetchdata = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

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
                </button>
        </div>
        <button className="filter-btn" onClick={ () => {
            const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                setListOfRestaurants(filteredList);//updating the state
        }}>
            Top Rated Resturant
        </button>
        
        <div className="res-container">
            {       
                    listOfRestaurants.map((restaurants,index) => (
                    <ResturantCard key={restaurants.info.id} resdata={restaurants}/>
                ))
            }
        </div>
    </div>
}

export default Body;