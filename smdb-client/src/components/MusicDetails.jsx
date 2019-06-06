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

import React from "react";

export default function MusicDetails(props) {
  debugger;
  let selectedMusic = props.selectedMusic[0];

  return (
    <div>
      <p>
        {selectedMusic.composer.first_name} {selectedMusic.composer.last_name}
      </p>
      <p>{selectedMusic.title}</p>
      <p>{selectedMusic.year}</p>
      <ul>
        {selectedMusic.files.map(file => {
          return <li>{file}</li>;
        })}
      </ul>
      <ul>
        {selectedMusic.genre.map(genre => {
          return <li>{genre}</li>;
        })}
      </ul>
    </div>
  );
}
