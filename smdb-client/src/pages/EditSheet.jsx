import React, { Component } from "react";
import axios from "axios";
import uploadSelectValues from "../values.json";

export default class EditSheet extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      currentSheetId: props.location.state.current_sheet._id,
      title: props.location.state.current_sheet.title,
      year: props.location.state.current_sheet.year,
      genre: props.location.state.current_sheet.genre,
      voices: props.location.state.current_sheet.voices,
      composer: props.location.state.current_sheet.composer,
      arrangement_author: "",
      video: props.location.state.current_sheet.video,
      oldFile: props.location.state.current_sheet.file,
      newFile: "",
      composerList: [],
      genreList: uploadSelectValues.genres,
      voiceList: uploadSelectValues.voices,
      currentUser: this.props.currentUser,
      err: null
    };
    this.formRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
      //Set currentSheet with id that is passed in url
      // this.setState({ currentSheet: this.props.match.params.id})
      axios.get("http://localhost:3010/composer_list/").then(response => {
        this.setState({ composerList: response.data });
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    debugger;
    e.preventDefault();

    /*
    CHECK WHETHER FILE IS DIFFERENT FROM FILE THAT WAS ALREADY IN DATABASE 
    IF DIFFERENT: "/edit_sheet_and_file"
    ELSE: "/edit_sheet"
    */

    let editForm = this.formRef.current;
    let formData = new FormData(editForm);

    axios({
      url: "http://localhost:3010/ROUTES ABOVE",
      data: formData,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(response => {
        //redirect from edit to all music with id of just edited file
        this.props.history.push(`/all_music/${this.state.currentSheetId}`);
      })
      .catch(err => {
        this.setState({
          err: err
        });
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
        <option
          key={`composer${index + 1}`}
          value={`${composer.first_name} ${composer.last_name}`}
        >
          {`${composer.first_name} ${composer.last_name}`}
        </option>
      );
    });

    let genreOption = this.state.genreList.map((genre, index) => {
      return (
        <option key={`genre${index + 1}`} value={genre}>
          {genre}
        </option>
      );
    });

    let voiceOption = this.state.voiceList.map((voice, index) => {
      return (
        <option key={`voice${index + 1}`} value={voice}>
          {voice}
        </option>
      );
    });

    return (
      <div className="columns is-centered">
        <div className="column is-half col container">
          <div>
            <h1 className="header flex-ctd">Edit sheet music info</h1>
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
                      value={this.state.title}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Year</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="year"
                      onChange={this.handleInputChange}
                      value={this.state.year}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Genre</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="genre"
                        onChange={this.handleInputChange}
                        defaultChecked={this.state.genre}
                        required
                      >
                        {genreOption}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Voices</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="voices"
                        onChange={this.handleInputChange}
                        defaultChecked={this.state.voices}
                        required
                      >
                        {voiceOption}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Composer</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="composer"
                        onChange={this.handleInputChange}
                        defaultChecked={this.state.composer}
                        required
                      >
                        {composerOption}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Arrangement author</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="arrangement_author"
                        onChange={this.handleInputChange}
                        value={this.state.arrangement_author}
                        defaultChecked={this.state.arrangement_author}
                      >
                        {composerOption}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Video url</label>
                  <div className="control">
                    <input
                      className="input"
                      type="url"
                      name="video"
                      pattern="https://.*"
                      onChange={this.handleInputChange}
                      value={this.state.video}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="file is-link">
                    <label className="file-label">
                      <input
                        type="file"
                        className="file-input"
                        name="newFile"
                        onChange={this.handleInputChange}
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
                  <span className="file-name">{this.state.file}</span>
                  {this.state.sheetFile ? (
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
                <input
                  type="hidden"
                  name="currentSheetId"
                  value="{this.state.currentSheetId}"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
