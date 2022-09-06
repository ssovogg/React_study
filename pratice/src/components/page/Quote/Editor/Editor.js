import React, { useRef } from "react";
import classes from "./Editor.module.css";

const Editor = (props) => {
  const formRef = useRef();
  const textRef = useRef();
  const authorRef = useRef();
  const imgRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
  };
  const onClickInput = (e) => {
    e.preventDefault();
    imgRef.current.click();
  };
  const onImgChange = (e) => {
    console.log(e.target.files[0]);
  };
  return (
    <form ref={formRef} className={classes.editor} onSubmit={onSubmit}>
      <label htmlFor="text">글귀</label>
      <textarea ref={textRef} id="text" name="text" placeholder="text..." />
      <label htmlFor="author">작가</label>
      <input ref={authorRef} id="author" name="author" placeholder="author" />
      <div className={classes.btn}>
        <button className={classes.img} onClick={onClickInput}>
          배경 이미지 선택
        </button>
        <input
          ref={imgRef}
          type="file"
          accept="image/*"
          className={classes.file}
          onChange={onImgChange}
        />
        <button type="submit" className={classes.make}>
          Make
        </button>
      </div>
    </form>
  );
};

export default Editor;
