import React, { useEffect } from 'react';
import '../style/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/'><img className='navbar-logo' src="https://job-board.dexignzone.com/xhtml/images/icons/google.png" alt="Navbar logo" /></NavLink>
        <div className="navbar-items">
          <NavLink to='/' className="navbar-item">About us</NavLink>
          <NavLink to='/' className="navbar-item">Contact Us</NavLink>
          <NavLink to='/' className="navbar-item">Support</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
