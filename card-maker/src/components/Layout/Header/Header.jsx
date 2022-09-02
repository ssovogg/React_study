import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
    <header className={classes.header}>
      <img src="images/logo.png" alt="logo" />
      <h1>Card Maker</h1>
    </header>
  );

export default Header;