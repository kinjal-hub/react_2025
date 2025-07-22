import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const  Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login"); 
    
    const onlineStatus = useStatus();

    const { loggedInUser } = useContext(UserContext);
    // console.log(loggedInUser);

    // Subscribing  to  the  store  using a selector
     const  cartItems = useSelector((store) => store.cart.items);
     console.log(cartItems);

   
   
    
    // if  no  dependency  Array => useEffect  is  called  on Every  Array
    //if  dependency  array  is  empty  = [] = then  useEffect  is called  intial  render (just  once)
    // useEffect(() => {
    // console.log("useeffect  is  called");
    // }, []);
    
    return(
    <div  className="flex justify-between bg-green-100 shadow-lg m-2">
        <div  className="logo-container">
        <img className="w-40" alt="/" src={LOGO_URL} />
        </div>
        <div  className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    OnlineStatus:{onlineStatus === true ? "✅" : "🔴" }
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4">
                   <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                   <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    
                </li>
                <button  className="login"
                onClick={ () => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                    
                }}
                >
                    {btnNameReact}
                </button>
                 <li className="px-4">{loggedInUser}</li>
            </ul>
        </div>
        </div>
);
}

export  default Header;