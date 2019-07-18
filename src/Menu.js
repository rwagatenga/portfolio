import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
//import { Button } from 'reactstrap';
import {Navbar, Nav, } from 'react-bootstrap';
//import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

class Menu extends React.Component{

  render(){
    return(
      <Router>
      <Navbar bg="white" expand="lg" className="Navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{margin: 15, }}>
            <Link to="/" style={{textDecoration: 'none', margin: 15}}><span className="link">Home</span></Link>
            <Link to="/about" style={{textDecoration: 'none', margin: 15}}><span className="link">About Me</span></Link>
            <Link to="/project" style={{textDecoration: 'none', margin: 15}}><span className="link">Projects</span></Link>
            <Link to="/contact" style={{textDecoration: 'none', margin: 15}}><span className="link">Contact Me</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      );
  }
}
export default Menu;