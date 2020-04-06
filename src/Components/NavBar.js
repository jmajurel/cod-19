import React from "react";
import { Link, useHistory } from "react-router-dom";
import auth0Client from "../Auth/Auth";
import "./NavBar.css";

const NavBar = () => {
  let history = useHistory();
  const signOut = () => {
    auth0Client.signOut();
    history.replace("/");
  };
  return (
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
      {!auth0Client.isAuthenticated() && (
        <button onClick={auth0Client.signIn}>Sign In</button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label>{auth0Client.getProfile().name}</label>
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </ul>
  );
};

export default NavBar;
