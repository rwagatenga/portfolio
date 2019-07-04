import React from 'react';
//import ReactDOM from 'react-dom';
import Footer from './Footer';

class Projects extends React.Component{
  render(){
    const Center = {

      float: 'center',
      marginLeft: 250,
      width: 250,
  };
  const pStyle = {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  };
  const pStyles = {
    color: 'black',
    marginTop: 60,
    fontSize: 17,
    fontWeight: 'bold',
    backgroundImage: 'url(/images/bk.jpg)',
  };
    return(
      <div className="Contents">
      <div className="Left">
      <h2>Geolocation Web App</h2><br/><br/><br/>
      <p className="Paragraph" style={pStyle}>
      I've made Geolocation web based app where I link techncian and customers
      according to their location in order to provide good services<a href=""></a>
      </p>
      </div>
      <div className="Center" style={Center}>
      <h2>Water Mobile App</h2><br/><br/><br/><br/><br/>
      <p style={pStyles}>
      I've made a mobile that count M<sup>3</sup> used by clients in M<sup>3</sup>and after
      send an SMS to the customers of how much will be payed according to they used 
      </p>
      </div>
      <div className="Right">
      <h2>Web Blog News</h2><br/><br/><br/>
      <p className="Paragraph" style={pStyle}>
      I created also a web blog news that is for posting news and read them which is related to 
      sport and health just for advising people for that it was my first project I've been realized
      </p>
      </div>

      <div style={{marginTop: 200,}}>
       <Footer />
       </div>
      </div>
      );
  }
}
export default Projects;