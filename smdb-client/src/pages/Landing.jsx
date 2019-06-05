import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half landing-container flex-column col">
          <h1 className="header">Welcome to Oh Sheet Music Database!</h1>
          <Link to="/log_in" className="button btn-landing btn-blue">
            Log in
          </Link>
          <Link to={"/sign_up"} className="button btn-landing btn-blue">
            Sign up
          </Link>
          <Link to={"/all_music"}>
            <button className="button btn-landing btn-blue">
              Browse as guest
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
