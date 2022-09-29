import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav 
    className="navbar navbar-expand-lg navbar-dark position-sticky top-0"
    style={{ backgroundColor: "#190a0a" }} >
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Navbar brand */}
      <a className="navbar-brand" href="#">
        PODCAST
      </a>
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* Link */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
                Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/AddPodcast">
                AddPodcast
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/PodcastList">
                PodcastList
            </NavLink>
            </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/PodcastManage">
                PodcastManage
            </NavLink>
          </li>
          
        </ul>
        
        <ul className="navbar-nav d-flex flex-row me-1">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Signin">
                Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Signup">
              Sign up
            </NavLink>
          </li>
        </ul>
        {/* Search */}
        <form className="w-auto">
          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
          />
          
        </form>
      </div>
    </div>
    {/* Container wrapper */}
    
  </nav>
  {/* Navbar */}
</>

  )
}

export default Header