import  ResturantCard from './ResturantCard';
import { useState } from 'react';
import resList from '../utils/Data';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return <div className="body">
        <button className="filter-btn" onClick={ () => {
            const filteredList = resList.filter((restaurants) => restaurants.rating > 4);
                setListOfRestaurants(filteredList);//updating the state
        }}>
            Top Rated Resturant
        </button>
        <div className="res-container">
            {
                listOfRestaurants.map((restaurant) => (
                    <ResturantCard key={restaurant.id} resdata={restaurant}/>
                ))
            }
        </div>
    </div>
}

export default Body;