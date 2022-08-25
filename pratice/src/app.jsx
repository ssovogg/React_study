import { getAuth } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./app.module.css";
import AppRouter from "./components/Router";

function App({ auth, db }) {
  const setAuth = getAuth();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    setAuth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter
          auth={auth}
          db={db}
          userObj={userObj}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        "Loading.."
      )}
    </>
  );
}

export default App;
