import React, { Component} from "react";
import {Container,Nav,Navbar}from 'react-bootstrap';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
      navExpanded: false
    };
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  
 handleMouseEnter = () => {
    this.setState({
      isDropdownOpen: true
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isDropdownOpen: false
    });
  }
  render() {
      const { isDropdownOpen } = this.state;
    return (
      <Navbar bg="white" variant="dark" expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="navbar-brand"><img src={require('./images/logosmall.png')} alt="quotus_logo" className="logotop"/></Link>
          </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={this.setNavClose}>
              <Link to={"/"} id="nav">Home</Link>
              <Link to={"/about"}id="nav">About</Link>
              <Link to={"/services"} id="nav">Services</Link>
              <Link to={"/team"} id="nav" >Team </Link>
              <Link to={"/gallery"} id="nav">Gallery</Link>
              <Link className="nav-item dropdown"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}style={{paddingTop: '7px',
                textDecoration: 'none'}}>
              <Link to={""}id="nav">Product</Link>
              {isDropdownOpen && (
              <div className="dropdown-content">
              <Link to={"/naturopura"} id="nav">Naturopura</Link>
              <Link to={"/techmate"} id="nav">TechMate</Link>
              <Link to={"/sap"} id="nav">Data Management</Link>
              </div>
              )}
              </Link>
              <Link to={"/contact"} id="nav">Contact</Link> 
            </Nav>          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}