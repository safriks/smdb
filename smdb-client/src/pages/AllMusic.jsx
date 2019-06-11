import React, { Component } from "react";
import "./allMusic.css";
import axios from "axios";
import MusicListItem from "../components/MusicListItem";
import FilterColumn from "../components/FilterColumn";
import MusicDetails from "../components/MusicDetails";

export default class AllMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheets: [],
      selectedMusic: null,
      searchQuery: "",
      currentUser: props.currentUser
      // isLoading: true
    };
  }

  componentDidMount() {
    debugger;
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
    axios
      .get("http://localhost:3010/all_music/")
      .then(response => {
        let selectedMusic = null;

        if (this.props.match.params.id) {
          //filter selected list item
          const queryId = this.props.match.params.id;
          selectedMusic = response.data.filter(music => music._id === queryId);
        }

        this.setState({ sheets: response.data, selectedMusic: selectedMusic });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //deprecated -- replace with componentDidUpdate oid
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      const data = [...this.state.sheets];

      //filter selected list item
      const queryId = nextProps.match.params.id;
      const selectedMusic = data.filter(music => music._id === queryId);
      this.setState({ selectedMusic: selectedMusic });
    }
  }

  handleClose = () => {
    this.props.match.params.id = "";
    this.setState({ selectedMusic: null });
  };

  handleSearchInputChange = e => {
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: searchQuery });
  };

  render() {
    //Show all sheets if search bar is empty
    if (this.searchQuery === 0) {
      var sheetsJSX = this.state.sheets.map((sheet, index) => {
        return (
          <MusicListItem
            key={`sheet ${index + 1}`}
            {...sheet}
            index={index.toString()}
          />
        );
      });
    } else {
      //Filter all sheets with search query --- ADD FUNCTION THAT MAKES QUERYING BOTH COMPOSER AND TITLE AT SAME TIME
      let searchedSheets = this.state.sheets.filter(
        sheet =>
          sheet.title.toLowerCase().includes(this.state.searchQuery) ||
          sheet.composer.first_name
            .toLowerCase()
            .includes(this.state.searchQuery) ||
          sheet.composer.last_name
            .toLowerCase()
            .includes(this.state.searchQuery)
      );

      var sheetsJSX = searchedSheets.map((sheet, index) => {
        return (
          <MusicListItem
            key={`sheet ${index + 1}`}
            {...sheet}
            index={index.toString()}
          />
        );
      });
    }

    const selectedMusic = this.state.selectedMusic;

    return (
      <>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <input
              className="search-el search-bar"
              placeholder="Search sheet music!"
              type="text"
              name="searchQuery"
              onInput={this.handleSearchInputChange}
            />
            {/* <button
              onClick={this.handleSearchClick}
              className="search-el search-btn"
            >
              Search
            </button> */}
          </div>
        </div>
        <div className="columns list-container">
          {this.state.sheets.length > 0 && (
            <>
              <div className="column is-2 is-offset-1 col overflow">
                {selectedMusic ? sheetsJSX : <FilterColumn />}
              </div>
              <div className="column is-8 col">
                <div className="columns">
                  <div className="column is-12 dlt-row">
                    {selectedMusic ? (
                      <button onClick={this.handleClose} className="delete" />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="columns overflow">
                  <div className="column is-12">
                    {selectedMusic ? (
                      <MusicDetails
                        selectedMusic={this.state.selectedMusic}
                        currentUser={this.state.currentUser}
                      />
                    ) : (
                      sheetsJSX
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
