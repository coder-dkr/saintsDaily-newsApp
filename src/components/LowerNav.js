import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CateContext } from '../contexts/CategoryContext';
import NewCardsHolder from './NewCardsHolder';

export default function LowerNav() {

  const [activeCat, setactiveCat] = useState('General')

  const [category, setCategory] = useState({
    cat1: 'Business',
    cat2: 'Entertainment',
    cat3: 'Sports',
    cat4: 'Technology',
    cat5: 'Health'
  });

  const handleCatChange = (e) =>{
    // e.preventDefault()
    let newCat = e.target.innerHTML.toLowerCase()
    setactiveCat(newCat)
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });

  }

  return (
    <>
      <CateContext.Provider value={activeCat}>


        <nav className="nav sticky-md-top nav-pills flex-column flex-sm-row bg-dark my-1">

          <NavLink onClick={handleCatChange} className="flex-sm-fill text-sm-center nav-link  text-warning" to="/Business">{category.cat1}</NavLink>

          <NavLink onClick={handleCatChange} className="flex-sm-fill text-sm-center nav-link text-warning" to="/Entertainment">{category.cat2}</NavLink>

          <NavLink onClick={handleCatChange} className="flex-sm-fill text-sm-center nav-link text-warning" to="/Sports">{category.cat3}</NavLink>

          <NavLink onClick={handleCatChange} className="flex-sm-fill text-sm-center nav-link text-warning" to="/Technology">{category.cat4}</NavLink>

          <NavLink onClick={handleCatChange} className="flex-sm-fill text-sm-center nav-link text-warning" to="/Health">{category.cat5}</NavLink>
        </nav>

        <NewCardsHolder/>
      </CateContext.Provider>
    </>
  )

}
