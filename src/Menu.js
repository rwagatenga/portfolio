import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';

class Menu extends React.Component{
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
  }
  myFunction(){
  var x = document.getElementById("Nav-bar");
  if (x.className === "Nav-bar") {
    x.className += " responsive";
  } else {
    x.className = "Nav-bar";
  }
}
  render(){
    return(
      <div className="content">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/project">View Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="javascript:void(0);" onClick="{this.myFunction}" />
        <i class="fa fa-bars"></i>
      </div>
    </Router>
    </div>
      );
  }
}
export default Menu;