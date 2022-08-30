import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import AppRouter from './components/AppRouter';
import Navigation from './components/Layout/Navigation';

const App = ({ auth }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    auth.confirmUser(user => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    })
  },[]);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} auth={auth} />
    </>
  )};

export default App;