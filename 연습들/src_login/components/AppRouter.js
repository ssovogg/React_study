import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = ({ isLoggedIn, auth, db, user }) => (
  <BrowserRouter>
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home auth={auth} db={db} user={user}/>} />
      ) : (
        <Route path="/" element={<Login auth={auth} />} />
      )}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
