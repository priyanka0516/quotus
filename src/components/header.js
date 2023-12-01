import React, { Component} from "react";
import {Container,Nav,Navbar,NavDropdown, NavItem}from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      navExpanded: false,
      dropdownVisible: false,
    };
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }
  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  
 toggleDropdown = () => {
  this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
};

  toggleDropdown = () => {
    this.setState({ dropdownVisible: !this.state.dropdownVisible });
  };

  render() {
       const { dropdownVisible } = this.state;
    return (
      <Navbar  expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
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
            </Nav> 
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="/naturopura">Naturopura</NavDropdown.Item>
              <NavDropdown.Item href="/techmate">TechMate</NavDropdown.Item>
              <NavDropdown.Item href="/sap">Data Management</NavDropdown.Item>
          </NavDropdown>
          <Nav onClick={this.setNavClose}>
            <Link to={"/contact"} id="nav">Contact</Link> 
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}