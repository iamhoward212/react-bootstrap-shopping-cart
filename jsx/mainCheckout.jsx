import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import React from "react";  

class MainCheckout extends React.Component{  
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>maincontent</h1>
               <h1><Link to="/">Home</Link></h1> 
            </div>
        )
    }
}
export default MainCheckout;