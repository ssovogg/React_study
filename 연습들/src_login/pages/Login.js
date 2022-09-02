import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ auth }) => {
  // 계정 없으면 새 계정 만들기
  const [newAccount, setNewAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  console.log(newAccount);
  const onChange = (e) => {
    const {target:{name, value}} = e;
    if(name === "email") {
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  }
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      if(newAccount){
      await createUserWithEmailAndPassword(auth, email, password);
      setNewAccount(false);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }} catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div className={classes.login}>
      {newAccount ? <h1>Sign Up</h1> : <h1>Login</h1>}
      <form onSubmit={onLogin} className={classes.login_form}>
        <input
          onChange={onChange}
          type="text"
          name="email"
          value={email}
          required
          placeholder="Email"
          />
        <input
          onChange={onChange}
          type="password"
          name="password"
          value={password}
          required
          placeholder="Password"
        />
        <button type="submit">{newAccount ? "Create Account" : "Login"}</button>
        <i>{error}</i>
      </form>
      <div className={classes.social_login}>
        <button>
          <i className="fa-brands fa-google-plus"></i>
        </button>
        <button>
          <i className="fa-brands fa-github"></i>
        </button>
      </div>
      <div className={classes.account}>
        {newAccount ? (
          <p>
            Have an account?
            <button onClick={toggleAccount}>Login</button>
          </p>
        ) : (
          <p>
            Don't have an account?
            <button onClick={toggleAccount}>Sign up</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
