const  ResturantCard = (props) => {
     const { resdata } = props;
     

     return(
        <div  className="p-4 m-4 w-[300px] rounded-xl bg-gray-100 hover:bg-gray-200" >
            <div  className="res-logo"></div>
            <img className="rounded-2xl"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
            <h3 className="font-bold py-2 text-lg">{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating}stars</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.deliveryTime}Mins</h4>
        </div>
    )
}

export default ResturantCard;