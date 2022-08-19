import React from "react";
import { useState } from "react";
import './app.css'
import CardMaker from "./components/CardMaker";
import CardPreview from "./components/CardPreview";

function App(props) {
  const [userInfo, setUserInfo] = useState({});
  const makeCard = (userInfo) => {
    setUserInfo(userInfo);
  }

  return (
    <div className="wrap">
      <header>
        <h1>Business Card Maker</h1>
      </header>
      <div className="content_wrap">
        <CardMaker onSubmit={makeCard}/>
        <CardPreview userInfo={userInfo}/>
      </div>
    </div>
  );
}

export default App;
