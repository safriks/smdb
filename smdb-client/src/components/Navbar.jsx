import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

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
                <Link to="/upload" className="button is-link">
                  <strong>Upload sheet music</strong>
                </Link>
                <Link to="/" className="button is-link">
                  <i className="fa fa-home" aria-hidden="true" />
                </Link>
              </div>
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
