import React from "react";
import Cards from "./Cards";
import classes from './CardMaker.module.css';

const CardMaker = (props) => {
  const makeCard = (userInfo) => {
    props.onSubmit(userInfo);
  }

  return (
  <section className={classes.container}>
    <h2>Card Maker</h2>
    <Cards onSubmit={makeCard}/>
  </section>
)};

export default CardMaker;
