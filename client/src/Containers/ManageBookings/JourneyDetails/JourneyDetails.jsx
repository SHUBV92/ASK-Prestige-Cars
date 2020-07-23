import React from "react";
import {Container} from "./JourneyDetails.styles"

const JourneyDetails = () => {
  return (
    <Container>
      <h2>JOURNEY DETAILS</h2>
      <form >
      {/* onSubmit={handleSubmit}> */}
        <label>PICK UP</label>
        <input
          type="text"
          // value={name}
          // onChange={handleNameChange}
          name="name"
          placeholder="Enter location"
        />

        <br />
        <label>DROP OFF</label>
        <input
          type="text"
          // value={name}
          // onChange={handleNameChange}
          name="name"
          placeholder="Enter location"
        />
      </form>
    </Container>
  );
};

export default JourneyDetails;
