import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Videos from "../Videos/Videos";
import classes from "./Home.module.css";

const Home = (props) => {
  const formRef = useRef();
  const searchRef = useRef();
  const [videos, setVideos] = useState([]);
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const searchVideo = (e) => {
    e.preventDefault();
    search(searchRef.current.value);
    formRef.current.reset();
  };

  const search = (query) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  };
  const fetchPopular = () => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRMVXtPaG4-SxkNUfyrjgE-2J5Dtyew-8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <div className={classes.wrap}>
      <Header title="Youtube" />
      <section className={classes.home}>
        <form className={classes.search} onSubmit={searchVideo} ref={formRef}>
          <input type="search" placeholder="search..." ref={searchRef} />
          <button type="submit">search</button>
        </form>
        <Videos videos={videos} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
