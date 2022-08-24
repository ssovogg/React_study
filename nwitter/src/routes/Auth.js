import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
// import firebaseApp from "../fbase";
// import { authService } from "../fbase";

const Auth = (props) => {
  const auth = getAuth();
  const [newAccount, setNewAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // 계정 없으면 생성
        data = await createUserWithEmailAndPassword(auth, email, password);
        setNewAccount(false);
      } else {
        // 계정 있으면 로그인
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialLogin = (event) => {
    const {target:{name}} = event;
    let provider;
    if(name === "google"){
      provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } else if (name === "github"){
      alert("not yet..")
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="test"
          required
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
        <input
          type="test"
          required
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={password}
        />
        <input type="submit" value={newAccount ? "create account" : "log in"} />
      </form>
      <button onClick={toggleAccount}>
        {newAccount ? "log in" : "create account"}
      </button>
      <p>{error}</p>
      <div>
        <button name="google" onClick={onSocialLogin}>
          Continue with Google
        </button>
        <button name="github" onClick={onSocialLogin}>
          Continue with Github
        </button>
      </div>
    </>
  );
};

export default Auth;
