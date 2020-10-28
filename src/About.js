import React from 'react';
import { CardDeck, Card, } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import './App.css';
class About extends React.Component{
  render(){
    return([
      	<CardDeck style={{marginTop: 20}}>
          <Card>
            {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
            <Card.Body>
              <Card.Title>Web Application</Card.Title>
              <Card.Text>
                <p className="Paragraph">
                I have {1900 + new Date().getYear() - 2016 } Years of experience  in Web Application Development and also 
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
                I have {1900 + new Date().getYear() - 2018 } Years of experience in Mobile Application using JavaScript Hybrid called
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
              <Card.Title>Laravel Technology</Card.Title>
              <Card.Text>
                <p className="Paragraph">
                I have {1900 + new Date().getYear() - 2016 } Years of experience in Laravel. 
                I can create an Full Web App in Laravel or API.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>,
        <CardDeck style={{marginTop: 5}}>
          <Card>
            <Card.Body>
              <Card.Title>React Js Technology</Card.Title>
              <Card.Text>
                <p className="Paragraph">
                I have {1900 + new Date().getYear() - 2017 } Years of experience in React Js. 
                I can create an interactive UI in React either front page or dashboard.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Node Js, Express and GraphQL Technologyies</Card.Title>
              <Card.Text>
                <p className="Paragraph">
                I have {1900 + new Date().getYear() - 2019 } Years of experience in NodeJs, ExpressJs and GraphQL. 
                I can create a consumable API in NodeJs, ExpressJs and GraphQL which is very good to the upcoming System.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Database Technologyies</Card.Title>
              <Card.Text>
                <p className="Paragraph">
                I have {1900 + new Date().getYear() - 2015 } Years of experience in SQL and {1900 + new Date().getYear() - 2019 } Years of experience in MongoDB. 
                I can create an good database of any system that can work effeciently.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
    ]);
  }
}
export default About;