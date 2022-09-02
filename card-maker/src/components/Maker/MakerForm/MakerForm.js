import React, { useRef } from "react";
import Button from "../../Preview/Card/Button/Button";
import FileInput from "../../Preview/Card/FileInput/FileInput";
import classes from "./MakerForm.module.css";
const MakerForm = ({ info, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const titleRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

  const { name, company, title, theme, email, message, fileName, fielURL } =
    info;
  const onSubmit = () => {
    deleteCard(info);
  };
  const onChange = (e) => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
    updateCard({
      ...info,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <li className={classes.form_list}>
      <form className={classes.form}>
        {/* input */}
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input
            onChange={onChange}
            ref={nameRef}
            type="text"
            value={name}
            placeholder="name"
            id="name"
            name="name"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="title">Title</label>
          <input
            onChange={onChange}
            ref={titleRef}
            type="text"
            value={title}
            placeholder="title"
            id="title"
            name="title"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="company">Company</label>
          <input
            onChange={onChange}
            ref={companyRef}
            type="text"
            value={company}
            placeholder="company"
            id="company"
            name="company"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">email</label>
          <input
            onChange={onChange}
            ref={emailRef}
            type="text"
            value={email}
            placeholder="email"
            id="email"
            name="email"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="message">message</label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={message}
            onChange={onChange}
          />
        </div>

        {/* buttons */}
        <div className={classes.btn}>
          <div>
            <label>File</label>
            <FileInput value={fileName ? fileName : "Add File"} />
          </div>
          <div>
            <label htmlFor="theme">Theme</label>
            <select
              onChange={onChange}
              ref={themeRef}
              id="theme"
              name="theme"
              value={theme}
            >
              <option value={"Light"}>Light</option>
              <option value={"Dark"}>Dark</option>
              <option value={"Colorful"}>Colorful</option>
            </select>
          </div>
          <Button value="Delete" onClick={onSubmit} />
        </div>
      </form>
    </li>
  );
};

export default MakerForm;
