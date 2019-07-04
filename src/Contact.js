import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import * as emailjs from 'emailjs-com';
import Footer from './Footer';
class Contact extends React.Component{
	constructor(props){
    super(props);
    this.state = {
    	first: 'Fred',
    	FirstComment: 'this boy is very a hard worker because he always work hard to achieve his goal in every aspect of programming so I would like him to welcome in Silicon Valley in US',
    	firsts: 'Gradhir Ramvir',
    	FirstComments: 'Hey Can you just give me this Project for 500$?',
    	messege:'',
    }
    //this.addItem = this.addItem.bind(this);
  };
  addItem(e){
    e.preventDefault();
    const fullNames = this.fullNames.value;
    const Email = this.Email.value;
    const Comment = this.Comment.value;
    //const isOnTheList = buyItem.includes(newItem);

    if (fullNames === ''){//} || Email === '' || Comment === '') {
      this.setState({
        messege: 'Full Names Field is Empty',
      })
    }
    else if (Email === '') {
    	this.setState({
        messege: 'This E-mail Field is Empty',
      })
    }
    else if (Comment === '') {
    	this.setState({
        messege: 'This Comment Field is Empty',
      })
    }

    else{
      // newItem !== '' && this.setState({
      //   buyItem: [...this.state.buyItem, newItem],
      //   messege:'',
      // })
      // var templateParams = {
      //   to_name: 'fredrwagatenga@gmail.com',
      //   from_name: this.state.Email,
      //   message_html: this.state.Comment,
      // };
      var template_params = {
         "reply_to":  Email , 
         "from_name": fullNames+ "(" +Email + ")",
         "to_name": "fredrwagatenga@gmail.com",
         "message_html": Comment
      };

      var service_id = "gmail";
      var template_id = "template_FFDWVKqT";
      var userID = "user_91MXxTM9KMH19V4pcvlMy";
      emailjs.send(service_id, template_id, template_params, userID)
      .then(function(response) {
        alert("Your Message Sent Successfully");
      }, function(error){
        alert(error);
      })
      this.setState({fullNames, Email, Comment, messege:''})
    }

    // this.setState({
    //   buyItem: [...this.state.buyItem, newItem]
    // })
    this.addForm.reset();
  }
  render(){
  	const pStyles = {
		color: 'black',
		marginTop: 70,
		margin: -1,
		fontSize: 17,
		fontWeight: 'bold',
		backgroundImage: 'url(/images/bk.jpg)',
	};
	const pComment = {
		fontSize: 19,
		margin: 7,
	}
    return(
      <div className="Contents" style={{height:'auto'}}>
      <form ref={input => this.addForm = input} onSubmit = {(e) => {this.addItem(e)}} className="FormInputs">
      <label className="Labels">Names: </label><br/>
        <input type = "text" ref= {input => this.fullNames = input} className="Inputs" placeholder="Full Names"/> <br/>
        
        <label className="Labels">E-mail: </label><br/>
        <input type = "text" ref= {input => this.Email = input} className="Inputs" placeholder="email@domainName"/> <br/>
        <label className="Labels">Message: </label><br/>
        <textarea type = "text" ref= {input => this.Comment = input} className="Comment" placeholder="Your Request"> </textarea> <br/>
       <button type = "submit" className="Add"> Send </button>
       </form>
       <div className="LeftSide">
       {
          this.state.messege !== '' && <p style = {pStyles}>{this.state.messege}</p>
        }
        <p style={pStyles}>{this.state.first}</p>
        <p style={pComment}>{this.state.FirstComment}</p>
        <p style={pStyles}>{this.state.firsts}</p>
        <p style={pComment}>{this.state.FirstComments}</p>
       <p style={pStyles}>{this.state.fullNames}</p>
       <p style={pComment}>{this.state.Comment}</p>
       </div>
       <div style={{marginTop: 220,}}>
       <Footer />
       </div>
       </div>
      );
  }
}
export default Contact;