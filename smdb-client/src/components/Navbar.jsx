import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <h1>Navbar start</h1>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/sign_up" className="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/log_in" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
