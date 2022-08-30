import React from "react";
import { useState } from "react";
import classes from './Todo.module.css';

const Todo = (props) => {
  const today = new Date().getFullYear();
  console.log(today);
  const [editMode, setEditMode] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const ok = window.confirm("게시하겠습니가?");
    if(ok){
      toggleEditMode();
    }
  }
  const toggleEditMode = () => setEditMode((prev) => !prev);
  return (
    <div className={classes.wrap}>
      <h1>Diary</h1>
      {editMode ? (
        <div className={classes.diary}>
          <form className={classes.diary_form} onSubmit={onSubmit}>
            <input type="date" value={today}/>
            <label htmlFor="title">제목</label>
            <input type="text" placeholder="Title" required id="title"/>
            <label htmlFor="diary">내용</label>
            <textarea placeholder="Write your day!" id="diary" required/>
            <button type="submit">submit</button>
          </form>
          <button onClick={toggleEditMode} className={classes.cancle}>cancle</button>
        </div>
      ) : (
        <div className={classes.diary}>
          <button onClick={toggleEditMode} className={classes.edit_btn}>Post a New Diary</button>
        </div>
      )}
    </div>
  );
};

export default Todo;
