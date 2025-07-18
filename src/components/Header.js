import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";


const  Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login"); 
    const onlineStatus = useStatus();

    console.log("Header  is  rendered");
    
    // if  no  dependency  Array => useEffect  is  called  on Every  Array
    //if  dependency  array  is  empty  = [] = then  useEffect  is called  intial  render (just  once)
    // useEffect(() => {
    // console.log("useeffect  is  called");
    // }, []);
    
    return(
    <div  className="header">
        <div  className="logo-container">
        <img alt="/logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
        </div>
        <div  className="nav-items">
            <ul>
                <li>
                    OnlineStatus:{onlineStatus === true ? "✅" : "🔴" }
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                   <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                   <Link to="/grocery">Grocery</Link>
                </li>
                <li>Cart</li>
                <button  className="login"
                onClick={ () => {
                    btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                    
                }}
                >
                    {btnNameReact}
                </button>
            </ul>
        </div>
        </div>
);
}

export  default Header;