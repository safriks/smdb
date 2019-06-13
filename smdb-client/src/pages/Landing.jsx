import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../design/osmdb-logo.svg";

export default class Landing extends Component {
  state = {
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    var isUserLoggedIn = this.isUserLoggedIn();

    return (
      <div className="columns is-centered">
        <div className="column is-half container flex-column col no-border">
          <img className="logo" src={logo} alt="smdb-logo" />
          <h1 className="header is-white">
            Welcome to Oh Sheet Music Database!
          </h1>
          <div className="flex">
            {isUserLoggedIn ? (
              <></>
            ) : (
              <>
                <Link to="/log_in" className="button btn-landing btn-black">
                  Log in
                </Link>
                <Link to={"/sign_up"} className="button btn-landing btn-black">
                  Sign up
                </Link>
              </>
            )}
            <Link to={"/all_music"}>
              {isUserLoggedIn ? (
                <button className="button btn-landing btn-black">Browse</button>
              ) : (
                <button className="button btn-landing btn-black">
                  Browse as guest
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
