import React from 'react';
import classes from './Button.module.css'

const Button = ({ value, onClick }) => (
    <button className={classes.button} onClick={onClick}>{value}</button>
  );

export default Button;