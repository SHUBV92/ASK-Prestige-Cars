import React from "react";
import { Card, Button } from "react-bootstrap";

const CardView = (props) => (
  <div>
    {/* <Image>
            <img 
                src={require(`../../assets/ /${image}`)}

        </Image> */}
    {console.log("Props", props)}


    <Card>
      <Card.Header>Bookings</Card.Header>
      <Card.Body>
        <Card.Title>Name: {props.booking.name}</Card.Title>
        <Card.Text>
          Travel Date: {props.booking.date}
        </Card.Text>
        <Button variant="primary">
          Manage Booking
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default CardView;
