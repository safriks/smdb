import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmpassword: "",
      passwordError: "",
      err: null
    };
    this.formRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  //Handles form input
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Seperate handler makes sure email is in lower case
  handleEmailInputChange = e => {
    let lowerCaseEmail = e.target.value.toLowerCase();
    this.setState({ email: lowerCaseEmail });
  };

  handlePasswordConfirmation = e => {
    if (e.target.value.length === 0) {
      this.setState({ passwordError: "" });
    } else if (e.target.value === this.state.password) {
      this.setState({ passwordError: "" });
    } else {
      this.setState({ passwordError: "Passwords do not match!" });
    }
  };

  handleFormSubmit = e => {
    e.preventDefault();

    axios({
      url: `${process.env.REACT_APP_API_URL}/sign_up`,
      data: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password
      },
      method: "post",
      withCredentials: true
    })
      .then(response => {
        this.props.history.push("/log_in");
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half col container background overflow">
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
                      onChange={this.handleEmailInputChange}
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
                      onChange={this.handlePasswordConfirmation}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </div>
                  <p className="error-message">{this.state.passwordError}</p>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      <strong>Sign up</strong>
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
