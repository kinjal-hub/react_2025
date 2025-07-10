import { useState } from "react";

const  Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login"); 
    return(
    <div  className="header">
        <div  className="logo-container">
        <img alt="/logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" />
        </div>
        <div  className="nav-items">
            <ul>
                <li>Home</li>
                <li>About  Us</li>
                <li>Contact Us</li>
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