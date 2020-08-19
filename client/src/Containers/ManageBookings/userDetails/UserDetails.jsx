import React, {useState} from "react";
import {Container} from "./UserDetails.styles"

const UserDetails = () => {

  const [showResults, setShowResults] = useState(false)

  const onClicks = () => setShowResults(true);

  return (
    <Container>
    <h4 onClick={onClicks}>User Details</h4>
    {showResults ? (
      <form >
      {/* onSubmit={handleSubmit}> */}
        {/* <label>Name</label> */}
        <input
          type="text"
          // value={name}
          // onChange={handleNameChange}
          name="name"
          placeholder="First Name"
        />

        <br />
        {/* <label>DROP OFF</label> */}
        <input
          type="text"
          // value={name}
          // onChange={handleNameChange}
          name="name"
          placeholder="Last Name"
        />
      </form> 
    ): null}
    </Container>
  );
};

export default UserDetails;
