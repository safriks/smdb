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
      //Check whether selected music sheet is stored in favs of current user
      let selectedMusicId = this.state.selectedMusic._id;
      let selectedMusicIsFavorite = this.state.currentUser.favs.includes(
        selectedMusicId
      );
      selectedMusicIsFavorite
        ? this.setState({ isFavorite: true })
        : this.setState({ isFavorite: false });
    }
  }

  //deprecated -- replace with componentDidUpdate oid
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedMusic[0] !== this.props.selectedMusic[0]) {
      this.setState({ selectedMusic: nextProps.selectedMusic[0] });
    }
  }

  handleFavoriteClick = e => {
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
            sheetID: this.state.selectedMusic._id,
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
    debugger;
    var isUserLoggedIn = this.isUserLoggedIn();

    let favBtnClassName = "flex-ctd fav-btn";
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
        <p>{this.state.selectedMusic.title}</p>
        <p>{this.state.selectedMusic.year}</p>
        <p>
          {this.state.selectedMusic.composer.first_name}{" "}
          {this.state.selectedMusic.composer.last_name}
        </p>
        {/*
        <p>
          {this.state.selectedMusic.arrangement_author.first_name}{" "}
          {this.state.selectedMusic.arrangement_author.last_name}
        </p>
        <ul>
          {this.state.selectedMusic.voices.map(voice => {
            return <li>{voice}</li>;
          })}
        </ul>
        <p>{this.state.selectedMusic.genre}</p>
        <a href={this.state.selectedMusic.video}>{this.state.selectedMusic.video}</a>
        <p>{this.state.selectedMusic.file}</p> */}
      </div>
    );
  }
}
