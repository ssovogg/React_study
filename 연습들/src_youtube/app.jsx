import React from "react";
import classes from "./app.module.css";
import { useEffect, useState } from "react";
import SearchHeader from "./components/search_header/SeartchHeader";
import VideoList from "./components/Vide_list/VideoList";
import ShowVideo from "./components/show_video/ShowVideo";
// import ShowVideo from './components/show_video/ShowVideo';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [seletedVideo, setSeletedVideo] = useState(null);

  const search = (query) => {
    setSeletedVideo(null);
    youtube
      .search(query)
      .then((result) => {
        setVideos(result)
      });
  };

  const showVideoHandle = (info) => {
    setSeletedVideo(info);
  };

  useEffect(() => {
    youtube.mostPopular().then((result) => setVideos(result));
  }, [youtube]);

  return (
    <div className={classes.app}>
      <SearchHeader onSearch={search} />
      <section className={classes.section}>
        {seletedVideo && (
          <div className={classes.detail}>
            <ShowVideo info={seletedVideo} />
          </div>
        )}
        <div className={classes.list}>
          <VideoList 
            videos={videos} 
            onClick={showVideoHandle}
            display={seletedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
