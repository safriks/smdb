import React, { Component } from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmpassword: "",
    err: null
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    axios({
      url: "http://localhost:3010/sign_up",
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword
      },
      method: "post",
      withCredentials: true
    })
      .then(response => {
        this.props.history.push("/log-in");
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  render() {
    return (
      <>
        <div className="columns">
          <div className="column is-8 is-offset-2 col">
            <div>
              <h1 className="header flex-ctd">
                Sign up to Oh Sheet Music Database!
              </h1>
            </div>
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <form
                  ref={this.formRef}
                  onSubmit={this.handleFormSubmit}
                  className="form"
                >
                  <div className="field">
                    <label>First name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="first_name"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        name="last_name"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        name="password"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Confirm password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        name="confirmpassword"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field is-grouped is-grouped-centered">
                    <p className="control">
                      <button type="submit" className="button is-primary">
                        <strong>Sign up</strong>
                      </button>
                    </p>
                    <Link to="/" className="button is-light">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
