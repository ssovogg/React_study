import React from 'react';
import './app.css';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import VideoList from './components/Vide_list/VideoList';

function App() {
  const [videos, setVideos] = useState([]);
  const [url, setUrl] = useState('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8');

  const fetchUrl = (link) => {
    setUrl(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${link}&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`);
    console.log('fetch', link);
  }

  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${url}`, requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [url]);
  return (
    <div>
      <Header onSearch={fetchUrl}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;