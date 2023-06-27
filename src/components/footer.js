
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Footer = () => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
    return(
      
        <div>
          <footer id="footer" className="section-bg" >
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="footer-info">
                  <h4>Contact Us On</h4>
                    <div className="social-links">
                    <a href="/#" className="twitter"><img src={require('./assets/twitter.png')} alt="twitter_logo"/></a>
                    <a href="/#" className="facebook"><img src={require('./assets/facebook-app.png')}alt="facebook_logo"/></a>
                    <a href="/#" className="instagram"><img src={require('./assets/instagram.png')}alt="instagram_logo"/></a>
                    <a href="/#" className="linkedin"><img src={require('./assets/linkedin.png')} alt="linkedin_logo"/></a>
                  </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><Link to="/" onClick={scrollToTop} >Home</Link></li>
                      <li><Link to="/about"onClick={scrollToTop} >About</Link></li>
                      <li><Link to="/services"onClick={scrollToTop} >Services</Link></li>
                      <li><Link to="/gallery"onClick={scrollToTop} >Gallery</Link></li>
                      <li><Link to="/contact"onClick={scrollToTop} >Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="footer-links">
                    <h4>Address</h4>
                    <ul>
                      <li className="footer-address"><img className="footermedia" src={require('./assets/location.png')} alt="address"/>
                    <span>
                      Arena-3, 3rd Floor,
                    STPI ELITE Building,<br/>
                    Gothapatna, Khordha,<br/>
                    Odisha - 751003.  </span></li>
                      <li><p className="vvv"><img className="footermedia" src={require('./assets/phone-call.png')} alt="phone-call"/><a href="tel:PHONE_NUM"> +91 9777403555</a><br/></p></li>
                      <li><p className="vvv" id="mail-end"><img className="footermedia" src={require('./assets/mail.png')} alt="mail"/><a href="mailto:info@quotus.co.in">info@quotus.co.in</a><br/></p></li>
                    </ul>             
                  </div>
                </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Quotus Software Solutions</strong>.All Rights Reserved
      </div>
    </div>
  </footer>
  <Button id="top-bottom"onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}>
     <FaArrowCircleUp  />
    </Button>
  </div>
    )
}
export default Footer;