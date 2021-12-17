import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          UseContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink activeClassName="active" exact className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink
              activeClassName="active"
              exact
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="active"
              exact
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
