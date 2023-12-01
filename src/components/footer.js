
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
const Footer = () => {
  const [visible, setVisible] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };
   const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

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
                  <h4>Office Location</h4>
                    <ul style={{paddingLeft:'0'}}>
                      <li className="footer-address">
                        <p className="vvv"><span>Arena-3, 3rd Floor, <br/>STPI ELITE Building, Gothapatna,<br/> Khordha, Odisha - 751003</span></p>
                    
                    </li>
                  </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
                      <li><Link to="/about"onClick={scrollToTop}>About</Link></li>
                      <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
                      <li><Link to="/team" onClick={scrollToTop}>Team</Link></li>
                      <li><Link to="/gallery"onClick={scrollToTop}>Gallery</Link></li>
                      <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                      <h4 style={{marginTop:'8px'}}>Product</h4>
                      <li><Link to="/naturopura"onClick={scrollToTop}>Naturopura</Link></li>
                      <li><Link to="/techmate" onClick={scrollToTop}>TechMate</Link></li>
                      <li><Link to="/sap"onClick={scrollToTop}>Data Management</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4">
                <div className="footer-links">
                    <h4>Contact us</h4>
                    <ul>
                    <li><p className="vvv"><span>Mobile :</span><a href= "tel:+91 9777403555">+91 9777403555</a><br/></p></li>
                    <li><p className="vvv" id="mail-end"><span>Mail :</span><a href="mailto:info@quotus.co.in">info@quotus.co.in</a><br/></p></li>
                    </ul>             
                  </div>
                </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">&copy; Copyright <strong>Quotus Software Solutions</strong>. All Rights Reserved</div>
    </div>
  </footer>
  <Button id="top-bottom"onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
    <FaArrowCircleUp/>
  </Button>
  </div>
    )
}
export default Footer;