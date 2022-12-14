import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import './index.css';
import AuthService from "./service/authService";
import { dbService, firebaseApp, storageService } from "./service/fbase";

const db = dbService;
const storage = storageService;
const auth = new AuthService(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App auth={auth} db={db} storage={storage} />);
