import React from "react";
import Button from "../../Preview/Card/Button/Button";
import FileInput from "../../Preview/Card/FileInput/FileInput";
import classes from "./MakerForm.module.css";
const MakerForm = ({ info }) => {
  const { name, company, title, theme, email, message, fileName, fielURL } =
    info;
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <li className={classes.form_list}>
      <form className={classes.form} onSubmit={onSubmit}>
        {/* input */}
        <div className={classes.input}>
          <label htmlFor="name">Name</label>
          <input type="text" value={name} placeholder="name" id="name" />
        </div>
        <div className={classes.input}>
          <label htmlFor="title">Title</label>
          <input type="text" value={title} placeholder="title" id="title" />
        </div>
        <div className={classes.input}>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            value={company}
            placeholder="company"
            id="company"
          />
        </div>
        <div className={classes.input}>
          <label htmlFor="email">email</label>
          <input type="text" value={email} placeholder="email" id="email" />
        </div>
        <div className={classes.input}>
          <label htmlFor="message">message</label>
          <textarea id="message">{message}</textarea>
        </div>

        {/* buttons */}
        <div className={classes.btn}>
          <div>
            <label>File</label>
            <FileInput value={fileName? fileName : "Add File"}/>
          </div>
          <div>
            <label htmlFor="theme">Theme</label>
            <select id="theme">
              <option>Light</option>
              <option>Dark</option>
              <option>Colorful</option>
            </select>
          </div>
          <Button value="Delete" onClick={onSubmit} />
        </div>
      </form>
    </li>
  );
};

export default MakerForm;
