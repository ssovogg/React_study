import React from "react";
import classes from "./Preview.module.css";
import img from '../../../../assets/picture.png';

const Preview = ({ card }) => {
  const { id, text, author, fileUrl } = card;

  return (
    <div className={classes.wrap}>
      <div className={classes.preview}>
        <pre>{text}</pre>
        <span>{author}</span>
        <img src={fileUrl ? fileUrl : img} alt="background" />
      </div>
    </div>
  );
};

export default Preview;
