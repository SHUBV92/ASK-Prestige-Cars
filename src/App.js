// Packages
import React, { Component } from "react";
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
import "./App.css";
import Business from "./Containers/Business/Business";
import DistanceCalculator from "./Containers/Distance/Distance";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavToolBar />
          <ManageBookings />
          <Element id="Intro" name="Intro">
            <Intro />
          </Element>
          <Business />
{/*  */}
          {/* <DistanceCalculator /> */}
{/*  */}
          <ChooseCar />
          <Switch>
            <Route path="/bookings"></Route>

            <Route path="/home"></Route>

            <Route path="/bookings">
              <ManageBookings />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
