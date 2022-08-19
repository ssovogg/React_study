import React from "react";
import classes from './CardPreview.module.css';
import Preview from "./Preview";

const CardPreview = (props) => (
  <section className={classes.container}>
    <h2>Card Preview</h2>
    <ul>
      <Preview userInfo={props.userInfo}/>
    </ul>
  </section>
);

export default CardPreview;
