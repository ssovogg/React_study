import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./Login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log());
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
