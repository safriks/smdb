import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { deepEqual } from "assert";

export default class Navbar extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      navBarClassName: this.props.navBarClassName
    };
  }

  componentWillReceiveProps(nextProps) {
    debugger;
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
      url: "http://localhost:3010/log_out",
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

  render() {
    return (
      <nav
        className={this.state.navBarClassName}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                {Object.keys(this.state.currentUser).length > 0 ? (
                  <Link to="/upload" className="button is-link">
                    <strong>Upload sheet music</strong>
                  </Link>
                ) : (
                  <></>
                )}
                <Link to="/" className="button is-link ">
                  <i className="fa fa-home" aria-hidden="true" />
                </Link>
                {Object.keys(this.state.currentUser).length > 0 ? (
                  <div className="navbar-item">
                    <h3 className="nav-text">
                      Welcome {this.state.currentUser.first_name}
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
                {Object.keys(this.state.currentUser).length > 0 ? (
                  <></>
                ) : (
                  <Link to="/sign_up" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                )}
                {Object.keys(this.state.currentUser).length > 0 ? (
                  <button
                    onClick={this.handleLogOutClick}
                    className="button is-danger"
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
