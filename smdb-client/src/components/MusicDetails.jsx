import React, { Component } from "react";
import "./musicDetails.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class MusicDetails extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      selectedMusic: props.selectedMusic[0],
      currentUser: props.currentUser,
      isFavorite: false
    };
  }

  componentDidMount() {
    if (this.isUserLoggedIn()) {
      this.checkIfFavorite();
    }
  }

  //Check whether selected music sheet is stored in favs of current user
  checkIfFavorite = () => {
    debugger;
    let selectedMusicId = this.state.selectedMusic._id;
    let selectedMusicIsFavorite = this.state.currentUser.favs.includes(
      selectedMusicId
    );
    selectedMusicIsFavorite
      ? this.setState({ isFavorite: true })
      : this.setState({ isFavorite: false });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedMusic[0] !== this.props.selectedMusic[0]) {
      this.setState({ selectedMusic: this.props.selectedMusic[0] });
    }
  }

  handleFavoriteClick = e => {
    debugger;
    this.state.isFavorite
      ? axios({
          url: "http://localhost:3010/remove_fav",
          data: {
            sheetId: this.state.selectedMusic._id,
            currentUserId: this.state.currentUser._id
          },
          method: "post",
          withCredentials: true
        }).then(response => {
          this.setState({ isFavorite: false });
        })
      : axios({
          url: "http://localhost:3010/add_fav",
          data: {
            sheetId: this.state.selectedMusic._id,
            currentUserId: this.state.currentUser._id
          },
          method: "post",
          withCredentials: true
        }).then(response => {
          this.setState({ isFavorite: true });
        });
  };

  //Check whether user is logged in
  isUserLoggedIn = () => {
    debugger;
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    var isUserLoggedIn = this.isUserLoggedIn();

    let favBtnClassName = "flex-ctd fav-btn";
    debugger;
    this.state.isFavorite
      ? (favBtnClassName = "flex-ctd fav-btn is-fav")
      : (favBtnClassName = "flex-ctd fav-btn not-fav");

    return (
      <div>
        {isUserLoggedIn ? (
          <div className="align-ctr">
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
    );
  }
}
