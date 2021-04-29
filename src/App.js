import React from "react";
import "./App.css";
// import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/Home/Home";
import Dashboard from "./components/Skeleton/AppMenu";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login">
          <SignIn />
        </Route>
        <Route exact path="/dashboard" type="private">
          <Dashboard />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
