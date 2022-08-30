import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import Navigation from './components/Layout/Navigation';

const App = ({ auth }) => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    auth.confirmUser(user => {
      if(user){
        setIsLoggedIn(true);
        setInit(true);
      } else {
        setIsLoggedIn(false);
      }
    })
  },[]);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} auth={auth} /> : "loading..."}
    </>
  )};

export default App;