import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import classes from "./Login.module.css";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/home');
  };

  return (
  <div className={classes.wrap}>
    <Header title="Welcome"/>
    <section className={classes.login}>
      <h1>Login</h1>
      <button onClick={onLogin}>일단 입장</button>
      <button>Google</button>
      <button>Github</button>
    </section>
    <Footer />
  </div>
)};

export default Login;
