// Packages
import React from "react";

import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import {
  Container,
  Img,
  NavLinks,
} from "./Navbar.styles";

import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

const NavToolBar = () => (
  <Container>
    <Navbar bg="light" expand="lg" className="navbar">
      <div onClick={()=> scroll.scrollToTop()}>
      {/* <Nav.Link href="/home"> */}
        <Img 
          src={require(`../../assets/logo.jpeg`)}
        />
      {/* </Nav.Link> */}
      </div>
      <NavLinks>
        
        <Navbar.Brand href="#home">
          ASK Prestige Cars
          <h3>Our Sevice Your Experience</h3>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* About */}
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="A bout"
              activClass="some-active-class"
            >
              <Nav.Link href="/home">
                About
              </Nav.Link>
            </Link>

            {/* Services */}
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="A bout"
              activClass="some-active-class"
            >
              <Nav.Link href="/home">
                Services
              </Nav.Link>
            </Link>

            {/* Our Cars */}
            <Link
              to="cars"
              spy={true}
              smooth={true}
              duration={500}
              className="About"
              activClass="some-active-class"
            >
              <Nav.Link href="/home">
                Our Cars
              </Nav.Link>
            </Link>

            {/* <Nav.Link href="/home">
              Contact Us
            </Nav.Link> */}

            <Nav.Link href="/bookings">
              <h3>Make Booking</h3>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </NavLinks>
    </Navbar>
  </Container>
);

export default NavToolBar;

{
  /* <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/signin">
              Sign In
            </Nav.Link> 
          
           <Nav.Link href="/home">
              <Link
                to="/"
                spy={true}
                smooth={true}
                duration={500}
                className="About"
                activClass="some-active-class"
              >
                About
              </Link>
            </Nav.Link>
          
          
          
          */
}
