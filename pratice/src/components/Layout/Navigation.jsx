import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = ({auth}) => {
  const onLogout = () => {
    auth.logOut();
  };

  return (
  <nav className={classes.wrap}>
    <ul className={classes.nav}>
      <li>
        <Link to="/">
          <i class="fa-solid fa-house"></i>
        </Link>
      </li>
      <li>
        <Link to="todo">
          <i class="fa-solid fa-circle-check"></i>
        </Link>
      </li>
      <li>
        <Link to="/quote">
          <i class="fa-solid fa-comment"></i>
        </Link>
      </li>
      <li>
        <Link to="/profile">
        <i class="fa-solid fa-user"></i>
        </Link>
      </li>
      <li className={classes.logout}>
      <button onClick={onLogout}><i class="fa-solid fa-right-from-bracket"></i></button>
      </li>
    </ul>
  </nav>
)};

export default Navigation;
