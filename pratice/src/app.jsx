import { getAuth } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./app.module.css";
import AppRouter from "./components/Router";

function App({ auth }) {
  const setAuth = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
    setAuth.onAuthStateChanged(user => {
      if(user){
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  },[])
  return (
    <>
      {init ? <AppRouter auth={auth} isLoggedIn={isLoggedIn}/> : "Loading.."}
    </>
  );
}

export default App;
