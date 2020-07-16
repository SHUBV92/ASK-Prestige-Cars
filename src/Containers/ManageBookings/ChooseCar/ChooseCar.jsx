import React from "react";
import Card from "../../../Components/NewCard/Card";
import CarData from "../../../cars.json";
import { Carousel } from "react-bootstrap";

const ChooseCar = () => {
  return (
    <div id="cars">
      <h1>Our Cars</h1>
      {/* {CarData.map((car) => { */}
        {/* return car.cars.map((item) => ( */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require(`../../../assets/saloon.png`)}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
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
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
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
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                {/* <p>
                  Praesent commodo cursus magna,
                  vel scelerisque nisl
                  consectetur.
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* //  <Card */}
          {/* // name={item.name} */}
          {/* // image={item.image} */}
          {/* // /> */}
        {/* // )); */}
      {/* // })} */}
    </div>
  );
};

export default ChooseCar;
