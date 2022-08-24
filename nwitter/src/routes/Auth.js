import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
// import firebaseApp from "../fbase";
// import { authService } from "../fbase";

const Auth = (props) => {
  const [newAccount, setNewAccount] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const auth = getAuth();
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
        setNewAccount(false);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};

export default Auth;
