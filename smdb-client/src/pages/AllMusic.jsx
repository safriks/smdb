import React, { Component } from "react";
import "./allMusic.css";
import MusicListItem from "../components/MusicListItem";
import FilterColumn from "../components/FilterColumn";
import MusicDetails from "../components/MusicDetails";
import { Link } from "react-router-dom";

export default class AllMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheets: props.sheets,
      selectedMusic: null,
      searchQuery: "",
      genreFilter: [],
      composerFilter: [],
      currentUser: props.currentUser
    };
    this.selectSheetHandler = this.selectSheetHandler.bind(this);
    this.handleGenreFilterInputChange = this.handleGenreFilterInputChange.bind(
      this
    );
    this.handleComposerFilterInputChange = this.handleComposerFilterInputChange.bind(
      this
    );
  }

  componentDidMount() {
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
    if (this.props.location.query) {
      this.setState({
        selectedMusic: this.props.location.query.selectedMusic
      });
    } else {
      return;
    }
  }

  selectSheetHandler(_id) {
    const selectedMusic = this.state.sheets.filter(music => music._id === _id);
    this.setState({ selectedMusic: selectedMusic[0] });
  }

  handleClose = () => {
    this.props.match.params.id = "";
    this.setState({ selectedMusic: null });
  };

  handleSearchInputChange = e => {
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: searchQuery });
  };

  handleGenreFilterInputChange = e => {
    let genreFilterState = [...this.state.genreFilter];
    genreFilterState.includes(e.target.name)
      ? genreFilterState.splice(e.target.name, 1)
      : genreFilterState.push(e.target.name);
    this.setState({ genreFilter: genreFilterState });
  };

  handleComposerFilterInputChange = e => {
    let composerFilterState = [...this.state.composerFilter];
    composerFilterState.includes(e.target.name)
      ? composerFilterState.splice(e.target.name, 1)
      : composerFilterState.push(e.target.name);
    this.setState({ composerFilter: composerFilterState });
  };

  searchSheets = () => {
    const searchedSheets = [...this.state.sheets];

    const sheetsJSX = searchedSheets
      .filter(sheet => {
        if (this.state.searchQuery.length === 0) return true;
        return (
          sheet.title.toLowerCase().includes(this.state.searchQuery) ||
          sheet.composer.first_name
            .toLowerCase()
            .includes(this.state.searchQuery) ||
          sheet.composer.last_name
            .toLowerCase()
            .includes(this.state.searchQuery)
        );
      })
      .filter(sheet => {
        if (this.state.genreFilter.length === 0) return true;
        const filterByGenre = filteredGenre => {
          for (let i = 0; i < sheet.genre.length; i++) {
            return filteredGenre === sheet.genre[i];
          }
        };
        return this.state.genreFilter.some(filterByGenre);
      })
      .filter(sheet => {
        if (this.state.composerFilter.length === 0) return true;
        const filterByComposer = filteredComposer => {
          return filteredComposer === sheet.composer.last_name;
        };
        return this.state.composerFilter.some(filterByComposer);
      })
      .map((sheet, index) => {
        return (
          <MusicListItem
            selectSheetHandler={this.selectSheetHandler}
            key={`sheet ${index + 1}`}
            {...sheet}
            index={index.toString()}
          />
        );
      });

    return sheetsJSX;
  };

  //Check whether user is logged in
  isUserLoggedIn = () => {
    if (Object.keys(this.state.currentUser).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    debugger;
    let sheetsJSX = this.searchSheets();
    var isUserLoggedIn = this.isUserLoggedIn();

    const selectedMusic = this.state.selectedMusic;
    return (
      <>
        <div className="columns">
          {isUserLoggedIn ? (
            <>
              <div className="column is-1 is-offset-1 btn-container">
                <Link
                  to="/upload_sheet"
                  className="button is-light upload-button"
                >
                  <strong>Upload sheet music</strong>
                </Link>
              </div>
              <div className="column is-8">
                <input
                  className="search-el search-bar"
                  placeholder="Search sheet music!"
                  type="text"
                  name="searchQuery"
                  onInput={this.handleSearchInputChange}
                />
              </div>
            </>
          ) : (
            <div className="column is-8 is-offset-2">
              <input
                className="search-el search-bar"
                placeholder="Search sheet music!"
                type="text"
                name="searchQuery"
                onInput={this.handleSearchInputChange}
              />
            </div>
          )}
        </div>
        <div className="columns list-container">
          {this.state.sheets.length > 0 && (
            <>
              <div className="column is-2 is-offset-1 col overflow">
                {selectedMusic ? (
                  sheetsJSX
                ) : (
                  <FilterColumn
                    handleGenreFilterInputChange={
                      this.handleGenreFilterInputChange
                    }
                    handleComposerFilterInputChange={
                      this.handleComposerFilterInputChange
                    }
                  />
                )}
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
                        updateCurrentUser={this.props.updateCurrentUser}
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
