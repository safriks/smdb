import React, { Component } from "react";
import "./profile.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser
    };
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
    }
  }

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half col container">
          <div>
            <h1 className="header flex-ctd">Profile</h1>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <p>
                <span className="label-text">Name: </span>
                {this.state.currentUser.first_name}{" "}
                {this.state.currentUser.last_name}
              </p>
              <p>
                <span className="label-text">Email: </span>
                {this.state.currentUser.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
