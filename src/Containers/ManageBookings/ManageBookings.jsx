import React from "react";

const ManageBookings = () => {
  
  const handlechange = event => {

  }
  
  
  return(
  <div>
    <h1>Make a Booking</h1>
    <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
      />
      
      <label>Last Name</label>
      <input
        type="text"
        name="last"
        placeholder="Last Name"
      />

      <label>Last Name</label>
      <input
        type="date"
        name="date"
        placeholder="Enter your dates"
      />
    </form>
  </div>
  )
  };

export default ManageBookings;
