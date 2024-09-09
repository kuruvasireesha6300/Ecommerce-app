import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AddProducts from './AddProducts'

import Login from './Login'
import Card from './Card'
import { useNavigate } from 'react-router-dom'





function Navbar(props) // props ==> data={setIsLoggedIn}, initial={isLoggedIn}
{
  
  function pleaseLogOut()
  {
    // Logic to logout from the application
    window.location.pathname = "/login"
  }
  return (
    <BrowserRouter>
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Shopper App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <button type="button" id="mypopover" data-html="true" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Cart
</button>
        
        {props.initial ? <>
          <button className='btn btn-outline-light' onClick={pleaseLogOut}>Logout</button> 
          <li className="nav-item">
          <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add products</Link>
        </li>
        </>
        : <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li> }

        

        
        
            </ul>
            <form className="d-flex">
           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
          </div>
         </div>
        </nav>
          </div>
          <Routes>
            <Route path='/home' element={<Card/>}></Route>
            <Route path='/add' element={<AddProducts/>}></Route>
            <Route path='/login' element={<Login info = {props.data}/>}></Route>
            
          </Routes> 
          </BrowserRouter>
  )

  
}

export default Navbar