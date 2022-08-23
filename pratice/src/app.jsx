import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import classes from "./app.module.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App(props) {
  return (
    <div className={classes.wrap}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
