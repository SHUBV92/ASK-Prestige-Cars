import React from "react";
import Card from "../../../Components/NewCard/Card";
import CarData from "../../../cars.json";

const ChooseCar = () => {
  return (
    <div>
      <h1>Choose Your Service</h1>
      {CarData.map((car) => {
        return(
        car.cars.map(item => (
           <Card 
          name={item.name} 
          image={item.image}
          />
        ))
        )
      })}
    </div>
  );
};

export default ChooseCar;
