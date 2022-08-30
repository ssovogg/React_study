import React, { useState } from 'react';
import AppRouter from './components/AppRouter';
import Navigation from './components/Layout/Navigation';

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  )};

export default App;