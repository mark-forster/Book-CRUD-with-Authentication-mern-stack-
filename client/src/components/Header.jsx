import React, {useContext, useState, useEffect} from 'react'
import { Link, NavLink , useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie'


function Header() {
  const navigate= useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"])
  const logoutHandle= ()=>{
      setCookies("access_token", "");
      window.localStorage.removeItem("UserId");
      navigate('/');
  }

  return (
    <>
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <NavLink className="navbar-brand fs-1 fw-bolder text-info" to='/home'>React</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav me-auto">
                <NavLink className="nav-link fs-5" to='/'>Home</NavLink>
                <NavLink className="nav-link fs-5" to='/about'>About</NavLink>
                <NavLink className='nav-link fs-5' to='/books'>Book</NavLink>
            </div>
            </div>
            {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
         {
          !cookies.access_token ?  (<div><button className='btn btn-primary'><Link className='nav-link'>Register</Link></button>
          <button className='btn btn-primary mx-3'><Link to='/login' className='nav-link'>Login</Link></button></div>)
           :
           (<button className='btn btn-danger' onClick={logoutHandle}>Logout </button>)
          
         }

                
             
           
        </div>
    </nav>
    </>
  )
}

export default Header