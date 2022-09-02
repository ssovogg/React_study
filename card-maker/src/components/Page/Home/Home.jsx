import React from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import classes from "./Home.module.css";
import Preview from "../../Preview/Preview";
import Maker from "../../Maker/Maker";
import { useState } from "react";

const Home = (props) => {
  const [infos, setInfos] = useState([
    {
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
    {
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
    {
      id: "d3",
      name: "Soo2",
      title: "aa",
      company: "apple",
      theme: "Colorful",
      email: "soo@naver.com",
      message: "message",
      fileName: "img",
      fielURL: "img.png",
    },
  ])

  const onAdd = (info) => {
    const updatedCard = [info, ...infos];
    setInfos(updatedCard);
  }
  return (
    <section className={classes.home}>
      <Header />
      <section className={classes.container}>
        <Maker infos={infos} onAdd={onAdd} />
        <Preview infos={infos} />
      </section>
      <Footer />
    </section>
  );
};

export default Home;
