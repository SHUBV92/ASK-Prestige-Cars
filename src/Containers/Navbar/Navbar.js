import React from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav
} from "react-bootstrap";

const NavToolBar = () => (
  // let navRoutes = [
  //   "SUMMARY",
  //   "SKILLS",
  //   "PROJECTS",
  //   "ARTICLES",
  //   "GET IN TOUCH"
  // ];

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
        ASK Prestige
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#link">Make Booking</Nav.Link>
        <Nav.Link href="#link">Sign In</Nav.Link>
        <Nav.Link href="#link">Make Booking</Nav.Link>
        
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
  </Navbar>
);

export default NavToolBar;
