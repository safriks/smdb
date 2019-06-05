import React, { Component } from "react";
import "./allMusic.css";
import axios from "axios";
import MusicListItem from "../components/MusicListItem";
import FilterColumn from "../components/FilterColumn";
import MusicDetails from "../components/MusicDetails";

export default class AllMusic extends Component {
  constructor() {
    super();
    this.state = {
      sheets: [],
      selectedMusic: null,
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3010/all_music/")
      .then(response => {
        debugger;
        let selectedMusic = null;
        console.log(this.props.match.params.id);

        if (this.props.match.params.id) {
          //filter false
          const queryId = this.props.match.params.id;
          selectedMusic = response.data.filter(music => music._id === queryId);
        }

        this.setState({ sheets: response.data, selectedMusic: selectedMusic });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.match.params.id != this.props.match.params.id) {
      debugger;
      const data = [...this.state.sheets];
      const queryId = nextProps.match.params.id;
      const selectedMusic = data.filter(music => music._id === queryId);
      debugger;
      this.setState({ selectedMusic: selectedMusic });
    }
    debugger;
  }

  render() {
    let sheetsJSX = this.state.sheets.map((sheet, index) => {
      return (
        <MusicListItem
          key={`sheet ${index + 1}`}
          {...sheet}
          index={index.toString()}
        />
      );
    });

    const selectedMusic = this.state.selectedMusic;

    debugger;
    return (
      <>
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <input
              className="search-el search-bar"
              placeholder="Search sheet music!"
              type="text"
            />
            <button className="search-el search-btn">Search</button>
          </div>
        </div>
        <div className="columns">
          {this.state.sheets.length > 0 && (
            <>
              <div className="column is-2 is-offset-1 overflow col">
                {selectedMusic ? sheetsJSX : <FilterColumn />}
              </div>
              <div className="column is-8 overflow col">
                <div className="columns">
                  <div className="column is-12 overflow dlt-row">
                    {selectedMusic ? <button className="delete" /> : <></>}
                  </div>
                </div>
                {selectedMusic ? (
                  <MusicDetails selectedMusic={this.state.selectedMusic} />
                ) : (
                  sheetsJSX
                )}
              </div>
            </>
          )}
        </div>
      </>
    );
  }
}
