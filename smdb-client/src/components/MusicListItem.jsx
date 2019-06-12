import React from "react";
import "./musicListItem.css";

export default function MusicListItem(props) {
  return (
    <div
      onClick={() => {
        props.selectSheetHandler(props._id);
      }}
      className="list-item background"
    >
      <p>
        <span className="label-text">Title: </span>
      </p>
      <p>{props.title}</p>
      <p>
        <span className="label-text">Composer: </span>
      </p>
      <p>
        {props.composer.first_name} {props.composer.last_name}
      </p>
    </div>
  );
}
