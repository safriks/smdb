import React, { Component } from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  state = {
    currentUser: this.props.currentUser
  };

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half container flex-column col">
          <h1 className="header">Welcome to Oh Sheet Music Database!</h1>
          {Object.keys(this.state.currentUser).length > 0 ? (
            <></>
          ) : (
            <>
              <Link to="/log_in" className="button btn-landing btn-blue">
                Log in
              </Link>
              <Link to={"/sign_up"} className="button btn-landing btn-blue">
                Sign up
              </Link>
            </>
          )}
          <Link to={"/all_music"}>
            {Object.keys(this.state.currentUser).length > 0 ? (
              <button className="button btn-landing btn-blue">Browse</button>
            ) : (
              <button className="button btn-landing btn-blue">
                Browse as guest
              </button>
            )}
          </Link>
        </div>
      </div>
    );
  }
}
