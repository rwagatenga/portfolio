import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import {Link} from 'react-router';
//import logo from './logo.svg';
import Logo from './images/images.png';
import './App.css';

import Menu from './Menu';

class App extends Component {

  
    render() {
      
    return (
      <div className="App">
      <div className = "Content">
      <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fred Rwagatenga</h1>
        </header>
        <div className="Nav-bar">
        <Menu/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
