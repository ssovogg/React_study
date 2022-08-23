import React from "react";
import classes from "./SelectVideo.module.css";

const SelectVideo = ({ video, video: { snippet: info } }) => (
  <section className={classes.video}>
    <iframe
      type="text/html"
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div className={classes.info}>
      <ul className={classes.tags}>
        {info.tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>
      <h2>{info.title}</h2>
      <div className={classes.channel}>
        <p>{info.channelTitle}</p>
        <pre>{info.description}</pre>
      </div>
    </div>
  </section>
);

export default SelectVideo;
