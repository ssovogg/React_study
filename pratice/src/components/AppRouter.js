import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Home from "./page/Home";
import Login from "./page/Login";
import Quote from "./page/Quote";

const AppRouter = ({ isLoggedIn, auth }) => (
  <BrowserRouter>
  {isLoggedIn && <Navigation />}
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home auth={auth} />} />
      ) : (
        <Route path="/" element={<Login auth={auth} />} />
      )}
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
