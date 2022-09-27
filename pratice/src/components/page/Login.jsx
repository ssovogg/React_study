import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ auth }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const toogleAcount = () => setCreateAccount((prev) => !prev);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [pwIsTouched, setPwIsTouched] = useState(false);
  const [pwIsValid, setPwIsValid] = useState(false);
  const hasError = !emailIsValid && emailIsTouched;
  const pwHasError = !pwIsValid && pwIsTouched;

  let formIsValid = false;
  if (!hasError && !pwHasError) {
    formIsValid = true;
  }

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailIsTouched(true);
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  const onPwChange = (e) => {
    setPassword(e.target.value);
    setPwIsTouched(true);
    if (e.target.value.length > 5) {
      setPwIsValid(true);
    } else {
      setPwIsValid(false);
    }
  };

  const onEmailBlur = () => {
    setEmailIsTouched(true);
    if (email.trim() === "") {
      setEmailIsValid(false);
    }
  };
  const onPwBlur = () => {
    setPwIsTouched(true);
    if (password.length < 6) {
      setPwIsValid(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (createAccount) {
        await auth.createAccount(email, password);
        setCreateAccount(false);
      } else {
        await auth.logIn(email, password);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const onClick = (e) => {
    auth.socialLogin(e.target.name);
  };
  return (
    <div className={classes.login}>
      <h1 className={classes.title}>sovog</h1>
      <div className={classes.login_form}>
        <form onSubmit={onSubmit}>
          <input
            className={hasError && classes.invalid}
            type="text"
            placeholder="이메일"
            required
            onChange={onEmailChange}
            onBlur={onEmailBlur}
            name="email"
            value={email}
          />
          {hasError && (
            <p className={classes.error}>이메일 형식에 맞게 입력해주세요</p>
          )}
          <input
            className={pwHasError && classes.invalid}
            type="password"
            placeholder="비밀번호"
            required
            onChange={onPwChange}
            onBlur={onPwBlur}
            name="password"
            value={password}
          />
          {pwHasError && (
            <p className={classes.error}>6글자 이상 입력해주세요</p>
          )}
          <button type="submit" disabled={!formIsValid}>{createAccount ? "회원가입" : "로그인"}</button>
          <i>{error}</i>
        </form>
        <div className={classes.social_login}>
          <p>또는</p>
          <button onClick={onClick} name="google">
            <i className="fa-brands fa-google"></i>
            <span>Google</span>
          </button>
          <button onClick={onClick} name="github">
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
