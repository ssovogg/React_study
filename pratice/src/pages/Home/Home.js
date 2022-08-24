import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Videos from "../Videos/Videos";
import classes from "./Home.module.css";

const Home = ({ youtube }) => {
  const formRef = useRef();
  const searchRef = useRef();
  const [videos, setVideos] = useState([]);

  const searchVideo = (e) => {
    e.preventDefault();
    youtube //
      .search(searchRef.current.value)
      .then((result) => {
        setVideos(result);
      });
    formRef.current.reset();
  };

  useEffect(() => {
    youtube.mostPopular().then((result) => {
      setVideos(result);
    });
  }, [youtube]);

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
