import React, { useState } from "react";
import CardView from "../../../Components/Card/Card.jsx";
import {
  Container,
  Details,
  Info,
  Input,
  InputContainer,
  SearchButton,
  Price
} from "./ManageBookings.styles";
import Maps from "../../Maps/Maps";
import ChooseCar from "../ChooseCar/ChooseCar.jsx";
import JourneyDetails from "../JourneyDetails/JourneyDetails.jsx";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

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

        <InputContainer>
          <Input>
            <InputGroup>
              <FormControl
                placeholder="Pickup Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
                className="dropdownButton"
              >
                <Dropdown.Item href="#">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">
                  Separated link
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <br />
            <InputGroup>
              <FormControl
                placeholder="Destination Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">
                  Separated link
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>

            <br />

            <InputGroup>
              <FormControl
                placeholder="Date & Time"
                type="date"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
              >
                <Dropdown.Item href="#">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  Something else here
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">
                  Separated link
                </Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <Price>
              £70.00
            </Price>

            <br />
            <SearchButton>
              <Button>Search</Button>
            </SearchButton>
          </Input>
        </InputContainer>

        {/* <form onSubmit={handleSubmit}>
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
        </form> */}
      </Info>
      <hr />

      <hr />
      {/* <h2>Bookings</h2>
      {bookings.length === 0
        ? "loading....."
        : bookings.map((booking, index) => (
            <CardView
              booking={booking}
              index={index + 1}
            />
          ))} */}
      {/* <JourneyDetails /> */}
      {/* <ChooseCar /> */}
    </Container>
  );
};

export default ManageBookings;
