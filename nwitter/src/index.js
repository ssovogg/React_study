import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import { dbService } from './fbase';
// import firebase from 'fbase';

const db = dbService
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App db={db}/>
  </React.StrictMode>
);

