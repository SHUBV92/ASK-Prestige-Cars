import React from "react";
import {
  Container,
  TextBox,
} from "./Business.styles.jsx";
import { Carousel } from "react-bootstrap";

const Business = () => {
  return (
    <Container>
      <h3>Our Services</h3>
      <p>Executive minicab service</p>
      {/* <hr />
        <img src={require(`../../assets/Lexus.jpeg`)} />
        <h3>WORK WITH US</h3>
        <hr />
        <img src={require(`../../assets/GalaxySunset.jpg`)} />
        <h3>OUR SERVICES</h3>
        <hr /> */}
      {/* <img
        src={require(`../../assets/Galaxy.jpeg`)}
      /> */}

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/Lexus.jpeg`)}
            alt="First slide"
          />
          <Carousel.Caption>
            <TextBox>
              <h3>MINICABS</h3>
              <p>
                Nulla vitae elit libero, a
                pharetra augue mollis interdum.
              </p>
            </TextBox>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/GalaxySunset.jpg`)}
            alt="Third slide"
          />

          <Carousel.Caption>
            <TextBox>
              <h3>CHAUFFERING</h3>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </TextBox>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../assets/Galaxy.jpeg`)}
            alt="Third slide"
          />

          <Carousel.Caption>
            <TextBox>
              <h3>AIRPORT TRANSFERS</h3>
              <p>
                Praesent commodo cursus magna, vel
                scelerisque nisl consectetur.
              </p>
            </TextBox>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Business;
