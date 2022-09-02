import React from 'react';
import CardForm from './CardForm';
import classes from './Maker.module.css';

const Maker = ({ cards }) => (
    <section className={classes.maker}>
      <h2 className={classes.title}>Card Maker</h2>
      <ul className={classes.cards}>
        {cards.map(card => <CardForm key={card.id} card={card}/>)}
      </ul>
    </section>
  );

export default Maker;