import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ auth }) => {
  const [createAccount, setCreateAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toogleAcount = () => setCreateAccount((prev) => !prev);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if(createAccount){
        await auth.createAccount(email, password);
        setCreateAccount(false);
      }else{
        await auth.logIn(email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if(name==="email"){
      setEmail(value)
    }else if(name==="password"){
      setPassword(value)
    }
  };
  return (
    <div className={classes.login}>
      <h1 className={classes.title}>sovog</h1>
      <div className={classes.login_form}>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="이메일"
            required
            onChange={onChange}
            name="email"
            value={email}
          />
          <input
            type="password"
            placeholder="비밀번호"
            required
            onChange={onChange}
            name="password"
            value={password}
          />
          <button type="submit">{createAccount ? "회원가입" : "로그인"}</button>
        </form>
        <div className={classes.social_login}>
          <p>또는</p>
          <button>
            <i className="fa-brands fa-google"></i>
            <span>Google</span>
          </button>
          <button>
            <i className="fa-brands fa-github-alt"></i>
            <span>Github</span>
          </button>
        </div>
        <div className={classes.toggle_account}>
          <span>이미 계정이 있으신가요?</span>
          <button onClick={toogleAcount}>
            {createAccount ? "로그인" : "회원가입"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
