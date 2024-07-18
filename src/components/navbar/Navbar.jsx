import React from 'react'
import "./navbar.css"
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
    <header className="showcase">
        <div className="container">
          <nav>
            <div id='home_nav_logo'>
              <a href="/"><i className="fa fa-mobile-alt"></i> KaaEsh</a>
            </div>
            <div className='nav_names_heading'>
            <a href="/">Home</a>
              <a href="/menu">Menu</a>
              <a href="/about-us">About us</a>
              <a href="/">Contact us</a></div>

            <div className="right-menu">
              <a href="/login">Log in</a>
              <a href="/signup">Sign up</a>
            </div>
          </nav>
          <div className="hero-text">
            <h1  width="300" alt="logo">KaaEsh</h1>
            <h1>Discover the best food & drinks in <span className="bold-place">Mumbai</span></h1>
            <div className="search-bar">
              <div className="search-3">
                <i className="fa fa-map-marker-alt"><FaLocationDot /></i>
                <input type="text" placeholder="Mumbai" />
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="search-2">
                <i className="fas fa-search"><FaSearch /></i>
                <input type="text" className="search-right" placeholder="Search for restaurant" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
