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
          <i className="fa-solid fa-house"></i>
        </Link>
      </li>
      <li>
        <Link to="todo">
          <i className="fa-solid fa-book"></i>
        </Link>
      </li>
      <li>
        <Link to="/quote">
          <i className="fa-solid fa-comment"></i>
        </Link>
      </li>
      <li>
        <Link to="/profile">
        <i className="fa-solid fa-user"></i>
        </Link>
      </li>
      <li className={classes.logout}>
      <button onClick={onLogout}><i className="fa-solid fa-right-from-bracket"></i></button>
      </li>
    </ul>
  </nav>
)};

export default Navigation;
