import React from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import classes from "./Home.module.css";
import Preview from "../../Preview/Preview";
import Maker from "../../Maker/Maker";
import { useState } from "react";

const Home = ({ FileInput }) => {
  const [infos, setInfos] = useState({
    'd1': {
      id: "d1",
      name: "Soo",
      title: "aa",
      company: "apple",
      theme: "Light",
      email: "soo@naver.com",
      message: "message",
      fileName: "img",
      fielURL: null,
    },
    'd2': {
      id: "d2",
      name: "Soo1",
      title: "aa",
      company: "apple",
      theme: "Dark",
      email: "soo@naver.com",
      message: "message",
      fileName: "img",
      fielURL: "img.png",
    },
    'd3': {
      id: "d3",
      name: "Soo2",
      title: "aa",
      company: "apple",
      theme: "Colorful",
      email: "soo@naver.com",
      message: "message",
      fileName: "img",
      fielURL: null,
    },
  });

  const createOrUpdateCard = (info) => {
    setInfos(infos => {
      const updated = { ...infos };
      updated[info.id] = info;
      return updated;
    });
  };

  const deleteCard = (info) => {
    setInfos(infos => {
      const updated = { ...infos };
      delete updated[info.id];
      return updated;
    });
  };

  return (
    <section className={classes.home}>
      <Header />
      <section className={classes.container}>
        <Maker
        FileInput={FileInput}
          infos={infos}
          createOrUpdateCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview infos={infos} />
      </section>
      <Footer />
    </section>
  );
};

export default Home;
