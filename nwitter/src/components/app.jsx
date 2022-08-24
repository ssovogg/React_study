import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import { useEffect } from "react";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    authService.onAuthStateChanged(user => {
      if(user){ 
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initialiazing..."}
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
