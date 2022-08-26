import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import { useEffect } from "react";


function App({ db }) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(()=>{
    authService.onAuthStateChanged(user => {
      if(user){ 
        setIsLoggedIn(true);
        setUserInfo(user)
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} db={db} userInfo={userInfo}/> : "Initialiazing..."}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
