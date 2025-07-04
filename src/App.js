import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const  App = () => {
    const  Header = () => {
return(
    <div  className="header">
        <div  className="logo-container">
        <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6M4EYn2PYDp9tiEacJsZMJXIsU7vWqUi7Aw&s"/> alt="/logo"
        </div>
        <div  className="nav-items">
            <ul>
                <li>Home</li>
                <li>About  Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
);
}
return(
    <div className="app">
       <Header />
    </div>
);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
export default App;


    
