import React from "react";
import classes from "./DiaryList.module.css";

const DiaryList = ({ diary, onShow }) => {
  const { title, content, date, img } = diary;
  const onClick = () => {
    onShow(diary);
  }
  return (
    <li className={classes.diary} onClick={onClick}>
      <div className={classes.img}>
        <img src={img} alt="img" />
      </div>
      <div className={classes.info}>
        <span>{date}</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </li>
  );
};

export default DiaryList;
