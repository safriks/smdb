import React, { Component } from "react";
import "./choirs.css";
import { Link } from "react-router-dom";

export default class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      searchQuery: "",
      choirs: []
    };
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    }
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  handleSearchInputChange = e => {
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: searchQuery });
  };

  render() {
    return (
      <>
        <div className="columns">
          <div className="column is-1 is-offset-1 btn-container">
            <Link to="/upload" className="button is-light upload-button">
              <strong>Create choir</strong>
            </Link>
          </div>
          <div className="column is-8">
            <input
              className="search-el search-bar"
              placeholder="Search choirs!"
              type="text"
              name="searchQuery"
              onInput={this.handleSearchInputChange}
            />
          </div>
        </div>
        <div className="columns list-container">
          (
          <>
            <div className="column is-2 is-offset-1 col overflow">
              <p>
                <span className="label-text white">My choirs:</span>
              </p>
            </div>
            <div className="column is-8 col">
              <div className="columns">
                <div className="column is-12 dlt-row" />
              </div>
              <div className="columns overflow">
                <div className="column is-12">
                  <h1 className="white">All choirs</h1>
                </div>
              </div>
            </div>
          </>
          )
        </div>
      </>
    );
  }
}
