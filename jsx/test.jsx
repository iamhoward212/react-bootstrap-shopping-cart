import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import App from "./main.jsx"
import TestCheckout from "./testCheckout.jsx"
import Header from "./header.jsx"

class BasicExample extends React.Component{  
  constructor(props){
    super(props)
    this.state = {
      price: 100, 
      num:0
      };
  }
  handler(){
    let num=this.state.num;
       num=num+1;
         this.setState({num:num})
  }
  render(){
    return (
      <Router>
        <div className="router">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home 
              price={this.state.price}
              handler={this.handler.bind(this)}
              num={this.state.num}
              />
            </Route>
            <Route path="/about">
              <About 
              price={this.state.price}
              num={this.state.num}
              />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
class Home extends React.Component{  
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="home">
      
      <h2>Home</h2>
        <h2>{this.props.num}</h2>
      <button 
          type="button" 
          onClick={this.props.handler}
      > add</button>
    </div>
    );
  }
}
class About extends React.Component{  
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="about">
        <h2>About</h2>
        <h2>{this.props.num}</h2>
        {/* <TestCheckout/><br/> */}
      </div>
    );
  }
}
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
    </div>
  );
}
ReactDOM.render(<BasicExample/>,document.getElementById("root"))