import React, { Component } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      sheets: props.sheets
    };
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    }
  }

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    let favorites = "";
    if (this.isUserLoggedIn()) {
      if (this.state.currentUser.favs.length <= 0) {
        favorites = <p>No favorites yet... Go add some!</p>;
      } else {
        var favSheets = this.state.sheets.filter(sheet => {
          return this.state.currentUser.favs.includes(sheet._id);
        });
        favorites = (
          <ul className="custom-list">
            {favSheets.map((sheet, index) => (
              <Link
                className="fav-link"
                key={`fav${index + 1}`}
                to={{
                  pathname: "/all_music",
                  query: {
                    selectedMusic: sheet
                  }
                }}
              >
                {" "}
                <li>{sheet.title}</li>
              </Link>
            ))}
          </ul>
        );
      }
    }
    return (
      <div className="columns is-centered">
        <div className="column is-half col container background">
          <div>
            <h1 className="header flex-ctd">Profile</h1>
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <p>
                <span className="label-text">Name: </span>
                {this.state.currentUser.first_name}{" "}
                {this.state.currentUser.last_name}
              </p>
              <p>
                <span className="label-text">Email: </span>
                {this.state.currentUser.email}
              </p>
              <p>
                <span className="label-text">Favorites: </span>
              </p>
              {favorites}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
