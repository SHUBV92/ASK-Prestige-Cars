import React from "react";
import Card from "../../../Components/NewCard/Card";
import CarData from "../../../cars.json";

const ChooseCar = () => {
  return (
    <div>
      <h1>Choose Your Service</h1>
      {CarData.map((car) => {
        return <Card name={car.name} />;
      })}
    </div>
  );
};

export default ChooseCar;
