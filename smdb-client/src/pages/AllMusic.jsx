import React, { Component } from "react";
import "./allMusic.css";
import axios from "axios";
import Navbar from "../components/Navbar";

export default class AllMusic extends Component {
  constructor() {
    super();
    this.state = {
      music: []
    };
  }

  componentDidMount() {
    axios
      .get("http://APIAdress/all_music/")
      .then(response => {
        this.setState({ music: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <input
              className="search-el search-bar"
              placeholder="Search sheet music!"
              type="text"
            />
            <button className="search-el search-btn">Search</button>
          </div>
        </div>
        <div className="columns">
          <div className="column is-2 is-offset-1 black">
            <h1>filter column</h1>
          </div>
          <div className="column is-8 blue">
            <h1>all music column</h1>
          </div>
        </div>
      </>
    );
  }
}
