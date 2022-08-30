import { getAuth } from "firebase/auth";
import React from "react";

const Home = ({ auth }) => {
  const authUser = getAuth();
  const onLogout = () => {
    auth.logOut();
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

export default Home;
