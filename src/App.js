import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

/**
 * Main Function
 * The controller of the application
 */
function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>  
  );
}

export default App;
