import React, { Component } from "react";
import "./allMusic.css";
import axios from "axios";

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
    return <h1>All Music</h1>;
  }
}
