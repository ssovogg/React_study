import React from "react";
import styles from "./VideoItem.module.css";

const VideoItem = ({video: { snippet }}) => (
  <li className={styles.list}>
    <a href="#">
      <img
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <div className={styles.info}>
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </a>
  </li>
);

export default VideoItem;
