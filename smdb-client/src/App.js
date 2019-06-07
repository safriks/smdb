import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Layout.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllMusic from "./pages/AllMusic";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import EditSheet from "./pages/EditSheet";

class App extends Component {
  constructor() {
    super();
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.isNavBarBlurred = this.isNavBarBlurred.bind(this);
  }
  state = {
    currentUser: {},
    navBarClassName: "navbar",
    err: null
  };

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = () => {
    debugger
    axios({
      url: "http://localhost:3010/get_user",
      method: "post",
      withCredentials: true
    })
      .then(response => {
        debugger
        this.setState(
          {
            currentUser: response.data
          },
          () => {
            debugger
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
    if (pathName === "/") {
      this.setState({ navBarClassName: "navbar blur" });
    } else {
      this.setState({ navBarClassName: "navbar" });
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.currentUser}
          navBarClassName={this.state.navBarClassName}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Landing {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
          <Route
            exact
            path="/all_music"
            render={props => (
              <AllMusic {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
          <Route
            exact
            path="/all_music/:id"
            render={props => (
              <AllMusic {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
          <Route
            exact
            path="/sign_up"
            render={props => (
              <SignUp {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
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
          <Route
            exact
            path="/upload"
            render={props => (
              <Upload {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
          <Route
            exact
            //path="/edit_sheet/:id"
            path="/edit_sheet"
            render={props => (
              <EditSheet {...props} isNavBarBlurred={this.isNavBarBlurred} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
