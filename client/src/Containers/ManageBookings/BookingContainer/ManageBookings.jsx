// Packages
import React, { useState } from "react";

// Imported Components
import Maps from "../../Maps/Maps";
import MoreOptions from "../moreOptions/MoreOptions.jsx";
import UserDetails from "../userDetails/UserDetails.jsx";
import Mailer from "../../Mailer/Mailer.jsx";


// Styling
import CardView from "../../../components/Card/Card.jsx";
import {
  Container,
  Details,
  Info,
  Input,
  InputContainer,
  SearchButton,
  Price,
} from "./ManageBookings.styles";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

// ManageBooking Component
const ManageBookings = (props) => {
  // Hooks

  // Personal Details
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  // Travel Details
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState(
    ""
  );
  // Date
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState([]);

  // 
  const [userDetails, setUserDetails] = useState("")
  const [moreOptions, setMoreOptions] = useState("")

  // Handle form data functions

  // Personal Details
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // Last name
  const handleLastChange = (event) => {
    setLastName(event.target.value);
  };
  // Date
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Travel Detail
  // Pick Up
  const handlePickUpChange = (event) => {
    console.log("Pickup: ", event.target.value);
    setPickUp(event.target.value);
  };
  // Destination
  const handleDestinationChange = (event) => {
    console.log(
      "Destination: ",
      event.target.value
    );
    setDestination(event.target.value);
  };
  // Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  // Add Bookings
  const addBookings = () => {
    console.log("A", bookings);
    setBookings(
      bookings.concat({
        name: name,
        lastName: lastName,
        pickUp: pickUp,
        destination: destination,
        date: date,
      })
    );
    props.setBookings(bookings);
  };

  const getUserDetails = (userDetails) => {
    setName(userDetails.name)
    setLastName(userDetails.lastName)
  }

  const getMoreOptions = (moreOptions) => {
    setMoreOptions(moreOptions)
  }
  // Collection of Input Fields
  const inputCollection = [
    {
      placeholderName: "Pickup Address",
      onChange: handlePickUpChange,
      type: "text",
    },
    {
      placeholderName: "Destination Address",
      onChange: handleDestinationChange,
      type: "text",
    },
    {
      placeholderName: "Date & Time",
      onChange: handleDateChange,
      type: "date",
    },
  ];

  return (
    <Container>
      <h1>Make a Booking</h1>
      <Info>
        <InputContainer>
          {inputCollection.map((fields) => (
            <Input>
              {/* Pickup Address */}
              <InputGroup>
                <FormControl
                  placeholder={
                    fields.placeholderName
                  }
                  type={fields.type}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={fields.onChange}
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
            </Input>
          ))}
        </InputContainer>
        <UserDetails
          getUserDetails={getUserDetails}
        />
        <MoreOptions
        getMoreOptions={getMoreOptions}
        />

        {/* Dynamically calculate the price  */}
        <Price>£70.00</Price>

        <br />
        <SearchButton>
          <Button
            variant="danger"
            onClick={addBookings}
          >
            Search
          </Button>
        </SearchButton>
      </Info>
      <hr />
      <Mailer bookings={bookings} />

      <hr />
    </Container>
  );
};

export default ManageBookings;

{
  /* <h2>Bookings</h2>
      {bookings.length === 0
        ? "loading....."
        : bookings.map((booking, index) => (
            <CardView
              booking={booking}
              index={index + 1}
            />
          ))} */
}
