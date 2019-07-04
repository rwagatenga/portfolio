import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
class About extends React.Component{
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
      <h2>Web Application</h2><br/><br/><br/>
      <p className="Paragraph" style={pStyle}>
      I got many tasks related to different websites and web application especially
      blog and web app
      </p>
      </div>
      <div className="Center" style={Center}>
      <h2>Mobile Application</h2><br/><br/><br/><br/><br/>
      <p style={pStyles}>
      I've made different Mobile App with different companies in Rwanda but I need
      to open my programming market with different people around the world
      </p>
      </div>
      <div className="Right">
      <h2>Technologies Used</h2><br/><br/><br/>
      <p className="Paragraph" style={pStyle}>
      Mostly actually I used Laravel for most of the back-end I do and also Wordpress but for the front-end
      I use React Js during most web app I do but for Mobile app I used React Native
      </p>
      </div>
      </div>
      );
  }
}
export default About;