import React, { useEffect, useState } from "react";
import VideoList from "./components/VideoList/VideoList";

function App(props) {
  const [videos, setVideos] = useState([]);

  useEffect(() => { // mount가 되었거나 update가 될 때마다 호출
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <div>
    <VideoList videos={videos}/>
  </div>;
}

export default App;
