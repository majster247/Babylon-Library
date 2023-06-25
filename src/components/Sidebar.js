import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="navigation">
        <div className="nav-header">
          <span className="nav-header-text">Babylon Library</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/fizyka" activeClassName="active">
              Fizyka <FontAwesomeIcon icon={faAngleRight} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/matematyka" activeClassName="active">
              Matematyka
            </NavLink>
          </li>
          <li>
            <NavLink to="/informatyka" activeClassName="active">
              Informatyka
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-footer">
          <span className="nav-footer-text">KXH-RESEARCH 2021-2023</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
