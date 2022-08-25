import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn }) => (
  <BrowserRouter>
    {isLoggedIn && <Navigation />}
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home />} />
      ) : (
        <Route path="/" element={<Auth />} />
      )}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
