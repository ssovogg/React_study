import React from 'react';
import classes from './Button.module.css';

const Button = ({ name, onClick }) => (
    <button onClick={onClick} className={classes.button}>
      {name}
    </button>  
  );

export default Button;