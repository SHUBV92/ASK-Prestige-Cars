import React from "react";
import CardView from "../../Components/Card/Card.jsx";

const ManageBookings = () => {
  const handlechange = (event) => {};

  return (
    <div>
      <h1>Make a Booking</h1>
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />

        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="last"
          placeholder="Last Name"
        />

        <br />
        <label>Date</label>
        <input
          type="date"
          name="date"
          placeholder="Enter your dates"
        />
      </form>

      <CardView />
    </div>
  );
};

export default ManageBookings;
