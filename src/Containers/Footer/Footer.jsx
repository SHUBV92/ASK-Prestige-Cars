import React from "react";
import { Container } from "./Footer.styles.jsx";
import Maps from "../Maps/Maps.jsx";

const Footer = () => {
  return (
    <Container>
        <hr />
      
      <h3>Book</h3>
      <h3>Services</h3>
      <h3>FAQ</h3>
      <h4>Address</h4>
      <h5>Rainham Road, RM13 7SD </h5>
      
      <Maps />

    </Container>
  );
};

export default Footer;
