import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import './index.css';
import AuthService from "./service/authService";
import { firebaseApp } from "./service/fbase";

const auth = new AuthService(firebaseApp);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App auth={auth}/>);
