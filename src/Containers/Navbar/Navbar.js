import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav
} from "react-bootstrap";
import { Img, NavLinks } from './Navbar.styles'

const NavToolBar = () => (
  // let navRoutes = [
  //   "SUMMARY",
  //   "SKILLS",
  //   "PROJECTS",
  //   "ARTICLES",
  //   "GET IN TOUCH"
  // ];
  <Navbar bg="light" expand="lg">
    <Img src={require(`../../assets/logo.jpeg`)} />
    <NavLinks>
    <Navbar.Brand href="#home">
        ASK Prestige
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
        <Nav.Link href="/bookings">Make Booking</Nav.Link>
        
        <NavDropdown
          title="Dropdown"
          id="basic-nav-dropdown"
        >
          <NavDropdown.Item href="/skills">
            Skills
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-success">
          Search
        </Button>
      </Form>
    </Navbar.Collapse>
    </NavLinks>
  </Navbar>
);

export default NavToolBar;
