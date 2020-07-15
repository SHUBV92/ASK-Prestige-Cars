import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav
} from "react-bootstrap";
import { Container, Img, NavLinks } from './Navbar.styles'

const NavToolBar = () => (
<Container>
  <Navbar bg="light" expand="lg">
    <Nav.Link href="/home">
    <Img src={require(`../../assets/logo.jpeg`)} />
    </Nav.Link>
    <NavLinks>
    <Navbar.Brand href="#home">
        ASK Prestige
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/home">Business</Nav.Link>
        <Nav.Link href="/home">Services</Nav.Link>
        <Nav.Link href="/home">About</Nav.Link>
        <Nav.Link href="/home">Contact Us</Nav.Link>


        
        {/* <NavDropdown
          title="Dropdown"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/skills">
            Skills
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="/bookings" >
          <h3>Make Booking</h3>
          </Nav.Link>
      </Nav>
     
    </Navbar.Collapse>
    </NavLinks>
  </Navbar>
  </Container>
);

export default NavToolBar;
