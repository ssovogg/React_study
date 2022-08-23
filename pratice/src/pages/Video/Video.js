import React from 'react';
import classes from './Video.module.css';

const Video = ({ onClick, video, video: { snippet: info } }) => {
  const onSelect = () => onClick(video);
  
  return (
  <li className={classes.videos} onClick={onSelect}>
    <div className={classes.thumb}>
      <img src={info.thumbnails.high.url} alt={info.title} />
    </div>
    <div className={classes.info}>
      <h3 className={classes.title}>{info.title}</h3>
      <p className={classes.channel}>{info.channelTitle}</p>
      <p className={classes.date}>{info.publishedAt}</p>
    </div>
  </li>
)};

export default Video;