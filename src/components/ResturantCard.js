const  ResturantCard = (props) => {
     const { resdata } = props;
     return(
        <div  className="res-card" style = { {backgroundColor: "#f0f0f0"} } >
            <div  className="res-logo"></div>
            <img alt="res-logo"  src={resdata.image}/>
            <h3>{resdata.name}</h3>
            <h4>{resdata.receipe}</h4>
            <h4>{resdata.rating}</h4>
            <h4>{resdata.price}</h4>
            <h4>{resdata.deliveryTime}</h4>
        </div>
    )
}

export default ResturantCard;