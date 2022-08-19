import React from "react";

const Preview = ({ userInfo }) => (
  <li>
    <img src="" alt="pic" />
    <div>
      <h4>{userInfo.name}</h4>
      <p>{userInfo.company}</p>
      <pre>
        {userInfo.description}
      </pre>
    </div>
  </li>
);

export default Preview;
