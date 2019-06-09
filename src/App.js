import React from 'react';
import firebase from 'firebase';
import NationalParks from "./components/NationalParks"
import SelectedPark from "./components/SelectedPark"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import NPSLogo from "./components/nps-logo.png"

import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"


import './App.css';

function App() {
  return (
    <div>
      <div className="app">
        <Router>
          <div className="header-nav">
            <a href="https://www.nps.gov/index.htm"><img className="header-image" src={NPSLogo} alt="National Park Service" width="100" /></a>
            <h1>National Parks within Washington State </h1>       
            <hr/>
            <Nav />
          </div>
          <Route exact path="/" component={NationalParks} />
          <Route exact path="/NationalParks" component={NationalParks} />
          <Route path="/Park/:id" component={SelectedPark} />   
          </Router>    
          <Footer/>
      </div>

      </div>
  );
}

export default App;
