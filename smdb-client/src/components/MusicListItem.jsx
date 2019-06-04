import React from "react";
import "./musicListItem.css";

export default function MusicListItem(props) {
  return (
    <Link
      to={{
        pathname: "music_details",
        query: {}
      }}
    >
      <div>
        <p>Some title</p>
        <p>Some composer</p>
      </div>
    </Link>
  );
}
