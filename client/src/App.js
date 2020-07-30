// Packages
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Element } from "react-scroll";

// Components
import NavToolBar from "./Containers/Navbar/Navbar";
import ManageBookings from "./Containers/ManageBookings/BookingContainer/ManageBookings";
import Intro from "./Containers/Intro/Intro";
import ChooseCar from "./Containers/ManageBookings/ChooseCar/ChooseCar";
import Footer from "./Containers/Footer/Footer";

// Styling
import { Container, AppStyle } from "./App.styles.jsx";
import Business from "./Containers/Business/Business";
import DistanceCalculator from "./Containers/Distance/Distance";
import Maps from "./Containers/Maps/Maps";
import Coverage from "./Containers/Coverage/Coverage";

const App = () => {
  const [booking, setBookings] = useState("");

  const callback = (bookings) => {
    setBookings(bookings);
    console.log("App Booking", bookings);
  };

  return (
    <div>
      <AppStyle></AppStyle>
      <Container>
        <div className="App">
          <Router>
            <NavToolBar />
            <ManageBookings callback={callback} />
            <Element id="Intro" name="Intro">
              <Intro />
            </Element>
            <Business />
            <ChooseCar />
            <Coverage />

            <Footer />
            <Maps booking={booking} />
          </Router>
        </div>
      </Container>
    </div>
  );
};

export default App;

// <Switch>
// <Route path="/bookings"></Route>

// <Route path="/home"></Route>

// <Route path="/bookings">
//   <ManageBookings />
// </Route>
// </Switch>
