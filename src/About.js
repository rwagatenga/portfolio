import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Footer from './Footer';
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
      I have Three ( 3 ) Years of experience  in Web Application Development and also 
      Blog creations using Php Framework called Laravel since end of 2016.
      </p>
      </div>
      <div className="Center" style={Center}>
      <h2>Mobile Application</h2><br/><br/><br/><br/><br/>
      <p style={pStyles}>
      I have one ( 1 ) Year of experience in Mobile Application using JavaScript Hybrid called
       React Native by accessing API since middle of 2018.
      </p>
      </div>
      <div className="Right">
      <h2>Technologies Used</h2><br/><br/><br/>
      <p className="Paragraph" style={pStyle}>
      Other Technologies I have used are C, C++ during Academic year, others are like Wordpress
      for simplifying creation of different blogs and simple E-commerce Websites.
      </p>
      </div>

      <div style={{marginTop: 200,}}>
       <Footer />
       </div>
      </div>
      );
  }
}
export default About;