import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);
         this.state = {
            userInfo: {
                login: "Dummy",
                location: "Default",
                
               },
            // count: 0,
            // count2: 2,
        };
        // console.log(this.props.name + "Child  Constrctor");
    }
    async componentDidMount() {
        // console.log(this.props.name + "Child Component Did Mount");
         const data = await fetch("https://api.github.com/users/kinjal-hub");
        const json = await data.json();
         
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentDidUpdate () {
        console.log("Component  did  update");
    }

    componentWillUnmount() {
        console.log("component  will unmount");
    }
   render() {
    // const { name, location} = this.props;
    // const { count } = this.state;
      
    const { name, location } = this.state.userInfo;

    // console.log(this.props.name + "Child render")
     return (
         <div className="user-card">
            {/* <h1>Count: {count}</h1> */}
            {/* <button onClick={() => {
                // Never Update State Variables Directly
                this.setState({
                    count: this.state.count + 1, 
                })
            }}>Count Increase</button> */}
            
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>contact: @Sanjana15</h4>
        </div>
     );
   }
}

export default UserClass;