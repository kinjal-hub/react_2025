const  ResturantCard = (props) => {
     const { resdata } = props;
     return(
        <div  className="res-card" style = { {backgroundColor: "#f0f0f0"} } >
            <div  className="res-logo"></div>
            <img alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resdata.info.cloudinaryImageId}/>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(", ")}</h4>
            <h4>{resdata.info.avgRating}stars</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.sla.deliveryTime}Mins</h4>
        </div>
    )
}

export default ResturantCard;