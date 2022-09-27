import React from "react";
import styles from "./VideoList.module.css";
import VideoItem from "../Video_item/VideoItem";

const VideoList = (props) => {
  return (
    <ul className={styles.list}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} onClick={props.onClick} display={props.display}/>
      ))}
    </ul>
  );
};

export default VideoList;
