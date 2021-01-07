import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Vision from './components/pages/Vision/Vision';
import About from './components/pages/About/About';
import Login from './components/pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Contact/Contact.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/vision' component={Vision} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
    
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;