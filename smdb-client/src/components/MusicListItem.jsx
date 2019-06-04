import React from "react";
import "./musicListItem.css";
import { Link } from "react-router-dom";

export default function MusicListItem(props) {
  return (
    <Link
      to={{
        pathname: `/all_music/${props.id}`,
        query: {
          composer: props.composer,
          files: props.files,
          genre: props.genre,
          tags: props.tags,
          title: props.title,
          video: props.video,
          year: props.year
        }
      }}
    >
      <div className="list-item">
        <p>{props.title}</p>
        <p>{props.composer}</p>
      </div>
    </Link>
  );
}
