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
  ToastBody,
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
      linkToScroll: "about",
    },
    {
      name: "Services",
      linkToScroll: "services",
    },
    {
      name: "Our Fleet",
      linkToScroll: "cars",
    },
    {
      name: "Contact Us",
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
          <Img
            src={require(`../../assets/logo.jpeg`)}
          />
        </div>
        <NavLinks>
          <Navbar.Brand href="#home">
            ASK Prestige Cars
            <h3>Our Sevice Your Experience</h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {navItems.map((item) => (
                <Link
                  to={item.linkToScroll}
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="some-active-class"
                >
                  <Nav.Link href="/home">
                    {item.name}
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

// TO-DO
// - Remove array of navbar items along with map fn
// - Create Link component with name/scroll props
// - REMOVE CLASSNAMES BITCH