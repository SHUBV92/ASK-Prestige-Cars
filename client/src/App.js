// Packages
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Imported Components
import NavToolBar from "./containers/Navbar/Navbar.js";
import ManageBookings from "./containers/ManageBookings/BookingContainer/ManageBookings";
import AboutUs from "./containers/AboutUs/AboutUs.jsx";
import OurFleet from "./containers/ManageBookings/OurFleet/OurFleet";
import OurServices from "./containers/OurServices/OurServices.jsx";
import Footer from "./containers/Footer/Footer";
// import Maps from "./containers/Maps/Maps";
import Coverage from "./containers/Coverage/Coverage";
import DistanceCalculator from "./containers/Distance/Distance";

// Styling
import {
  Container,
  AppStyle,
} from "./App.styles.jsx";

// App Component
const App = () => {
  // Hooks
  const [booking, setBookings] = useState("");

  // Render all Components
  return (
    <div>
      <AppStyle />
      <Container>
        <NavToolBar />
        <ManageBookings
          setBookings={(bookings) =>
            setBookings(bookings)
          }
        />
        <AboutUs />
        <OurServices />
        <OurFleet />
        <Coverage />
        <Footer />
        {/* <Maps booking={booking} /> */}
      </Container>
    </div>
  );
};

export default App;
