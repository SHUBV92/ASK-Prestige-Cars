// Packages
import React from "react";
// Styling
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

// Navbar Component
const NavToolBar = () => {
  const navItems = [
    {
      name: "About",
      className: "about",
      linkToScroll: "about",
    },
    {
      name: "Services",
      className: "services",
      linkToScroll: "services",
    },
    {
      name: "Our Fleet",
      className: "cars",
      linkToScroll: "cars",
    },
    {
      name: "Contact Us",
      className: "contact",
      linkToScroll: "contact",
    },
  ];
  return (
    <Container>
      <Navbar
        bg="light"
        expand="lg"
        className="navbar"
      >
        <div onClick={() => scroll.scrollToTop()}>
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
              {navItems.map((navItem) => (
                <Link
                  to={navItem.linkToScroll}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={navItem.className}
                  activClass="some-active-class"
                >
                  <Nav.Link href="/home">
                    {navItem.name}
                  </Nav.Link>
                </Link>
              ))}
              <Nav.Link href="/bookings">
                <h3>Make Booking</h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </NavLinks>
      </Navbar>
    </Container>
  );
};

export default NavToolBar;
