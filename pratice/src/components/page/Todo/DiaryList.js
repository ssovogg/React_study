import React from "react";
import classes from "./DiaryList.module.css";

const DiaryList = ({ diary }) => {
  const { title, content, date } = diary;
  return (
    <li className={classes.diary}>
      <div className={classes.img} />
      <div className={classes.info}>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default DiaryList;
