import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import {Link} from 'react-router';
import logo from './logo.svg';
import './App.css';

import Menu from './Menu';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buyItem: ['Fred', 'Joel', 'Peace'],
      title: 'Hello Mr Fred',
      message: '',
    }
    //this.addItem = this.addItem.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const {buyItem} = this.state;
    const newItem = this.newItem.value;
    const isOnTheList = buyItem.includes(newItem);

    if (isOnTheList) {
      this.setState({
        messege: 'This is Item is already on the List',
      })
    }

    else{
      newItem !== '' && this.setState({
        buyItem: [...this.state.buyItem, newItem],
        messege:'',
      })
    }

    // this.setState({
    //   buyItem: [...this.state.buyItem, newItem]
    // })
    this.addForm.reset();
  }
  removeItem(item){
     const newBuyItem = this.state.buyItem.filter(buyItem => {
       return buyItem !== item;
     });
     this.setState({
       buyItem: [...newBuyItem],
     })
  }
    render() {
      let title = this.state.title;
      const {buyItem, messege} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reac</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{title}</h1><br/>
        <form ref={input => this.addForm = input} onSubmit = {(e) => {this.addItem(e)}} >
        <input type = "text" ref= {input => this.newItem = input} /> <br/>
        <button type = "submit"> Add </button>
        <button onClick = {this.viewTodo}> View </button>
        </form>
        {
          messege !== '' && <p className = "messege text-danger">{messege}</p>
        }
        <table className = "table table-responsive">
        <thead>
        <th>#</th>
        <th>Items</th>
        <th>Action</th>
        </thead>
        <tbody>
        {
          buyItem.map(item => {
            return (
            <tr key = {item}>
            <th scope = "row"></th>
            <td>{item}</td>
            <td>
            <button type = "button" onClick = {(e) => this.removeItem(item)} className = "btn btn-danger">Remove</button>
            </td>
            </tr>
            )

          })
        }
        </tbody>
        </table>
        <Menu/>
      </div>
    );
  }
}

// class Header extends React.Component{
//   render(){
//     return(
//     <div>
//     <h2>This Header Component</h2>
//     </div>
//     );
//   }
// }

// class Contents extends React.Component{
//   render(){
//     return(
//     <div>
//     <h2>This is Contents Component</h2>
//     </div>
//     );
//   }
// }

// class TableRow extends React.Component{
//   render(){
//     return(
//       <tr>
//       <td>{this.props.data.id}</td>
//       <td>{this.props.data.Name}</td>
//       <td></td>
//       </tr>
// <table>
        // <tbody>
        // {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
        // </tbody>
        // </table>
//       );
//   }
// }

export default App;
//-------------------------------------
import React from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
class Menu extends React.Component{
  render(){
    return(
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
      );
  }
}
export default Menu;