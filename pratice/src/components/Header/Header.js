import React from 'react';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate();
  const onLogout = () => {
    navigate('/');
  }
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <button onClick={onLogout}>Logout</button>
    </header>
  )};

export default Header;