import React from 'react';
//import ReactDOM from 'react-dom';
import Fred from './images/fredizo.png';
import './App.css';
import Footer from './Footer';
class Home extends React.Component{
  render(){
    return(
      <div className="contents">
      <img src={Fred} alt="fred" className="Profile" />
      <p className="Paragraph">
      Hello Everyone!<br/>
      My name is RWAGATENGA Fred, I live in Rwanda.<br/>
      I am actually a Mobile and Web App developer, This is my Portfolio I've made in React only, 
      I'm actually like to learn new technologies born in everyhours that can help me to
      make my stuff easly and secured.<br/>
      </p>
      <p className="Paragraph">
      I really like programming that can change society in everything like improving thier
      economically, making things easly, secured their stuff during transaction managing
      thier business but not only business sectors but also government sector we can
      improve the way they offer different services to thier people.<br/>
      </p>

      <p className="Paragraph">
      So, I may conclude that, I would like to work with different people and different area
      you can hire me as a freelancer or engage me as an employee because I'm always find where 
      I can get profits
      </p>

      <div style={{marginTop: 10, fontSize: 17}}>
       <Footer />
       </div>
      </div>
      );
  }
}
export default Home;