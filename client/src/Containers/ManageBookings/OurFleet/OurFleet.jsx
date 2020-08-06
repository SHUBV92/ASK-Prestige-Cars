// Packages
import React from "react";

// Styling
import { Carousel } from "react-bootstrap";
import { Container } from "./OurFleet.styles";

// ChooseCar Component
const OurFleet = () => {

  // Collection of Fleet Information 
  const carCollection = [
    {
      name: "Saloon",
      passenger: 4,
      luggage: 2,
      description:
        "Our Executive range of cars that are perfect for chauffering and getting you to your destination with ease and comfort",
      image: "saloon.png",
    },
    {
      name: "Executive",
      passenger: 4,
      luggage: 3,
      description:
        "Our Executive range of cars that are perfect for chauffering and getting you to your destination with ease and comfort",
      image: "executive.png",
    },
    {
      name: "MPV",
      passenger: 6,
      luggage: 3,
      description:
        "Our Executive range of cars that are perfect for chauffering and getting you to your destination with ease and comfort",
      image: "mpv.png",
    },
    {
      name: "Estate",
      passenger: 4,
      luggage: 4,
      description:
        "Our Executive range of cars that are perfect for chauffering and getting you to your destination with ease and comfort",
      image: "mpv.png",
    },
  ];

  return (
    <Container id="cars">
      <div className="header">
        <h1>Our Cars</h1>
      </div>

      <Carousel className="carousel">
        {carCollection.map((car) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../../assets/${car.image}`)}
              alt=""
            />
            <div className="carinfo">
              <Carousel.Caption>
                <span className="Passenger">
                  Passenger {car.passenger}
                  Luggage {car.luggage}
                </span>
                <p>{car.description}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OurFleet;
