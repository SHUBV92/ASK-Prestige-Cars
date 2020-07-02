import React from "react";
import {
  CardApp,
  Image,
  CardContainer,
} from "./Card.styles";

const Card = ({name}) => {
  return (
    <CardApp>
      <Image
        src={require(`../../assets/bmw.jpg`)}
      />
      <CardContainer>
        <h4>{name}</h4>
        <hr />
        <h5>description</h5>
      </CardContainer>
    </CardApp>
  );
};

export default Card;
