import React, { Component } from "react";
import "./filterColumn.css";
import uploadSelectValues from "../values.json";
import axios from "axios";

export default class MusicListItem extends Component {
  constructor() {
    super();
    this.state = {
      genreList: uploadSelectValues.genres,
      composerList: [],
      genreDropdown: false,
      composerDropdown: false
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3010/composer_list/").then(response => {
      this.setState({ composerList: response.data });
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDropdownClick = e => {
    let targetName = e.target.attributes[1].value;
    let targetDropdown = this.state[targetName + "Dropdown"];
    targetDropdown
      ? this.setState({ [targetName + "Dropdown"]: false })
      : this.setState({ [targetName + "Dropdown"]: true });
  };

  render() {
    let genreCheckBoxJSX = this.state.genreList.map((genre, index) => {
      return (
        <label key={index} className="checkbox">
          <input
            className="filter-checkbox"
            onInput={this.handleInputChange}
            type="checkbox"
            name={genre}
          />
          {genre}
        </label>
      );
    });

    let composerCheckBoxJSX = this.state.composerList.map((composer, index) => {
      let composerName = `${composer.first_name} ${composer.last_name}`;
      return (
        <label key={index} className="checkbox">
          <input
            className="filter-checkbox"
            onInput={this.handleInputChange}
            type="checkbox"
            name={composerName}
          />
          {composerName}
        </label>
      );
    });

    return (
      <div className="flex-col">
        <h1
          className="filter-label"
          name="genre"
          onClick={this.handleDropdownClick}
        >
          Genre
        </h1>
        {this.state.genreDropdown ? genreCheckBoxJSX : <></>}
        <h1
          className="filter-label"
          name="composer"
          onClick={this.handleDropdownClick}
        >
          Composer
        </h1>
        {this.state.composerDropdown ? composerCheckBoxJSX : <></>}
      </div>
    );
  }
}
