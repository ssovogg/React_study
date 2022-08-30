import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const [createAccount, setCreateAccount] = useState(true);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.login}>
      <h1 className={classes.title}>sovog</h1>
      <di className={classes.login_form}>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">{createAccount ? "회원가입" : "로그인"}</button>
        </form>
        <div className={classes.social_login}>
          <p>또는</p>
          <button>
            <i class="fa-brands fa-google"></i>
            <span>Google</span>
            
          </button>
          <button>
            <i class="fa-brands fa-github-alt"></i>
            <span>Github</span>
          </button>
        </div>
        <div className={classes.toggle_account}>
          <span>이미 계정이 있으신가요?</span>
          <button>{createAccount ? "로그인" : "회원가입"}</button>
        </div>
      </di>
    </div>
  );
};

export default Login;
