import React, { useRef } from "react";
import Button from "../../Preview/Card/Button/Button";
import FileInput from "../../Preview/Card/FileInput/FileInput";
import classes from "./MakerAddForm.module.css";
const MakerAddForm = ({ onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const info = {
      id: Date.now(),
      name: nameRef.current.value || "",
      title: titleRef.current.value || "",
      company: companyRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      theme: themeRef.current.value,
      fileName: "",
      fileURL: "",
    };
    onAdd(info);
    formRef.current.reset();
  };

  return (
    <li className={classes.form_list}>
      <form ref={formRef} className={classes.form} onSubmit={onSubmit}>
        {/* input */}
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input ref={nameRef} type="text" placeholder="name" id="name" />
        </div>
        <div className={classes.input}>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} type="text" placeholder="title" id="title" />
        </div>
        <div className={classes.input}>
          <label htmlFor="company">Company</label>
          <input
            ref={companyRef}
            type="text"
            placeholder="company"
            id="company"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">email</label>
          <input ref={emailRef} type="text" placeholder="email" id="email" />
        </div>
        <div className={classes.input}>
          <label htmlFor="message">message</label>
          <textarea
            ref={messageRef}
            id="message"
            placeholder="message..."
          ></textarea>
        </div>

        {/* buttons */}
        <div className={classes.btn}>
          <div>
            <label>File</label>
            <FileInput value="Add File" />
          </div>
          <div>
            <label htmlFor="theme">Theme</label>
            <select ref={themeRef} id="theme">
              <option>Light</option>
              <option>Dark</option>
              <option>Colorful</option>
            </select>
          </div>
          <Button value="Add" onClick={onSubmit} />
        </div>
      </form>
    </li>
  );
};

export default MakerAddForm;
