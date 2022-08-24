import React, { useState } from "react";

const Auth = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (event) => {
    const { target: {name, value} } = event;
    if(name === "email"){
      setEmail(value);
    } else if(name === "password") {
      setEmail(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="test" required name="email" placeholder="Email" onChange={onChange} value={email}/>
        <input type="test" required name="password" placeholder="Password" onChange={onChange} value={password}/>
        <input type="submit" value="Log In" />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </>
  );
};

export default Auth;
