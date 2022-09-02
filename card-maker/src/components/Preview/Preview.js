import React from "react";
import Card from "./Card/Card";
import classes from "./Preview.module.css";

const Preview = ({ infos }) => (
  <section className={classes.preview}>
    <h1>Preview</h1>
    <section className={classes.cards}>
        <ul>
          {Object.keys(infos).map(key => (
            <Card key={key} info={infos[key]} />
          ))}
        </ul>
      </section>
  </section>
);

export default Preview;
