import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";

const App = ({ auth, db }) => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.confirmUser((user) => {
      if (user) {
        setIsLoggedIn(true);
        setInit(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
        setInit(true);
      }
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} auth={auth} db={db} user={user} />
      ) : (
        "loading..."
      )}
    </>
  );
};

export default App;
