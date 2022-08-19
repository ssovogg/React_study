import React from "react";
import { useRef } from "react";
import { useState } from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const desRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      name: nameRef.current.value,
      company: companyRef.current.value,
      description: desRef.current.value,
    }
    props.onSubmit(userInfo);
  };

  const deleteCard = () => {
    formRef.current.reset();
  }

  return (
    <li>
      <form onChange={handleSubmit} ref={formRef}>
        <div className={classes.row1}>
          <input type="text" placeholder="Name" ref={nameRef}/>
          <input type="text" placeholder="Company" ref={companyRef}/>
          <select>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className={classes.row2}>
          <textarea placeholder="Description" ref={desRef}></textarea>
        </div>
        <div className={classes.row3}>
          {/* <button type="submit">Make</button> */}
          <button onClick={deleteCard}>Reset</button>
        </div>
      </form>
    </li>
  );
};

export default Card;
