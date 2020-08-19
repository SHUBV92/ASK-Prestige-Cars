import React, { useState } from "react";

import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { Container } from "./MoreOptions.styles";

const MoreOptions = (props) => {
  const [showResults, setShowResults] = useState(
    false
  );
  // Travel Details
  const [passengers, setPassengers] = useState(" ");
  const [luggage, setLuggage] = useState(" ");
  const [chooseCar, setChooseCar] = useState(" ")



  // Travel Detail

  // Pick Up
  const handlePassengers = (event) => {
    setPassengers(event.target.value);
  };

  // Destination
  const handleLuggage = (event) => {
    setLuggage(event.target.value);
  };
  const handleChooseCar = (event) => {
    setChooseCar(event.target.value);
  };

  const onClicks = () => setShowResults(true);



  return (
    <Container>
      <h4 onClick={onClicks}>More options</h4>
      {showResults ? (
        <div className="AdditionalInfo">
          {/* Passengers */}
          <InputGroup className="inputGroup">
            <FormControl
              placeholder="Passengers"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handlePassengers}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              className="dropdownButton"
            >
              <Dropdown.Item href="#">
                3
              </Dropdown.Item>
              <Dropdown.Item href="#">
                4
              </Dropdown.Item>
              <Dropdown.Item href="#">
                5
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                Separated link
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <br />
          {/* Choose Your Car */}
          <InputGroup className="inputGroup">
            <FormControl
              placeholder="Luggage"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleChooseCar}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              className="dropdownButton"
            >
              <Dropdown.Item href="#" className="dropDownItem">
                Saloon: vauxhall Insigjnia or
                similar
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropDownItem">
                Estate: Volkswagen Passat Estate
                or similar
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropDownItem">
                MPV: Ford Galaxy or similar
              </Dropdown.Item>
              <Dropdown.Item href="#" className="dropDownItem">
                Executive: BMW 5 Series or similar
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#" className="dropDownItem">
                More Choices
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>

          <br />

          <InputGroup className="inputGroup">
            <FormControl
              placeholder="Choose Your car"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleChooseCar}
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title=""
              id="input-group-dropdown-2"
              className="dropdownButton"
            >
              <Dropdown.Item href="#">
                Saloon: Lexus IS or similar
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Estate: Volkswagen Passat Estate
                or similar
              </Dropdown.Item>
              <Dropdown.Item href="#">
                MPV: Ford Galaxy or similar
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Executive: BMW 5 Series or similar
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">
                More Choices
              </Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <button onClick={this.props.getMoreOptions(
            {
              passengers: passengers,
              luggage: luggage,
              chooseCar: chooseCar
            }
          )}>Submit</button>
        </div>
      ) : null}
    </Container>
  );
};

export default MoreOptions;
