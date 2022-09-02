import React from 'react';
import classes from './Card.module.css';

const Card = ({ card }) =>{ 
  const DEFAULT_URL = 'images/default_logo.png'
  const { name, company, theme, title, email, message, fileName, fileURL } = card;
  const url = fileURL || DEFAULT_URL;
  return (
    <li className={`${classes.card} ${getStyle(theme)}`}>
      <img src={url} alt="profile image" />
      <div className={classes.info}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.company}>{company}</p>
        <p>{title}</p>
        <p>{email}</p>
        <p>{message}</p>
      </div>
    </li>
  )};

function getStyle(theme) {
  switch(theme){
    case 'light':
      return classes.light;
    case 'dark':
      return classes.dark;
    case 'colorful':
      return classes.colorful;
    default:
      throw new Error(`unknow style: ${theme}`)

  }
}

export default Card;