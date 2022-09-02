import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = () => {
    navigate('/home');
  }
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(goToMaker());
  };
  return (
    <section className={classes.container}>
      <Header />
      <section className={classes.section}>
        <h1>Login</h1>
        <ul className={classes.login}>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
