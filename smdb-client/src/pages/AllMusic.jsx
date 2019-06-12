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
    axios
      .get("http://localhost:3010/all_music/")
      .then(response => {
        this.setState({
          sheets: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectSheetHandler(_id) {
    const selectedMusic = this.state.sheets.filter(music => music._id === _id);
    this.setState({ selectedMusic: selectedMusic });
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
    debugger;
    let genreFilterState = [...this.state.genreFilter];
    genreFilterState.includes(e.target.name)
      ? genreFilterState.splice(e.target.name, 1)
      : genreFilterState.push(e.target.name);
    this.setState({ genreFilter: genreFilterState });
  };

  handleComposerFilterInputChange = e => {
    debugger;
    let composerFilterState = [...this.state.composerFilter];
    composerFilterState.includes(e.target.name)
      ? composerFilterState.splice(e.target.name, 1)
      : composerFilterState.push(e.target.name);
    this.setState({ composerFilter: composerFilterState });
  };

  // searchSheets = () => {
  //   let searchQuery = this.state.searchQuery;
  //   let searchedSheets = this.state.sheets
  //   searchQuery.length === 0 ? (this.state.sheets.map((sheet, index) => {
  //     return (
  //       <MusicListItem
  //         selectSheetHandler={this.selectSheetHandler}
  //         key={`sheet ${index + 1}`}
  //         {...sheet}
  //         index={index.toString()}
  //       />
  //     );
  //   })
  //   ) : (searchedSheets.filter(
  //     sheet =>
  //       sheet.title.toLowerCase().includes(this.state.searchQuery) ||
  //       sheet.composer.first_name
  //         .toLowerCase()
  //         .includes(this.state.searchQuery) ||
  //       sheet.composer.last_name
  //         .toLowerCase()
  //         .includes(this.state.searchQuery)
  //     )
  //     .map((sheet, index) => {
  //       return (
  //         <MusicListItem
  //           selectSheetHandler={this.selectSheetHandler}
  //           key={`sheet ${index + 1}`}
  //           {...sheet}
  //           index={index.toString()}
  //         />
  //       );
  //     })
  //   )

  // };

  render() {
    //Show all sheets if search bar is empty
    if (this.state.searchQuery.length === 0) {
      var sheetsJSX = this.state.sheets.map((sheet, index) => {
        debugger;
        return (
          <MusicListItem
            selectSheetHandler={this.selectSheetHandler}
            key={`sheet ${index + 1}`}
            {...sheet}
            index={index.toString()}
          />
        );
      });
    } else {
      //Filter all sheets with search query
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
            selectSheetHandler={this.selectSheetHandler}
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

// filterSheets = () => {
//   if (
//     this.state.genreFilter.length === 0 &&
//     this.state.composerFilter.length === 0 &&
//     this.state.searchQuery.length === 0
//   ) {
//     var sheetsJSX = this.state.sheets.map((sheet, index) => {
//       return (
//         <MusicListItem
//           selectSheetHandler={this.selectSheetHandler}
//           key={`sheet ${index + 1}`}
//           {...sheet}
//           index={index.toString()}
//         />
//       );
//     });
//   } else if (
//     this.state.genreFilter.length > 0 &&
//     this.state.composerFilter.length === 0 &&
//     this.state.searchQuery.length === 0
//   ) {
//     let searchedSheets = this.state.sheets.filter(sheet => {
//       for (let i = 0; i < this.state.genreFilter.length; i++) {
//         sheet.genre.includes(this.state.genreFilter[i]);
//       }
//     });
//     var sheetsJSX = searchedSheets.map((sheet, index) => {
//       return (
//         <MusicListItem
//           selectSheetHandler={this.selectSheetHandler}
//           key={`sheet ${index + 1}`}
//           {...sheet}
//           index={index.toString()}
//         />
//       );
//     });
//   } else if (
//     this.state.genreFilter.length > 0 &&
//     this.state.composerFilter.length > 0 &&
//     this.state.searchQuery.length === 0
//   ) {

//   }
// };
