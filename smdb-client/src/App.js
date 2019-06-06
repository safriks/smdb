import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Layout.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllMusic from "./pages/AllMusic";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

class App extends Component {
  constructor() {
    super();
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.isNavBarBlurred = this.isNavBarBlurred.bind(this);
  }
  state = {
    currentUser: {},
    navBarBlur: true,
    err: null
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    axios({
      url: "http://localhost:3010/get_user",
      method: "post",
      withCredentials: true
    })
      .then(response => {
        this.setState(
          {
            currentUser: response.data
          },
          () => {
            this.props.history.push("/all_music");
          }
        );
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  isNavBarBlurred = pathName => {
    debugger;
    if (pathName === "/") {
      this.setState({ navBarBlur: true });
    } else {
      this.setState({ navBarBlur: false });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/all_music" component={AllMusic} />
          <Route exact path="/all_music/:id" component={AllMusic} />
          <Route exact path="/sign_up" component={SignUp} />
          <Route
            exact
            path="/log_in"
            render={props => (
              <Login
                {...props}
                getCurrentUser={this.getCurrentUser}
                isNavBarBlurred={this.isNavBarBlurred}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
