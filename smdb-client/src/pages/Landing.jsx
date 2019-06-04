import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half landing-container flex-column">
          <h1 className="header">Welcome to Oh Sheet Music Database!</h1>
          <button className="button btn-landing btn-blue">Log in</button>
          <button className="button btn-landing btn-blue">Sign up</button>
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
