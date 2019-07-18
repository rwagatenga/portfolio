import React from 'react';
import { CardDeck, Card, } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import './App.css';
class About extends React.Component{
  render(){
    return(
    	<CardDeck style={{marginTop: 40}}>
        <Card>
          {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
          <Card.Body>
            <Card.Title>Web Application</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have Three ( 3 ) Years of experience  in Web Application Development and also 
              Blog creations using Php Framework called Laravel since end of 2016.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Mobile Application</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have one ( 1 ) Year of experience in Mobile Application using JavaScript Hybrid called
               React Native by accessing API since middle of 2018.
              </p>
            </Card.Text>
          </Card.Body>
          {/*<Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>*/}
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Other Technologies</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              Other Technologies I have used are C, C++ during Academic year, others are like Wordpress known
              as CMS for simplifying creation of different blogs and simple E-commerce Websites.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      );
  }
}
export default About;