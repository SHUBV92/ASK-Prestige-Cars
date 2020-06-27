import React from "react";

const JourneyDetails = () => {
  return (
    <Details>
      <h2>JOURNEY DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <label>PICK UP</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          placeholder="Enter location"
        />

        <br />
        <label>DROP OFF</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
          placeholder="Enter location"
        />
      </form>
    </Details>
  );
};

export default JourneyDetails;
