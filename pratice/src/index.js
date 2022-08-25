import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import { dbService, firebaseApp } from './services/firebase';
import AuthService from './services/AuthService';

const auth = new AuthService(firebaseApp);
const db = dbService;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App auth={auth} db={db}/>
);

