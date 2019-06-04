//componentDidMount props.query ? this.state = props.query : Api Call
//componentDidUpdate

/* 
this.state = {
  music:null,
  loading:true
}

componentDidMount() {

  if(this.props.query) {
    this.setState({music: ...this.props.query, loading:false})
  }
  else {
    axios.get()
  }

}


*/

/* 
render() {
 
  { this.state.loading && <>Loading</> }
  {this.state.music && 
      <>

      <Column music={this.state.music} />
      <p>{this.state.music.name}

    </>
  }



}
*/

import React, { Component } from "react";
import axios from "axios";

export default function MusicDetails(props) {
  debugger;
  let selectedMusic = props.selectedMusic[0];

  return (
    <div>
      <p>{selectedMusic.composer}</p>
      <p>{selectedMusic.title}</p>
    </div>
  );
}
