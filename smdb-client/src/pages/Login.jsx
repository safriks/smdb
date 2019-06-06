import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      email: "",
      password: "",
      err: null
    };
    this.formRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    debugger;
    this.props.isNavBarBlurred(pathName);
  }

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    let loginForm = this.formRef.current;
    let formData = new FormData(loginForm);

    axios({
      url: "http://localhost:3010/log_in",
      data: formData,
      method: "post",
      headers: { "Content-Type": "form-data" },
      withCredentials: true
    })
      .then(response => {
        this.props.getCurrentUser();
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  render() {
    debugger;
    return (
      <div className="columns is-centered">
        <div className="column is-half col container">
          <div>
            <h1 className="header flex-ctd">
              Log in to Oh Sheet Music Database!
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
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      <strong>Login</strong>
                    </button>
                  </p>
                  <button
                    onClick={this.handleCancelClick}
                    className="button is-light"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
