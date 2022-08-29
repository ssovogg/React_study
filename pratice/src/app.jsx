import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppRouter from "./components/AppRouter";

function App({ auth, db }) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  useEffect(()=>{
    auth.onAuthStateChanged(user => {
      if(user){
        setIsLoggedIn(true); 
        setInit(true);
        setUser(user);
      }else {
        setIsLoggedIn(false);
        setInit(true);
      }
    })
  },[])
  return (
    <div>
      {init? <AppRouter isLoggedIn={isLoggedIn} auth={auth} db={db} user={user} /> : "loading..."}
    </div>
  );
}

export default App;
