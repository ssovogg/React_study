import React from 'react';
import Card from './Card';
import classes from './Cards.module.css';

const Cards = (props) => {
  const makeCard = (userInfo) => {
    props.onSubmit(userInfo);
  }

  return (
      <ul>
        <Card onSubmit={makeCard}/>
      </ul>
  )};

export default Cards;