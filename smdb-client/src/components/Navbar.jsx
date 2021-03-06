import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../design/osmdb-logo.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      navBarClassName: this.props.navBarClassName
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser !== this.props.currentUser) {
      let newCurrentUser = nextProps.currentUser;
      this.setState({ currentUser: newCurrentUser });
    } else if (nextProps.navBarClassName !== this.props.navBarClassName) {
      let newNavBarClassName = nextProps.navBarClassName;
      this.setState({ navBarClassName: newNavBarClassName });
    }
  }

  handleLogOutClick = e => {
    axios({
      url: `${process.env.REACT_APP_API_URL}/log_out`,
      method: "post",
      withCredentials: true
    })
      .then(response => {
        this.props.logOut();
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  //Check whether user is logged in
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
      <nav
        className={this.state.navBarClassName}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/">
            <img className="nav-logo" src={logo} alt="nav-logo" />
          </Link>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                {isUserLoggedIn ? (
                  <Link to="/all_music" className="button is-light">
                    <strong>Sheets</strong>
                  </Link>
                ) : (
                  <></>
                )}
                {isUserLoggedIn ? (
                  <Link to="/choirs" className="button is-light">
                    <strong>Choirs</strong>
                  </Link>
                ) : (
                  <></>
                )}
                {isUserLoggedIn ? (
                  <div className="navbar-item">
                    <h3 className="nav-text">
                      Welcome{" "}
                      <Link to="profile" className="nav-link">
                        {this.state.currentUser.first_name}
                      </Link>
                    </h3>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isUserLoggedIn ? (
                  <></>
                ) : (
                  <Link to="/sign_up" className="button is-black">
                    <strong>Sign up</strong>
                  </Link>
                )}
                {isUserLoggedIn ? (
                  <button
                    onClick={this.handleLogOutClick}
                    className="button is-bordeaux"
                  >
                    Log out
                  </button>
                ) : (
                  <Link to="/log_in" className="button is-light">
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

//remove multiple isUserLoggedIn? -> only use one to change navbar on Login status
