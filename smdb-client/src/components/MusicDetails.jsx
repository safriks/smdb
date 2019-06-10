import React, { Component } from "react";
import "./musicDetails.css";

export default class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMusic: props.selectedMusic[0],
      currentUser: props.currentUser,
      isFavorite: false
    };
  }

  //deprecated -- replace with componentDidUpdate oid
  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.selectedMusic[0] !== this.props.selectedMusic[0]) {
      this.setState({ selectedMusic: nextProps.selectedMusic[0] });
    }
  }

  render() {
    return (
      <div>
        <div>
          <button class="flex-ctd fav-btn">
            <i class="fas fa-heart" />
          </button>
        </div>
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
