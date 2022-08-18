import React from 'react';
import './app.css';
import { useEffect, useState } from 'react';
import SearchHeader from './components/search_header/SeartchHeader'
import VideoList from './components/Vide_list/VideoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube.search(query).then(result => setVideos(result));
  };

  useEffect(()=>{
    youtube.mostPopular().then(result => setVideos(result));
  }, []);
  return (
    <div>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;