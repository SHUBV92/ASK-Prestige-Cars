import React, { useState } from "react";
import CardView from "../../../Components/Card/Card.jsx";
import { Container, Details, Info } from "./ManageBookings.styles";
import Maps from "../../Maps/Maps";
import ChooseCar from "../ChooseCar/ChooseCar.jsx";

const ManageBookings = () => {
  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [date, setDate] = useState(" ");
  const [bookings, setBookings] = useState([]);

  const handleNameChange = (event) => {
    console.log("Name: ", event.target.value);
    setName(event.target.value);
  };

  const handleLastChange = (event) => {
    console.log(
      "Last Name: ",
      event.target.value
    );
    setLastName(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log("Date: ", event.target.value);
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addBookings = () => {
    console.log("A", bookings);
    setBookings(
      bookings.concat({
        name: name,
        lastName: lastName,
        date: date,
      })
    );
    console.log("B", bookings);
  };

  return (
    <Container>
      <Info>
        <h1>Make a Booking</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            name="name"
            placeholder="Name"
          />

          <br />
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={handleLastChange}
            name="last"
            placeholder="Last Name"
          />
          <br />
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            name="date"
            placeholder="Enter your dates"
          />
          <br />
          <button onClick={addBookings}>
            submit
          </button>
        </form>
      </Info>
      <hr />


      <hr />
      <h2>Bookings</h2>
      {bookings.length === 0
        ? "loading....."
        : bookings.map((booking, index) => (
          <CardView
          booking={booking}
          index={index + 1}
          />
          ))}
          {/* <Maps /> */}
          <ChooseCar />
    </Container>
  );
};

export default ManageBookings;
