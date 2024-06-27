import React, { Component } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
    return (
    <>
    <Router>


      <Routes>
        
        <Route exact path="/" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>
        
        <Route exact path="/home" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/Business" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/Entertainment" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/Sports" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/Technology" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/Health" element={<NavBar title="Saint's Daily" home="Home" about="About" more="Get Api Key"/>}/>

        <Route exact path="/about" element={<About/>}/>



      </Routes>

    </Router>

    </>
    )
  
}



