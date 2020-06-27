import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavToolBar from "./Containers/Navbar/Navbar";
import Intro from "./Containers/Intro/Intro";
import ManageBookings from "./Containers/ManageBookings/ManageBookings";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavToolBar />

          <Switch>
            <Route path="/home">
              <Intro />
            </Route>

            <Route path="/bookings">
              <ManageBookings />
            </Route>

            <Route path="/bookings">
              <ManageBookings />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
