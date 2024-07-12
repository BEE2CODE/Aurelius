import React from 'react'
import logo from '../images/Aurelius.png'


function CustomNavbar() {
  return (
   <nav className='nav'>
    <div className='signup__discount'><p>20% off when you sign up with email</p></div>
    <div className="navbar">
      <img src={logo} />
      <span className='mid_link'>
        <a href="#" className="nav__link">Shop</a>
        <a href="#" className="nav__link">Back to school</a>
        <a href="#" className="nav__link">About</a>
      </span>
      <span className='nav__menu'>
        <a href="#" className="nav__link">Search</a>
       <a href="#" className="nav__link">Home</a>
       <a href="#" className="nav__link">Home</a>
      </span>
    </div>
   </nav>
  )
}

export default CustomNavbar
