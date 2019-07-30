import React, { Component } from "react";
import "./choirs.css";
// import { Link } from "react-router-dom";

export default class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      choirs: []
    };
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  handleSearchInputChange = e => {
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: searchQuery });
  };

  render() {
    return (
      <>
        <div className="columns">
          <div className="column is-8 is-offset-2">
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
                <div className="column is-12" />
              </div>
            </div>
          </>
          )
        </div>
      </>
    );
  }
}
