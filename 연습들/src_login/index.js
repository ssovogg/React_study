import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import { auth } from './services/fbase';
import { dbService } from './services/fbase';

const db = dbService;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App auth={auth} db={db} />
);

