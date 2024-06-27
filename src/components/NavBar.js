import React,{useState , useRef} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css';
import LowerNav from './LowerNav';
import { ApiKeyContext } from '../contexts/ApiKeyContext'


export default function NavBar (props) { 
  const [apiKeyvalue, setapiKeyvalue] = useState()

  const [EnteredApiKey, SetEnteredApiKey] = useState()
  
  const ApiKeyInputRef = useRef()
  
  const handleChange = (e) =>{
    setapiKeyvalue(e.target.value)
  }

  const handleKeySubmit = (e) => {
    e.preventDefault()
    SetEnteredApiKey(ApiKeyInputRef.current.value)
  }

  const Navigate  = useNavigate()
  const handleGetApiKey = () => {
    window.open('https://newsapi.org/register','_blank')
    Navigate('/')

  }


  
    return (
      <>
     <ApiKeyContext.Provider value={EnteredApiKey}>
        <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 list-unstyled">
                <li className="list-unstyled mx-2 mt-1 p-fixed">

                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-warning " : "text-white"} 
                  style={(isActive,isPending)=>{

                    return {
                      margin : "0 20px",
                      fontWeight : "bold",
                      listStyle:"none",
                      textDecoration:"none"}
                    }

                      
                  }
                    
                    aria-current="page" to="/home">{props.home}</NavLink>
                  
                </li>
                <li className="nav-item mx-2 mt-1 p-fixed">
                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-warning " : "text-white"} 
                  style={(isActive,isPending)=>{

                    return {
                      margin : "0 20px",
                      fontWeight : "bold",
                      listStyle:"none",
                      textDecoration:"none"}
                    }

                      
                  }
                  to="/about">{props.about}</NavLink>
                </li>

                <li onClick={handleGetApiKey} className="nav-item mx-2 mt-1 p-fixed">


                  <NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active text-warning " : "text-white"} 
                  style={(isActive,isPending)=>{

                    return {
                      margin : "0 20px",
                      fontWeight : "bold",
                      listStyle:"none",
                      textDecoration:"none"}
                    }

                      
                  }

                  to="/register-apikey">{props.more}</NavLink>


                </li>
              </ul>
              <form className="d-flex" role="search">
                <input ref={ApiKeyInputRef} value={apiKeyvalue} onChange={handleChange}   className="form-control me-2" type="text" placeholder="Input Your Api Key" aria-label="Search" />
                <button onClick={handleKeySubmit} className="btn btn-outline-success text-light" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </nav>
     <LowerNav/>
    </ApiKeyContext.Provider>
      </>
    )
  
}
