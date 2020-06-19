import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavToolBar from "./Containers/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavToolBar />

        <Switch>
          <Route path="/">
            <Intro />
          </Route>

          <Route path="/">
            <Introduction />
          </Route>

          <Route path="/skills">
            <ManagingBooks />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/">
            <Test />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
