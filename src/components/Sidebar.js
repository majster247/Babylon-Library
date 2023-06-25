/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-header">
        <span className="navbar-header-text">Babylon Library</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink exact to="/" activeClassName="active" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/fizyka" activeClassName="active" className="navbar-link">
            Fizyka <FontAwesomeIcon icon={faAngleRight} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/matematyka" activeClassName="active" className="navbar-link">
            Matematyka
          </NavLink>
        </li>
        <li>
          <NavLink to="/informatyka" activeClassName="active" className="navbar-link">
            Informatyka
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" className="navbar-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
