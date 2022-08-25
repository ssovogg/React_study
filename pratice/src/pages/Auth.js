import React, { useState } from "react";

const Auth = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
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
  const onSubmit = (event) => {
    event.preventDefault();
    let data;
    if (newAccount) {
      data = auth.createAccount(email, password);
      setNewAccount(false);
    } else {
      data = auth.login(email, password);
    }
  };

  const onSocialLogin = (event) => {
    auth.socialLogin(event.target.name);
  }
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            onChange={onChange}
            type="text"
            required
            name="email"
            id="email"
            placeholer="Email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            onChange={onChange}
            type="password"
            required
            name="password"
            id="password"
            placeholer="Password"
            value={password}
          />
        </div>
        <input type="submit" value={newAccount ? "create account" : "log in"} />
      </form>
      <button onClick={toggleAccount}>
        {newAccount ? "log in" : "create account"}
      </button>
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
