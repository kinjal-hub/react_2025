import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const  ResturantCard = (props) => {
     const { resdata } = props;
     const { loggedInUser } = useContext(UserContext);
     
     const {cloudinaryImageId,
             name,
             cuisines,
             avgRating,
             sla,
             costForTwo} = resdata?.info;


     return(
        <div  className="p-4 m-4 w-[300px] rounded-xl bg-gray-100 hover:bg-gray-200" >
            <div  className="res-logo"></div>
            <img className="rounded-2xl"
            alt="res-logo"
            src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime}Mins</h4>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}




export default ResturantCard;

