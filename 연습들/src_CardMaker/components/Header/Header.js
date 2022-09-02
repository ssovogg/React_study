import React from "react";
import classes from "./Header.module.css";

const Header = ({ onLogout }) => (
  <header className={classes.header}>
    {onLogout && (
      <button onClick={onLogout} className={classes.logout}>
        Logout
      </button>
    )}
    <img className={classes.logo} src="/images/logo.png" alt="logo" />
    <h1 className={classes.title}>Business Card Maker</h1>
  </header>
);

export default Header;
