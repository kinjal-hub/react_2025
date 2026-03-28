import UserClass from "./UserClass";
import  React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor (props) {
      super(props);
      

    console.log("parent Constructor");
    
    }
      componentDidMount() {
        // console.log("parent Component Did Mount");

       
    }
    render() {
      // console.log("Parent render");
       return(
    <div className="p-4 md:p-8 lg:p-12 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">About class Component</h1>
        <div>
          <div className="bg-gray-100 p-4 rounded-lg mb-6"></div>
          loggedIn   User
          <UserContext.Consumer>
              {({loggedInUser}) => <h1 className="text=xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This  is  Namaste React  web  series...</h2>
        <UserClass name={"first"} location={"Ahmedabad (class)"}/>
        
    </div>
      );
    }
};

export default About;

/* parent constructor
   parent render

    - first constrctor
    - first render

    - second  constructor
    - second  rendor
    // dom Updated - in Single  batch
    -first componentdid Mount
    -second componentdid Mount

  parent componentDid Mount */