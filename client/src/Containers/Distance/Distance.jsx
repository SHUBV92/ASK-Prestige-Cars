import React, {
  useState,
  useEffect,
} from "react";

const DistanceCalculator = () => {
  const [pickUp, setPickUp] = useState();
  const [
    destination,
    setDestination,
  ] = useState();

  const handleDateChange = (event) => {
    console.log("Date: ", event.target.value);
    // setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const API_KEY =
    "AIzaSyAe2TKldSe-prHE4pkzmnfqbMNEAeBwCj4";

  const URL =
    "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyAe2TKldSe-prHE4pkzmnfqbMNEAeBwCj4";

  useEffect(() => {
    fetch(
      "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyAe2TKldSe-prHE4pkzmnfqbMNEAeBwCj4"
    )
      .then((res) => {
        console.log("res", res);
        res.json();
      })

      .then((data) => console.log("data", data));
    //   .catch((err)=> console.log(err))
  });

  return <div>Google Distance Calculator</div>;
};

export default DistanceCalculator;
