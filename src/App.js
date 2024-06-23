import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import LowerNav from './components/LowerNav';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
    return (
    <>
    <Router>

      <NavBar title="Saint's Daily" home="Home" about="About" more="More"/>

      <Routes>
        <Route exact path="/" element={<LowerNav/>}/>
        <Route exact path="/" element={<LowerNav/>}/>
        <Route exact path="/Business" element={<LowerNav/>}/>
        <Route exact path="/Entertainment" element={<LowerNav/>}/>
        <Route exact path="/Sports" element={<LowerNav/>}/>
        <Route exact path="/Technology" element={<LowerNav/>}/>
        <Route exact path="/Health" element={<LowerNav/>}/>

        <Route exact path="/about" element={<div className='container'>I am About</div>}/>
      </Routes>

    </Router>

    </>
    )
  
}



