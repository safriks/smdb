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
      <div className="columns">
        <div className="column is-full">
          <input type="text" />
          <div className="columns">
            <div className="column is-one-quarter">
              <h1>filter column</h1>
            </div>
            <div className="column is-half">
              <h1>all music column</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
