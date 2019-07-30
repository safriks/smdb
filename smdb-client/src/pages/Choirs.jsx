import React, { Component } from "react";
// import "./choirs.css";
// import { Link } from "react-router-dom";

export default class MusicDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
  }

  render() {
    return <h1>Choirs</h1>;
  }
}
