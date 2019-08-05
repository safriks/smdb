import React, { Component } from "react";
import axios from "axios";
import uploadSelectValues from "../values.json";

export default class EditSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSheetId: "",
      title: "",
      year: "",
      genre: "",
      voices: [],
      composer: "",
      arrangement_author: "",
      video: "",
      sheet_file: "",
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
      //Check if there is data in props.location.state (when redirected from upload page)
      //If not: get data of current sheet from database
      if (!this.props.location.state) {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/id/${this.props.match.params.id}`
          )
          .then(response => {
            let currentSheet = response.data[0];
            this.setState({
              currentSheetId: currentSheet._id,
              title: currentSheet.title,
              year: currentSheet.year,
              genre: currentSheet.genre,
              voices: currentSheet.voices,
              composer: currentSheet.composer,
              arrangement_author: currentSheet.arrangement_author,
              video: currentSheet.video,
              file: currentSheet.file
            });
          });
      } else {
        this.setState({
          currentSheetId: this.props.location.state.current_sheet._id,
          title: this.props.location.state.current_sheet.title,
          year: this.props.location.state.current_sheet.year,
          genre: this.props.location.state.current_sheet.genre,
          voices: this.props.location.state.current_sheet.voices,
          composer: this.props.location.state.current_sheet.composer,
          arrangement_author: "",
          video: this.props.location.state.current_sheet.video,
          file: this.props.location.state.current_sheet.file
        });
      }
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
      //Set currentSheet with id that is passed in url
      // this.setState({ currentSheet: this.props.match.params.id})
      axios
        .get(`${process.env.REACT_APP_API_URL}/composer_list`)
        .then(response => {
          this.setState({ composerList: response.data });
        });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    let editForm = this.formRef.current;
    let formData = new FormData(editForm);

    //check whether new file is uploaded
    const fileInputVal = editForm.querySelector("#file-input").value;
    const route = fileInputVal ? "edit_sheet_and_file" : "edit_sheet";
    axios({
      url: `${process.env.REACT_APP_API_URL}/${route}`,
      data: formData,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(response => {
        //redirect from edit to all music with id of just edited file
        this.props.history.push("/all_music");
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
        <option key={`composer${index + 1}`} value={`${composer._id}`}>
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
        <div className="column is-half col container background overflow">
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
                      placeholder={this.state.title}
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
                      placeholder={this.state.year}
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
                      placeholder={this.state.video}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="file is-black">
                    <label className="file-label">
                      <input
                        id="file-input"
                        type="file"
                        className="file-input"
                        name="sheet_file"
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
                <input
                  type="hidden"
                  name="_id"
                  value={this.state.currentSheetId}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
