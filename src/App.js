import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import LowerNav from './components/LowerNav';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // constructor(){
  //   super();

  // }
  render() {
    return (
    <>
    <Router>

      <NavBar title="Daily Sages" home="Home" about="About" more="More"/>
     

      <Routes>
        <Route exact path="/" element={<LowerNav/>}/>
        <Route exact path="/home" element={<LowerNav/>}/>
      </Routes>

    </Router>

    </>
    )
  }
}



