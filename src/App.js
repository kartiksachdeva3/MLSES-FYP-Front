import React from "react";
import "./App.css";
// import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import NoMatch from "./pages/NoMatch/NoMatch";
import Home from "./pages/Home/Home";

import Dashboard from "./components/Skeleton/AppMenu";

const app= () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/login" >
          <SignIn />
         </Route>
         <Route exact path="/signup" >
          <SignUp />
         </Route>
        <Route exact path="/dashboard" >
          <Dashboard />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}



export default app;
