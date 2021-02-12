import React from 'react';
import './App.css';
// import { Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/Auth/SignIn'
import NoMatch from './pages/NoMatch/NoMatch'
import Navbar from './pages/Home/Navbar';

import HomePage from './pages/Home/Home'
import Vision from './pages/Home/pages/Vision/Vision'
import About from './pages/Home/pages/About/About'


function App(){

    return(
        <Router>
               <Navbar />
            <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/vision' component={Vision} />
            <Route path='/about' component={About} />
            <Route path='/login'>
                <SignIn />
            </Route>
            <Route path='/dashboard'>
                <Dashboard />
            </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
            
        </Router>
    )
}


export default App;





