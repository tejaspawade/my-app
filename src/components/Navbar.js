import React from 'react'
import logo from './Logo-2-4.png'
import "./Navbar.css"
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
export default function Navbar() {
  return (
  <>
   <nav className="main-nav">
    {/* Logo */}
     <div className="Logo">
      <img src={logo} alt="" width="350" height="80"/>
     </div>
     {/* Menu */}
     <div className='menu-link'>
      <ul>
        <li>
          <a href="my-app\src\components\Carousel.js">Login</a>
        </li>
        <li>
          <a href="https://google.com">Hostels</a>
        </li>
        <li>
          <a href="https://google.com">Facilities</a>
        </li>
        <li>
          <a href="https://google.com">Staff</a>
        </li>
      </ul>
     </div>
     
     {/* Social Media
     <div className='social-media'>
      <ul className='social-media-desktop'>
        <li>
          <a href="https://facebook.com">
            <FaFacebookSquare className="facebook"/>
          </a>
        </li>
        <li>
          <a href="https://instagram.com">
            <FaInstagramSquare className="instagram"/>
          </a>
        </li>
        <li>
          <a href="https://twitter.com">
            <FaTwitterSquare className="twitter"/>
          </a>
        </li>
      </ul>
     </div> */}
   </nav>
   </>
  )
}

// Navbar.PropTypes={
//     title:PropTypes.string,
//     aboutText:PropTypes.string
// }
