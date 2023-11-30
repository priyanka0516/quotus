import React,{Component}from "react";
import Iframe from "react-iframe";
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      this.setState({fields:fields});
      alert("Form submitted");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter valid mobile no.";
      }
    }

    // if (!fields["password"]) {
    //   formIsValid = false;
    //   errors["password"] = "*Please enter your password.";
    // }

    // if (typeof fields["password"] !== "undefined") {
    //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //     formIsValid = false;
    //     errors["password"] = "*Please enter secure and strong password.";
    //   }
    // }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
    <>
    <div className="contactarea">
      <div className="section-intro">
        <h2 className="section-intro-title">Contact Us</h2>
      </div>     
    </div> 
    <div className="contact-address-area">
      <div className="container">
        <div className="row">
          <div className="sec-title-style1 text-center max-width">
            {/* <div class="title">Contact Us</div>*/}
            <div className="contact-text"><div className="decor-left"><span></span></div><p>Quick Contact</p><div className="decor-right"><span></span></div></div>
              <div className="bottom-text">
                <p>We're here to help! Tell us what you're looking for and we'll get you connected to the right people.</p>
              </div>
          </div>
        </div> 
      </div>
    </div>  
    <div className="adress">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <ul>
            <li className="contact-loop"><img src={require('./../images/location-pin.png')} alt="location-icon" className="bounce"/></li>
            <li className="contact-loop"><p className="contact-bold">Visit us</p></li>
            <li className="contact-loop"><span className="adrs">Arena-3, 3rd Floor, STPI ELITE Building,<br/>Gothapatna, Khordha,<br/>Odisha - 751003.</span></li>
          </ul>  
        </div>
        <div className="col-md-4">
        <ul>
          <li className="contact-loop"><img className="bounce" src={require('./../images/phone.png')} alt="phone-icon"/></li>
          <li className="contact-loop"><p className="contact-bold">Call Here</p></li>
          <li className="contact-loop"><span className="adrs"><a href="tel:+91 9777403555"className="adrs"> +91 9777403555</a></span></li>
        </ul>
        </div>
        <div className="col-md-4">
        <ul>
          <li className="contact-loop"><img className="bounce" src={require('./../images/gmail.png')} alt="gmail-icon"/></li>
          <li className="contact-loop"><p className="contact-bold">Mail Here</p></li>
          <li className="contact-loop"><a href="mailto:info@quotus.co.in" className="adrs">info@quotus.co.in</a></li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    <div className="section" id="contact-us">
      <div className="container">
        <div className="row">
          <h1 className="map-heading">Visit Us</h1>
            <div className="main-heading-domain-border-1 text-center">
              <div></div>
              <div></div>
            </div> 
          <p className="contact-headline">We are here to help you so, visit us here.</p>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div id="map">
              <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.188577567174!2d85.7408903143954!3d20.29246011788201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907e655555555%3A0x3f6fe26d44d5028b!2sQUOTUS%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1669873461046!5m2!1sen!2sin"      
              width="100%"
              id="myId"
              height="500px"
              className="myClassname"/>
            </div>
          </div>         
          </div>
        </div>
    </div>
    </>
    );
  }
}
export default Contact;