import React from "react";
import { useState } from "react";
import classes from "./DiaryForm.module.css";

const DiaryForm = ({ onAdd, onToggle, editDiary, onUpdate, onCancle }) => {
  const day = new Date();
  const today = `${day.getFullYear()}-${(day.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${day.getDate().toString().padStart(2, "0")}`;

  const [date, setDate] = useState(editDiary ? editDiary.date : today);
  const [title, setTitle] = useState(editDiary ? editDiary.title : "");
  const [content, setContent] = useState(editDiary ? editDiary.content : "");
  const [img, setImg] = useState(editDiary ? editDiary.img : null);
  const onChange = (e) => {
    const {
      target: { id, value },
    } = e;
    if (id === "date") {
      setDate(value);
    } else if (id === "title") {
      setTitle(value);
    } else if (id === "content") {
      setContent(value);
    }
  };
  const onFileAdd = (e) => {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = (event) => {
      setImg(event.target.result);
    };
  };
  const onFileClear = () => {
    console.log(img);
    setImg(null)
    console.log(img);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
    if (editDiary) {
      onUpdate(date, title, content ,img);
    } else {
      const input = {
        id: Date.now(),
        date: date,
        title: title,
        content: content,
        img: img,
      };
      onAdd(input);
    }
  };
  const onCancleClick = () => {
    onToggle();
    onCancle();
  };

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
        <form className={classes.img_input}>
          <label htmlFor="img">사진(옵션)</label>
          <button
            type="button"
            onClick={onFileClear}
            className={classes.deleteImg}
          >
            <i className="fa-solid fa-ban"></i>
            <span>삭제</span>
          </button>
          <input type="file" onChange={onFileAdd} id="img" accept="image/*"  />
        </form>
        {img && <div className={classes.select_img}>
          <img src={img} alt="사진"/>
        </div>}
        <button type="submit">{editDiary ? "Update" : "Submit"}</button>
      </form>
      <button onClick={onCancleClick} className={classes.cancle}>
        cancle
      </button>
    </div>
  );
};

export default DiaryForm;
