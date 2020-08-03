// Packages
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Imported Components
import NavToolBar from "./Containers/Navbar/Navbar";
import ManageBookings from "./Containers/ManageBookings/BookingContainer/ManageBookings";
import AboutUs from "./Containers/AboutUs/AboutUs";
import OurFleet from "./Containers/ManageBookings/OurFleet/OurFleet";
import OurServices from "./Containers/OurServices/OurServices.jsx";
import Footer from "./Containers/Footer/Footer";

// Styling
import {
  Container,
  AppStyle,
} from "./App.styles.jsx";
import DistanceCalculator from "./Containers/Distance/Distance";
import Maps from "./Containers/Maps/Maps";
import Coverage from "./Containers/Coverage/Coverage";

// App Component
const App = () => {
  // Hooks
  const [booking, setBookings] = useState("");
  // Callback Function
  const callback = (bookings) => {
    setBookings(bookings);
    console.log("App Booking", bookings);
  };
  // Render all Components
  return (
    <div>
      <AppStyle></AppStyle>
      <Container>
        <div className="App">
          <Router>
            <NavToolBar />
            <ManageBookings callback={callback} />
            <AboutUs />
            <OurServices />
            <OurFleet />
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
