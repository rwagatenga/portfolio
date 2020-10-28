import React from 'react';
//import ReactDOM from 'react-dom';
import * as emailjs from 'emailjs-com';
import { CardGroup, Card, Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import './App.css';
import Icon from './images/mobile-phone.png';
class Contact extends React.Component{
	constructor(props){
    super(props);
    this.state = {
    	fullNames: '',
      email: '',
      comment: '',
    }
    this.addItem = this.addItem.bind(this);
  };

  addItem(e){
    e.preventDefault();
    const fullNames = this.fullNames.value;
    const Email = this.Email.value;
    const Comment = this.Comment.value;
    //const isOnTheList = buyItem.includes(newItem);

    if (fullNames === '' || Email === '' || Comment === '') {
      this.setState({
        messege: 'Check if There is no Empty Field',
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
         "to_name": "Fred",
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
    return(
      <CardGroup style={{marginTop: 40}}>
      <Card>
      <Card.Body>
          <Card.Title>Contact Form</Card.Title><br/>
          <Card.Text>
        <Form ref={input => this.addForm = input} onSubmit = {(e) => {this.addItem(e)}}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label style={{fontSize: 17, fontWeight: 'bold', textAlign: 'left'}}>Full Name</Form.Label>
        {
          this.state.messege !== '' && <p style={{color:'red'}}>{this.state.messege}</p>
        }
        <Form.Control ref= {input => this.fullNames = input} style={{border: 'solid', height: 45, borderRadius: 7}} type="text" placeholder="Enter Your Full Name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <Form.Label style={{fontSize: 17, fontWeight: 'bold', textAlign: 'left'}}>Email address</Form.Label>

        <Form.Control ref= {input => this.Email = input} style={{border: 'solid', height: 45, borderRadius: 7}} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{fontSize: 17, fontWeight: 'bold', textAlign: 'left'}}>Messege</Form.Label>
          
          <Form.Control ref= {input => this.Comment = input} style={{border: 'solid', borderRadius: 7}} as="textarea" rows="4" />
        </Form.Group>
        <Button variant="outline-primary" style={{padding: 7, border: 'solid', fontColor: 'black', borderColor: 'black', borderRadius: 7, width: 100, fontWeight: 'bold', fontSize: 18}} type="submit">
          Submit
        </Button>
      </Form>
        </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ border: 0}}>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>My Social Media</Card.Title>
           <Form.Text className="text-muted" style={{textAlign: 'center', marginButtom: 30}}>
          <br/>Click on any Icon to Contact Me
          </Form.Text><br/><br/>
          <Card.Text >
         

          <p className="Paragraph" style={{textAlign: 'center'}}>
          
            <a
                href="https://github.com/rwagatenga?tab=repositories" rel="noopener noreferrer" target="_blank"
                className="github social" style={{textDecoration: 'none'}}
             >
                <FontAwesomeIcon icon={faGithub} size="2x" />
                 {/* &nbsp; Rwagatenga*/}
             </a>
             
          </p>
          <p className="Paragraph" style={{textAlign: 'center'}}>
          
            <a
                href="https://www.facebook.com/rwagatenga.fred" rel="noopener noreferrer" target="_blank"
                className="facebook social" style={{textDecoration: 'none'}}
             >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                 {/*&nbsp; Rwagatenga Fred */}
             </a>
             
          </p>
          <p className="Paragraph" style={{textAlign: 'center'}}>
          
            <a
                href="https://www.linkedin.com/in/fred-rwagatenga" rel="noopener noreferrer" target="_blank"
                className="linkedin social" style={{textDecoration: 'none'}}
             >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  {/* &nbsp; Fred Rwagatenga*/}
             </a>
             
          </p>
          <p className="Paragraph" style={{textAlign: 'center'}}>
          
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fredrwagatenga@gmail.com&su=House Rent Rwada&body=BODY&" rel="noopener noreferrer" target="_blank"
                className="googleplus social"style={{textDecoration: 'none'}}
             >
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                  {/*&nbsp; Rwagatenga Fred*/}
             </a>
              
          </p>
          <p className="Paragraph" style={{textAlign: 'center'}}>
          
            <a
                href="tel:+250781448238" rel="noopener noreferrer" target="_blank"
                className="googleplus social" style={{textDecoration: 'none'}}
             >
                <Image src={Icon} style={{width: 30,}} />
                  {/*&nbsp; +250-781-4482-382*/}
             </a>
             
          </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      );
  }
}
export default Contact;