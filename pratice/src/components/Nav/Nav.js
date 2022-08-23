import React from 'react';
import classes from './Nav.module.css';
import { Link } from 'react-router-dom'

const Nav = (props) => (
    <nav className={classes.nav}>
      <Link to='/home' className={classes.link}>Youtube</Link>
      <Link to='/card' className={classes.link}>Card Maker</Link>
    </nav>
  );

export default Nav;