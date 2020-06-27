import React from "react";
import { Card, Button } from "react-bootstrap";

const CardView = () => (
  <div>
    {/* <Image>
            <img 
                src={require(`../../assets/ /${image}`)}

        </Image> */}

    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Name: Shubs</Card.Title>
        <Card.Text>
          Travel Date: 25th Aug - 25th Sep 2020
        </Card.Text>
        <Button variant="primary">
          Manage Booking
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default CardView;
