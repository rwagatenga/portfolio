import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import ResponsiveMenu from 'react-responsive-navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import { Container, Card} from 'react-bootstrap';
//import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
import Logo from './images/images.png';
import Menu from './Menu';

function App()  {
  return (
    <div className = "App">
    <Container className = "Container">
      
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title" >Fred Rwagatenga</h1>
          <Menu />
      <Card.Footer>
      <center><medium className="text-muted">&copy;&nbsp; {1900 + new Date().getYear()}{" "} Fred Rwagatenga All Rights Reserved. </medium></center>
    </Card.Footer>
    </Container>
    </div>
  );
}

export default App;
