import React from "react";
import Button from "../../UI/Button";
import classes from "./CardForm.module.css";

const CardForm = ({ card }) => {
  const onSubmit = () => {
    console.log('click');
  }
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card;
  return (
    <li className={classes.card}>
      <input type="text" value={name} name="name" placeholder="name" />
      <input type="text" value={company} name="company" placeholder="company"/>
      <select value={theme} name="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" value={title} name="title" placeholder="title"/>
      <input type="text" value={email} name="email" placeholder="e-mail"/>
      <textarea value={message} name="message" placeholder="message..."></textarea>
      <button>No File</button>
      <Button name="Delete" onClick={onSubmit}/>
    </li>
  );
};

export default CardForm;
