import React, { Component } from "react";
import "./musicDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMusic: props.selectedMusic[0],
      currentUser: props.currentUser
    };
  }

  componentDidMount() {
    if (this.isUserLoggedIn()) {
      this.checkIfFavorite();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedMusic[0] !== this.props.selectedMusic[0]) {
      this.setState({ selectedMusic: this.props.selectedMusic[0] });
    }
  }

  handleFavoriteClick = e => {
    debugger;
    this.checkIfFavorite()
      ? axios({
          url: "http://localhost:3010/remove_fav",
          data: {
            sheetId: this.state.selectedMusic._id,
            currentUserId: this.state.currentUser._id
          },
          method: "post",
          withCredentials: true
        }).then(response => {
          // this.setState({ isFavorite: false });
        })
      : axios({
          url: "http://localhost:3010/add_fav",
          data: {
            sheetId: this.state.selectedMusic._id,
            currentUserId: this.state.currentUser._id
          },
          method: "post",
          withCredentials: true
        }).then(response => {});
    //Update user info in state
    axios.get(`${process.env.REACT_APP_API_URL}/user_info`).then(response => {
      debugger;
      this.setState({ currentUser: response.data });
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

  //Check whether selected music sheet is stored in favs of current user
  checkIfFavorite = () => {
    debugger;
    let selectedMusicId = this.state.selectedMusic._id;
    let selectedMusicIsFavorite = this.state.currentUser.favs.includes(
      selectedMusicId
    );
    if (selectedMusicIsFavorite === true) {
      debugger;
      return true;
    } else {
      debugger;
      return false;
    }
  };

  render() {
    var isUserLoggedIn = this.isUserLoggedIn();
    if (isUserLoggedIn === true) {
      var isFavorite = this.checkIfFavorite();
    }

    let favBtnClassName = "flex-ctd fav-btn";
    debugger;
    isFavorite
      ? (favBtnClassName = "flex-ctd fav-btn is-fav")
      : (favBtnClassName = "flex-ctd fav-btn not-fav");

    return (
      <div className="columns">
        <div className="column is-half">
          <p>
            <span className="label-text">Title: </span>
          </p>
          <p>{this.state.selectedMusic.title}</p>
          <p>
            <span className="label-text">Year: </span>
          </p>
          <p>{this.state.selectedMusic.year}</p>
          <p>
            <span className="label-text">Composer: </span>
          </p>
          <p>
            {this.state.selectedMusic.composer.first_name}{" "}
            {this.state.selectedMusic.composer.last_name}
          </p>
          <p>
            <span className="label-text">Arrangement author: </span>
          </p>
          <p>
            {this.state.selectedMusic.arrangement_author.first_name}{" "}
            {this.state.selectedMusic.arrangement_author.last_name}
          </p>
          <p>
            <span className="label-text">Voices: </span>
          </p>
          <ul>
            {this.state.selectedMusic.voices.map((voice, index) => {
              return <li key={index.toString()}>{voice}</li>;
            })}
          </ul>
          <p>
            <span className="label-text">Genre: </span>
          </p>
          <p>{this.state.selectedMusic.genre}</p>
          <p>
            <span className="label-text">Video: </span>
          </p>
          <a href={this.state.selectedMusic.video}>
            {this.state.selectedMusic.video}
          </a>
          <p>
            <span className="label-text">Sheet music: </span>
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`http://localhost:3010${this.state.selectedMusic.file}`}
          >
            {this.state.selectedMusic.file}
          </a>
        </div>
        <div className="column is-half">
          {isUserLoggedIn ? (
            <div className="align-ctr dlt-row">
              <button
                onClick={this.handleFavoriteClick}
                className={favBtnClassName}
              >
                <i className="fas fa-heart" />
              </button>
              <Link
                to={`/edit_sheet/${this.state.selectedMusic._id}`}
                className="nav-link"
              >
                Edit
              </Link>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}
