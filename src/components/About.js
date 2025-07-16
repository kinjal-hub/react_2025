import UserClass from "./UserClass";
import  React from "react"

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
    <div>
        <h1>About</h1>
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