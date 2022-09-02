import React from "react";
import Card from "./Card";
import classes from "./Preview.module.css";

const Preview = ({ cards }) => (
  <section className={classes.preview}>
    <h2 className={classes.title}>Card Preview</h2>
    <ul className={classes.card}>
      {cards.map(card => <Card key={card.id} card={card}/>)}
    </ul>
  </section>
);

export default Preview;
