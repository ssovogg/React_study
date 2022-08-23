import React, { useState } from "react";
import SelectVideo from "../SelectVideo/SelectVideo";
import Video from "../Video/Video";
import classes from "./Videos.module.css";

const Videos = ({ videos }) => {
  const [selectVideo, setSelectVideo] = useState(null);
  const showVideo = (selectVideo) => {
    setSelectVideo(selectVideo);
    console.log(selectVideo);
  }
  return (
    <>
      {selectVideo && <SelectVideo video={selectVideo} />}
      <ul className={classes.videos}>
        {videos.map((video) => (
          <Video key={video.id} video={video} onClick={showVideo} />
        ))}
      </ul>
    </>
  );
};

export default Videos;
