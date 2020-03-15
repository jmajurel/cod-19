import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => (
  <ul className="navBar">
    <li className="navItem">
      <Link className="link-nav" to="/home">
        <i className="fas fa-home" />
      </Link>
    </li>
    <li className="navItem">
      <Link className="link-nav" to="/protection">
        Protection
      </Link>
    </li>
    <li className="navItem">
      <Link className="link-nav" to="/situation">
        Situation
      </Link>
    </li>
  </ul>
);

export default NavBar;
