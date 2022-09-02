import React from "react";
import Card from "./Card/Card";
import classes from "./Preview.module.css";

const Preview = ({ infos }) => (
  <section className={classes.preview}>
    <h1>Preview</h1>
    <section className={classes.cards}>
        <ul>
          {infos.map(info => (
            <Card key={info.id} info={info} />
          ))}
        </ul>
      </section>
  </section>
);

export default Preview;
