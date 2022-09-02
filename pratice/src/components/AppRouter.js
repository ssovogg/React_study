import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Layout/Navigation";
import Home from "./page/Home";
import Login from "./page/Login";
import Profile from "./page/Profile";
import Quote from "./page/Quote/Quote";
import Todo from "./page/Todo/Todo";

const AppRouter = ({ isLoggedIn, auth, db, user, storage }) => (
  <BrowserRouter>
  {isLoggedIn && <Navigation auth={auth} />}
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<Home auth={auth} />} />
      ) : (
        <Route path="/" element={<Login auth={auth} />} />
      )}
      <Route path="/quote" element={<Quote />} />
      <Route path="/todo" element={<Todo db={db} user={user} storage={storage} />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
