import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { firebaseApp } from './services/firebase';
import AuthService from './services/AuthService';

const auth = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App auth={auth}/>
  </React.StrictMode>
);

