// Packages
import React from "react";
// Styling
import {
  Container,
  TextBox,
} from "./OurServices.styles.jsx";
import { Carousel } from "react-bootstrap";
import {
  useSpring,
  animated,
} from "react-spring";

// OurServices Component
const OurServices = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  // Collection of all the services
  const serviceCollection = [
    {
      name: "Executives",
      description:
        "Executives vehicles available for yourself",
      image: "Lexus.jpeg",
      alt: "First slide",
    },
    {
      name: "Airport Transfers",
      description:
        "Vehicles available for yourself to be transfered to an Aiport",
      image: "Galaxy.jpeg",
      alt: "Second slide",
    },
    {
      name: "Chauffering",
      description:
        "Vehicles available for yourself to be Chauffered",
      image: "GalaxySunset.jpg",
      alt: "Third slide",
    },
  ];

  return (
    <animated.div style={props}>
      <Container id="services">
        <h3>Our Services</h3>
        <p>Executive minicab service</p>

        <Carousel>
          {serviceCollection.map((service) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require(`../../assets/${service.image}`)}
                alt={service.alt}
              />
              <Carousel.Caption>
                <TextBox>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </TextBox>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </animated.div>
  );
};

export default OurServices;

// FAAAAAKIN GOOD JOB HOE BAG... nearly 10/10 when array is shifted ygm madting