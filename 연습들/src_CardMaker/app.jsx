// import logo from './logo.svg';
import classes from "./app.module.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App({ authService }) {
  return (
    <div className={classes.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
