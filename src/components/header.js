import React, { Component} from "react";
import {Container,Nav,Navbar}from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navExpanded: false
    };
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  render() {
    return (
      <Navbar bg="white" variant="dark" expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="navbar-brand">   <img src={require('./images/logosmall.png')} alt="quotus_logo" className="logotop"/></Link>
          </Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={this.setNavClose}>
              <Link to={"/"} id="nav">Home</Link>
              <Link to={"/about"}id="nav">About</Link>
              <Link to={"/services"} id="nav">Services</Link>
              <Link to={"/team"} id="nav">Team</Link>
              <Link to={"/gallery"} id="nav">Gallery</Link>
              <Link to={"/contact"} id="nav">Contact</Link>
              <Link to={"/naturopura"} id="nav">Naturopura</Link>
              <Link to={"/ai"} id="nav">TechMate</Link>
              <Link to={"/sap"} id="nav">SAP</Link>
              {/* <Link to={"/cardanopython"}id="nav">PyCardano</Link> */}
            </Nav>          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}