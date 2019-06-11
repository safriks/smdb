import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./Layout.css";
import axios from "axios";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import AllMusic from "./pages/AllMusic";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Upload from "./pages/Upload";
import EditSheet from "./pages/EditSheet";
import { Redirect } from "react-router-dom";
import Profile from "./pages/Profile";
import history from "./history";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      navBarClassName: "navbar",
      err: null
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.isNavBarBlurred = this.isNavBarBlurred.bind(this);
    this.logOut = this.logOut.bind(this);
  }

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
            history.push("/all_music");
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

  logOut = () => {
    debugger;
    this.setState({ currentUser: {} }, () => {
      history.push("/");
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          currentUser={this.state.currentUser}
          navBarClassName={this.state.navBarClassName}
          logOut={this.logOut}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Landing
                {...props}
                isNavBarBlurred={this.isNavBarBlurred}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/all_music"
            render={props => (
              <AllMusic
                {...props}
                isNavBarBlurred={this.isNavBarBlurred}
                currentUser={this.state.currentUser}
              />
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
              <Upload
                {...props}
                isNavBarBlurred={this.isNavBarBlurred}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/edit_sheet/:id"
            render={props => (
              <EditSheet
                {...props}
                isNavBarBlurred={this.isNavBarBlurred}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={props => (
              <Profile
                {...props}
                isNavBarBlurred={this.isNavBarBlurred}
                currentUser={this.state.currentUser}
              />
            )}
          />
          {/*Take user to landing if called route is non-existing */}
          <Route path="/*" component={Redirect} />
        </Switch>
      </div>
    );
  }
}

export default App;
