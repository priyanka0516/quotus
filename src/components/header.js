import React, { Component} from "react";
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";

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
              {/*              
              <Link id="nav" className="nav-item dropdown"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}style={{paddingTop: '7px',
                textDecoration: 'none'}}>Product
              {isDropdownOpen && (
              <div className="dropdown-content">
              <Link to={"/naturopura"} id="nav">Naturopura</Link>
              <Link to={"/techmate"} id="nav">TechMate</Link>
              <Link to={"/sap"} id="nav">Data Management</Link>
              </div>
              )}
            </Link> */}
            <NavDropdown title="Product" id="basic-nav-dropdown">
               {/* <div className="dropdown">
            <button onClick={this.toggleDropdown}>Dropdown</button>
            <div className={`dropdown-content ${dropdownVisible ? 'show' : ''}`}>
              <a  href="/naturopura">Naturopura</a>
              <a href="/techmate">TechMate</a>
              <a href="/sap">Data Management</a>
            </div>
          </div> */}
          <NavDropdown.Item href="/naturopura">Naturopura</NavDropdown.Item>
          <NavDropdown.Item href="/techmate">TechMate</NavDropdown.Item>
          <NavDropdown.Item href="/sap">Data Management</NavDropdown.Item>
          </NavDropdown>
          <Nav onClick={this.setNavClose}>
            <Link to={"/contact"} id="nav">Contact</Link> 
          </Nav>
            {/* <Dropdown
            show={isDropdownOpen}
            onToggle={this.toggleDropdown}
            alignRight>
            <Dropdown.Toggle as={Button} onClick={this.toggleDropdown}>
              Product
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/naturopura">Naturopura</Dropdown.Item>
              <Dropdown.Item href="/techmate">TechMate</Dropdown.Item>
              <Dropdown.Item href="/sap">Data Management</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}