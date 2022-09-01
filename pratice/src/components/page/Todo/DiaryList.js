import React from "react";
import classes from "./DiaryList.module.css";
import defaultImg from '../../../assets/picture.png'

const DiaryList = ({ diary, onShow }) => {
  const { title, content, date, img } = diary;
  const onClick = () => {
    onShow(diary);
  }
  return (
    <li className={classes.diary} onClick={onClick}>
      <div className={classes.img}>
        {img && <img src={img} alt="img" />}
      </div>
      <div className={classes.info}>
        <span>{date}</span>
        <h2>{title}</h2>
        <pre>{content}</pre>
      </div>
    </li>
  );
};

export default DiaryList;
