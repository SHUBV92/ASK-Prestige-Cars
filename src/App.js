import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavToolBar from "./Containers/Navbar/Navbar";
import Intro from "./Containers/Intro/Intro";
import ManageBookings from "./Containers/ManageBookings/ManageBookings";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavToolBar />

        <Switch>
          <Route path="/">
            <Intro />
          </Route>

          <Route path="/skills">
            <ManageBookings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
