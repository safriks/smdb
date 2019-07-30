import React, { Component } from "react";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
    }
  }

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half col container background">
          <div>
            <h1 className="header flex-ctd">Create choir</h1>
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
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="file is-black">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        name="sheet_file"
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
                </div>
                <div className="field">
                  <label className="file-label">Selected file</label>
                  <span className="file-name">Yoyo</span>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button type="submit" className="button is-black">
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
