import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Navigation from "./Navigation";

const AppRouter = ({ auth, isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn && <Navigation auth={auth} />}
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Auth auth={auth}/>} />
      )}
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
