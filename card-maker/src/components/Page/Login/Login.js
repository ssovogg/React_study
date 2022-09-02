import React from "react";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import classes from "./Login.module.css";

const Login = (props) => (
  <section className={classes.wrap}>
    <Header />
    <section className={classes.login_form}>
      <h1>Login</h1>
      <section className={classes.social_login}>
        <button>Google</button>
        <button>Github</button>
      </section>
    </section>
    <Footer />
  </section>
);

export default Login;
