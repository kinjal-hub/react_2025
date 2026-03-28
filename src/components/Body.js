import  ResturantCard from './ResturantCard';
// import resList from '../utils/Data';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { SWIGGY_API } from '../utils/constants';
import { Link } from 'react-router-dom';
import useStatus from '../utils/useStatus';
import UserContext from '../utils/UserContext';



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestuarant, setFilteredRestuarant] = useState([]);
    const [serchText, setSerchText] = useState("");
    
    const {loggedInUser, setUserInfo} = useContext(UserContext);

    useEffect(() => {
      fetchdata();
    }, []);
    
    const fetchdata = async () => {
        const data = await fetch(SWIGGY_API);

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       
        console.log(json);
       
    };

    const onlinestatus = useStatus();
    if(onlinestatus === false)
        return(
        <h1>Looks Like You're  Offline!! Please  check  Your  Internet  Connection</h1>
    );

     

    if(listOfRestaurants === 0)
    {
        return (<Shimmer/>);
    }
    
    return <div  className="filter">
            <div  className="search flex flex-wrap justify-center items-center gap-4">
                <input
                type="text"
                className="border border-black border-solid"
                value={serchText}
                onChange={ (e) => {
                    setSerchText(e.target.value);
                }} />
                <button className="px-4 py-0.5 bg-green-100 m-4 rounded-lg"
                onClick={ () => {
                    console.log(serchText);
                    const filteredRestuarant =listOfRestaurants.filter(
                        (res)=>res.info.name.toLowerCase().includes(serchText.toLowerCase()) 
                    );
                    setFilteredRestuarant(filteredRestuarant);
                }} 
                >
                Search
                </button>
                <button className="px-4 py-0.5 bg-green-100 rounded-lg"
                onClick={ () => {
                  const filteredList = listOfRestaurants.filter((restaurants) => restaurants.info.avgRating > 4);
                  setFilteredRestuarant(filteredList);//updating the state
        }}>
            Top Rated Resturant
        </button>
        <label>UserName: </label>
          <input className='m-2 p-2 border border-black'
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}/>
        
      </div>
        <div className="flex flex-wrap justify-center">
            {       
                    filteredRestuarant.map((restaurant,index) => (
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