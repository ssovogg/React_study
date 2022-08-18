import React from 'react';
import styles from './VideoList.module.css';
import VideoItem from '../Video_item/VideoItem';

const VideoList = (props) => (
    <ul className={styles.list}>
      {props.videos.map(video => (
        <VideoItem key={video.id} video={video}/>
      ))}
    </ul>
  );

export default VideoList;