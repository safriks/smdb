import React, { Component } from "react";
import "./allMusic.css";
import axios from "axios";
import MusicListItem from "../components/MusicListItem";
import FilterColumn from "../components/FilterColumn";
import MusicDetails from "../components/MusicDetails";

export default class AllMusic extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      sheets: [],
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
    debugger;
    let pathName = this.props.history.location.pathname;
    this.props.isNavBarBlurred(pathName);
    axios
      .get(`${process.env.REACT_APP_API_URL}/all_music`)
      .then(response => {
        this.setState({
          sheets: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
    debugger;
    if (this.props.location.query) {
      debugger;
      this.setState({
        selectedMusic: this.props.location.query.selectedMusic
      });
    } else {
      debugger;
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

  render() {
    debugger;
    let sheetsJSX = this.searchSheets();

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
          </div>
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
