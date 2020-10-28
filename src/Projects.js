import React from 'react';
//import ReactDOM from 'react-dom';
import { CardDeck, Card, } from 'react-bootstrap';
import './App.css';
class Projects extends React.Component{
  render(){
    return([
      <CardDeck style={{marginTop: 20}}>
        <Card>
          {/*<Card.Img variant="top" src="holder.js/100px160" />*/}
          <Card.Body>
            <Card.Title>Geolocation Web App</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I've made Geolocation web based app where I link techncian and customers
              according to their location in order to provide good services
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Water Mobile App</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I've made a mobile that count M<sup>3</sup> used by clients in M<sup>3</sup>and after
              send an SMS to the customers of how much will be payed according to they used 
              </p>
            </Card.Text>
          </Card.Body>
          {/*<Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>*/}
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Web Blog News</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have also made a web blog news which it is related to 
              sports and health for advising people and update them for thier lives, it was my first project.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>,
      <CardDeck style={{marginTop: 20}}>
        <Card>
          <Card.Body>
            <Card.Title>Real Estate Web App</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have also created a web Application for Real Estate System where you can find House, Office,
              Appartments for Rent, for Buy or for Sale in Rwanda
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>CST Paperless Web App</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have created a web app system of my college College of Science and Technology,
              that manage, hostels, library, marks and final year project management.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Service for Home</Card.Title>
            <Card.Text>
              <p className="Paragraph">
              I have created web and mobile app for service home derivery where client can request a service like massage, garden cleaning etc..
              and system find nearest provider that can provides or deriver a service requested by client.
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    ]);
  }
}
export default Projects;