import React from 'react';
import classes from './app.module.css';
import Home from './components/Page/Home/Home';
import Login from './components/Page/Login/Login';

const App = ({ FileInput }) => (
    <>
      <Home FileInput={FileInput} />
    </>
  );

export default App;