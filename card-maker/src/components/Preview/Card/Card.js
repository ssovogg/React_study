import React from "react";
import classes from "./Card.module.css";
const Card = ({ info }) => {
  const DEFAULT_IMG = "/images/default_logo.png";
  const { name, company, title, theme, email, message, fileName, fielURL } =
    info;
  const url = fielURL || DEFAULT_IMG;

  return (
    <li className={`${classes.card} ${getStyle(theme)}`}>
      <div className={classes.img}>
        <img src={url} alt="img" />
      </div>
      <div className={classes.info}>
        <h2>{name}</h2>
        <p className={classes.title}>{title}</p>
        <p className={classes.company}>{company}</p>
        <p className={classes.email}>{email}</p>
        <pre>{message}</pre>
      </div>
    </li>
  );
};

function getStyle(theme) {
  switch (theme) {
    case "Light":
      return classes.light;
    case "Dark":
      return classes.dark;
    case "Colorful":
      return classes.colorful;
    default:
      throw new Error(`unknow theme: ${theme}`);
  }
}

export default Card;
