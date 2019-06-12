import React, { Component } from "react";
import axios from "axios";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      composer: "",
      sheet_file: "",
      composerList: [],
      currentUser: this.props.currentUser,
      err: null
    };
    this.formRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
      axios
        .get(`${process.env.REACT_APP_API_URL}/composer_list`)
        .then(response => {
          this.setState({ composerList: response.data });
        });
    }
  }

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClearFileInput = e => {
    this.setState({ sheet_file: "" });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    let uploadForm = this.formRef.current;
    let formData = new FormData(uploadForm);

    axios({
      url: `${process.env.REACT_APP_API_URL}/upload`,
      data: formData,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(response => {
        //redirect from upload to edit with id of just uploaded file
        let sheetId = response.data._id;
        this.props.history.push({
          pathname: `/edit_sheet/:${sheetId}`,
          state: { current_sheet: response.data }
        });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  };

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let composerOption = this.state.composerList.map((composer, index) => {
      return (
        <option key={`composer${index + 1}`} value={`${composer._id}`}>
          {`${composer.first_name} ${composer.last_name}`}
        </option>
      );
    });

    return (
      <div className="columns is-centered">
        <div className="column is-half col container background">
          <div>
            <h1 className="header flex-ctd">Upload sheet music</h1>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <form
                ref={this.formRef}
                className="form"
                onSubmit={this.handleFormSubmit}
              >
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
                        {composerOption}
                      </select>
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
                  <span className="file-name">{this.state.sheet_file}</span>

                  {this.state.sheet_file ? (
                    <button
                      onClick={this.handleClearFileInput}
                      className="delete"
                    />
                  ) : (
                    <></>
                  )}
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
