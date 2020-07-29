import React from "react";
import Card from "../../../Components/NewCard/Card";
import CarData from "../../../cars.json";
import { Carousel } from "react-bootstrap";
import { Container } from "./ChooseCar.styles";

const ChooseCar = () => {
  return (
    <Container id="cars">
      <div className="header">
        <h1>Our Cars</h1>
      </div>
      {/* {CarData.map((car) => { */}
      {/* return car.cars.map((item) => ( */}
      <Carousel className="carousel">
        {/* Saloon */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/saloon.png`)}
            alt=""
          />
          <div className="carinfo">
            <Carousel.Caption>
              <span className="Passenger">
                Pasenger 5 Luggage 5
              </span>
              <p>
                Our Executive range of cars that
                are perfect for chauferring and
                getting you to your detination
                with ease and comfort
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* Executive */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/executive.png`)}
            alt=""
          />
          <div className="carinfo">
            <Carousel.Caption>
              <span className="Passenger">
                Pasenger 4 Luggage 4
              </span>
              <p>
                Our Executive range of cars that
                are perfect for chauferring and
                getting you to your detination
                with ease and comfort
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        {/* MPV */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/mpv.png`)}
            alt=""
          />

          <div className="carinfo">
            <Carousel.Caption>
              <span className="Passenger">
                Pasenger 4 Luggage 4
              </span>
              <p>
                Our Executive range of cars that
                are perfect for chauferring and
                getting you to your detination
                with ease and comfort
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default ChooseCar;
