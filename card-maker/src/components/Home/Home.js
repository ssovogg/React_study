import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import classes from "./Home.module.css";
import Maker from "./Maker/Maker";
import Preview from "./Preview/Preview";

const Home = (props) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "a",
      company: "aa",
      theme: "light",
      title: "designer",
      email: "aaa@naver.com",
      message: "hi",
      fileName: 'file',
      fileURL: null
    },
    {
      id: "2",
      name: "b",
      company: "aa",
      theme: "dark",
      title: "designer",
      email: "aaa@naver.com",
      message: "hi",
      fileName: 'file',
      fileURL: 'images/logo.png'
    },
    {
      id: "3",
      name: "c",
      company: "aa",
      theme: "colorful",
      title: "designer",
      email: "aaa@naver.com",
      message: "hi",
      fileName: 'file',
      fileURL: null
    },
  ]);

  return (
    <section className={classes.home}>
      <Header />
      <section className={classes.main}>
        <Maker cards={cards} />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Home;
