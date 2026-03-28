import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const onlineStatus = useStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-col md:flex-row justify-between bg-green-100 shadow-lg m-2 p-2 md:px-4">
      
      <div className="flex justify-between items-center">
        <img className="w-24 md:w-32" alt="Logo" src={LOGO_URL} />
        
        
        <button 
          className="md:hidden p-2 text-2xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      
      <div className={`${isMenuOpen ? "block" : "hidden"} md:flex items-center`}>
        <ul className="flex flex-col md:flex-row p-4 md:p-0 m-0 list-none items-center">
          <li className="px-2 lg:px-4 py-2 text-sm md:text-base">
            Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-2 lg:px-4 py-2">
            <Link to="/" className="hover:text-green-700">Home</Link>
          </li>
          <li className="px-2 lg:px-4 py-2">
            <Link to="/about" className="hover:text-green-700">About</Link>
          </li>
          <li className="px-2 lg:px-4 py-2">
            <Link to="/contact" className="hover:text-green-700">Contact</Link>
          </li>
          <li className="px-2 lg:px-4 py-2">
            <Link to="/grocery" className="hover:text-green-700">Grocery</Link>
          </li>
          <li className="px-2 lg:px-4 py-2 font-bold text-lg md:text-xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          
          <button
            className="px-4 py-1 mx-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
            onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
          >
            {btnNameReact}
          </button>
          
          <li className="px-2 lg:px-4 py-2 font-semibold text-gray-700 italic">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
