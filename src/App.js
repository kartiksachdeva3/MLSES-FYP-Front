<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Vision from './components/pages/Vision/Vision';
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Contact/Contact.js';
=======
import React from "react";
import "./App.css";
// import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import NoMatch from "./pages/NoMatch/NoMatch";
import Home from "./pages/Home/Home";
import Logout from "./pages/Auth/Logout";
import Dashboard from "./components/Skeleton/AppMenu";
>>>>>>> Stashed changes

const app= () => {
  return (
    <Router>
      
      <Switch>
<<<<<<< Updated upstream
        <Route path='/' exact component={Home} />
        <Route path='/vision' component={Vision} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
    
=======
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
        <Route exact path="/logout" >
          <Logout />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
>>>>>>> Stashed changes
      </Switch>
      <Footer />
    </Router>
  );
}

<<<<<<< Updated upstream
export default App;
=======


export default app;
>>>>>>> Stashed changes
