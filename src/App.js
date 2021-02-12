import React from 'react';
import './App.css';
// import { Grid } from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/Auth/SignIn'
import NoMatch from './pages/NoMatch/NoMatch'



function App(){

    return(
        <Router>
            <Switch>

                <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/signin'>
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





