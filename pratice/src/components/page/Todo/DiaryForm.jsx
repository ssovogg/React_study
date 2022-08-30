import React from "react";
import { useState } from "react";
import classes from "./DiaryForm.module.css";

const DiaryForm = (props) => {
  const day = new Date();
  const today = `${day.getFullYear()}-${(day.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;
  const [date, setDate] = useState(today);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onChange = e => {
    const {target : {id, value}} = e;
    if(id==="date"){
      setDate(value)
    } else if (id==="title"){
      setTitle(value)
    } else if (id==="content"){
      setContent(value)
    }
  }
  const onSubmit = e => {
    e.preventDefault();
    const input = {
      id: Date.now(),
      date: date,
      title: title,
      content: content
    }
    props.onAdd(input);
  }
  return (
    <div className={classes.diary}>
      <form className={classes.diary_form} onSubmit={onSubmit}>
        <input type="date" value={date} onChange={onChange} id="date" />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          placeholder="Title"
          required
          id="title"
          onChange={onChange}
          value={title}
        />
        <label htmlFor="content">내용</label>
        <textarea
          placeholder="Write your day!"
          id="content"
          onChange={onChange}
          value={content}
          required
        />
        <input type="file" />
        <button type="submit" >submit</button>
      </form>
      <button onClick={props.onToggle} className={classes.cancle}>
        cancle
      </button>
    </div>
  );
};

export default DiaryForm;
