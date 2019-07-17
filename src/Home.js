import React from 'react';
//import ReactDOM from 'react-dom';
import { CardGroup, Card, } from 'react-bootstrap';
import Fred from './images/fredizo.png';
import './App.css';
class Home extends React.Component{
  render(){
    return(
    <CardGroup style={{marginTop: 40}}>
      <Card style={{ border: 0}}>
        <Card.Img variant="top" src={Fred} style={{height: 500, width: 355}}/>
      </Card>
      <Card style={{ border: 0}}>
        <Card.Body>
          <Card.Title>My Portfolio</Card.Title>
          <Card.Text >
          <p className="Paragraph">
            Hello Everyone!<br/>
          My name is RWAGATENGA Fred, I live in Rwanda.<br/>
          I am a Web and Mobile App developer, This is my Portfolio I've made in React only, 
          I like to learn new technologies born everyday that can help me to
          make my stuff easly and secured.<br/>
          </p>
          <p className="Paragraph">
          I like to have a contribution in society through programming like in
          economically, making stuff easly and effeciently, securing information like transaction, managing business 
          but not only business sectors but also government sector where we can
          improve the way services offer to the people .<br/>
          </p>

          <p className="Paragraph">
          So, I may conclude that, I would like to work with different people in different area
          you can hire me as a freelancer or engage me as an employee because I'm always find where 
          I can get profits
          </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      );
  }
}
export default Home;