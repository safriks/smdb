import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Leave now and never come back</h1>
        <Redirect to="/">To Alabama</Redirect>
      </div>
    );
  }
}

export default NotFound;
