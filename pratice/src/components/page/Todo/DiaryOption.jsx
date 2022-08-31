import React from "react";
import classes from "./DiaryOption.module.css";

const DiaryOption = (props) => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
    <select onChange={onChange}>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
    </select>
    <select>
      <option value="오름차순">오름차순</option>
      <option value="내림차순">내림차순</option>
    </select>
    </>
  );
};

export default DiaryOption;
