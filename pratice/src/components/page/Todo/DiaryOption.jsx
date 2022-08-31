import React, { useState } from "react";
import classes from "./DiaryOption.module.css";

const DiaryOption = ({ onSortbyDate }) => {
  const [latest, setLatest] = useState(true);
  // const onChange = (e) => {
  //   console.log(e.target.value);
  // };
  const onClick = (e) => {
    setLatest((prev) => !prev);
    onSortbyDate(e.target.value);
  };
  return (
    <>
      {/* <select onChange={onChange}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select> */}
      <span className={classes.date_option}>
        <i className="fa-solid fa-sort"></i>
        <input
          type="button"
          value={latest ? "최신순" : "오래된순"}
          onClick={onClick}
        />
      </span>
    </>
  );
};

export default DiaryOption;
