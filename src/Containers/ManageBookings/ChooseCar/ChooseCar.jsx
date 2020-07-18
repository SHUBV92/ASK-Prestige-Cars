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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/saloon.png`)}
            alt=""
          />
          <Carousel.Caption>
            <h3></h3>
            {/* <p>
                  Nulla vitae elit libero, a
                  pharetra augue mollis interdum.
                </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/executive.png`)}
            alt=""
          />

          <Carousel.Caption>
            <h3></h3>
            {/* <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../../../assets/mpv.png`)}
            alt=""
          />

          <Carousel.Caption>
            <h3></h3>
            {/* <p>
                  Praesent commodo cursus magna,
                  vel scelerisque nisl
                  consectetur.
                </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="carinfo">
        <span className="Passenger">
          Pasenger 4 Luggage 4
        </span>
        <p>
          Our Executive range of cars that are
          perfect for chauferring and getting you
          to your detination with ease and comfort
        </p>
      </div>

      {/* //  <Card */}
      {/* // name={item.name} */}
      {/* // image={item.image} */}
      {/* // /> */}
      {/* // )); */}
      {/* // })} */}
    </Container>
  );
};

export default ChooseCar;
