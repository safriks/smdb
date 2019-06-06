import React, { Component } from "react";
import "./upload.css";
import axios from "axios";

export default class Upload extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      composer: "",
      sheetFile: "",
      composerList: [],
      err: null
    };
    // this.formRef = React.createRef();
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
    axios.get("http://localhost:3010/composer_list/").then(response => {
      debugger;
      this.setState({ composerList: response.data });
    });
  }

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClearFileInput = e => {
    this.setState({ sheetFile: "" });
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half col container">
          <div>
            <h1 className="header flex-ctd">Upload sheet music</h1>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <form className="form" onSubmit={this.handleFormSubmit}>
                <div className="field">
                  <label>Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Composer</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="composer"
                        onChange={this.handleInputChange}
                        required
                      >
                        {this.state.composerList.map(composer => {
                          return (
                            <option
                              value={`${composer.first_name} ${
                                composer.last_name
                              }`}
                            >
                              {`${composer.first_name} ${composer.last_name}`}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="file is-link">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        name="sheetFile"
                        onChange={this.handleInputChange}
                        required
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fas fa-upload" />
                        </span>
                        <span className="file-label">Select sheet music</span>
                      </span>
                    </label>
                  </div>
                  <div>
                    <span className="file-name">{this.state.sheetFile}</span>
                    {this.state.sheetFile ? (
                      <button
                        onClick={this.handleClearFileInput}
                        className="delete"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button type="submit" className="button is-primary">
                      <strong>Next</strong>
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
