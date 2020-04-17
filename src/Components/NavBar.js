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
    <div className="navBar">
      <ul className="navBarMenu">
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
        {auth0Client.isAuthenticated() && (
          <li className="navItem">
            <Link className="link-nav" to="/patients">
              Patients
            </Link>
          </li>
        )}
      </ul>
      {!auth0Client.isAuthenticated() && (
        <ul className="navBarAuth">
          <li className="navItem">
            <a className="link-nav" onClick={auth0Client.signIn}>
              Sign In
            </a>
          </li>
        </ul>
      )}
      {auth0Client.isAuthenticated() && (
        <ul className="navBarAuth">
          <li className="navItem">
            <Link className="link-nav" to="/profile">
              <div className="avatar"></div>
            </Link>
          </li>
          <li className="navItem">
            <a
              className="link-nav"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
