import React, { Component } from "react";
import axios from "axios";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      name: "",
      conductor: "",
      singers: "",
      choir_type: "",
      about: "About choir...",
      repertoire: ""
    };
  }

  componentDidMount() {
    //Check if user is logged in -- else redirect to landing
    if (!this.isUserLoggedIn()) {
      this.props.history.push("/");
    } else {
      let pathName = this.props.history.location.pathname;
      this.props.isNavBarBlurred(pathName);
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

  //Cancel button takes user back to last page
  handleCancelClick = e => {
    this.props.history.goBack();
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    debugger;

    axios({
      url: `${process.env.REACT_APP_API_URL}/create_choir`,
      data: {
        name: this.state.name,
        conductor: this.state.conductor,
        singers: this.state.singers,
        choir_type: this.state.choir_type,
        about: this.state.about,
        repertoire: this.state.repertoire
      },
      method: "post",
      withCredentials: true
    })
      .then(response => {
        this.props.history.push("/choirs");
      })
      .catch(err => {
        this.setState({
          err: err
        });
      });
  };

  render() {
    return (
      <div className="columns is-centered">
        <div className="column is-half col container background">
          <div>
            <h1 className="header flex-ctd">Create choir</h1>
          </div>
          <div className="columns overflow-form">
            <div className="column is-6 is-offset-3">
              <form
                className="form"
                onSubmit={this.handleFormSubmit}
                noValidate
              >
                <div className="field">
                  <label>Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      onChange={this.handleInputChange}
                      value={this.state.name}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Conductor</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="conductor"
                        onChange={this.handleInputChange}
                        value={this.state.conductor}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Singers</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="singers"
                        onChange={this.handleInputChange}
                        value={this.state.singers}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>Choir type</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="choir_type"
                        onChange={this.handleInputChange}
                        value={this.state.choir_type}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label>About</label>
                  <div className="control">
                    <textarea
                      name="about"
                      className="textarea"
                      onChange={this.handleInputChange}
                      value={this.state.about}
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Repertoire</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name="repertoire"
                        onChange={this.handleInputChange}
                        value={this.state.repertoire}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control">
                    <button type="submit" className="button is-black">
                      <strong>Next</strong>
                    </button>
                  </p>
                  <button
                    onClick={this.handleCancelClick}
                    className="button is-light"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//CONNECT STATE AND FORM INPUT VALUES
